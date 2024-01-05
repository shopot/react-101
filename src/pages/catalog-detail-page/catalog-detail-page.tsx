import { JSX } from 'react';
import { useParams } from 'react-router-dom';

import styles from './catalog-detail-page.module.css';

import { API_URI } from '@/config';
import { useFetch } from '@/hooks';
import type { Post } from '@/types';
import { PostDetail } from '@/components/catalog';
import { Loader } from '@/components/loader';

export const CatalogDetailPage = (): JSX.Element => {
  const { catalogId } = useParams();

  const { data, error } = useFetch<Post>(`${API_URI}/${catalogId}`);

  if (error) {
    return <div className={styles.error}>Something went wrong...</div>;
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.detail}>
        <PostDetail data={data} />
      </div>
    </>
  );
};
