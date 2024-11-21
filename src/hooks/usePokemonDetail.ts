import { useState, useEffect } from 'react';
import { fetchPokemonDetail } from '../api/pokeApi';
import { PokemonDetails } from '../types/types';

export const usePokemonDetail = (pokemonName: string) => {
  const [data, setData] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTypeDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchPokemonDetail(pokemonName);
        setData(response);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadTypeDetails();
  }, [pokemonName]);

  return { data, loading, error };
};
