export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface TypeDetails {
  pokemon: { pokemon: Item }[];
  name: string;
  id: number;
}

export interface Item {
  name: string;
  url: string;
}

export interface CategoryDetails {
  name: string;
  id: number;
  items: Item[];
}

export interface AbilityDetails {
  name: string;
  id: number;
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  pokemon: { pokemon: Item }[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  cries?: {
    latest: string;
    legacy: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female?: string | null;
  front_shiny_female?: string | null;
  other: {
    'official-artwork': {
      front_default: string; // HD image
    };
  };
}

export interface PokemonType {
  slot: number;
  type: Item;
}
