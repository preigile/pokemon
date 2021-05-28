import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import Endpoints from '../enums/endpoints';

async function req<T>(endpoint: Endpoints, query: object, params?: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query, params));
  const result = await fetch(uri).then((res) => res.json());

  return result;
}

export default req;
