import React, { FC, useRef } from 'react';

import { MenuWrapper, MenuBody, MenuCloseButton, MenuHeader, MenuItem, MenuList, MenuLink, MenuLogo } from './MobileMenuStyle';
import AykargoLogo from '../../assets/images/aykargo_logo.png';
import CloseIcon from '../../assets/icons/close.svg';
import { useOutsideClick } from '../../hooks';

interface MobileMenuProps {
  visible?: boolean;
  toggleMenu?: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ visible, toggleMenu }) => {
  const menuBodyRef = useRef(null);

  // when the user click outside the menu body then this will close the menu
  useOutsideClick(menuBodyRef, () => {
    if (visible) toggleMenu && toggleMenu();
  });

  return (
    <MenuWrapper visible={visible}>
      <MenuBody visible={visible} ref={menuBodyRef}>
        <MenuHeader>
          <a href="/">
            <MenuLogo src={AykargoLogo} alt="logo" />
          </a>

          <MenuCloseButton onClick={toggleMenu}>
            <img src={CloseIcon} alt="close nav" />
          </MenuCloseButton>
        </MenuHeader>

        <MenuList>
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
        </MenuList>
      </MenuBody>
    </MenuWrapper>
  );
};

export default MobileMenu;
