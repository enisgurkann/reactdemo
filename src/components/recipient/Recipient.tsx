import React, { FC } from 'react';

import { CardGrid, CardTitle, CardDescription, AddButton } from './Recipient.styles';
import { ButtonTypes } from '../button/Button.types';

export interface RecipientProps {
  ImageComponent: FC;
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
}

export const Recipient: FC<RecipientProps> = ({ ImageComponent, title, description, buttonLabel, onClick }) => (
  <CardGrid>
    <ImageComponent />
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
    <AddButton buttonType={ButtonTypes.secondary} onClick={onClick}>
      {buttonLabel}
    </AddButton>
  </CardGrid>
);
