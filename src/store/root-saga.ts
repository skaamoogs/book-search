import { all, call } from 'redux-saga/effects';
import { booksSaga } from './books/books.saga';
import { bookSaga } from './book/book.saga';

export function* rootSaga() {
  yield all([call(booksSaga), call(bookSaga)]);
}
