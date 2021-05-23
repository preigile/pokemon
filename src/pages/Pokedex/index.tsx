import React, { useEffect, useState } from 'react';

import s from './Pokedex.module.scss';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import { IPokemons } from '../../models/pokemons.model';

const InitData: IPokemons = {
  count: 0,
  limits: 0,
  offset: 0,
  total: 0,
  pokemons: [],
};

const usePokemons = () => {
  const [data, setData] = useState<IPokemons>(InitData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

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
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input type="text" />
        <div>filter</div>
        {data.pokemons.map((pokemon) => {
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
