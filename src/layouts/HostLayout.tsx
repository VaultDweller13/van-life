import { Link, Outlet } from 'react-router-dom';
import styles from './HostLayout.module.css';

export const HostLayout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};
