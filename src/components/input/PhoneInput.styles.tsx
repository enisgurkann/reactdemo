/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const StyledInputWrapper = styled.div`
  position: relative;
  text-align: left;
`;

export const AreaCodeWrapper = styled.div`
  position: absolute;

  justify-content: center;
  align-items: center;
  display: flex;
  top: 0;
  bottom: 0;
  z-index: 5;
`;

export const AreaCode = styled.span`
  color: ${({ theme }) => theme.colors.primaryBlue};
  padding: 0 14px 0 16.5px;
  border-right: 1px solid #7F7F7F;
`;

export const StyledPhoneInput = styled(InputMask)`
  height: 47px;
  width: 100%;
  border: 1px solid #7F7F7F;
  border-radius: 24px;
  padding-left: 94px;
  outline: none;
  box-sizing: border-box;
  color: black;
  font-family: Ubuntu;
  font-size: 16px;

  &::placeholder {
    color: #a9a9a9;
    font-family: Ubuntu;
    font-size: 16px;
  }
`;

interface PhoneInputLabelProps{
  error?: boolean;
  isFocused?: boolean;
}

export const PhoneInputLabel = styled.label<PhoneInputLabelProps>`
  color: ${({ error, theme }) => (error ? theme.colors.error : theme.colors.letter)};
  font-size: 13px;
  transform-origin: left top;
  display: inline-block;
  cursor: text;
  transition: 300ms ease-out;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.8)};
  z-index: 15;
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? 0 : '50%')};
  left: ${({ isFocused }) => (isFocused ? 0 : '65px')};
  transform: ${({ isFocused }) => (isFocused ? `scale(1) translate(15px, 0)` : `scale(1.15) translate(15px, -50%)`)};
  padding-top: ${({ isFocused }) => !isFocused && '14px'};
`

export const Wrapper = styled.div`
  position: relative;
  padding-top: 15px;
`


interface InputDoubleBorderProps {
  isFocused: boolean;
  error?: boolean;
}

export const InputDoubleBorder = styled.div<InputDoubleBorderProps>`
  margin: 0 -5px;
  padding: 5px;
  background-color: ${({ theme, isFocused, error }) => (isFocused ? (error ? theme.colors.errorLight : theme.colors.primartBlueLight) : 'transparent')};
  border-radius: 35px;
  position: relative;
`;


export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
  margin-top: 7px;
`;

export const ErrorIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.error};
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;
export const ErrorLabel = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
`;