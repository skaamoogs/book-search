import { MainAPI } from './main-api';
import { API_KEY, API_URL, sortingParams } from './settings';

export interface ISearchParams {
  searchText: string;
  category?: string;
  orderBy?: string;
}

class BooksAPI extends MainAPI {
  protected maxResults = 30;

  constructor() {
    super(API_URL);
  }

  getBooks = async (
    { searchText, category, orderBy }: ISearchParams,
    step = 0
  ) => {
    const categoryString =
      category && category !== 'all' ? `+subject:${category}` : '';
    const q = `${searchText}${categoryString}`;

    const parameters = {
      q,
      orderBy: orderBy ?? sortingParams[0],
      startIndex: step * this.maxResults,
      maxResults: this.maxResults,
      key: API_KEY,
    };
    return await this.get('/volumes', { parameters });
  };

  getBookById = async (id: string) => {
    const parameters = { key: API_KEY };
    return await this.get(`/volumes/${id}`, { parameters });
  };
}

export default new BooksAPI();
