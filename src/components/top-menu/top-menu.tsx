import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './top-menu.module.css';

export const TopMenu = (): ReactElement => {
  const createClassName = ({ isActive, isPending }: LinkProps) => {
    const stateClass = isPending ? styles.pending : isActive ? styles.active : '';

    return `${styles.link} ${stateClass}`;
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={createClassName}>
        Home
      </NavLink>
      <NavLink to="catalog" className={createClassName}>
        Catalog
      </NavLink>
      <NavLink to="about" className={createClassName}>
        About
      </NavLink>
    </nav>
  );
};

type LinkProps = {
  isActive: boolean;
  isPending: boolean;
};
