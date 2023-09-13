import { ReactElement } from 'react';

import styles from './posts-list.module.css';

import { Post } from '@/types';
import { PostRow } from '../post-row';

export const PostsList = ({ posts }: Props): ReactElement | null => {
  if (posts.length === 0) {
    return null;
  }

  const charactersList = posts.map(({ id, ...rest }: Post) => <PostRow key={id} data={rest} />);

  return <div className={styles.list}>{charactersList}</div>;
};

type Props = {
  posts: Post[];
};
