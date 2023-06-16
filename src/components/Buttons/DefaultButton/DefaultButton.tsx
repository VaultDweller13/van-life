import { PropsWithChildren } from 'react';
import styles from './DefaultButton.module.css';

export const DefaultButton = ({ children }: PropsWithChildren) => {
  return <button className={styles.button}>{children}</button>;
};
