import { DefaultButton } from '../../components';

import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.content}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <DefaultButton>Find your van</DefaultButton>
      </main>
    </>
  );
};
