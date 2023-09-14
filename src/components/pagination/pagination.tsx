import { ReactElement } from 'react';

import styles from './pagination.module.css';

export const Pagination = ({ prev, next, onPrev, onNext }: Props): ReactElement => {
  return (
    <>
      <div className={styles.pagination}>
        <button type="button" disabled={prev} onClick={onPrev}>
          Prev
        </button>
        <button type="button" disabled={next} onClick={onNext}>
          Next
        </button>
      </div>
    </>
  );
};

type Props = {
  prev: boolean;
  next: boolean;
  onPrev: () => void;
  onNext: () => void;
};
