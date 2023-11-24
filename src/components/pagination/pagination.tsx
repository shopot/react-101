import { JSX } from 'react';

// import styles from './pagination.module.css';

type PaginationProps = {
  page: number;
  total: number;
  onChange: (value: number) => void;
};

export const Pagination = ({ page, total, onChange }: PaginationProps): JSX.Element => {
  const links = Array(total)
    .fill(undefined)
    .map((_, index) => {
      const pageIndex = index + 1;

      const activeClass = pageIndex === page ? 'active' : '';

      return (
        <button
          key={`page_${pageIndex}`}
          type="button"
          onClick={() => onChange(pageIndex)}
          className={activeClass}
        >
          {pageIndex}
        </button>
      );
    });

  return <>{links}</>;
};
