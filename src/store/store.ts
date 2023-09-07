import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { booksReducer } from './books/books.slice';
import { rootSaga } from './root-saga';

const rootReducer = combineReducers({
  books: booksReducer,
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
export type AppDispatch = typeof store.dispatch;
