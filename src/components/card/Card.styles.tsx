import styled from 'styled-components';
import { device } from '../../constants/device';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 30px 0 rgba(216, 217, 217, 0.59);
  border-radius: 10px;
  padding: 10px 0;

  @media ${device.laptop} {
    display: flex;
    box-shadow: none;
    margin: -5px -16px;
    border-radius: 0;
    flex-direction: row;
  }
`;

export const StyledSmallCard = styled(StyledCard)`
  padding-bottom: 0;

  @media ${device.laptop} {
    box-shadow: none;
    margin: 0 -16px;
    border-radius: 0;
    flex-direction: column;
  }
`;
