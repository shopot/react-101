import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';

export const pathResolver = (p: string) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
});
