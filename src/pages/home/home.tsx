import { useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/books.selector';
import styles from './home.module.scss';
import { BookCard } from '../../components/book-card/book-card';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { items, totalItems } = useSelector(selectBooks);
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      {totalItems !== undefined && (
        <p
          className={styles.section__totalItems}
        >{`Found ${totalItems} results`}</p>
      )}
      <div className={styles.section__books}>
        {items?.map((item) => (
          <BookCard
            key={item.id}
            cover={item.volumeInfo.imageLinks?.thumbnail}
            title={item.volumeInfo.title}
            category={item.volumeInfo.categories?.[0]}
            authors={item.volumeInfo.authors}
            onClick={() => {
              navigate(`/${item.id}`);
            }}
          />
        ))}
      </div>
    </section>
  );
};
