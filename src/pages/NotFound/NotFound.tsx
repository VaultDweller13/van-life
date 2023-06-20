import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';
import { DefaultButton } from '../../components';

export const NotFound = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/">
        <DefaultButton palette="secondary">Return to home</DefaultButton>
      </Link>
    </main>
  );
};
