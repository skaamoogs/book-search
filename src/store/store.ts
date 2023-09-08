import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { booksReducer } from './books/books.slice';
import { rootSaga } from './root-saga';
import { bookReducer } from './book/book.slice';

const rootReducer = combineReducers({
  books: booksReducer,
  book: bookReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const middleware =
  process.env.NODE_ENV === 'development'
    ? [logger, sagaMiddleWare]
    : [sagaMiddleWare];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
