import { cx } from '../../utils/helpers';
import styles from './book-cover.module.scss';

interface IBookCoverProps {
  cover?: string;
  large?: boolean;
  className?: string;
}

export const BookCover = ({ cover, large, className }: IBookCoverProps) => {
  return (
    <div
      className={cx(
        styles.cover,
        !cover && styles.cover_blank,
        large && styles.cover_large,
        className
      )}
    >
      {cover ? (
        <img src={cover} alt="book cover" className={styles.cover__img} />
      ) : (
        <span className={styles.cover__text}>No cover</span>
      )}
    </div>
  );
};
