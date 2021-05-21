interface Stats {
  attack: number;
  defense: number;
  hp?: number;
  specialAttack?: number;
  specialDefense?: number;
  speed?: number;
}

export interface IPokemon {
  name: string;
  stats: Stats;
  types: string[];
  img: string;
  nameClean?: string;
  abilities?: string[];
  baseExperience?: number;
  height?: number;
  id?: number;
  isDefault?: boolean;
  order?: number;
  weight?: number;
}
