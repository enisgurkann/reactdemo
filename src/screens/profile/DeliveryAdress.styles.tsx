import styled from 'styled-components';
import { device } from '../../constants/device';
import { theme } from '../../theme/theme';

export const StyledSmallScreenContainer = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;

export const Wrapper = styled.div`
  padding: 25px 0px 0px 23px;

  @media ${device.tablet} {
    padding: 0px;
    margin-bottom: 30px;
  }
`;

export const CardWrapper = styled.div`
  margin: 7px 0;
  margin-bottom: 50px;
`;

export const StyledCard = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 15px 30px 0 rgba(216, 217, 217, 0.59);
  border-radius: 10px;
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media ${device.tablet} {
    border-radius: 0px;
    margin-top: 0px;
    padding: 16px;
    flex-direction: column;
  }
`;

export const StyledCardBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Divider = styled.div`
  height: 1px;
  margin: 30px 0px;
  background-color: ${theme.colors.lightGray2};
`;

export const BrandName = styled.div`
  display: inline-block;
  color: ${theme.colors.darkGray3};

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const HeadlineContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.tablet} {
    padding: 16px;
    margin-bottom: 10px;
  }
`;

export const HeadlineTitle = styled(BrandName)`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.darkGray3};
  margin-left: 7px;

  @media ${device.tablet} {
    margin-left: 0px;
  }
`;

export const HeadlineImage = styled.img`
  width: 17px;
  height: 17px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    flex: 2;
    justify-content: flex-start;
  }
`;

export const Body = styled.div`
  flex: 14;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex: 7;
  }
`;

export const Right = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 10px 10px;

  @media ${device.tablet} {
    flex: 3;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const BrandImage = styled.img`
  width: 30px;
  height: 14px;
  margin-top: 3px;
`;

export const ClockImage = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 15px;
`;

export const BrandAddress = styled(BrandName)`
  color: ${theme.colors.light2};
  font-size: 14px;
  margin-top: 10px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Distance = styled(BrandName)`
  color: ${theme.colors.primaryNavy};
  font-size: 14px;
  font-weight: 500;
`;

export const TimeLabel = styled(BrandName)`
  color: ${theme.colors.primaryNavy};
  font-size: 13px;
  margin-left: 3px;
`;

export const Direction = styled(BrandName)`
  display: inline-block;
  color: ${theme.colors.primaryBlue};
  font-size: 13px;
  text-decoration: underline;
`;

export const Telephone = styled(Direction)`
  margin-top: 15px;
`;

export const StyledButton = styled.div`
  margin-left: 2px;
`;

export const StyledSvgIcon = styled.img`
  width: 32px;
  height: 32px;
`;
