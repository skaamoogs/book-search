import { type HTMLProps } from 'react';
import styles from './select.module.scss';
import { cx } from '../../utils/helpers';

export interface ISelectProps extends HTMLProps<HTMLSelectElement> {
  name: string;
  options: string[];
}

export const Select = ({
  name,
  options,
  label,
  className,
  ...rest
}: ISelectProps) => {
  return (
    <label className={cx(styles.selectBlock, className)}>
      {label}
      <select {...rest} name={name} className={styles.selectBlock__select}>
        {options.map((option) => (
          <option key={option} value={styles.selectBlock__option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};
