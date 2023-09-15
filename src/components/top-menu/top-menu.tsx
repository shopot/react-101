import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './top-menu.module.css';

import { APP_ROUTES } from '@/config';

export const TopMenu = (): ReactElement => {
  const computedClassName = ({ isActive, isPending }: LinkProps) => {
    const stateClass = isPending ? styles.pending : isActive ? styles.active : '';

    return `${styles.link} ${stateClass}`;
  };

  return (
    <nav className={styles.nav}>
      <NavLink to={APP_ROUTES.HOME} className={computedClassName}>
        Home
      </NavLink>
      <NavLink to={APP_ROUTES.CATALOG} className={computedClassName}>
        Catalog
      </NavLink>
      <NavLink to={APP_ROUTES.ABOUT} className={computedClassName}>
        About
      </NavLink>
    </nav>
  );
};

type LinkProps = {
  isActive: boolean;
  isPending: boolean;
};
