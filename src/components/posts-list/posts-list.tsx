import { JSX } from 'react';

import styles from './posts-list.module.css';

import type { Post } from '@/types';
import { PostRow } from '../post-row';

type PostsListProps = {
  posts: Post[];
};

export const PostsList = ({ posts }: PostsListProps): JSX.Element | null => {
  if (posts.length === 0) {
    return null;
  }

  const charactersList = posts.map(({ id, ...rest }: Post) => <PostRow key={id} data={rest} />);

  return <div className={styles.list}>{charactersList}</div>;
};
