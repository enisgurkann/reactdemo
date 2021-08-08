import React from 'react';

import { useSelector } from 'react-redux';
import { PackageStatus } from '../packageStatus/PackageStatus';
import { StatusCardWrapper, WarningContainer, InfoImage, WarningTitle, WarningDesc, StyledStatusCard } from './StatusCard.styles';
import { RootState } from '../../store/reducer';
import InfoImageIcon from '../../assets/icons/info_orange.png';

export interface StatusCardProps {
  className?: string;
  activeIndex: 0 | 1 | -1 | 2 | 3;
}

const STATUS_LAST_LENGTH = 3;

export const StatusCard: React.FC<StatusCardProps> = ({ className, activeIndex }) => {
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);
  const statuses = useSelector((state: any) => state.shipment.tracking.statuses);
  const isDelivered = statuses[STATUS_LAST_LENGTH] ? statuses[STATUS_LAST_LENGTH].active : false;
  
  return(
    <>
      {isSmallScreen && isDelivered && (
        <WarningContainer>
          <InfoImage src={InfoImageIcon} />
          <div>
            <WarningTitle>Paket teslimatın henüz puanlanmamış</WarningTitle>
            <WarningDesc>Puan vermek için tıkla </WarningDesc>
          </div>
        </WarningContainer>
      )}
      <StyledStatusCard className={className}>
        <StatusCardWrapper>
          <PackageStatus activeIndex={activeIndex} />
        </StatusCardWrapper>
        {!isSmallScreen && isDelivered && (
        <WarningContainer>
          <InfoImage src={InfoImageIcon}  />
          <div style={{ display:"flex", alignItems:"center" }}>
            <WarningTitle>Paket teslimatın henüz puanlanmamış</WarningTitle>
            <WarningDesc>Puan vermek için tıkla </WarningDesc>
          </div>
        </WarningContainer>
      )}
      </StyledStatusCard>
    </>
  )};
