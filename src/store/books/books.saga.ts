import { call, put, takeLatest } from 'redux-saga/effects';
import { type IAction } from '../interface';
import BooksAPI, { type ISearchParams } from '../../utils/books-api';
import {
  fetchBooksFailed,
  fetchBooksRequested,
  fetchBooksSucceeded,
} from './books.slice';
import { type ApiResponse } from '../../utils/main-api';

function* fetchBooks(action: IAction<{ params: ISearchParams }>) {
  try {
    console.log(action.payload);
    const { params } = action.payload;
    const response: ApiResponse = yield call(BooksAPI.getBooks, params);
    if (response.status === 200) {
      yield put(fetchBooksSucceeded(response.data.items));
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
