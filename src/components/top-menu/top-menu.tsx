import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './top-menu.module.css';

import { APP_ROUTES } from '@/config';

export const TopMenu = (): ReactElement => {
  const createClassName = ({ isActive, isPending }: LinkProps) => {
    const stateClass = isPending ? styles.pending : isActive ? styles.active : '';

    return `${styles.link} ${stateClass}`;
  };

  return (
    <nav className={styles.nav}>
      <NavLink to={APP_ROUTES.HOME} className={createClassName}>
        Home
      </NavLink>
      <NavLink to={APP_ROUTES.CATALOG} className={createClassName}>
        Catalog
      </NavLink>
      <NavLink to={APP_ROUTES.ABOUT} className={createClassName}>
        About
      </NavLink>
    </nav>
  );
};

type LinkProps = {
  isActive: boolean;
  isPending: boolean;
};
