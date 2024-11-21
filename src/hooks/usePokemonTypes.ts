import { useState, useEffect, useCallback } from 'react';
import { PokemonType } from '../types';
import { fetchPokemonTypes } from '../api/pokeApi';

export const usePokemonTypes = (initialLimit = 20) => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetchPokemonTypes(offset, initialLimit);

      setData((prevData) => [...prevData, ...response.results]);
      setOffset((prevOffset) => prevOffset + initialLimit);
      setHasMore(response.next !== null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [offset, initialLimit, loading, hasMore]);

  useEffect(() => {
    loadMore();
  }, []);

  return { data, loading, error, loadMore, hasMore };
};
