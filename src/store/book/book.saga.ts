import { call, put, takeLatest } from 'redux-saga/effects';
import BooksAPI from '../../utils/books-api';
import {
  fetchBookFailed,
  fetchBookRequested,
  fetchBookSucceeded,
} from './book.slice';
import { type ApiResponse } from '../../utils/main-api';
import { type PayloadAction } from '@reduxjs/toolkit';

export type FetchBookAction = PayloadAction<{ id: string }>;

function* fetchBook(action: FetchBookAction) {
  try {
    const { id } = action.payload;
    const response: ApiResponse = yield call(BooksAPI.getBookById, id);
    if (response.status === 200) {
      yield put(fetchBookSucceeded(response.data));
    } else {
      yield put(fetchBookFailed(response.statusText));
    }
  } catch (error: any) {
    yield put(fetchBookFailed(error?.message));
  }
}

export function* bookSaga() {
  yield takeLatest(fetchBookRequested.type, fetchBook);
}
