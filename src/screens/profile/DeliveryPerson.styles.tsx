import styled from 'styled-components';

import { device } from '../../constants/device';

export const Wrapper = styled.div`
  width: 100%;
  padding: 60px 80px;
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 0px;
    margin: 0 -16px;
    width: auto;
  }
`;

export const ImageContainer = styled.div`
  height: 65px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
