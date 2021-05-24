import React from 'react';

import s from './Pokedex.module.scss';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import Endpoints from '../../enums/endpoints';
import { IPokemons } from '../../models/pokemons.model';

const PokedexPage = () => {
  const { data, isLoading, isError } = useData<IPokemons>(Endpoints.GetPokemons);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Ups!</div>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading as="h3" className={s.title}>
          {data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input type="text" />
        <div>filter</div>
        {data &&
          data.pokemons.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                stats={pokemon.stats}
                types={pokemon.types}
                img={pokemon.img}
              />
            );
          })}
      </Layout>
    </div>
  );
};

export default PokedexPage;
