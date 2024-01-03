import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './main.css';

import App from '@/app/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
