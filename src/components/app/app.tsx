import { BookCard } from '../book-card/book-card';
import { Header } from '../header/header';
import styles from './app.module.scss';
import coverSrc from '../../images/content.jpeg';

export const App = () => {
  return (
    <>
      <Header />
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
