/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from '@reach/router';
import { Container, Header, Screen } from "../../components";
import { RootState } from '../../store/reducer';
import { AdressForm } from "./Adress";
import { DeliveryAdressForm } from "./DeliveryAdress";
import { DeliveryPersonForm } from "./DeliveryPerson";
import { PersonalInfoForm  } from "./PersonalInfo";
import { ArrowImg, EditWrapper, Item, ItemKey, ItemValue, ItemWrapper, Left, MyProfileWrapper, ProfileHeader, ProfileName, StyledSection, StyledTitle } from './MyProfile.styles';
import Edit from "../../assets/icons/profileEdit.svg";
import Phone from "../../assets/icons/profilePhone.svg";
import Identity from "../../assets/icons/profileIdentity.svg";
import ProfileAdress from "../../assets/icons/profileAdress.svg";
import Exit from "../../assets/icons/profileExit.svg";
import Profile from "../../assets/icons/profileProfile.svg";
import Store from "../../assets/icons/profileStore.svg";
import ArrowUp from '../../assets/icons/arrowUp.svg';
import Close from "../../assets/icons/profileClose.svg";

export const MyProfile = () => {
  const customer = useSelector((state: RootState) => state.customer.info);
  const [modalTitle, setModalTitle] = useState('');
  const navigation = useNavigate();

  const LeftElement: FC = () => (
    <div onClick={() => setModalTitle('')}>
      <img src={Close} alt="close icon"/>
    </div>
  )

  const TitleElement: FC = () => (
    <StyledTitle>{modalTitle}</StyledTitle>
  )

  const RightElement: FC = () => (
    <></>
  )

  const Modal = () => {
    switch (modalTitle) {
      case 'Adreslerim': {
        return (
        <>
          <Header LeftElement={LeftElement} TitleElement={TitleElement} navigate={navigation} RightElement={RightElement}/>
          <div style={{ height: 80 }} />
          <Container>
            <AdressForm/>
          </Container>
        </>
      );}
      case 'Kargon Burada Noktaları': {
        return (
          <>
            <Header LeftElement={LeftElement} TitleElement={TitleElement} navigate={navigation} RightElement={RightElement}/>
            <div style={{ height: 80 }} />
            <Container>
              <DeliveryAdressForm/>
            </Container>
          </>
        )}
      case 'Kim Alabilir?': {
        return (
          <>
            <Header LeftElement={LeftElement} TitleElement={TitleElement} navigate={navigation} RightElement={RightElement}/>
            <div style={{ height: 80 }} />
            <div style={{ backgroundColor: '#f6f7f8' }}>
              <Container>
                <DeliveryPersonForm/>
              </Container>
            </div>
          </>
        )}
      case 'Bilgilerimi Düzenle': {
        return (
          <>
            <Header LeftElement={LeftElement} TitleElement={TitleElement} navigate={navigation} RightElement={RightElement}/>
            <div style={{ height: 80 }} />
            <Container>
              <PersonalInfoForm/>
            </Container>
          </>
        )}
      default: {
        return undefined;
      }
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Screen Modal={Modal()}>
      <MyProfileWrapper>
        <ProfileHeader>
          <ProfileName>{customer.firstName}</ProfileName>
          <EditWrapper onClick={() => setModalTitle('Bilgilerimi Düzenle')}><img src={Edit} alt="edit icon"/></EditWrapper>
        </ProfileHeader>
        <StyledSection>
          <ItemWrapper>
            <Item>
              <Left>
                <img src={Phone} alt="phone icon"/>
                <ItemKey>Telefon Numaram</ItemKey>
              </Left>
              <ItemValue>{customer.phone}</ItemValue>
            </Item>
            <Item>
              <Left>
                <img src={Identity} alt="phone icon"/>
                <ItemKey>T.C. Kimlik Numaram</ItemKey>
              </Left>
              <ItemValue>{customer.tcIdentityNumber}</ItemValue>
            </Item>
          </ItemWrapper>
        </StyledSection>
        <StyledSection>
          <ItemWrapper>
            <Item onClick={() => setModalTitle('Adreslerim')}>
              <Left>
                <img src={ProfileAdress} alt="adress icon"/>
                <ItemKey>Adreslerim</ItemKey>
              </Left>
                <ArrowImg src={ArrowUp} alt="arrow icon"/>
            </Item>
            <Item onClick={() => setModalTitle('Kargon Burada Noktaları')}>
              <Left>
                <img src={Store} alt="store icon"/>
                <ItemKey>Kargon Burada Noktalarım</ItemKey>
              </Left>
                <ArrowImg src={ArrowUp} alt="arrow icon"/>
            </Item>
            <Item onClick={() => setModalTitle('Kim Alabilir?')}>
              <Left>
                <img src={Profile} alt="profile icon"/>
                <ItemKey>Kim Alabilir?</ItemKey>
              </Left>
                <ArrowImg src={ArrowUp} alt="arrow icon"/>
            </Item>
            <Item onClick={() => handleLogout()}>
              <Left>
                <img src={Exit} alt="exit icon"/>
                <ItemKey>Çıkış Yap</ItemKey>
              </Left>
            </Item>
          </ItemWrapper>
        </StyledSection>
      </MyProfileWrapper>
    </Screen>
)}