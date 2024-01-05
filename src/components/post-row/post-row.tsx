import { JSX } from 'react';

import styles from './post-row.module.css';

import { BASE_URL } from '@/config';
import type { Post } from '@/types';

type PostRowProps = {
  data: Partial<Post>;
};

export const PostRow = ({ data: { title, image, owner, addedAt } }: PostRowProps): JSX.Element => {
  return (
    <div className={styles.row}>
      <img src={`${BASE_URL}/${image}`} alt={title} />
      <div className={styles.body}>
        <h2 className={styles.name}>{title}</h2>
        <div>
          <span className={styles.addedBy}>Added by:</span>
          <span className={styles.owner}>{owner}</span>
        </div>
        <div className={styles.addedAt}>{addedAt}</div>
      </div>
    </div>
  );
};
