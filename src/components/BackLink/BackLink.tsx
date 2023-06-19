import { Link, useLocation } from 'react-router-dom';
import styles from './BackLink.module.css';
import arrow from '../../../public/arrow-left.svg';

export const BackLink = () => {
  const { state } = useLocation();

  return (
    <nav className={styles.nav}>
      <img src={arrow} />
      <Link
        to={state ? `..?${state}` : '..'}
        relative="path"
        className={styles['link-back']}
      >
        Back to all vans
      </Link>
    </nav>
  );
};
