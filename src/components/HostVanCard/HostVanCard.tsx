import { VanData } from '../../types';
import styles from './HostVanCard.module.css';

export const HostVanCard = ({ imageUrl, name, price }: VanData) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="Van image" className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        ${price}
        <span className={styles['price-text']}>/day</span>
      </p>
    </div>
  );
};
