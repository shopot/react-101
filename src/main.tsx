import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { SHOW_LIST_WITH_RENDER } from '@/shared/config';
import App from '@/app/app.tsx';
import AppRender from '@/app/app-render';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>{SHOW_LIST_WITH_RENDER ? <AppRender /> : <App />}</React.StrictMode>
);
