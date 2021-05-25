import React, { useState } from 'react';

import s from './Pokedex.module.scss';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import Endpoints from '../../enums/endpoints';
import { IPokemons } from '../../models/pokemons.model';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<object>({});

  const { data, isLoading, isError } = useData<IPokemons>(Endpoints.GetPokemons, query, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((s) => ({
      ...s,
      name: event.target.value,
    }));
  };

  if (isError) {
    return <div>Ups!</div>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading as="h3" className={s.title}>
          {data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
        <div>filter</div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={s.pokemonsContainer}>
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
          </div>
        )}
      </Layout>
    </div>
  );
};

export default PokedexPage;
