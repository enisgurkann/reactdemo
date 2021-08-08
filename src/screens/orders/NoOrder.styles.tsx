import styled from 'styled-components';
import { device } from '../../constants/device';

export const NoOrderWrapper = styled.div`
  width: 342px;
  margin: 0 auto;
  padding-top: 125px;

  @media ${device.mobileL} {
    padding-top: 50px;
  }
`;

export const Content = styled.div`
  padding: 0 20px 0 20px;
  text-align: center;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 18px 0;
  text-align: center;
`