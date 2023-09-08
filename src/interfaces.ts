export interface IBook {
  id: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    description?: string;
    categories?: string[];
    imageLinks?: { thumbnail: string };
  };
}

export interface IBooks {
  items?: IBook[];
  totalItems?: number;
}
