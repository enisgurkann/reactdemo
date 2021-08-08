import * as React from 'react';
import styled from 'styled-components';

export interface SectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Section: React.FC<SectionProps> = (props: SectionProps) => <Wrapper {...props}>{props.children}</Wrapper>;
