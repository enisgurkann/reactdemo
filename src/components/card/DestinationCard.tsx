/* eslint-disable no-script-url */
import React from 'react';
import { useSelector } from 'react-redux';

import {
  StyledSmallScreenContainer,
  DestinationCardWrapper,
  DestinationText,
  DestionationTitle,
  DestionationValue,
  DeliveryInformationText,
  Left,
  Right,
  StyledImg,
  StyledArrow,
  StyledLink,
  SummaryInformation,
  SummaryText,
  Divider,
  StyledDestinationCard,
} from './DestinationCard.styles';
import HomeIcon from '../../assets/icons/homeIcon.svg';
import ProfileIcon from '../../assets/icons/profileIcon.svg';
import ArrowUp from '../../assets/icons/arrowUp.svg';
import { RootState } from '../../store/reducer';

export interface DestinationCardProps {
  className?: string;
  linkClick(): void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ className, linkClick }) => {
  const order = useSelector((state: RootState) => state.shipment.tracking);
  const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);

  const renderSmallScreen = () => (
    <StyledSmallScreenContainer>
      <SummaryInformation>
        <SummaryText>Paketin 29 Mart, 15:55’de teslim edildi</SummaryText>
        <StyledArrow src={ArrowUp} alt="arrow up" />
      </SummaryInformation>
      <SummaryInformation info>
        <Left>
          <DestinationText>
            <StyledImg src={HomeIcon} alt="home icon" />
            <DeliveryInformationText>Teslimat Adresi</DeliveryInformationText>
          </DestinationText>
        </Left>
        <Right>
          <DestionationValue>{`${order.address} ${order.neighborhoodName} ${order.districtName ? `/ ${order.districtName}` : ''} ${
            order.cityName ? `/ ${order.cityName}` : ''
          }`}</DestionationValue>
        </Right>
      </SummaryInformation>
      <Divider />
      <SummaryInformation info>
        <Left>
          <DestinationText>
            <StyledImg src={HomeIcon} alt="home icon" />
            <DeliveryInformationText>Teslim Alacak Kişi</DeliveryInformationText>
          </DestinationText>
        </Left>
        <Right>
          <DestionationValue>{order.customerName}</DestionationValue>
        </Right>
      </SummaryInformation>
    </StyledSmallScreenContainer>
  );

  const renderLargeScreen = () => (
    <>
      <Left>
        <DestinationText>
          <StyledImg src={HomeIcon} alt="home icon" />
          <DestionationTitle>Teslimat Adresi</DestionationTitle>
          <DestionationValue>{`${order.address} ${order.neighborhoodName} ${order.districtName ? `/ ${order.districtName}` : ''} ${
            order.cityName ? `/ ${order.cityName}` : ''
          }`}</DestionationValue>
        </DestinationText>
        <DestinationText>
          <StyledImg src={ProfileIcon} alt="profile icon" />
          <DestionationTitle>Teslim Alacak Kişi</DestionationTitle>
          <DestionationValue>{order.customerName}</DestionationValue>
        </DestinationText>
      </Left>
      <Right>
        <StyledLink onClick={linkClick} href="javascript:void(0)">
          Değiştir
        </StyledLink>
      </Right>
    </>
  );

  return (
    <StyledDestinationCard className={className}>
      <DestinationCardWrapper>{isLargeScreen ? renderLargeScreen() : renderSmallScreen()}</DestinationCardWrapper>
    </StyledDestinationCard>
  );
};
