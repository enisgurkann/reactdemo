import styled from 'styled-components';
import { device } from '../../constants/device';
import { StyledSmallCard } from './Card.styles';



export const StyledDeliveryCard = styled(StyledSmallCard)`
  @media ${device.tablet} {
    padding: 13px 20px;
  }
`

export const DeliveryCardWrapper = styled.div`
  padding: 20px 60px 10px;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 0;
    flex-direction: row;
  }

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    justify-content: justify-content;
    flex-direction: row;
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  margin-right: 16px;
  @media ${device.tablet} {
    margin: 0;
  }
`;

export const DeliveryText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  margin: 10px 0;

  @media ${device.mobileL} {
    margin: 0 0 6px 0;
  }

  &:last-child {
    @media ${device.mobileL} {
      margin: 0;
    }
  }
`;

export const DeliveryKey = styled.span`
  min-width: 80px;
  display: inline-block;
  @media ${device.mobileL} {
    color: #292929;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const DeliveryValue = styled.span`
  color: ${({ theme }) => theme.colors.darkGray2};
  font-weight: 500;
  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  margin-right: 16px;
  width: 40px;
  height: 40px;
`;

export const ProfileTitle = styled.h3`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.darkGray3};
  font-weight: 500;
  font-size: 14px;
`;

export const ProfileDesc = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGray2};
`;
