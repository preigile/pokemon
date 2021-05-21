import React from 'react';

import s from './PokemonCard.module.scss';

import Heading from '../Heading';
import { IPokemon } from '../../models/pokemon.model';

const PokemonCard: React.FC<IPokemon> = ({ name, stats, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading as="h4" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => {
            return (
              <span className={s.label} key={type}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
