import React, { FC, memo } from 'react';
import { StyledButton } from './styles';
import { TBaseButtonProps } from './types';

const BaseButtonMemo: FC<TBaseButtonProps> = ({
  style,
  btnText,
  disabled,
  className,
  ...props
}) => (
  <StyledButton style={style} disabled={disabled} className={className} {...props}>
    {btnText}
  </StyledButton>
);

export const BaseButton = memo(BaseButtonMemo);
