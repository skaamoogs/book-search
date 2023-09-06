import { MainAPI } from './main-api';
import { API_KEY, API_URL } from './settings';

interface RequestParams {
  orderBy?: string;
  startIndex?: number;
  maxResults?: number;
}

class GoogleAPI extends MainAPI {
  constructor() {
    super(API_URL);
  }

  async searchBooks(
    search: string,
    category?: string,
    params: RequestParams = {}
  ) {
    const categoryString =
      category && category !== 'all' ? `+subject:${category}` : '';
    const q = `"${search}"${categoryString}`;

    const parameters = { q, ...params, key: API_KEY };
    return await this.get('/volumes', { parameters });
  }

  async getBookById(id: string) {
    const parameters = { key: API_KEY };
    return await this.get(`/volumes/${id}`, { parameters });
  }
}

export default new GoogleAPI();
