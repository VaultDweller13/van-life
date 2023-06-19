import { Link } from 'react-router-dom';
import styles from './BackLink.module.css';
import arrow from '../../../public/arrow-left.svg';

type BackLinkProps = {
  to: string;
};

export const BackLink = ({ to }: BackLinkProps) => {
  return (
    <nav className={styles.nav}>
      <img src={arrow} />
      <Link to={to} className={styles['link-back']}>
        Back to all vans
      </Link>
    </nav>
  );
};
