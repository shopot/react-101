import { ReactElement, useEffect, useState } from 'react';

import styles from './catalog-page.module.css';

import { API_URI, MAX_PAGE_COUNT } from '@/config';
import { useFetch } from '@/hooks';
import { Post } from '@/types';
import { PostsList } from '@/components/catalog';
import { Loader } from '@/components/loader';

export const CatalogPage = (): ReactElement => {
  const [uri, setUri] = useState(`${API_URI}?_limit=6&_page=1`);

  const [page, setPage] = useState(1);

  const { data, error } = useFetch<Post[]>(uri);

  const handleChangePage = (num: number) => {
    const nextPage = num > 1 && num <= MAX_PAGE_COUNT ? num : 1;

    if (nextPage === page) {
      return;
    }

    setPage(nextPage);
  };

  useEffect(() => {
    setUri(`${API_URI}?_limit=6&_page=${page}`);
  }, [page]);

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
        <button type="button" disabled={page === 1} onClick={() => handleChangePage(page - 1)}>
          Prev
        </button>
        <button
          type="button"
          disabled={page === MAX_PAGE_COUNT}
          onClick={() => handleChangePage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};
