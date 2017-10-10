import { ResponseError } from './response-error';
import 'whatwg-fetch';

import config from '../env-local-config';

export default class PlanetOsApi {
  static apiUrl: any = config.planetOsApiUrl;
  static apiKey: any = config.apiKey;

  static setCfApiUrl(url: string) {
    PlanetOsApi.apiUrl = url;
  }
  static setApiKey(apiKey: string) {
    PlanetOsApi.apiKey = apiKey;
  }

  static request(url: string, overrideOptions: any = {}) {
    const urlWithApiKey = `${url}&apikey=${PlanetOsApi.apiKey}`;
    console.log(`Requesting ${urlWithApiKey}`);

    const options = {
      method: 'GET',
      headers: {},
    };

    return fetch(PlanetOsApi.apiUrl + urlWithApiKey, {
      ...options,
      ...overrideOptions,
    })
      .then(PlanetOsApi.checkStatus)
      .then(PlanetOsApi.parseJSON);
  }

  static checkStatus(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    throw new ResponseError(response);
  }

  static parseJSON(response: Response) {
    return response.json();
  }
}
