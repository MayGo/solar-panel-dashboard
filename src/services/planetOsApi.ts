import { ResponseError } from './response-error';
import 'whatwg-fetch';

export default class PlanetOsApi {
  static apiUrl: any = 'http://api.planetos.com/v1/datasets/';
  static apiKey: any = 'd50630c036da44cea6344bcbcc12963b';

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
