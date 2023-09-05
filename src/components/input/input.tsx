import { type ChangeEvent, type HTMLProps } from 'react';
import styles from './input.module.scss';
import { cx } from '../../utils/helpers';
import loupeImg from '../../images/loupe.svg';

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  name: string;
  value: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  value,
  className,
  handleChange,
  ...rest
}: IInputProps) => {
  return (
    <div className={cx(styles.inputBlock, className)}>
      <input
        {...rest}
        type="search"
        name={name}
        value={value}
        onChange={handleChange}
        readOnly={!handleChange}
        className={styles.inputBlock__input}
      />
      <img
        src={loupeImg}
        className={styles.inputBlock__loupe}
        alt="loupe"
      ></img>
    </div>
  );
};
