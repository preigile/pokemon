import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import Endpoints from '../enums/endpoints';

interface IOptions {
  method: string;
  body?: string;
}

interface IGetUrlWithParamsConfig {
  method: string;
  uri: Partial<URL>;
  body: object;
}

async function req<T>(endpoint: Endpoints, query: object): Promise<T> {
  const { method, uri, body }: IGetUrlWithParamsConfig = getUrlWithParamsConfig(endpoint, query);
  const options: IOptions = { method };
  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  const result = await fetch(Url.format(uri), options).then((res) => res.json());

  return result;
}

export default req;
