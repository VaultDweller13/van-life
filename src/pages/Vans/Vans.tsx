import { Link, useSearchParams, useLoaderData } from 'react-router-dom';

import { Card, Filters } from '../../components';
import { VanData } from '../../types';
import styles from './Vans.module.css';

export const loader = async () => {
  let data = null;
  const response = await fetch('/api/vans');

  if (response.ok) {
    data = (await response.json()).vans;
  }

  return data as VanData[];
};

export const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get('type');
  const vansData = useLoaderData() as Awaited<ReturnType<typeof loader>>;

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
    <Link
      to={data.id}
      className={styles.card}
      key={data.id}
      state={{ search: searchParams.toString(), type: filterType }}
    >
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
