import styled from 'styled-components';
import { device } from '../../constants/device';
import { theme } from '../../theme/theme';

export const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface RadioButtonWrapperProps {
  checked: boolean;
}

export const RadioButtonWrapper = styled('div')<RadioButtonWrapperProps>`
  width: 24px;
  height: 24px;
  border: ${({ checked }) => (checked ? `3px solid ${theme.colors.primary}` : `1px solid ${theme.colors.borderColor}`)};
  background-color: ${theme.colors.white};
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  @media ${device.tablet} {
    margin-left: auto;
    margin-right: 0px;
  }
`;

export const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
`;

export const CheckedRadioButtonCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${theme.colors.primary};
`;
