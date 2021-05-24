import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import Endpoints from '../enums/endpoints';

async function req(endpoint: Endpoints) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const result = await fetch(uri).then((res) => res.json());

  return result;
}

export default req;
