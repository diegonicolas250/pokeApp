import {
  PaginatedResponse,
  Item,
  TypeDetails,
  PokemonDetails,
} from '../types/types';
import { BASE_URL } from '../config';

export const fetchPokemonTypes = async (
  offset = 0,
  limit = 20,
): Promise<PaginatedResponse<Item>> => {
  const response = await fetch(
    `${BASE_URL}/type?offset=${offset}&limit=${limit}`,
  );
  if (!response.ok) throw new Error('Failed to fetch Pokémon types');
  return response.json();
};

export const fetchPokemonListByTypeName = async (
  name: string,
): Promise<TypeDetails> => {
  const response = await fetch(`${BASE_URL}/type/${name}`);
  if (!response.ok) throw new Error('Failed to fetch type details');
  return response.json();
};

export const fetchPokemonDetail = async (
  name: string,
): Promise<PokemonDetails> => {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!response.ok) throw new Error('Failed to fetch type details');
  return response.json();
};
