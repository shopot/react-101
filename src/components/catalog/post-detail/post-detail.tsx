import { ReactElement } from 'react';

import styles from './post-detail.module.css';

import { BASE_URL } from '@/config';
import { Post } from '@/types';

export const PostDetail = ({ data }: Props): ReactElement => {
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

type Props = {
  data: Partial<Post>;
};
