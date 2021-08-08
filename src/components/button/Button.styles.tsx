import styled from 'styled-components';
import { ButtonTypes, ButtonWidth } from './Button.types';

export interface ButtonProps {
  buttonType?: ButtonTypes;
  label?: string;
  isDisabled?: boolean;
  buttonWidth?: ButtonWidth;
  onClick?: () => void;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ buttonType, theme }) => (buttonType === ButtonTypes.primary ? theme.colors.primaryBlue : theme.colors.white)};
  color: ${({ buttonType, theme }) => (buttonType === ButtonTypes.primary ? theme.colors.white : theme.colors.primaryBlue)};
  border: 1px solid ${({ buttonType, theme }) => (buttonType === ButtonTypes.primary ? theme.colors.white : theme.colors.primaryBlue)};
  width: 100%;
  outline: none;
  border-radius: 24px;
  height: 48px;
  cursor: pointer;

  font-size: 17px;
  text-align: center;

  &:disabled {
    background: #d4d4d4;
    color: #a9a9a9;
  }

  ${({ buttonWidth }) => {
    switch (buttonWidth) {
      case ButtonWidth.XSMALL:
        return `
                  width: 152px
                `;
      case ButtonWidth.SMALL:
        return `
                  width: 188px
                `;
      case ButtonWidth.MEDIUM:
        return `
                  width: 350px
                `;
      case ButtonWidth.LARGE:
        return `
                  width: 350px
                `;
      default:
        return `
                    width: 100%;
                `;
    }
  }}
`;
