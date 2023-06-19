import { useVanData } from '../../../../hooks';
import styles from './Pricing.module.css';

export const Pricing = () => {
  const { price } = useVanData();

  return (
    <article>
      <p className={styles.price}>
        ${price}
        <span className={styles['price-text']}>/day</span>
      </p>
    </article>
  );
};
