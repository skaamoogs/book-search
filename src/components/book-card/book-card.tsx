import styles from './book-card.module.scss';

export interface IBookCardProps {
  cover?: string;
  category?: string;
  author?: string;
  title?: string;
}

export const BookCard = ({
  cover,
  category,
  author,
  title,
}: IBookCardProps) => {
  return (
    <div className={styles.card}>
      <img src={cover} alt="book cover" className={styles.card__cover} />
      <p className={styles.card__category}>{category}</p>
      <p className={styles.card__title}>{title}</p>
      <p className={styles.card__author}>{author}</p>
    </div>
  );
};
