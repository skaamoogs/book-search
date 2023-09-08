import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { IBooks } from '../../interfaces';
import type { IReduxState } from '../interfaces';

interface IBooksState extends IBooks, IReduxState {}

const initialState: IBooksState = { loading: false };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksRequested: (state) => {
      state.loading = true;
    },
    fetchBooksSucceeded: (state, action: PayloadAction<IBooks>) => {
      state.loading = false;
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
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
