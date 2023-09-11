import { ReactElement } from 'react';

import styles from './divider.module.css';

export const Divider = (): ReactElement => {
  return <hr className={styles.divider} />;
};
