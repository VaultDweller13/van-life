import { useCallback, useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { BackLink, TypeButton } from '../../components';
import { VanData } from '../../types';

import styles from './VanInfoLayout.module.css';

type ClassNameProps = { isActive: boolean };

export const VanInfoLayout = () => {
  const { id } = useParams();
  const [vanData, setVanData] = useState<VanData>();
  const handleActive = useCallback(
    ({ isActive }: ClassNameProps) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link,
    []
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/host/vans/${id}`);

      if (response.ok) {
        const data = await response.json();
        setVanData(data.vans);
      }
    }

    fetchData();
  }, [id]);

  return (
    <main className={styles.main}>
      <BackLink />
      {vanData ? (
        <>
          <section className={styles.container}>
            <img
              src={vanData.imageUrl}
              alt="Van image"
              className={styles.image}
            />
            <h1 className={styles.title}>{vanData.name}</h1>
            <TypeButton type={vanData.type} isClickable={false}>
              {vanData.type}
            </TypeButton>
            <p className={styles.price}>${vanData.price}/day</p>
            <nav className={styles.nav}>
              <NavLink to="." end className={handleActive}>
                Details
              </NavLink>
              <NavLink to="pricing" className={handleActive}>
                Pricing
              </NavLink>
              <NavLink to="photos" className={handleActive}>
                Photos
              </NavLink>
            </nav>
            <Outlet />
          </section>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </main>
  );
};
