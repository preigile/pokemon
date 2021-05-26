import React from 'react';
import s from './PokemonCardBig.module.scss';
import { IPokemon } from '../../interface/pokemon';

interface PokemonProps {
  pokemon: IPokemon;
}

const PokemonCardBig: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <figure className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </figure>
    </div>
  );
};

export default PokemonCardBig;
