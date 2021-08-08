/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  position: relative;
  text-align: left;
`;

export const Wrapper = styled(StyledInputWrapper)`
  padding: 15px 0 0;
`;

interface StyledTextInputLabelProps {
  error?: boolean;
  isFocused?: boolean;
  isSearchInput?: boolean;
}

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

export const StyledTextInputLabel = styled.label<StyledTextInputLabelProps>`
  color: ${({ error, theme, isFocused, isSearchInput }) => (error ? theme.colors.error : isFocused && isSearchInput ? theme.colors.white : theme.colors.letter)};
  font-size: 13px;
  text-align: left;
  transform: ${({ isFocused }) => (isFocused ? `scale(1) translate(15px, 0)` : `scale(1.15) translate(15px, -50%)`)};
  padding-top: ${({ isFocused }) => !isFocused && '15px'};
  transform-origin: left top;
  display: inline-block;
  cursor: text;
  transition: 300ms ease-out;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.8)};
  z-index: 15;
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? 0 : '50%')};
`;

interface StyledTextInputProps {
  error?: boolean;
}

export const StyledTextInput = styled.input<StyledTextInputProps>`
  height: 47px;
  width: 100%;
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.error : theme.colors.borderColor)};
  border-radius: 24px;
  padding-left: 15px;
  outline: none;
  box-sizing: border-box;
  color: black;
  font-size: 16px;
  transition: 300ms ease-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.borderColor};
  }

  &:focus {
    border-color: ${({ theme, error }) => (error ? theme.colors.error : theme.colors.primaryBlue)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledTextArea = styled.textarea<StyledTextInputProps>`
  height: 100px;
  width: 100%;
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.error : theme.colors.borderColor)};
  border-radius: 24px;
  padding: 15px;
  outline: none;
  box-sizing: border-box;
  color: black;
  font-size: 16px;
  transition: 300ms ease-out;
  line-height: 1.5;

  &::placeholder {
    color: ${({ theme }) => theme.colors.borderColor};
  }

  &:focus {
    border-color: ${({ theme, error }) => (error ? theme.colors.error : theme.colors.primaryBlue)};
  }
`;

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

export const RightElementWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.div`
  padding-left: 15px;
  margin-bottom: 5px;
  font-family: Ubuntu;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #7f7f7f;
`;
