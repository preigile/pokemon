import config from '../config';
import Endpoints from '../enums/endpoints';

function getUrlWithParamsConfig(endpointConfig: Endpoints, query: object, params?: any) {
  const uri = { ...config.client.endpoint[endpointConfig].uri };
  if (params) {
    for (const key in params) {
      if ({}.hasOwnProperty.call(params, key)) {
        uri.pathname = uri.pathname.replace(`:${key}`, `${params[key]}`);
      }
    }
  }
  return {
    ...config.client.server,
    ...uri,
    query: {
      ...query,
    },
  };
}

export default getUrlWithParamsConfig;
