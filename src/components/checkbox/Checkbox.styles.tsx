import styled from 'styled-components';
import { device } from '../../constants/device';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

interface CheckboxWrapperProps {
  checked: boolean;
}

export const CheckboxWrapper = styled('div')<CheckboxWrapperProps>`
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme, checked }) => (checked ? theme.colors.primary : theme.colors.borderColor)};
  background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : theme.colors.white)};
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;

  /* @media ${device.tablet} {
    margin-left: auto;
    margin-right: 0px;
  } */
`;

export const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
`;
