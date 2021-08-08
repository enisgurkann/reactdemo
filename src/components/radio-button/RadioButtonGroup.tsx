import React, { FC } from 'react';
import { IRadioButton } from './RadioButton';

export interface IRadioButtonGroup {
  value: string;
  children: React.ReactElement<IRadioButton>[];
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export const RadioButtonGroup: FC<IRadioButtonGroup> = ({ children, value, onChange }) => (
    <>
      {
        children && children.map((child) => (
            React.cloneElement(child, { checked: `${child.props.value}` === `${value}`, onChange }, null)
          ))
      }
    </>
  )