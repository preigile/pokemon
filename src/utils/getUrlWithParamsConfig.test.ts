import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import Endpoints from '../enums/endpoints';

describe('getUrlWithParamsConfig', () => {
  test('Should get 2 arguments: "getPokemons" and empty object and return object {method, uri, body}', () => {
    const url = getUrlWithParamsConfig(Endpoints.GetPokemons, {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Should get 2 arguments: "getPokemons" and { name: "Pikachu" } and return object {pathname, protocol, host, query: {name: "Pikachu"}}', () => {
    const url = getUrlWithParamsConfig(Endpoints.GetPokemons, { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('Should get 2 arguments: "getPokemon" and { id: 25 } and return object {pathname, protocol, host, empty_query}', () => {
    const url = getUrlWithParamsConfig(Endpoints.GetPokemon, { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Should get 2 arguments: "createPokemon" and {  } and return object {method, uri, body}', () => {
    const url = getUrlWithParamsConfig(Endpoints.CreatePokemon, {});

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {},
    });
  });

  test('Should get 2 arguments: "updatePokemon" and { id: 25, name: "Raichu" } and return object {method, uri, body: {name: "Raichu"}}', () => {
    const url = getUrlWithParamsConfig(Endpoints.UpdatePokemon, { id: 25, name: 'Raichu' });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {
        name: 'Raichu',
      },
    });
  });

  test('Should get 2 arguments: "deletePokemon" and { id: 25 } and return object {method, uri, body}', () => {
    const url = getUrlWithParamsConfig(Endpoints.DeletePokemon, { id: 25 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25/delete',
        query: {},
      },
      body: {},
    });
  });
});
