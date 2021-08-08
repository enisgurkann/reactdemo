/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import Select, { ActionMeta, OptionTypeBase, ValueType } from 'react-select';

import { InputDoubleBorder, StyledInputWrapper } from './SelectionInput.styles';

interface OptionProps {
  value?: {lat: number; lng: number;};
  label?: string;
}

export interface SelectionInputProps<OptionType extends OptionTypeBase, IsMulti extends boolean> {
  onChange?: (value: ValueType<OptionType, IsMulti>, actionMeta: ActionMeta<OptionType>) => void;
  value?: readonly OptionType[] | OptionType | null;
  style?: React.CSSProperties;
  placeholder?: string;
  options?: OptionProps[];
}

const customStyles = {
  option: (provided: any) => ({
    ...provided,
  }),
  control: (provided: any) => ({
    ...provided,
    height: 47,
    border: '1px solid black',
    borderRadius: 24,
    paddingLeft: 15,
    outline: 'none',
    boxSizing: 'border-box',
    color: 'black',
    fontSize: 16,
  }),
  singleValue: (provided: any) => {
    const transition = 'opacity 300ms';

    return { ...provided, transition };
  },
};

export const SelectionInput: FC<SelectionInputProps<any, boolean>> = ({ onChange, style, options, placeholder, value }) => {
  const [isFocused, setIsFocus] = useState(true);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  return (
    <StyledInputWrapper style={style}>
      <StyledInputWrapper>
        <InputDoubleBorder isFocused={isFocused} onFocus={handleFocus} onBlur={handleBlur}>
          <Select styles={customStyles} value={value} onChange={onChange} options={options} placeholder={placeholder} />
        </InputDoubleBorder>
      </StyledInputWrapper>
    </StyledInputWrapper>
  );
};
