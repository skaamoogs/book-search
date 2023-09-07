import type { FormEvent, ChangeEvent, HTMLProps } from 'react';
import styles from './input-search.module.scss';
import { cx } from '../../utils/helpers';
import loupeImg from '../../images/loupe.svg';

export interface IInputSearchProps extends HTMLProps<HTMLInputElement> {
  name: string;
  value: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: () => void;
}

export const InputSearch = ({
  name,
  value,
  className,
  handleChange,
  handleSubmit,
  ...rest
}: IInputSearchProps) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit && handleSubmit();
  };

  return (
    <form className={cx(styles.inputBlock, className)} onSubmit={onSubmit}>
      <input
        {...rest}
        type="search"
        name={name}
        value={value}
        onChange={handleChange}
        readOnly={!handleChange}
        className={styles.inputBlock__input}
      />
      <button type="submit" className={styles.inputBlock__searchButton}>
        <img
          src={loupeImg}
          className={styles.inputBlock__loupe}
          alt="loupe"
        ></img>
      </button>
    </form>
  );
};
