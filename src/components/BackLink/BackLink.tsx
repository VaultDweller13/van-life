import { Link } from 'react-router-dom';
import styles from './BackLink.module.css';
import arrow from '../../../public/arrow-left.svg';

export const BackLink = () => {
  return (
    <nav className={styles.nav}>
      <img src={arrow} />
      <Link to=".." relative="path" className={styles['link-back']}>
        Back to all vans
      </Link>
    </nav>
  );
};
