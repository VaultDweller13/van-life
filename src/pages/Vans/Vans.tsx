import { useState, useEffect, ComponentProps } from 'react';

import { Header, Card, Footer } from '../../components';
import styles from './Vans.module.css';
import { TypeButton } from '../../components/Buttons';

type Van = ComponentProps<typeof Card>;

export const Vans = () => {
  const filterOptions = ['simple', 'luxury', 'rugged'] as const;
  const filterButtons = filterOptions.map((option, index) => (
    <TypeButton isDefault={true} type={option} key={index}>
      {option}
    </TypeButton>
  ));
  const [vansData, setVansData] = useState<Van[]>();
  const [error, setError] = useState<string>();

  const vans = vansData?.map((data) => <Card key={data.id} {...data} />);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/vans');

      if (response.ok) {
        const data = (await response.json()).vans as Van[];
        setVansData(data);
      } else {
        setError(`${response.status}: ${response.statusText}`);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Explore our van options</h1>
        <section className={styles.filters}>
          <div className={styles['filter-buttons']}>{filterButtons}</div>
          <button className={styles['button-clear']}>Clear filters</button>
        </section>
        <section className={styles.vans}>{!error && vans}</section>
      </main>
      <Footer />
    </>
  );
};
