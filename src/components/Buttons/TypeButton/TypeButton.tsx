import { type PropsWithChildren } from 'react';

import { VanData } from '../../../types';
import styles from './TypeButton.module.css';

type TypeButtonProps = {
  type: VanData['type'];
  isClickable?: boolean;
  isActive?: boolean;
  onClick?: () => void;
};

export const TypeButton = ({
  type,
  isClickable = true,
  isActive = false,
  onClick,
  children,
}: PropsWithChildren<TypeButtonProps>) => {
  const classNames = [
    styles.button,
    isClickable ? null : styles.disabled,
    isActive ? styles[`${type}`] : styles[`default-${type}`],
  ].join(' ');

  const text = children?.toString() || ' ';
  const buttonText = text[0].toUpperCase() + text.slice(1);

  return (
    <button className={classNames} onClick={onClick}>
      {buttonText}
    </button>
  );
};
