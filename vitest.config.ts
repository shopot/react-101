import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/tests/setup.jsdom.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      reportsDirectory: './tests/unit/coverage',
    },
    css: false, // Должен ли обрабатываться CSS
  },
});
