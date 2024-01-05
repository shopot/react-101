import { JSX } from 'react';

import styles from './post-detail.module.css';

import { BASE_URL } from '@/config';
import type { Post } from '@/types';

type PostDetailProps = {
  data: Partial<Post>;
};

export const PostDetail = ({ data }: PostDetailProps): JSX.Element => {
  const { title, image, owner, addedAt, description } = data;

  return (
    <div className={styles.wrapper}>
      <img alt={title} src={`${BASE_URL}/${image}`} />
      <div className={styles.body}>
        <h2 className={styles.name}>{title}</h2>
        <p>
          <span className={styles.addedBy}>Added by:</span>
          <span className={styles.owner}>{owner}</span>
        </p>
        <p className={styles.addedAt}>{addedAt}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
