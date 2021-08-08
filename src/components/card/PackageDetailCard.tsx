import React from 'react';
import { useSelector } from 'react-redux';

import { StyledSmallCard } from './Card.styles';
import {
  ImageWrapper,
  PackageDetailCardWrapper,
  PackageDetailColumn,
  PackageDetailTitle,
  PackageDetailText,
  PackageDetailKey,
  PackageDetailValue,
  PackageCountColumn,
  Column,
  ColumnTitle,
  ColumnValue,
  PackageDetailContent,
  PackageDetailContentDetail,
  PackageDetailImg,
  PackageImg,
} from './PackageDetailCard.styles';
import PackageIconUrl from '../../assets/icons/package.svg';
import CopyIconUrl from '../../assets/icons/copy.svg';
import { RootState } from '../../store/reducer';

export interface PackageDetailCardProps {
  className?: string;
}

export const PackageDetailCard: React.FC<PackageDetailCardProps> = ({ className }) => {
  const order = useSelector((state: RootState) => state.shipment.tracking);
  return (
    <StyledSmallCard className={className}>
      <PackageDetailCardWrapper>
        <ImageWrapper>
          <PackageImg src={PackageIconUrl} alt="package icon" />
        </ImageWrapper>
        <PackageDetailContent>
          <PackageDetailColumn>
            <PackageDetailTitle>Paket Detay</PackageDetailTitle>
            <PackageDetailText>
              <PackageDetailKey>Sipariş No:</PackageDetailKey>
              <PackageDetailValue>{order.packages.length ? order.packages[0].orderNumber : ''}</PackageDetailValue>
              <PackageDetailImg src={CopyIconUrl} alt="copy icon" />
            </PackageDetailText>
            <PackageDetailText>
              <PackageDetailKey>Takip No:</PackageDetailKey>
              <PackageDetailValue>{order.packages.length ? order.packages[0].trackingNumber : ''}</PackageDetailValue>
              <PackageDetailImg src={CopyIconUrl} alt="copy icon" />
            </PackageDetailText>
          </PackageDetailColumn>
          <PackageDetailContentDetail>
            <PackageCountColumn>
              <ColumnTitle>Gönderi Adedi</ColumnTitle>
              <ColumnValue>{order.packages.length} Paket</ColumnValue>
            </PackageCountColumn>
            <Column>
              <ColumnTitle>Tarih</ColumnTitle>
              <ColumnValue>30 Mart 2021</ColumnValue>
            </Column>
          </PackageDetailContentDetail>
        </PackageDetailContent>
      </PackageDetailCardWrapper>
    </StyledSmallCard>
  );
};
