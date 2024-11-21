import { useState, useEffect } from 'react';
import { TypeDetails } from '../types/types';
import { fetchPokemonListByTypeName } from '../api/pokeApi';

export const usePokemonListByType = (typeName: string) => {
  const [data, setData] = useState<TypeDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchPokemonListByTypeName(typeName);
        setData(response);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [typeName]);

  return { data, loading, error };
};
