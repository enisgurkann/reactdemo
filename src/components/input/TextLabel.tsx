import React, { FC } from 'react';
import { ErrorIconWrapper, ErrorLabel, ErrorWrapper, StyledTextInput, StyledInputWrapper, InputDoubleBorder, StyledTitle } from './TextInput.styles';

export interface TextLabelProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
  label?: string;
  error?: string;
  type?: string;
  disabled?: boolean;
  RightElement?: FC;
  id: string;
  style?: React.CSSProperties;
}

export const TextLabel: FC<TextLabelProps> = ({ onChange, disabled, value, label, error, id, style, type }) => (
  <StyledInputWrapper style={style}>
    <StyledInputWrapper>
      <StyledTitle>{label}</StyledTitle>
      <InputDoubleBorder error={!!error} isFocused={false}>
        <StyledTextInput type={type} disabled={disabled} value={value} id={id} onChange={onChange} error={!!error} />
      </InputDoubleBorder>
    </StyledInputWrapper>
    {error && (
      <ErrorWrapper>
        <ErrorIconWrapper>!</ErrorIconWrapper>
        <ErrorLabel>{error}</ErrorLabel>
      </ErrorWrapper>
    )}
  </StyledInputWrapper>
);
