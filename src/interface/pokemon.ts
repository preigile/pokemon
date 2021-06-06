interface Stats {
  attack: number;
  defense: number;
  hp?: number;
  special_attack?: number;
  special_defense?: number;
  speed?: number;
}

export interface IPokemon {
  name: string;
  stats: Stats;
  types: string[];
  img: string;
  name_clean?: string;
  abilities?: string[];
  base_experience?: number;
  height?: number;
  id?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
}
