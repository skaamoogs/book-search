import { BookCover } from '../book-cover/book-cover';
import styles from './book-info.module.scss';

interface IBookInfoProps {
  cover?: string;
  authors?: string[];
  title?: string;
  categories?: string[];
  description?: string;
}

export const BookInfo = ({
  cover,
  authors,
  title,
  categories,
  description,
}: IBookInfoProps) => {
  return (
    <section className={styles.book}>
      <div className={styles.book__coverContainer}>
        <BookCover cover={cover} className={styles.book__cover} large />
      </div>
      <div className={styles.book__info}>
        {categories && (
          <p className={styles.book__categories}>{categories?.join(' / ')}</p>
        )}
        {title && <p className={styles.book__title}>{title}</p>}
        {authors && (
          <p className={styles.book__authors}>{authors.join(', ')}</p>
        )}
        {description && (
          <p className={styles.book__description}>{description}</p>
        )}
      </div>
    </section>
  );
};
