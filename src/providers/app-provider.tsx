import { JSX, Suspense } from 'react';
import type { PropsWithChildren } from 'react';

import styles from './app-provider.module.css';

import { Loader } from '@/components/loader';

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Suspense
      fallback={
        <div className={styles.fallback}>
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
