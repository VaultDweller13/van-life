import { useVanData } from '../../../../hooks';
import styles from './Details.module.css';

export const Details = () => {
  const { description, name, type } = useVanData();

  return (
    <article className={styles.article}>
      <h3 className={styles.title}>
        Name: <span className={styles.text}>{name}</span>{' '}
      </h3>
      <h3 className={styles.title}>
        Category:{' '}
        <span className={styles.text}>
          {type[0].toUpperCase() + type.slice(1)}
        </span>{' '}
      </h3>
      <h3 className={styles.title}>
        Description: <span className={styles.text}>{description}</span>
      </h3>
      <h3 className={styles.title}>
        Visibility: <span className={styles.text}>public</span>
      </h3>
    </article>
  );
};
