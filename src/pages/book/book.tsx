import { useParams } from 'react-router-dom';
import { BookCover } from '../../components/book-cover/book-cover';
import styles from './book.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type FetchBookAction } from '../../store/book/book.saga';
import { fetchBookRequested } from '../../store/book/book.slice';
import { selectBook } from '../../store/book/book.selector';
import { Loader } from '../../components/loader/loader';

export const Book = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const { book, loading } = useSelector(selectBook);

  useEffect(() => {
    console.log(bookId);
    if (bookId) {
      dispatch<FetchBookAction>({
        type: fetchBookRequested.type,
        payload: { id: bookId },
      });
    }
  }, [bookId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.book}>
          <div className={styles.book__coverContainer}>
            <BookCover
              cover={book?.volumeInfo.imageLinks?.thumbnail}
              className={styles.book__cover}
              large
            />
          </div>
          <div className={styles.book__info}>
            <p className={styles.book__categories}>
              {book?.volumeInfo.categories?.join(' / ')}
            </p>
            <p className={styles.book__title}>{book?.volumeInfo.title}</p>
            <p className={styles.book__authors}>
              {book?.volumeInfo.authors?.join(', ')}
            </p>
            <p className={styles.book__description}>
              {book?.volumeInfo.description}
            </p>
          </div>
        </section>
      )}
    </>
  );
};
