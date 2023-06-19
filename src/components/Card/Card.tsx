import { TypeButton } from '../Buttons';
import { VanData } from '../../types';

import styles from './Card.module.css';

export const Card = ({ imageUrl, name, price, type }: VanData) => {
  return (
    <>
      <div className={styles.card}>
        <img src={imageUrl} alt="Van image" className={styles.image} />
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>
            ${price}
            <span className={styles['price-text']}>/day</span>
          </p>
        </div>
        <TypeButton isActive={true} type={type}>
          {type}
        </TypeButton>
      </div>
    </>
  );
};
