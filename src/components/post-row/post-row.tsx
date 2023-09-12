import { ReactElement } from 'react';

import styles from './post-row.module.css';

import { BASE_URL } from '@/config';
import { Post } from '@/types';

export const PostRow = ({ data }: Props): ReactElement => {
  const { title, image, owner, addedAt } = data;

  return (
    <div className={styles.row}>
      <img src={`${BASE_URL}/${image}`} />
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

type Props = {
  data: Partial<Post>;
};
