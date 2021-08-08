import React from 'react';
import { StyledCard } from './Card.styles';

export interface CardProps {
  className?: string;
}
 
export const Card: React.FC<CardProps> = ({ children, className }) => ( <StyledCard className={className}>
    {children}
  </StyledCard> )
