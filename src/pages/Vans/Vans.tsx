import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Card, Filters } from '../../components';
import { VanData } from '../../types';
import styles from './Vans.module.css';

export const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get('type');
  const [vansData, setVansData] = useState<VanData[]>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/vans');

      if (response.ok) {
        const data = (await response.json()).vans;
        setVansData(data);
      }
    }

    fetchData();
  }, []);

  if (!vansData) {
    return (
      <main className={styles.main}>
        <h2>Loading...</h2>
      </main>
    );
  }

  const filteredVans = filterType
    ? vansData?.filter((data) => data.type === filterType)
    : vansData;

  const vans = filteredVans.map((data) => (
    <Link to={data.id} className={styles.card} key={data.id}>
      <Card {...data} />
    </Link>
  ));

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Explore our van options</h1>
        <Filters filterType={filterType} setSearchParams={setSearchParams} />
        <section className={styles.vans}>{vans}</section>
      </main>
    </>
  );
};
