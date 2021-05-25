import { IPokemon } from './pokemon';

export interface IPokemons {
  count: number;
  limits: number;
  offset: number;
  total: number;
  pokemons: IPokemon[];
}
