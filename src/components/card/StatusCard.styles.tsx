import styled from 'styled-components';
import { device } from '../../constants/device';
import { theme } from '../../theme/theme';
import { StyledSmallCard } from './Card.styles';

export const StyledStatusCard = styled(StyledSmallCard)`
  @media ${device.tablet} {
    background-color: #f6f7f8;
    padding: 34px 16px;
  }
`

export const WarningContainer = styled.div`
  box-shadow: none;
  border-radius: 0;
  background-color: ${theme.colors.warning};
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: 15px;

  @media ${device.laptop} {
    margin: 0;
  }
  @media ${device.tablet} {
    margin: 0 -16px;
  }
`;

export const StatusCardWrapper = styled.div`
  display: flex;
  padding: 22px 15px 47px;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    padding: 0;
  }
`;

export const StatusCardTitle = styled.h3`
  color: ${theme.colors.primaryGreen};
  margin-bottom: 34px;
  font-size: 18px;
  font-weight: 500;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NegativeTitle = styled.h3`
  color: ${theme.colors.red};
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

export const StatusCardDescription = styled.div`
  color: ${theme.colors.primaryNavy};
  margin-top: -12px;
  font-size: 18px;
  font-size: 14px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const StatusCardMessages = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

export const StatusCardNote = styled(StatusCardDescription)`
  font-weight: 400;
  margin-left: 3px;
  font-size: 15px;
  text-align: center;
`;

export const InformationArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  margin-top: 30px;
  padding-left: 20px;

  @media ${device.tablet} {
    flex-direction: column-reverse;
    width: 100%;
    padding: 0px;
  }
`;

export const MapContainer = styled.div`
  flex: 3;
  height: 400px;
  box-shadow: 0 15px 30px 0 ${theme.colors.borderColor};
`;

export const StyledSmallMapContainer = styled.div`
  height: 200px;
  margin-top: 20px;
`;

export const CourierNoteContainer = styled.div`
  flex: 2;
  padding-left: 25px;

  @media ${device.tablet} {
    padding: 0px;
  }
`;

export const CourierNoteBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.white};
  padding: 13px 24px 14px 13px;
  border-radius: 10px;
  border: solid 1px ${theme.colors.borderGray};
`;

export const InfoImage = styled.img`
  margin-right: 16px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const WarningTitle = styled.h3`
  margin: 0 10px 0 0;
  color: ${theme.colors.darkGray2};
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #545454;

  @media ${device.laptop} {
    margin: 0;
    margin-right: 10px;
  }
  @media ${device.tablet} {
    margin: 1px 0 10px 0;
  }
`;

export const WarningDesc = styled.p`
  margin: 0;
  color: ${theme.colors.primaryBlue};
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: underline;
`;
