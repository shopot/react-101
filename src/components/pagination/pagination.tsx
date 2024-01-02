import { JSX } from 'react';

import styles from './pagination.module.css';

type PaginationProps = {
  defaultCurrent: number;
  defaultPageSize: number;
  total: number;
  onChange: (value: number) => void;
};

export const Pagination = ({
  defaultCurrent,
  defaultPageSize,
  total,
  onChange,
}: PaginationProps): JSX.Element => {
  const totalPages = Math.ceil(total / defaultPageSize);

  const links = Array(totalPages)
    .fill(undefined)
    .map((_, index) => {
      const pageIndex = index + 1;

      const className = pageIndex === defaultCurrent ? styles.activeItem : styles.item;

      return (
        <button
          key={`page_${pageIndex}`}
          type="button"
          onClick={() => onChange(pageIndex)}
          className={className}
        >
          {pageIndex}
        </button>
      );
    });

  return <div className={styles.pagination}>{links}</div>;
};
