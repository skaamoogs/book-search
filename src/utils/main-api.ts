import { queryStringify } from './helpers';

const enum METHODS {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

interface IOptions {
  method?: METHODS;
  parameters?: Record<string, string | number>;
  headers?: Record<string, string>;
  data?: unknown;
}

type HTTPMethod = (url: string, options?: IOptions) => Promise<unknown>;

export class MainAPI {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  private readonly request: HTTPMethod = async (url, options = {}) => {
    const { method, headers = {}, data } = options;

    const response = await fetch(`${this.endpoint}${url}`, {
      method,
      headers,
      body: JSON.stringify(data),
    });

    const contentType = response.headers.get('Content-Type');
    const isResponseJson = contentType === 'application/json';

    return isResponseJson ? await response.json() : await response.text();
  };

  protected get: HTTPMethod = async (url, options) => {
    const queryString = queryStringify(options?.parameters);
    return await this.request(`${url}${queryString}`, {
      ...options,
      method: METHODS.Get,
    });
  };
}
