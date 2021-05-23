import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import config from '../config';

async function req(endpoint: keyof typeof config.client.endpoint) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const result = await fetch(uri).then((res) => res.json());

  return result;
}

export default req;
