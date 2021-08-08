/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from '@reach/router';
import { Col, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Container } from '../container/Container';
import { StyledScreen, StyledContent, SideMenu, MenuItemWrapper, MenuItem, MenuItemText } from './Screen.styles';
import { setDeviceDesktop, setDeviceMobile } from '../../store/actions/deviceActions/deviceActions';
import { RootState } from '../../store/reducer';

export interface NavItem {
  path: string;
  text: string;
  isActive?: boolean;
}

export interface ScreenProps {
  sideMenuItems?: Array<NavItem>;
  LeftElement?: FC;
  TitleElement?: FC;
  RightElement?: FC;
  Modal?: ReactElement<any, any> | null;
  isModalOpen?: boolean;
}

export const Screen: React.FC<ScreenProps> = ({ children, sideMenuItems, LeftElement, TitleElement, RightElement, Modal, isModalOpen }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);
  const reportWindowSize = () => {
    if(window.innerWidth > 1023){
      dispatch(setDeviceDesktop());
    } else {
      dispatch(setDeviceMobile());
    }
  }

  useEffect(() => {
    if(window.innerWidth > 1023){
      dispatch(setDeviceDesktop());
    } else {
      dispatch(setDeviceMobile());
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', reportWindowSize);

    return () => {
      window.removeEventListener('resize', reportWindowSize);
    };
  }, [reportWindowSize]);

  return (
    <>
      {Modal}
      <StyledScreen isModalOpen={!!Modal}>
        <Header LeftElement={LeftElement} TitleElement={TitleElement} RightElement={RightElement} navigate={navigation} />
        {/* adding fake height to solve fixed position overlap */}
        {!isSmallScreen ? <div style={{ height: '120px', backgroundColor: '#f6f7f8' }} /> : <div style={{ height: '80px' }} />}
        <StyledContent>
          {sideMenuItems ? (
            <Container>
              <Row>
                <Col xs={0} lg={2} style={{ position: 'relative' }}>
                  <SideMenu>
                    <MenuItemWrapper>
                      {sideMenuItems?.map((sideMenuItem) => (
                        <MenuItem isActive={sideMenuItem.isActive} key={sideMenuItem.path}>
                          <MenuItemText href={sideMenuItem.path}>{sideMenuItem.text}</MenuItemText>
                        </MenuItem>
                      ))}
                    </MenuItemWrapper>
                  </SideMenu>
                </Col>
                <Col xs={12} lg={10}>
                  {children}
                </Col>
              </Row>
            </Container>
          )  : (
            children
          )}
        </StyledContent>
        {isModalOpen && isSmallScreen ? null : <Footer />}
      </StyledScreen>
    </>
  );
};
