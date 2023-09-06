import { MainAPI } from './main-api';
import { API_KEY, API_URL, sortingParams } from './settings';

export interface ISearchParams {
  searchText: string;
  category?: string;
  orderBy?: string;
}

class GoogleAPI extends MainAPI {
  protected startIndex = 0;
  protected maxResults = 30;

  constructor() {
    super(API_URL);
  }

  async searchBooks({ searchText, category, orderBy }: ISearchParams) {
    const categoryString =
      category && category !== 'all' ? `+subject:${category}` : '';
    const q = `"${searchText}"${categoryString}`;

    const parameters = {
      q,
      orderBy: orderBy ?? sortingParams[0],
      startIndex: this.startIndex,
      maxResults: this.maxResults,
      key: API_KEY,
    };
    return await this.get('/volumes', { parameters });
  }

  async getBookById(id: string) {
    const parameters = { key: API_KEY };
    return await this.get(`/volumes/${id}`, { parameters });
  }
}

export default new GoogleAPI();
