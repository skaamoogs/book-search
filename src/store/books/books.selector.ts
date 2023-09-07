import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '../store';

const selectBooks = (state: RootState) => state.books;

export const booksSelector = createSelector(
  selectBooks,
  (state) => state.books
);

export const booksLoadingSelector = createSelector(
  selectBooks,
  (state) => state.loading
);

export const booksErrorSelector = createSelector(
  selectBooks,
  (state) => state.error
);
