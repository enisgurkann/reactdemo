/* eslint-disable no-param-reassign */
import React, { FC, useState } from 'react';
import {
    ErrorIconWrapper,
    ErrorLabel,
    ErrorWrapper,
    StyledTextArea,
    StyledTextInputLabel,
    StyledInputWrapper,
    InputDoubleBorder,
    RightElementWrapper,
    Wrapper,
} from './TextInput.styles';
import { normalizeNumber } from '../../common/utulity/normalize';

export interface TextAreaProps {
    onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
    value?: string;
    label?: string;
    error?: string;
    disabled?: boolean;
    RightElement?: React.ReactNode;
    id: string;
    className?: string;
    type?: 'numeric';
    maxLength?: number;
    style?: React.CSSProperties;
    isSearchInput?: boolean;
}

export const TextArea: FC<TextAreaProps> = ({
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
    value,
}) => {
    const [isFocused, setIsFocus] = useState(false);

    const handleFocus = () => setIsFocus(true);
    const handleBlur = () => setIsFocus(false);
    let formattedValue = value;

    if (value !== null && value !== undefined) {
        if (type === 'numeric') {
            formattedValue = normalizeNumber(value);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
                    <StyledTextArea 
                      onChange={handleChange}
                      className={className}
                      disabled={disabled}
                      value={formattedValue}
                      id={id}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      error={!!error} 
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
