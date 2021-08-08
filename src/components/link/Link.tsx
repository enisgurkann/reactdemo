import React from 'react';
import { StyledLink } from './Link.styles';
import { LinkProps } from './LinkTypes';

export const Link: React.FC<LinkProps> = ({ label, url, ...props }) => (
  <StyledLink href={url} {...props}>
    {label}
  </StyledLink>
);
