import { type PropsWithChildren } from 'react';
import styles from './TypeButton.module.css';

export type TypeButtonType = 'simple' | 'rugged' | 'luxury';
type TypeButtonProps = {
  type: TypeButtonType;
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
