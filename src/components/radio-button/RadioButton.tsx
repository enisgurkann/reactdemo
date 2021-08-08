import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { RadioButtonWrapper, HiddenRadioButton, Wrapper, CheckedRadioButtonCircle } from './RadioButton.styles';

export interface IRadioButton {
  checked?: boolean;
  label: string | React.ReactElement;
  value: string | number;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  name?: string
}

export const RadioButton: FC<IRadioButton> = ({ label, checked, onChange, name, value }) => {
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);
  return(
    <Wrapper>
      {isSmallScreen && label}
      <HiddenRadioButton value={value} onChange={onChange} checked={!!checked} name={name} />
      <RadioButtonWrapper checked={!!checked}>{!!checked  && <CheckedRadioButtonCircle />}</RadioButtonWrapper>
      {!isSmallScreen && label}
    </Wrapper>
  )
}