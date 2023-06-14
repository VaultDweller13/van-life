import { TypeButton, type TypeButtonType } from '../Buttons';
import styles from './Card.module.css';

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: TypeButtonType;
};

export const Card = ({ imageUrl, name, price, type }: Van) => {
  return (
    <>
      <div className={styles.card}>
        <img src={imageUrl} alt="Van image" className={styles.image} />
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>
          {price} <span className={styles['price-text']}>$/day</span>
        </span>
        <TypeButton type={type}>{type}</TypeButton>
      </div>
    </>
  );
};
