import { type ChangeEvent, useState } from 'react';
import { InputSearch } from '../input-search/input-search';
import { Select } from '../select/select';
import styles from './header.module.scss';
import { categories, sortingParams } from '../../utils/settings';
import { type ISearchParams } from '../../utils/google-api';

interface IHeaderProps {
  handleSearch: (params: ISearchParams) => void;
}

export const Header = ({ handleSearch }: IHeaderProps) => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [sorting, setSorting] = useState(sortingParams[0]);

  const handleClick = () => {
    handleSearch({ searchText, category, orderBy: sorting });
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Search for books</h1>
      <InputSearch
        className={styles.header__search}
        name="search"
        value={searchText}
        handleChange={(e) => {
          setSearchText(e.target.value);
        }}
        handleClick={handleClick}
      />
      <div className={styles.header__filter}>
        <Select
          name="categories"
          options={categories}
          label="Categories"
          value={category}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setCategory(e.target.value);
          }}
        />
        <Select
          name="sorting"
          value={sorting}
          options={sortingParams}
          label="Sorting by"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setSorting(e.target.value);
          }}
        />
      </div>
    </header>
  );
};
