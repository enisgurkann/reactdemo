import styled from 'styled-components';
import { device } from '../../constants/device';
import { StyledDestinationCard, StyledLink } from './DestinationCard.styles';

export const StyledCourierHeader = styled.header`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }  
`

export const CourierLeft = styled.div`
  display: flex;
`

export const CourierName = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray3};
  margin: 5px 0;
`;

export const CourierImage = styled.img`
  margin-right: 16px;
`

export const StyledCourierCard = styled(StyledDestinationCard)`
  padding-bottom: 20px;
  position: relative;
`

export const Link = styled(StyledLink)`
  position: absolute;
  bottom: 15px;
  right: 16px;
`