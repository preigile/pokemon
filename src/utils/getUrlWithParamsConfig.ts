import config from '../config';
import Endpoints from '../enums/endpoints';

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

function getUrlWithParamsConfig(endpointConfig: Endpoints, params: object) {
  const { method, uri }: IEndpoint = config.client.endpoint[endpointConfig as Endpoints];
  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = { ...params };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
      delete query[val as keyof typeof query];
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
}

export default getUrlWithParamsConfig;
