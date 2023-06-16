import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        #Vanlife
      </Link>
      <nav className={styles.nav}>
        <Link to="/host" className={styles.link}>
          Host
        </Link>
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
