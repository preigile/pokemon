import React, { useEffect, useState } from 'react';

import s from './Pokedex.module.scss';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import { IPokemons } from '../../models/pokemons.model';
import req from '../../utils/request';
import Endpoints from '../../enums/endpoints';

const usePokemons = () => {
  const [data, setData] = useState<IPokemons | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req(Endpoints.GetPokemons);

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
