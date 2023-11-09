import { JSX } from 'react';

// import styles from './pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (value: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps): JSX.Element => {
  console.log(`totalPages: ${totalPages}`);

  const buttonsList = Array(totalPages)
    .fill(undefined)
    .map((_, index) => {
      const num = index + 1;

      const computedClassName = num === currentPage ? 'active' : '';

      return (
        <button
          key={`page_${num}`}
          type="button"
          onClick={() => onPageChange(num)}
          className={computedClassName}
        >
          {index + 1}
        </button>
      );
    });

  return <>{buttonsList}</>;
};
