import { BookCard } from '../book-card/book-card';
import { Header } from '../header/header';
import styles from './app.module.scss';
import coverSrc from '../../images/content.jpeg';
import GoogleApi, { type ISearchParams } from '../../utils/google-api';

export const App = () => {
  const handleSearch = (params: ISearchParams) => {
    const getBooks = async () => {
      const res = await GoogleApi.searchBooks(params);
      console.log(res);
    };
    void getBooks();
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <main className={styles.main}>
        <BookCard
          cover={coverSrc}
          category="Computers"
          title="Node.js Разработка серверных веб-приложений на JavaScript"
          author="Дэвид Хэррон"
        />
      </main>
    </>
  );
};
