import styled from 'styled-components';

import { device } from '../../constants/device';
import { theme } from '../../theme/theme';

import { StyledButton } from '../button/Button.styles';

export const CardGrid = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  padding: 43px 7px 36px 7px;
  object-fit: contain;
  border-radius: 10px;

  @media ${device.tablet} {
    width: 100%;
    border-radius: 0px;
    margin: 0 0 10px;
    padding: 27px 31px;

  }
`;

export const CardTitle = styled.div`
  margin: 18px 0px 14px;
  object-fit: contain;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${theme.colors.primaryNavy};
`;

export const CardDescription = styled.div`
  min-height: 100px;
  margin: 14px 15px 27px 14px;
  object-fit: contain;
  opacity: 0.7;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: ${theme.colors.primaryNavy};
`;

export const AddButton = styled(StyledButton)`
  font-size: 17px;
  font-weight: 500;
  margin-top: auto;
`;
