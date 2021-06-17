import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from 'hookrouter';

import s from './Pokedex.module.scss';

import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import Endpoints from '../../enums/endpoints';
import { IPokemons } from '../../interface/pokemons';
import { IPokemon } from '../../interface/pokemon';
import useDebounce from '../../hook/useDebounce';
import { LinkEnum } from '../../routes';
import { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemons';

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });
  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>(Endpoints.GetPokemons, query, [debounceValue]);

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
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
        <div>{isTypesLoading ? <Loading /> : types?.map((item) => <div key={item}>{item}</div>)}</div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={s.pokemonsContainer}>
            {data &&
              data.pokemons.map((pokemon: IPokemon) => {
                return <PokemonCard pokemon={pokemon} onClick={() => navigate(`${LinkEnum.POKEDEX}/${pokemon.id}`)} />;
              })}
            )
          </div>
        )}
      </Layout>
    </div>
  );
};

export default PokedexPage;
