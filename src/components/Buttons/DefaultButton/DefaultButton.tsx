import { PropsWithChildren } from 'react';
import styles from './DefaultButton.module.css';

type DefaultButtonProps = {
  palette?: 'primary' | 'secondary';
};

export const DefaultButton = ({
  palette = 'primary',
  children,
}: PropsWithChildren<DefaultButtonProps>) => {
  return (
    <button className={`${styles.button} ${styles[palette]}`}>
      {children}
    </button>
  );
};
