export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: { thumbnail: string };
  };
}
