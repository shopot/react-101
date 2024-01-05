import { JSX } from 'react';

import styles from './pagination.module.css';

type PaginationProps = {
  prev: boolean;
  next: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export const Pagination = ({ prev, next, onPrev, onNext }: PaginationProps): JSX.Element => (
  <div className={styles.pagination}>
    <button type="button" disabled={prev} onClick={onPrev}>
      Prev
    </button>
    <button type="button" disabled={next} onClick={onNext}>
      Next
    </button>
  </div>
);
