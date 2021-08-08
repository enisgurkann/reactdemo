import styled from 'styled-components';
import { device } from '../../constants/device';
import { theme } from '../../theme/theme';

import { StyledSmallCard } from "./Card.styles";

export const StyledDestinationCard = styled(StyledSmallCard)`
  @media ${device.tablet} {
    padding: 0;
  }
`

export const DestinationCardWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 15px;
  }
`;

export const StyledSmallScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SummaryInformation = styled.div<{ info?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${(info) => info && 'padding: 12px 0px'};
`;

export const SummaryText = styled.div`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${theme.colors.thinGray};
`;

export const StyledImg = styled.img`
  margin-right: 11px;
`;

export const StyledArrow = styled.img`
  margin-left: auto;
  width: 15px;
  height: 15px;
`;

export const DestinationText = styled.p`
  margin: 0 0 12px;
  display: flex;
  align-items: center;

  &:last-child {
    margin: 0;
  }
`;

export const DestionationTitle = styled.span`
  display: inline-block;
  min-width: 200px;
  color: ${theme.colors.primaryNavy};
  font-size: 14px;
`;

export const DestionationValue = styled.span`
  color: ${theme.colors.primaryNavy};
  font-size: 14px;
  font-weight: 500;

  @media ${device.tablet} {
    text-align: right;
    margin-left: auto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${theme.colors.letter};
  }
`;

export const Left = styled.div`
  @media ${device.tablet} {
    flex: 1;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-end;

  @media ${device.tablet} {
    flex: 2;
  }
`;

export const StyledLink = styled.a`
  color: #2470b8;
  font-size: 14px;
`;

export const DeliveryInformationText = styled.div`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${theme.colors.thinGray};
`;

export const Divider = styled.div`
  wıdth: 100%;
  height: 1px;
  margin: 7px 0px;
  background-color: ${theme.colors.lightGray2};
`;
