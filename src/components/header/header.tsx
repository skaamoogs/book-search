import { useState } from 'react';
import { Input } from '../input/input';
import { Select } from '../select/select';
import styles from './header.module.scss';

const categories = [
  'all',
  'art',
  'biography',
  'computers',
  'history',
  'medical',
  'poetry',
];

const sortingOptions = ['relevance', 'newest'];

export const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Search for books</h1>
      <Input
        className={styles.header__search}
        name="search"
        value={searchText}
        handleChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <div className={styles.header__filter}>
        <Select name="categories" options={categories} label="Categories" />
        <Select name="sorting" options={sortingOptions} label="Sorting by" />
      </div>
    </header>
  );
};
