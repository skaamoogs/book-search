import { type ChangeEvent, type HTMLProps } from 'react';
import styles from './input-search.module.scss';
import { cx } from '../../utils/helpers';
import loupeImg from '../../images/loupe.svg';

export interface IInputSearchProps extends HTMLProps<HTMLInputElement> {
  name: string;
  value: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
}

export const InputSearch = ({
  name,
  value,
  className,
  handleChange,
  handleClick,
  ...rest
}: IInputSearchProps) => {
  return (
    <form className={cx(styles.inputBlock, className)}>
      <input
        {...rest}
        type="search"
        name={name}
        value={value}
        onChange={handleChange}
        readOnly={!handleChange}
        className={styles.inputBlock__input}
      />
      <button
        type="button"
        className={styles.inputBlock__searchButton}
        onClick={handleClick}
      >
        <img
          src={loupeImg}
          className={styles.inputBlock__loupe}
          alt="loupe"
        ></img>
      </button>
    </form>
  );
};
