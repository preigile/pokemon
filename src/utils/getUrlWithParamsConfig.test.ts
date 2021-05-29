import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import Endpoints from '../enums/endpoints';

describe('getUrlWithParamsConfig', () => {
  test('Should get 2 arguments: "getPokemons" and empty object and return object {pathname, protocol, host, empty_query}', () => {
    const url = getUrlWithParamsConfig(Endpoints.GetPokemons, {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Should get 2 arguments: "getPokemons" and { name: "Pikachu" } and return object {pathname, protocol, host, query: {name: "Pikachu"}}', () => {
    const url = getUrlWithParamsConfig(Endpoints.GetPokemons, { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('Should get 2 arguments: "getPokemon" and { id: 25 } and return object {pathname, protocol, host, empty_query}', () => {
    const url = getUrlWithParamsConfig(Endpoints.GetPokemon, { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
