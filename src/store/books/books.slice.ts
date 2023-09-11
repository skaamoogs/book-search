import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { IBooks } from '../../interfaces';
import type { IReduxState } from '../interfaces';
import { type ISearchParams } from '../../utils/books-api';

interface IBooksState extends IBooks, IReduxState {
  isNextItems: boolean;
  lastParams?: ISearchParams;
}

const initialState: IBooksState = { loading: false, isNextItems: true };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksRequested: (state) => {
      state.loading = true;
    },
    fetchNextBooksSucceeded: (state, action: PayloadAction<IBooks>) => {
      state.loading = false;
      const { items } = action.payload;
      if (items) {
        state.items?.push(...items);
        state.isNextItems = true;
      }
    },
    fetchBooksSucceeded: (
      state,
      action: PayloadAction<{ books: IBooks; params: ISearchParams }>
    ) => {
      state.loading = false;
      const { books, params } = action.payload;
      state.items = books.items;
      if (!books.items) {
        state.isNextItems = false;
      }
      state.totalItems = books.totalItems;
      state.lastParams = params;
    },
    fetchBooksFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBooksRequested,
  fetchBooksSucceeded,
  fetchNextBooksSucceeded,
  fetchBooksFailed,
} = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
