import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
