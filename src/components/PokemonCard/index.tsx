import React from 'react';

import s from './PokemonCard.module.scss';

import Heading from '../Heading';
import { IPokemon } from '../../interface/pokemon';

interface PokemonProps {
  pokemon: IPokemon;
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon, onClick }) => {
  return (
    <div role="button" tabIndex={0} className={s.root} onClick={onClick} onKeyDown={onClick}>
      <div className={s.infoWrap}>
        <Heading as="h4" className={s.titleName}>
          {pokemon.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {pokemon.types.map((type) => {
            return (
              <span className={s.label} key={type}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <figure className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </figure>
    </div>
  );
};

export default PokemonCard;
