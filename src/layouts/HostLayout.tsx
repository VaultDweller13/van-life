import { useCallback } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styles from './HostLayout.module.css';

type ClassNameProps = {
  isActive: boolean;
};

export const HostLayout = () => {
  const handleActive = useCallback(
    ({ isActive }: ClassNameProps) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link,
    []
  );

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/host" end className={handleActive}>
          Dashboard
        </NavLink>
        <NavLink to="/host/income" className={handleActive}>
          Income
        </NavLink>
        <NavLink to="/host/reviews" className={handleActive}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
