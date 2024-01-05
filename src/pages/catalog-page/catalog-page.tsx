import { JSX, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './catalog-page.module.css';

import { API_URI, MAX_ITEM_PER_PAGE, MAX_PAGE_COUNT } from '@/config';
import { useFetch } from '@/hooks';
import type { Post } from '@/types';
import { PostsList } from '@/components/catalog';
import { Loader } from '@/components/loader';
import { Pagination } from '@/components/pagination';

export const CatalogPage = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [uri, setUri] = useState(`${API_URI}?_limit=${MAX_ITEM_PER_PAGE}&_page=1`);

  const { data, error } = useFetch<Post[]>(uri);

  // Computed variable
  const page = parseInt(searchParams.get('page') || '1', 10);

  const handleChangePage = (nextPage: number) => setSearchParams(`page=${nextPage}`);

  useEffect(() => {
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    setUri(`${API_URI}?_limit=${MAX_ITEM_PER_PAGE}&_page=${currentPage}`);
  }, [searchParams]);

  if (error || data?.length === 0) {
    return <div className={styles.error}>Something went wrong...</div>;
  }

  if (!data?.length) {
    return <Loader />;
  }

  return (
    <>
      <PostsList posts={data} />
      <Pagination
        prev={page === 1}
        next={page === MAX_PAGE_COUNT}
        onPrev={() => handleChangePage(page - 1)}
        onNext={() => handleChangePage(page + 1)}
      />
    </>
  );
};
