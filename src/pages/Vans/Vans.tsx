import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../components';
import { TypeButton } from '../../components/Buttons';
import { VanData } from '../../types';
import styles from './Vans.module.css';

export const Vans = () => {
  const filterOptions = ['simple', 'luxury', 'rugged'] as const;
  const filterButtons = filterOptions.map((option, index) => (
    <TypeButton isDefault={true} type={option} key={index}>
      {option}
    </TypeButton>
  ));
  const [vansData, setVansData] = useState<VanData[]>();
  const [error, setError] = useState<string>();

  const vans = vansData?.map((data) => (
    <Link to={`/vans/${data.id}`} className={styles.card} key={data.id}>
      <Card {...data} />
    </Link>
  ));

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/vans');

      if (response.ok) {
        const data = (await response.json()).vans;
        setVansData(data);
      } else {
        setError(`${response.status}: ${response.statusText}`);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Explore our van options</h1>
        <section className={styles.filters}>
          <div className={styles['filter-buttons']}>{filterButtons}</div>
          <button className={styles['button-clear']}>Clear filters</button>
        </section>
        <section className={styles.vans}>{!error && vans}</section>
      </main>
    </>
  );
};
