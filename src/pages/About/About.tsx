import { Header, Footer } from '../../components';
import styles from './About.module.css';

export const About = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}></section>
        <section className={styles.description}>
          <h1 className={styles.title}>
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className={`${styles['first-paragraph']} ${styles.text}`}>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className={styles.text}>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </section>
        <section className={styles.action}>
          <div className={styles.container}>
            <h2 className={styles.subtitle}>
              Your destination is waiting. Your van is ready.
            </h2>
            <button className={styles.button}>Explore our vans</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
