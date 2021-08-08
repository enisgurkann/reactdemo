/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import { Container, Screen, DeliveryCard, DestinationCard, Button, ButtonWidth } from '../../components';
import { PackageDetailCard, StatusCard } from '../../components/card';
import {
  AdressModal,
  AdressModalContent,
  AdressModalHeader,
  AdressModalTitle,
  ButtonWrapper,
  CardTitle,
  CardWrapper,
  CloseCircle,
  CloseCircleLineLeft,
  CloseCircleLineRight,
  CloseCircleWrapper,
  OrderDetailWrapper,
  StyledLink,
} from './OrderDetail.styles';

import Adresses from '../../assets/images/adress.png';

import { tracking } from '../../store/actions/shipmentActions/shipmentSearchActions';
import { RootState } from '../../store/reducer';
import { CourierCard } from '../../components/card/CourierCard';

const STATUS_LAST_LENGTH = 3;

export interface OrderDetailProps {}

export const OrderDetail: React.FC<OrderDetailProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const trackingNumber = params.orderId;
  const otpLoginRequired = useSelector((state: RootState) => state.shipment.search.otpLoginRequired);
  const customerId = useSelector((state: RootState) => state.customer.info.id);
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);
  const statuses = useSelector((state: any) => state.shipment.tracking.statuses);
  const isDelivered = statuses[STATUS_LAST_LENGTH] ? statuses[STATUS_LAST_LENGTH].active : false;

  useEffect(() => {
    const request = {
      trackingNumber,
      customerFound: !!customerId,
      otpLoginRequired,
    };
    dispatch(tracking(request));
  }, [customerId, dispatch, otpLoginRequired, trackingNumber]);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Screen>
      <OrderDetailWrapper>
        <Container>
          <Row center="sm">
            <Col lg={10}>
              <CardWrapper>
                <DeliveryCard />
              </CardWrapper>
            </Col>
          </Row>
          <Row center="sm">
            <Col lg={10}>
              <CardWrapper>
                {isSmallScreen ? 
                    isDelivered ? <DestinationCard linkClick={handleOpenModal} /> : <CourierCard linkClick={handleOpenModal}/>
                  :
                (
                    <DestinationCard linkClick={handleOpenModal} />
                )}
              </CardWrapper>
            </Col>
          </Row>
          <Row center="sm">
            <Col lg={10}>
              <CardWrapper>
                <StatusCard activeIndex={2} />
              </CardWrapper>
            </Col>
          </Row>
          <Row center="sm">
            <Col lg={10}>
              <CardWrapper>
                {isSmallScreen && <CardTitle>Paket Detay</CardTitle> }
                <PackageDetailCard />
              </CardWrapper>
            </Col>
          </Row>
        </Container>
      </OrderDetailWrapper>
      {/* <MapsModal isModalOpen={isModalOpen} handleClose={handleCloseModal} /> */}
      <AdressModal onRequestClose={handleCloseModal} isOpen={isModalOpen}>
        <AdressModalHeader>
          <div style={{ flex: 1 }} />
          <AdressModalTitle>Teslim alacak kişi</AdressModalTitle>
          <CloseCircleWrapper>
            <CloseCircle onClick={handleCloseModal} href="javascript:void(0)">
              <CloseCircleLineLeft />
              <CloseCircleLineRight />
            </CloseCircle>
          </CloseCircleWrapper>
        </AdressModalHeader>
        <AdressModalContent>
          <img src={Adresses} />
          <ButtonWrapper>
            <Button label="Değiştir" buttonWidth={ButtonWidth.LARGE} />
            <StyledLink>Yeni Alıcı Ekle</StyledLink>
          </ButtonWrapper>
        </AdressModalContent>
      </AdressModal>
    </Screen>
  );
};
