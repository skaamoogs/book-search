import { createSlice } from '@reduxjs/toolkit';
import { type IBook } from '../../interfaces';

interface IBooksState {
  books: IBook[];
  loading: boolean;
  error?: unknown;
}

const initialState: IBooksState = { books: [], loading: false };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksRequested: (state) => {
      state.loading = true;
    },
    fetchBooksSucceeded: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    fetchBooksFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBooksRequested, fetchBooksSucceeded, fetchBooksFailed } =
  booksSlice.actions;

export const booksReducer = booksSlice.reducer;
