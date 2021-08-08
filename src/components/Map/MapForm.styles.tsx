import styled from 'styled-components';
import { device } from '../../constants/device';

export const FormWrapper = styled.form`
  width: 410px;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 35px auto;
`