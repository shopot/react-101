import { ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './post-row.module.css';

import { APP_ROUTES, BASE_URL } from '@/config';
import { Post } from '@/types';

export const PostRow = ({ data }: Props): ReactElement => {
  const navigate = useNavigate();

  const { id, title, image, owner, addedAt } = data;

  const more = `/${APP_ROUTES.CATALOG}/${id}`;

  return (
    <div className={styles.row}>
      <Link to={more}>
        <img src={`${BASE_URL}/${image}`} />
      </Link>
      <div className={styles.body}>
        <h2 className={styles.name}>{title}</h2>
        <div>
          <span className={styles.addedBy}>Added by:</span>
          <span className={styles.owner}>{owner}</span>
        </div>
        <div className={styles.addedAt}>{addedAt}</div>
        <button type="button" className={styles.btnRead} onClick={() => navigate(more)}>
          Continue reading
        </button>
      </div>
    </div>
  );
};

type Props = {
  data: Partial<Post>;
};
