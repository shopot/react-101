import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './main.css';

import App from '@/app/app';
import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
