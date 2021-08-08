/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  position: relative;
  text-align: left;
  height: 70px;
`;

interface InputDoubleBorderProps {
  isFocused: boolean;
  error?: boolean;
}

export const InputDoubleBorder = styled.div<InputDoubleBorderProps>`
  margin: 0 -5px;
  padding: 5px;
  background-color: ${({ theme, isFocused, error }) => (isFocused ? (error ? theme.colors.errorLight : theme.colors.primartBlueLight) : 'transparent')};
  border-radius: 24px;
  position: relative;
`;
