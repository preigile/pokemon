import React from 'react';

import s from './Pokedex.module.scss';
import pokemons from './pokemons-dats';

import Heading from '../../components/Heading';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <Heading as="h3" className={s.title}>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input type="text" />
        <div>filter</div>
        {pokemons.map((pokemon) => {
          return <PokemonCard name={pokemon.name} stats={pokemon.stats} types={pokemon.types} img={pokemon.img} />;
        })}
      </Layout>
    </div>
  );
};

export default PokedexPage;
