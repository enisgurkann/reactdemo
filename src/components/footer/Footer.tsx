import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { FooterBottom, FooterNav, FooterNavAnchor, StyledFooterWrapper, FooterNavItem, FooterTop, ImageWrapper, StyledFooter, StyledImage, FooterSupportPhoneNumber, FooterSupportLabe, FooterSupportBox } from './Footer.styles';
import KocLogo from '../../assets/images/koc.png';
import { Container } from '../container/Container';

export const Footer: React.FC = () => (
  <StyledFooter>
    <FooterTop>
      <Container>
        <Row>
          <Col xs={12}>
            <StyledFooterWrapper>
              <FooterNav>
                <FooterNavItem>
                  <FooterNavAnchor href="https://www.aykargo.com.tr/hakkimizda">Hakkımızda</FooterNavAnchor>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavAnchor href="https://www.aykargo.com.tr/neden-aykargo">Neden Aykargo?</FooterNavAnchor>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavAnchor href="https://www.aykargo.com.tr/hizmetlerimiz">Hizmetlerimiz</FooterNavAnchor>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavAnchor href="https://www.aykargo.com.tr/musterilerimiz">Müşterilerimiz</FooterNavAnchor>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavAnchor href="https://www.aykargo.com.tr/teslimat-noktalarimiz">Gel Al Noktaları</FooterNavAnchor>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavAnchor href="https://www.aykargo.com.tr/sikca-sorulan-sorular">Sıkça Sorulan Sorular</FooterNavAnchor>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavAnchor href="https://www.aykargo.com.tr/iletisim">İletişim</FooterNavAnchor>
                </FooterNavItem>
              </FooterNav>
              <FooterSupportBox>
                <FooterSupportLabe>Müşteri Hizmetleri
                </FooterSupportLabe>
                <FooterSupportPhoneNumber> 444 75 48
                </FooterSupportPhoneNumber>
              </FooterSupportBox>
            </StyledFooterWrapper>
          </Col>
        </Row>
      </Container>  
    </FooterTop>
    <FooterBottom>
      <Container>
        <Row>
          <Col xs={12}>
            <StyledFooterWrapper>
              <ImageWrapper>
                <StyledImage src={KocLogo} alt="koç logo" />
              </ImageWrapper>
              <div>
                <FooterNavAnchor href="/">Site Haritası </FooterNavAnchor>
                <FooterNavAnchor>| </FooterNavAnchor>
                <FooterNavAnchor href="https://www.aykargo.com.tr/kvk-politikasi">Kişisel Verilerin Korunması</FooterNavAnchor>
                <FooterNavAnchor>| </FooterNavAnchor>
                <FooterNavAnchor href="https://www.aykargo.com.tr/gizlilik-politikasi">Gizlilik Politikası</FooterNavAnchor>
              </div>
            </StyledFooterWrapper>
          </Col>
        </Row>
      </Container>  
    </FooterBottom>
  </StyledFooter>
);
