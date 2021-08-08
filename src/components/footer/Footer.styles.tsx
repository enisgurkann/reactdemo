import styled from 'styled-components';
import { device } from '../../constants/device';

export const StyledFooter = styled.footer`
  padding: 30px 0 0;
  background-color: ${({ theme }) => theme.colors.primaryNavy};
  position: relative;

  @media ${device.laptop} {
    padding: 80px 0 0;
  }
`;

export const StyledFooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${device.laptop} {
    padding: 0 40px;
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const FooterTop = styled.div`
  @media ${device.laptop} {
    margin-bottom: 30px;
  }
`;

export const FooterSupportBox = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
`;
export const FooterSupportPhoneNumber = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 600;
`;
export const FooterSupportLabe = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;

export const FooterNav = styled.ul`
  padding: 0;
  margin: 0;
  text-align: left;
  flex: 1;
`;

export const FooterNavItem = styled.li`
  list-style: none;
  margin: 11px 0;
`;

export const FooterNavAnchor = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.laptop} {
    font-size: 12px;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;

  @media ${device.laptop} {
    padding: 0 0 27px;
    flex-direction: column;
  }

  @media ${device.laptop} {
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 16px;
`;

export const StyledImage = styled.img`
  @media ${device.tablet} {
    width: 68px;
  }
`;
