import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>#Vanlife</p>
      <nav className={styles.nav}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/vans" className={styles.link}>
          Vans
        </Link>
      </nav>
    </header>
  );
};
