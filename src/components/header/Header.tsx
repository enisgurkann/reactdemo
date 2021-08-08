/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import { NavigateFn } from '@reach/router';
import { Col } from 'react-flexbox-grid';
import { useSelector } from 'react-redux';
import { ButtonWidth } from '../button/Button.types';
import {
  Hamburger,
  HamburgerLine,
  MenuItem,
  MenuItemWrapper,
  MenuLink,
  LogoLink,
  MenuWrapper,
  Profile,
  ProfileWrapper,
  StyledButton,
  StyledHeader,
  StyledImage,
  ProfileText,
  ProfileIconWrapper,
} from './Header.styles';
import AykargoLogo from '../../assets/images/aykargo_logo.png';
import { ReactComponent as ProfileIcon } from '../../assets/icons/user.svg';
import { RootState } from '../../store/reducer';
import MobileMenu from '../mobile-menu/MobileMenu';

export interface HeaderProps {
  isLoggedIn?: boolean;
  navigate?: NavigateFn;
  LeftElement?: FC;
  TitleElement?: FC;
  RightElement?: FC;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, navigate, LeftElement, TitleElement, RightElement }) => {
  const customerName = useSelector((state: RootState) => state.customer.info.firstName);
  const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  const handleNavigateAuth = () => {
    navigate && navigate('/auth');
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const callProfile = () => {
    navigate && navigate('/profile/personal-info');
  };

  const renderDefaultRightContent = () =>
    customerName ? (
      <>
        <ProfileText onClick={callProfile} >{`Merhaba, ${customerName}`}</ProfileText>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={callProfile} >
            <Profile label=""/>
            <ProfileIconWrapper>
              <ProfileIcon fill={isLargeScreen ? 'white' : '#292929'} />
            </ProfileIconWrapper>
          </div>
        { isLargeScreen && <StyledButton buttonWidth={ButtonWidth.XSMALL} label="Çıkış Yap" onClick={handleLogout} />}
        
      </>
    ) : (
      <StyledButton buttonWidth={ButtonWidth.XSMALL} label="Giriş Yap" onClick={handleNavigateAuth} />
    );

  const toggleMobileMenu = (): void => {
    setIsMobileMenu((val) => !val);
  };
  return (
    <StyledHeader>
      <MobileMenu visible={isMobileMenu} toggleMenu={toggleMobileMenu} />
      <Hamburger onClick={toggleMobileMenu}>
        {LeftElement ? (
          <LeftElement />
        ) : (
          <>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </>
        )}
      </Hamburger>
      {TitleElement || (
        <LogoLink href={customerName ? "/orders" : '/'}>
          <StyledImage src={AykargoLogo} alt="logo" />
        </LogoLink>
      )}
      <MenuWrapper>
        <MenuItemWrapper>
          <MenuItem>
            <MenuLink href="https://www.aykargo.com.tr/hakkimizda">Hakkımızda</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://www.aykargo.com.tr/neden-aykargo">Neden Aykargo?</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://www.aykargo.com.tr/hizmetlerimiz">Hizmetlerimiz</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://www.aykargo.com.tr/musterilerimiz">Müşterilerimiz</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://www.aykargo.com.tr/teslimat-noktalarimiz">Gel Al Noktaları</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://www.aykargo.com.tr/sikca-sorulan-sorular">Sıkça Sorulan Sorular</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="https://www.aykargo.com.tr/iletisim">İletişim</MenuLink>
          </MenuItem>
        </MenuItemWrapper>
      </MenuWrapper>

      {TitleElement && (
        <Col xs={8} lg={2}>
          <ProfileWrapper>
            <TitleElement />
          </ProfileWrapper>
        </Col>
      )}
      <ProfileWrapper>{RightElement ? <RightElement /> : renderDefaultRightContent()}</ProfileWrapper>
    </StyledHeader>
  );
};
