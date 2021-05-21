import React, { useEffect, useState } from 'react';

import s from './Pokedex.module.scss';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import { IPokemon } from '../../models/pokemon.model';

const PokedexPage = () => {
  const [totalPokemons, setTotalPokemons] = useState<number>(0);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
          {totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input type="text" />
        <div>filter</div>
        {pokemons.map((pokemon) => {
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
