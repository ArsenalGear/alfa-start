import { CSSProperties } from 'react';

export type TBaseButtonProps = {
  btnText?: string | JSX.Element;
  style?: CSSProperties;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};
