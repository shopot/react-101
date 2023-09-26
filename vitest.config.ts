import { defineConfig, coverageConfigDefaults } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/__tests__/setup.jsdom.ts'],
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './tests/unit/coverage',
      include: ['src/**'],
      exclude: [...coverageConfigDefaults.exclude, 'src/main.tsx', 'src/**/*.d.ts'],
    },
    css: false, // Должен ли обрабатываться CSS
  },
});
