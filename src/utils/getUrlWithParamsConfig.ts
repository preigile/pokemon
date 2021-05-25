import config from '../config';
import Endpoints from '../enums/endpoints';

function getUrlWithParamsConfig(endpointConfig: Endpoints, query: object) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
}

export default getUrlWithParamsConfig;
