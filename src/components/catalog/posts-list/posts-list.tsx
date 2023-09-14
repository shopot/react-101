import { ReactElement } from 'react';

import styles from './posts-list.module.css';

import { Post } from '@/types';
import { PostRow } from '../post-row';

export const PostsList = ({ posts }: Props): ReactElement | null => {
  if (posts.length === 0) {
    return null;
  }

  const charactersList = posts.map((post: Post) => {
    const { id } = post;

    return <PostRow key={id} data={post} />;
  });

  return <div className={styles.list}>{charactersList}</div>;
};

type Props = {
  posts: Post[];
};
