import { IPokemon } from './pokemon.model';

export interface IPokemons {
  count: number;
  limits: number;
  offset: number;
  total: number;
  pokemons: IPokemon[];
}
