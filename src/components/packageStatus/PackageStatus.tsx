/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';

import {
    StatusCardTitle,
    NegativeTitle,
    StatusCardDescription,
    StatusCardMessages,
    StatusCardNote,
    InformationArea,
    MapContainer,
    StyledSmallMapContainer,
    CourierNoteContainer,
    CourierNoteBox,
} from '../card/StatusCard.styles';

import { Item, ItemDate, ItemTitle, ItemWrapper, PackageStatusCoulNotWrapper, PackageStatusWrapper, StatusWrapper } from './PackageStatus.styles';
import { ReactComponent as GarageIcon } from '../../assets/icons/garage.svg';
import { ReactComponent as TruckIcon } from '../../assets/icons/truck.svg';
import { ReactComponent as OkayIcon } from '../../assets/icons/tick.svg';
import ProfileImageUrl from '../../assets/images/profileImage.png';

import { RootState } from '../../store/reducer';
import { ProfileImage, ProfileTitle, ProfileDesc } from '../card/DeliveryCard.styles';

export interface PackageStatusProps {
    activeIndex: -1 | 0 | 1 | 2 | 3;
}

interface IImageProps {
    currentIndex: number;
}

const Image: React.FC<IImageProps> = ({ currentIndex }) => {
    switch (currentIndex) {
        case 0:
            return <TruckIcon />;
        case 1:
            return <GarageIcon />;
        case 2:
            return <GarageIcon />;
        case 3:
            return <OkayIcon />;
        default:
            return <TruckIcon />;
    }
};

const renderDeliverd = (statuses: any) => (
    <PackageStatusWrapper>
        <StatusCardTitle>Paketiniz Yolda</StatusCardTitle>
        <StatusWrapper>
            {statuses &&
                statuses.map((status: any, index: number) => (
                    <ItemWrapper key={status.message}>
                        <Item isActive={status.active}>
                            <Image currentIndex={index} />
                        </Item>
                        <div>
                            <ItemTitle>{status.message}</ItemTitle>
                            <ItemDate>{status.date}</ItemDate>
                        </div>
                    </ItemWrapper>
                ))}
        </StatusWrapper>
    </PackageStatusWrapper>
);

const renderCouldNotDeliverd = (statuses: any, isLargeScreen: boolean) => (
    <PackageStatusCoulNotWrapper>
        <NegativeTitle>Paketiniz Teslim Edilemedi.</NegativeTitle>
        <StatusCardDescription>Paketiniz yarın tekrar teslimata çıkacak.</StatusCardDescription>
        <StatusCardMessages>
            <StatusCardNote>23.04.2021 10:32 Tarihinde adrese geldik, ama sana ulasamadik.</StatusCardNote>
        </StatusCardMessages>
        <InformationArea>
            {isLargeScreen ? (
                <MapContainer>
                    <GoogleMapReact
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33,
                        }}
                        yesIWantToUseGoogleMapApiInternals
                        defaultZoom={11}
                    />
                </MapContainer>
            ) : (
                <StyledSmallMapContainer>
                    <GoogleMapReact
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33,
                        }}
                        yesIWantToUseGoogleMapApiInternals
                        defaultZoom={11}
                    />
                </StyledSmallMapContainer>
            )}

            <CourierNoteContainer>
                <CourierNoteBox>
                    <ProfileImage src={ProfileImageUrl} />
                    <div>
                        <ProfileTitle>Kapıyı 4 defa aralıklarla çaldım. Ancak yanıt alamayınca paketi teslim edemedim.</ProfileTitle>
                        <ProfileDesc>23.04.2021 10:34</ProfileDesc>
                    </div>
                </CourierNoteBox>
            </CourierNoteContainer>
        </InformationArea>
    </PackageStatusCoulNotWrapper>
);

export const PackageStatus: React.FC<PackageStatusProps> = ({ activeIndex }) => {
  const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);
  const statuses = useSelector((state: RootState) => state.shipment.tracking.statuses);

  const couldnotdelivered = useSelector((state: RootState) => state.shipment.tracking.couldNotDelivered);

  return couldnotdelivered ? renderCouldNotDeliverd(statuses, isLargeScreen) : renderDeliverd(statuses);
};
