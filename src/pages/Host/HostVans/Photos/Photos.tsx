import { useVanData } from '../../../../hooks';
import styles from './Photos.module.css';

export const Photos = () => {
  const { imageUrl } = useVanData();

  return (
    <article>
      <img
        src={imageUrl}
        alt="Van photo"
        className={styles.image}
        width="100"
      />
    </article>
  );
};
