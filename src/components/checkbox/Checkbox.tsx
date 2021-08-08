import React, { FC } from 'react';
import { CheckboxWrapper, HiddenCheckbox, Wrapper } from './Checkbox.styles';
import Okay from '../../assets/icons/okay.svg';
// import { isLargeScreen, isSmallScreen } from '../../constants/device';

export interface CheckboxProps {
    checked: boolean;
    label: string | React.ReactElement;
    value?: string | number;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

// TODO: Deniz'e sor neden smallScreende boyle bir ihtiyacimiz var
export const Checkbox: FC<CheckboxProps> = ({ label, checked, value, onChange }) => (
    <Wrapper>
        {/* {isSmallScreen() && label} */}
        <HiddenCheckbox onChange={onChange}  checked={checked} value={value} />
        <CheckboxWrapper checked={checked}>{checked && <img src={Okay} alt="okay" />}</CheckboxWrapper>
        {label}
    </Wrapper>
);
