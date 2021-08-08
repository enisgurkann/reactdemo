import React from 'react';
import { useSelector } from 'react-redux';
import { DeliveryCardWrapper, DeliveryKey, DeliveryText, DeliveryValue, Left, ProfileDesc, ProfileImage, ProfileTitle, Right, StyledDeliveryCard, StyledImage } from './DeliveryCard.styles';

import Amazon from '../../assets/images/amazon.png';
import ProfileImageUrl from '../../assets/images/profileImage.png';
import { RootState } from '../../store/reducer';

export interface DeliveryCardProps {
  className?: string;
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({ className }) => {
  const order = useSelector((state: RootState) => state.shipment.tracking);
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);

  return (
    <StyledDeliveryCard className={className}>
      <DeliveryCardWrapper>
        <Left>
          <div>
            <DeliveryText>
              <DeliveryKey>Sipariş No: </DeliveryKey>
              <DeliveryValue>{order.orderNumber}</DeliveryValue>
            </DeliveryText>
            <DeliveryText>
              <DeliveryKey>Takip No: </DeliveryKey>
              <DeliveryValue>{order.trackingNumber}</DeliveryValue>
            </DeliveryText>
          </div>
        </Left>
        {isSmallScreen ? (
          <StyledImage src={Amazon} alt="shop icon" />
        )
         : (
          <Right>
            <ProfileImage src={ProfileImageUrl} />
            <div>
              <ProfileTitle>{order.courier.name.split(' ')[0]}</ProfileTitle>
              <ProfileDesc>{order.courier.message}</ProfileDesc>
            </div>
          </Right>
        )}
      </DeliveryCardWrapper>
    </StyledDeliveryCard>
  );
};
