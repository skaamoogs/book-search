import { Header } from '../header/header';
import styles from './app.module.scss';
import GoogleApi, { type ISearchParams } from '../../utils/google-api';
import { BookInfo } from '../book-info/book-info';

export const App = () => {
  const handleSearch = (params: ISearchParams) => {
    const getBooks = async () => {
      const res = await GoogleApi.searchBooks(params);
      console.log(res);
    };
    void getBooks();
  };

  return (
    <div className={styles.page}>
      <Header handleSearch={handleSearch} />
      <main className={styles.main}>
        {/* <BookCard
          cover={coverSrc}
          category="Computers"
          title="Node.js Разработка серверных веб-приложений на JavaScript"
          authors={['Дэвид Хэррон']}
        />
        <BookCard
          cover={coverSrc}
          category="Computers"
          title="Node.js "
          authors={['Дэвид Хэррон']}
        /> */}
        <BookInfo
          categories={['art', 'history']}
          authors={['Davey Jones', 'Jack Sparrow']}
          title="Pirates of the Caribbean: Dead Men Tell No Tales. Some time after"
          description={`Sparrow and his crew attempt to rob the new bank of St. Martin. 
          The robbery is a success, but all the gold in it had fallen while they were dragging the locker, 
          and Sparrow's crew abandons him. Despondent, Jack trades his magical compass for a drink. 
          However, this betrayal of the compass releases an old enemy of Sparrow, 
          who holds a serious grudge against him; the ruthless undead pirate hunter Captain Salazar. 
          Years previously, Jack had defeated Salazar by tricking him into sailing his ship into the Devil's Triangle, 
          where Salazar and his crew were cursed to live as the undead. 
          Salazar states that Jack perched in the ship's rigging like a "little bird", 
          earning him the name "Jack the Sparrow". It was during this event that Jack received his compass, 
          as well as his characteristic gear.`}
        />
      </main>
    </div>
  );
};
