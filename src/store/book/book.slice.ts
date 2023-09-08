import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IBook } from '../../interfaces';
import { type IReduxState } from '../interfaces';

interface IBookState extends IReduxState {
  book?: IBook;
}

const initialState: IBookState = { loading: false };

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetchBookRequested: (state) => {
      state.loading = true;
    },
    fetchBookSucceeded: (state, action: PayloadAction<IBook>) => {
      state.loading = false;
      state.book = action.payload;
    },
    fetchBookFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBookRequested, fetchBookSucceeded, fetchBookFailed } =
  bookSlice.actions;

export const bookReducer = bookSlice.reducer;
