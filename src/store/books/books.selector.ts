import { type RootState } from '../store';

export const selectBooks = (state: RootState) => state.books;
