import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { useSelector } from 'react-redux';
import { Screen, Container } from '../../components';
import { NavItem } from '../../components/screen/Screen';
import { Recipient } from '../../components/recipient/Recipient';
import { Wrapper, ImageContainer } from './DeliveryPerson.styles';

import Alternative from '../../assets/images/alternative_receiver.png';
import Reliable from '../../assets/images/reliable_receiver.png';
import { RootState } from '../../store/reducer';

export interface DeliveryPersonProps { }

const SIDE_MENU_ITEMS: Array<NavItem> = [
    { path: 'personal-info', text: 'Kişisel Bilgiler' },
    { path: 'adress', text: 'Adreslerim' },
    { path: 'delivery-adress', text: 'Kargon Burada Noktalarım' },
    { path: 'delivery-person', text: 'Kim Alabilir', isActive: true },
];

const reliableImage = () => (
    <ImageContainer>
        <img src={Reliable} style={{ width: 77, height: 65 }} alt="reliable" />
    </ImageContainer>
);
const alternativeImage = () => (
    <ImageContainer>
        <img src={Alternative} style={{ width: 83, height: 41.5 }} alt="alternative" />
    </ImageContainer>
);

const receiverCardComponent = () => (
      <Row>
          <Col sm={12}>
              <Wrapper>
                  <Recipient
                      ImageComponent={reliableImage}
                      title="Güvenilir Alıcı"
                      description="Senin adına paketini teslim edebileceğimiz güvendiğin kişiler. Kargon Burada Noktalarından paketlerini sen ve sadece Güvenilir Alıcıların teslim alabilir."
                      buttonLabel="Güvenilir Alıcı Ekle"
                      onClick={() => null}
                  />
                  <Recipient
                      ImageComponent={alternativeImage}
                      title="Alternatif Alıcı"
                      description="Sen olmadığında paketini teslim edebileceğimiz aynı binada bulunan kişiler. Örneğin Apartman görevlisi, 4. kattaki Mehmet Bey, Girişteki Dükkan"
                      buttonLabel="Alternatif Alıcı Ekle"
                      onClick={() => null}
                  />
              </Wrapper>
          </Col>
      </Row>
);

export const DeliveryPersonForm: React.FC<DeliveryPersonProps> = () => {
  const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);
  
  return (
    <>{isLargeScreen ? <Container>{receiverCardComponent()}</Container> : receiverCardComponent()}</>
  );
}

export const DeliveryPerson = () => (
  <Screen sideMenuItems={SIDE_MENU_ITEMS}><DeliveryPersonForm/></Screen>
)
