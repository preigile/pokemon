import config from '../config';

function getUrlWithParamsConfig(endpointConfig: keyof typeof config.client.endpoint) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
}

export default getUrlWithParamsConfig;
