import { call, put, takeLatest } from 'redux-saga/effects';
import BooksAPI, { type ISearchParams } from '../../utils/books-api';
import {
  fetchBooksFailed,
  fetchBooksRequested,
  fetchBooksSucceeded,
} from './books.slice';
import { type ApiResponse } from '../../utils/main-api';
import { type PayloadAction } from '@reduxjs/toolkit';

export type FetchBooksAction = PayloadAction<{ params: ISearchParams }>;

function* fetchBooks(action: FetchBooksAction) {
  try {
    console.log(action.payload);
    const { params } = action.payload;
    const response: ApiResponse = yield call(BooksAPI.getBooks, params);
    if (response.status === 200) {
      yield put(fetchBooksSucceeded(response.data));
    } else {
      yield put(fetchBooksFailed(response.statusText));
    }
  } catch (error: any) {
    yield put(fetchBooksFailed(error?.message));
  }
}

export function* booksSaga() {
  yield takeLatest(fetchBooksRequested.type, fetchBooks);
}
