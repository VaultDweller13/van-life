import { type PropsWithChildren } from 'react';

import { VanData } from '../../types';
import styles from './TypeButton.module.css';

type TypeButtonProps = {
  type: VanData['type'];
  isDefault?: boolean;
};

export const TypeButton = ({
  type,
  isDefault = false,
  children,
}: PropsWithChildren<TypeButtonProps>) => {
  const classNames = [
    styles.button,
    isDefault ? styles[`default-${type}`] : styles[`${type}`],
  ].join(' ');

  const text = children?.toString() || '';
  const buttonText = text[0].toUpperCase() + text.slice(1);

  return <button className={classNames}>{buttonText}</button>;
};
