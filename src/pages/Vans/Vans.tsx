import { useState, useEffect, ComponentProps } from 'react';

import { Header, Card } from '../../components';
import styles from './Vans.module.css';

type Van = ComponentProps<typeof Card>;

export const Vans = () => {
  const filterOptions = ['Simple', 'Luxury', 'Rugged'];
  const filterButtons = filterOptions.map((option, index) => (
    <button key={index}>{option}</button>
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
      <h1>Explore our van options</h1>
      <section className={styles.filters}>
        {filterButtons}
        <button>Clear filters</button>
      </section>
      <section>{!error && vans}</section>
    </>
  );
};
