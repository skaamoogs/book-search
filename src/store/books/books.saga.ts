import { call, put, takeLatest } from 'redux-saga/effects';

import BooksAPI, { type ISearchParams } from '../../utils/books-api';
import {
  fetchBooksFailed,
  fetchBooksRequested,
  fetchBooksSucceeded,
  fetchNextBooksSucceeded,
} from './books.slice';
import { type ApiResponse } from '../../utils/main-api';
import { type PayloadAction } from '@reduxjs/toolkit';

export type FetchBooksAction = PayloadAction<{
  params: ISearchParams;
  step?: number;
}>;

function* fetchBooks(action: FetchBooksAction) {
  try {
    const { params, step } = action.payload;
    const response: ApiResponse = yield call(BooksAPI.getBooks, params, step);
    if (response.status === 200) {
      if (step) {
        yield put(fetchNextBooksSucceeded(response.data));
      } else {
        yield put(fetchBooksSucceeded({ books: response.data, params }));
      }
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
