import { useRouteError } from 'react-router-dom';
import { FetchError } from '../../types';
import styles from './ErrorFallback.module.css';

export const ErrorFallback = () => {
  const error = useRouteError() as FetchError;

  return (
    <main className={styles.main}>
      <h1>{error.message}</h1>
      <pre>
        {error.statusText} - {error.status}
      </pre>
    </main>
  );
};
