import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <p className={styles.title}>#Vanlife</p>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
};
