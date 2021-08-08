import styled from 'styled-components';
import { Button, Link, Section } from '../../components';

import { device } from '../../constants/device';
import SearchBackgroundImage from '../../assets/images/searchBackgroundImage.jpeg';
import DestinationImage from '../../assets/images/destinations.png';

export const Promotion = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  background-image: url(${SearchBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  height: 700px;
  display: flex;
  justify-content: center;

  @media ${device.laptopL} {
    height: 550px;
  }
  @media ${device.tablet} {
    height: auto;
  }
`;

export const PromotionWrapper = styled.div`
  margin-bottom: 160px;
  @media ${device.laptopL} {
    margin-bottom: 130px;
  }
  @media ${device.laptopM} {
    margin-bottom: 90px;
  }
  @media ${device.tablet} {
    margin: 0;
    padding-top: 160px;
    padding-bottom: 10px;
  }
`;

export const PromotionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 39px;
  text-align: left;
  margin: 0 0 41px;

  @media ${device.laptopL} {
    font-size: 34px;
    margin: 0 0 20px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    text-align: center;
    margin: 0 0 0px;
  }
`;

export const PromotionInfoWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding-top: 18px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const PromotionInfoItem = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    margin-bottom: 12px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

export const DestionationSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 600px;
  display: flex;
  justify-content: center;
  position: relative;

  @media ${device.laptopL} {
    height: 400px;
  }

  @media ${device.tablet} {
    height: 400px;
    padding-top: 60px;
  }
`;

export const DestinationsImage = styled.div`
  background-image: url(${DestinationImage});
  background-repeat: no-repeat;
  background-position: right center;
  min-height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${device.laptopL} {
    min-height: 260px;
    background-size: 360px 260px;
  }
  @media ${device.tablet} {
    min-height: 200px;
    background-position: center;
    background-size: 300px 200px;
  }
`;

export const DestionationContent = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    padding: 30px 0;
  }
`;

export const DestionationTitle = styled.h2`
  text-align: left;
  color: ${({ theme }) => theme.colors.primaryNavy};
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 40px;
  @media ${device.laptopL} {
    font-size: 28px;
    margin: 0 0 30px;
  }
  @media ${device.tablet} {
    font-size: 24px;
    text-align: center;
  }
`;

export const DestinationButton = styled(Button)`
  @media ${device.tablet} {
    font-size: 14px;
    height: auto;
    width: auto;
    background-color: white;
    color: ${({ theme }) => theme.colors.primaryBlue};
    font-weight: 500;
  }
`;

export const StatisticSection = styled(Section)`
  height: 470px;
  display: flex;
  justify-content: center;
  @media ${device.laptopL} {
    height: 400px;
  }
  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 230px;
  }
`;

export const StatisticContent = styled.div``;

interface StatisticItemProps {
  shouldHaveBorder?: boolean;
}

export const StatisticItem = styled.div<StatisticItemProps>`
  text-align: center;
  position: relative;
  padding: 20px 0;

  @media ${device.mobileL} {
    padding: 20px 10px;
  }

  &:before {
    content: '';
    display: ${({ shouldHaveBorder }) => (shouldHaveBorder ? 'none' : 'block')};
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #979797;
    @media ${device.mobileL} {
      height: 174px;
    }
  }
`;

export const StatisticTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  padding: 90px 0 0;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 26px;
    padding: 50px 0 0;
  }

  @media ${device.mobileL} {
    font-size: 22px;
    padding: 20px 0 0;
  }
`;

export const StatisticItemTitle = styled.h3`
  text-align: center;
  margin: 0 0 45px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primaryGreen};
  @media ${device.laptopL} {
    font-size: 28px;
    margin: 0 0 25px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin: 0 0 20px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
    margin: 0 0 20px;
  }
`;

export const StyledImage = styled.img`
  margin-bottom: 38px;
  @media ${device.laptopL} {
    margin-bottom: 18px;
    width: 140px;
  }
  @media ${device.tablet} {
    margin-bottom: 14px;
    width: 120px;
  }
  @media ${device.mobileL} {
    margin-bottom: 14px;
    width: 60px;
  }
`;

export const StatisticItemCount = styled.span`
  display: block;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryBlue};
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

export const StyledDestinationWrapper = styled(DestionationSection)`
  background-color: ${({ theme }) => theme.colors.darkGray};
  @media ${device.tablet} {
    height: 280px;
  }
`;

export const StyledDestinationContent = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    height: 280px;
    justify-content: flex-end;
    padding-bottom: 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
`;

export const SearchForm = styled.form`
  p {
    padding-left: 8px;
    margin: 3px 0;
  }
`;

export const LiveChatWrapper = styled.div<{ isActive?: boolean }>`
position: ${({ isActive }) => (isActive ? 'fixed' : 'absolute')};
  width: 100%;
  z-index: 20;
  top: ${({ isActive }) => (isActive ? '38vh' : '40px')};
  right:${({ isActive }) => (isActive ? '120px' : '20px')};
  display: flex;
  justify-content: flex-end;

  @media ${device.tablet} {
    bottom: 120px;
    right: ${({ isActive }) => (isActive ? '0' : '30px')};
    width: ${({ isActive }) => isActive && '100vw'};
    height: ${({ isActive }) => isActive && '100vh'};
    
    position: ${({ isActive }) => isActive && 'fixed'};
    z-index: ${({ isActive }) => isActive && '9999999'};
    top: ${({ isActive }) => (isActive ? '0' : '-55px')};
    bottom: ${({ isActive }) => isActive && '0'};
    left: ${({ isActive }) => isActive && '0'};
  }
`;
