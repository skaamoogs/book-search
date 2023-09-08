import { type HTMLProps } from 'react';
import { BookCover } from '../book-cover/book-cover';
import styles from './book-card.module.scss';

export interface IBookCardProps extends HTMLProps<HTMLDivElement> {
  cover?: string;
  category?: string;
  authors?: string[];
  title?: string;
}

export const BookCard = ({
  cover,
  category,
  authors,
  title,
  ...rest
}: IBookCardProps) => {
  return (
    <div className={styles.card} {...rest}>
      <BookCover cover={cover} className={styles.card__cover} />
      <p className={styles.card__category}>{category}</p>
      <p className={styles.card__title}>{title}</p>
      <p className={styles.card__authors}>{authors?.join(', ')}</p>
    </div>
  );
};
