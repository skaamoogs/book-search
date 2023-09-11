import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/books.selector';
import styles from './home.module.scss';
import { BookCard } from '../../components/book-card/book-card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { type FetchBooksAction } from '../../store/books/books.saga';
import { fetchBooksRequested } from '../../store/books/books.slice';
import { Loader } from '../../components/loader/loader';

export const Home = () => {
  const { items, totalItems, isNextItems, lastParams, loading } =
    useSelector(selectBooks);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getMoreBooks = () => {
    if (lastParams) {
      dispatch<FetchBooksAction>({
        type: fetchBooksRequested.type,
        payload: { params: lastParams, step: step + 1 },
      });
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      {loading && !step ? (
        <Loader />
      ) : (
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
          {items?.length && isNextItems && (
            <button onClick={getMoreBooks} className={styles.section__button}>
              Load more
            </button>
          )}
        </section>
      )}
    </>
  );
};
