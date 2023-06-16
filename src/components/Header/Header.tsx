import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

type ClassNameProps = {
  isActive: boolean;
};

export const Header = () => {
  const handleActive = useCallback(
    ({ isActive }: ClassNameProps) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link,
    []
  );

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        #Vanlife
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/host" className={handleActive}>
          Host
        </NavLink>
        <NavLink to="/about" className={handleActive}>
          About
        </NavLink>
        <NavLink to="/vans" className={handleActive}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
};
