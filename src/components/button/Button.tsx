import React from 'react';
import { StyledButton } from './Button.styles';
import { ButtonTypes, ButtonWidth } from './Button.types';

export interface ButtonProps {
  buttonType?: ButtonTypes;
  buttonWidth?: ButtonWidth;
  label?: string;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, isDisabled, type = 'button', buttonWidth, buttonType = ButtonTypes.primary, ...props }) => (
  <StyledButton type={type} buttonType={buttonType} disabled={isDisabled} buttonWidth={buttonWidth} {...props}>
    {label}
  </StyledButton>
);
