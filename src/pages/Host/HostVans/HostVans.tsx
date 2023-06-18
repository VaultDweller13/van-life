import { useState, useEffect } from 'react';
import styles from './HostVans.module.css';
import { VanData } from '../../../types';
import { HostVanCard } from '../../../components/HostVanCard/HostVanCard';

export const HostVans = () => {
  const [vansData, setVansData] = useState<VanData[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/host/vans');

      if (response.ok) {
        const data = (await response.json()).vans;
        setVansData(data);
      } else {
        setError(`${response.status}: ${response.statusText}`);
      }
    }

    fetchData();
  }, []);

  const vans = vansData?.map((data) => <HostVanCard {...data} />);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your listed vans</h1>
      {vans}
    </main>
  );
};
