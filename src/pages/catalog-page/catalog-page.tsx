import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './catalog-page.module.css';

import { API_URI, MAX_PAGE_COUNT } from '@/config';
import { useFetch } from '@/hooks';
import { Post } from '@/types';
import { PostsList } from '@/components/catalog';
import { Loader } from '@/components/loader';

export const CatalogPage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [uri, setUri] = useState(`${API_URI}?_limit=6&_page=1`);

  const { data, error } = useFetch<Post[]>(uri);

  // Computed variable
  const page = parseInt(searchParams.get('page') || '1', 10);

  const sanitizePageNumber = (page: number) => {
    return page > 1 && page <= MAX_PAGE_COUNT ? page : 1;
  };

  const handlePrevPage = () => {
    const prevPage = sanitizePageNumber(page - 1);

    if (prevPage === page) {
      return;
    }

    setSearchParams(`page=${prevPage}`);
  };

  const handleNextPage = () => {
    const nextPage = sanitizePageNumber(page + 1);

    if (nextPage === page) {
      return;
    }

    setSearchParams(`page=${nextPage}`);
  };

  useEffect(() => {
    const newPageNumber = sanitizePageNumber(parseInt(searchParams.get('page') || '1', 10));

    setUri(`${API_URI}?_limit=6&_page=${newPageNumber}`);
  }, [searchParams]);

  if (error) {
    return <div className={styles.error}>Something went wrong...</div>;
  }

  if (!data?.length) {
    return <Loader />;
  }

  return (
    <>
      <PostsList posts={data} />
      <div className={styles.pagination}>
        <button type="button" disabled={page === 1} onClick={handlePrevPage}>
          Prev
        </button>
        <button type="button" disabled={page === MAX_PAGE_COUNT} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </>
  );
};
