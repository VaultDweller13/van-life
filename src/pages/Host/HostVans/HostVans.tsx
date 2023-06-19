import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HostVans.module.css';
import { VanData } from '../../../types';
import { HostVanCard } from '../../../components/HostVanCard/HostVanCard';

export const HostVans = () => {
  const [vansData, setVansData] = useState<VanData[]>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/host/vans');

      if (response.ok) {
        const data = (await response.json()).vans;
        setVansData(data);
      }
    }

    fetchData();
  }, []);

  const vans = vansData?.map((data) => (
    <Link to={data.id} key={data.id} className={styles['card-link']}>
      <HostVanCard {...data} />
    </Link>
  ));

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your listed vans</h1>
      <div className={styles.container}>{vans}</div>
    </main>
  );
};
