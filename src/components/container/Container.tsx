import React from 'react';
import styled from 'styled-components';
import { device } from '../../constants/device';

const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 8px;
  
  @media ${device.laptopL} {
    width: 1024px;
  }

  @media ${device.laptop} {
    width: 100%;
    padding: 0 16px;
  }
`;

export interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => <Wrapper>{children}</Wrapper>;
