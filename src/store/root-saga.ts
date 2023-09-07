import { all, call } from 'redux-saga/effects';
import { booksSaga } from './books/books.saga';

export function* rootSaga() {
  yield all([call(booksSaga)]);
}
