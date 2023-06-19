import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackLink, DefaultButton, TypeButton } from '../../components';

import { VanData } from '../../types';
import styles from './VanDetails.module.css';

export const VanDetails = () => {
  const { id } = useParams();
  const [vanData, setVanData] = useState<VanData>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/vans/${id}`);

      if (response.ok) {
        const data = await response.json();
        setVanData(data.vans);
      }
    }

    fetchData();
  }, [id]);

  return (
    <>
      <main className={styles.main}>
        <BackLink to="/vans" />
        {vanData ? (
          <section className={styles.van}>
            <img
              src={vanData.imageUrl}
              alt="Van photo"
              className={styles.image}
            />
            <TypeButton type={vanData.type}>{vanData.type}</TypeButton>
            <h1 className={styles.title}>{vanData.name}</h1>
            <p className={styles.price}>
              ${vanData.price}
              <span className={styles['price-text']}>/day</span>
            </p>
            <p className={styles.description}>{vanData.description}</p>
            <DefaultButton>Rent this van</DefaultButton>
          </section>
        ) : (
          <h2>...Loading</h2>
        )}
      </main>
    </>
  );
};
