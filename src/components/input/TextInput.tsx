/* eslint-disable no-param-reassign */
import React, { FC, useEffect, useState } from 'react';
import {
  ErrorIconWrapper,
  ErrorLabel,
  ErrorWrapper,
  StyledTextInput,
  StyledTextInputLabel,
  StyledInputWrapper,
  InputDoubleBorder,
  RightElementWrapper,
  Wrapper,
} from './TextInput.styles';
import { normalizeNumber } from '../../common/utulity/normalize';

export interface TextInputProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  RightElement?: React.ReactNode;
  id: string;
  className?: string;
  type?: 'numeric' | 'number' | 'text';
  maxLength?: number;
  style?: React.CSSProperties;
  textArea?: boolean;
  isSearchInput?: boolean;
  inputMode?: 'numeric' | 'text' | 'search' | 'none' | 'tel' | 'url' | 'email' | 'decimal';
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  ref?: React.Ref<HTMLInputElement>;
  pattern?: string;
  autoComplete?: string;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement> | undefined;
}

export const TextInput: FC<TextInputProps> = ({
  className,
  disabled,
  error,
  id,
  isSearchInput = false,
  label,
  maxLength,
  onChange,
  RightElement,
  style,
  type,
  inputMode,
  value,
  pattern,
  autoComplete,
  placeholder,
  onKeyPress,
  onPaste,
}) => {
  const [isFocused, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);
  let formattedValue = value;

  if (value !== null && value !== undefined) {
    if (type === 'numeric' || type === 'number') {
      formattedValue = normalizeNumber(value);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempEvent = event;
    if (maxLength) {
      if (event.target.value.length > maxLength) {
        tempEvent.target.value = event.target.value.slice(0, -1);
      }
    }
    onChange(tempEvent);
  };

  return (
    <StyledInputWrapper style={style}>
      <Wrapper>
        {label && (
          <StyledTextInputLabel htmlFor={id} isFocused={isFocused || !!value} isSearchInput={isSearchInput} error={!!error}>
            {label}
          </StyledTextInputLabel>
        )}
        <InputDoubleBorder error={!!error} isFocused={isFocused}>
          <StyledTextInput
            type={type}
            placeholder={placeholder}
            inputMode={inputMode}
            className={className}
            disabled={disabled}
            value={formattedValue}
            pattern={pattern}
            id={id}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={!!error}
            onKeyPress={onKeyPress}
            onPaste={onPaste}
            autoComplete={autoComplete}
          />
          {RightElement && <RightElementWrapper>{RightElement}</RightElementWrapper>}
        </InputDoubleBorder>
      </Wrapper>
      {error && (
        <ErrorWrapper>
          <ErrorIconWrapper>!</ErrorIconWrapper>
          <ErrorLabel>{error}</ErrorLabel>
        </ErrorWrapper>
      )}
    </StyledInputWrapper>
  );
};
