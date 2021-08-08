/* eslint-disable */
import React from 'react';

import { Card } from './Card';
import { StyledAdressCard, Left, Body, Right, CardImage, FirstLabel, SecondLabel, StyledButton, StyledRemoveButton, StyledIcon } from './AdressCard.styles';
import { ButtonTypes } from '../button/Button.types';

import BusinessIcon from '../../assets/icons/adress/BusinessIcon.svg';
import Remove from '../../assets/icons/remove.svg';
import Edit from '../../assets/icons/edit.svg';
import { NumericLiteral } from 'typescript';
import { RootState } from '../../store/reducer';
import { useSelector } from 'react-redux';

export enum AdressType {
    'EV' = 1,
    'IS' = 2,
}

export interface AdressCardProps {
    adressType: number;
    name?: string;
    adress?: string;
    lastItem?: boolean;
    id?: number;
    onClickUpdate(): void;
    onClickDelete(): void;
}

export const AdressCard: React.FC<AdressCardProps> = ({ adressType, name, adress, lastItem, id, onClickUpdate, onClickDelete }) => {
    const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);
    const getIcon = () => {
      // will changed after service and icon
      switch (adressType) {
        case AdressType.EV: {
          return BusinessIcon;
        }
        case AdressType.IS: {
          return BusinessIcon;
        }
        default: {
          return BusinessIcon;
        }
      }
    };

    const handleUpdate = () => {

    }

    const renderRightElement = () =>
      isLargeScreen ? (
        <>
          <StyledButton buttonType={ButtonTypes.secondary} label="Düzenle" onClick={onClickUpdate} />
          <StyledRemoveButton buttonType={ButtonTypes.secondary} label="Sil" onClick={onClickDelete} />
        </>
      ) : (
        <>
          <StyledIcon src={Edit} onClick={onClickUpdate} />
          <StyledIcon src={Remove} onClick={onClickDelete} />
        </>
      );

    return (
        <Card>
            <StyledAdressCard>
                <Left lastItem={lastItem}>
                    <CardImage src={getIcon()} />
                </Left>
                <Body lastItem={lastItem}>
                    <FirstLabel>{name}</FirstLabel>
                    <SecondLabel>{adress}</SecondLabel>
                </Body>
                <Right lastItem={lastItem}>{renderRightElement()}</Right>
            </StyledAdressCard>
        </Card>
    );
};
