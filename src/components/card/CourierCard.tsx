/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
import React from 'react';
import { useSelector } from 'react-redux';

import {
  StyledSmallScreenContainer,
  DestinationCardWrapper,
  DestinationText,
  DestionationValue,
  DeliveryInformationText,
  Left,
  Right,
  StyledImg,
  StyledArrow,
  SummaryInformation,
  Divider,
} from './DestinationCard.styles';
import HomeIcon from '../../assets/icons/homeIcon.svg';
import ProfileIcon from '../../assets/icons/profileIcon.svg';
import ArrowUp from '../../assets/icons/arrowUp.svg';
import { RootState } from '../../store/reducer';
import ProfileImageUrl from '../../assets/images/profileImage.png';
import { CourierImage, CourierLeft, CourierName, Link, StyledCourierCard, StyledCourierHeader } from './CourierCard.styles';

export interface CourierCardProps {
  className?: string;
  linkClick(): void;
}

export const CourierCard: React.FC<CourierCardProps> = ({ className, linkClick }) => {
  const order = useSelector((state: RootState) => state.shipment.tracking);

  return (
    <StyledCourierCard className={className}>
      <DestinationCardWrapper>
        <StyledSmallScreenContainer>
          <StyledCourierHeader>
            <CourierLeft>
              <CourierImage src={ProfileImageUrl} alt="profile image"/>
              <div>
                <CourierName>{order.courier.name.split(' ')[0]}</CourierName>
                <DeliveryInformationText>{order.courier.message}</DeliveryInformationText>
              </div>
            </CourierLeft>
            <StyledArrow src={ArrowUp} alt="arrow up" />
          </StyledCourierHeader>
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
                <StyledImg src={ProfileIcon} alt="home icon" />
                <DeliveryInformationText>Teslim Alacak Kişi</DeliveryInformationText>
              </DestinationText>
            </Left>
            <Right>
              <DestionationValue>{order.customerName}</DestionationValue>
            </Right>
          </SummaryInformation>
        </StyledSmallScreenContainer>
      </DestinationCardWrapper>
      <Link onClick={linkClick} href="javascript:void(0)">
        Değiştir
      </Link>
    </StyledCourierCard>
  );
};
