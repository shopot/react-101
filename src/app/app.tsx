import { useFetch } from '@/hooks';
import { ReactElement } from 'react';

import styles from './app.module.css';

import { API_URI } from '@/config';
import { PostRow } from '@/components/post-row';
import { Post } from '@/types';

export const App = () => {
  const { data, loading } = useFetch<Post[]>(API_URI);

  let charactersList: ReactElement[] = [];

  if (data) {
    charactersList = data.map(({ id, ...rest }: Post) => <PostRow key={id} data={rest} />);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.header1}>News Catalog</h1>
      {loading && <div className={styles.loading}>Loading...</div>}
      {charactersList.length > 0 && <div className={styles.list}>{charactersList}</div>}
    </div>
  );
};

export default App;
