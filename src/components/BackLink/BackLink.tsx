import { Link, useLocation } from 'react-router-dom';
import styles from './BackLink.module.css';
import arrow from '../../../public/arrow-left.svg';

export const BackLink = () => {
  const { state } = useLocation();
  const type = state?.type || 'all';

  return (
    <nav className={styles.nav}>
      <img src={arrow} />
      <Link
        to={state?.search ? `..?${state.search}` : '..'}
        relative="path"
        className={styles['link-back']}
      >
        Back to {type} vans
      </Link>
    </nav>
  );
};
