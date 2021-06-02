import React from 'react';

import s from './Pokemon.module.scss';

import useData from '../../hook/getData';
import Endpoints from '../../enums/endpoints';
import { IPokemon } from '../../interface/pokemon';
import PokemonCardBig from '../../components/PokemonCardBig';
import Loading from '../../components/Loading';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<IPokemon>(Endpoints.GetPokemon, { id }, []);

  if (isError) {
    return <div>Ups!</div>;
  }

  return <>{isLoading ? <Loading /> : <div className={s.root}>{data && <PokemonCardBig pokemon={data} />}</div>}</>;
};

export default PokemonPage;
