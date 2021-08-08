import React, { FC, useState } from 'react';
import { AreaCode, AreaCodeWrapper, StyledPhoneInput, StyledInputWrapper, PhoneInputLabel, Wrapper, InputDoubleBorder, ErrorIconWrapper, ErrorWrapper, ErrorLabel } from './PhoneInput.styles';

export interface PhoneInputProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  placeHolder?: string;
  value?: string;
  error?: string;
  id?: string;
}

export const PhoneInput: FC<PhoneInputProps> = ({ onChange, value, id="phoneNumber", error, placeHolder }) => {
  const [isFocused, setIsFocus] = useState(false);
  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);
  
  return (
  <Wrapper>
    {!!placeHolder && <PhoneInputLabel htmlFor={id} isFocused={isFocused || !!value} error={!!error}>{placeHolder || 'Telefon Numarası'}</PhoneInputLabel>}
    <StyledInputWrapper>
        <AreaCodeWrapper>
            <AreaCode>TR+90</AreaCode>
        </AreaCodeWrapper>
        <InputDoubleBorder isFocused={isFocused} error={!!error}>
          <StyledPhoneInput onFocus={handleFocus} onBlur={handleBlur} value={value} onChange={onChange} mask="999 999 99 99" id={id} />
        </InputDoubleBorder>
    </StyledInputWrapper>
    {error && (
        <ErrorWrapper>
          <ErrorIconWrapper>!</ErrorIconWrapper>
          <ErrorLabel>{error}</ErrorLabel>
        </ErrorWrapper>
      )}
  </Wrapper>
)}
