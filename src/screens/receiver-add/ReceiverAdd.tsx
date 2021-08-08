/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { isLargeScreen } from '../../constants/device';

import { ButtonTypes, Container, Screen } from '../../components';
import { Wrapper, StyledCard, Left, Body, Right, RecipientImage, RecipientName, RecipientType, StyledButton, StyledRemoveButton, StyledAddButton } from './ReceiverAdd.styles';

import Recipient_add from '../../assets/images/recipient_add.png';
import Remove from '../../assets/icons/remove.svg';
import Edit from '../../assets/icons/edit.svg';

const receiverAddCardComponent = () => (
  <Row center="xs" start="lg">
    <Col sm={12}>
      <Wrapper>
        <StyledCard>
          <Left>
            <RecipientImage src={Recipient_add} />
          </Left>
          <Body>
            <RecipientName>Aykut Gürsoy</RecipientName>
            <RecipientType>Güvenilir Alıcı</RecipientType>
          </Body>
          <Right>
            {isLargeScreen() ? (
              <>
                <StyledButton buttonType={ButtonTypes.secondary} label="Düzenle" />
                <StyledRemoveButton buttonType={ButtonTypes.secondary} label="Sil" />
              </>
            ) : (
              <>
                <RecipientImage src={Edit} />
                <RecipientImage src={Remove} />
              </>
            )}
          </Right>
        </StyledCard>
        <StyledCard>
          <Left>
            <RecipientImage src={Recipient_add} />
          </Left>
          <Body>
            <RecipientName>Aykut Gürsoy</RecipientName>
            <RecipientType>Güvenilir Alıcı</RecipientType>
          </Body>
          <Right>
            {isLargeScreen() ? (
              <>
                <StyledButton buttonType={ButtonTypes.secondary} label="Düzenle" />
                <StyledRemoveButton buttonType={ButtonTypes.secondary} label="Sil" />
              </>
            ) : (
              <>
                <RecipientImage src={Edit} />
                <RecipientImage src={Remove} />
              </>
            )}
          </Right>
        </StyledCard>
        <StyledAddButton buttonType={ButtonTypes.primary} label="Alıcı Ekle" />
      </Wrapper>
    </Col>
  </Row>
);

export const ReceiverAdd: React.FC = () => <Screen>{isLargeScreen() ? <Container>{receiverAddCardComponent()}</Container> : receiverAddCardComponent()}</Screen>;
