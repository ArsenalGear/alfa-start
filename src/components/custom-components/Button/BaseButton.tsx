import React, { FC, memo } from 'react';
import { TBaseButtonProps } from './types';

const BaseButtonMemo: FC<TBaseButtonProps> = ({
  style,
  btnText,
  disabled,
  className,
  ...props
}) => (
  <button style={style} disabled={disabled} className={className} {...props}>
    {btnText}
  </button>
);

export const BaseButton = memo(BaseButtonMemo);
