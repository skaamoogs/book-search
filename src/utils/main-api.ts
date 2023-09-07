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
  headers?: Headers;
  body?: unknown;
}

export interface ApiResponse {
  data: any;
  status: number;
  statusText: string;
  headers: Headers;
}

type HTTPMethod = (url: string, options?: IOptions) => Promise<ApiResponse>;

export class MainAPI {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  private readonly request: HTTPMethod = async (url, options = {}) => {
    const { method, headers, body } = options;

    const response = await fetch(`${this.endpoint}${url}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  };

  protected get: HTTPMethod = async (url, options) => {
    const queryString = queryStringify(options?.parameters);

    return await this.request(`${url}${queryString}`, {
      ...options,
      method: METHODS.Get,
    });
  };
}
