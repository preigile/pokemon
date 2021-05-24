import config from '../config';
import Endpoints from '../enums/endpoints';

function getUrlWithParamsConfig(endpointConfig: Endpoints) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
}

export default getUrlWithParamsConfig;
