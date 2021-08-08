import styled from 'styled-components';
import { device } from '../../constants/device';
import { Button } from '../button/Button';

export const StyledHeader = styled.header`
  height: 120px;
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 266px 1fr 366px;
  align-items: center;

 
  
  @media ${device.laptopM} {
  
    grid-template-columns: 240px 1fr 250px;
  }

  @media ${device.laptop} {
    height: 80px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    padding: 0 20px;
  }

  @media ${device.mobileL} {
    padding: 0 10px;
  }
`;

export const MenuWrapper = styled.ul`
  width: 100%;
  height: 100%;
  padding-left: 0;
  margin: 0;
  list-style: none;
  grid-column: 2/3;

  @media ${device.laptop} {
    display: none;
  }
`;
export const MenuItemWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  @media ${device.laptop} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  cursor: pointer;
  position: relative;

  &:last-of-type {
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &::after {
    position: absolute;
    content: '';
    height: 3px;
    display: table;
    bottom: 0;
    left: 0;
    width: 0;
    background-color: ${({ theme }) => theme.colors.darkCyan};
    transition: all 0.2s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover a {
    color: ${({ theme }) => theme.colors.darkCyan};
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100%;
  width: 100%;
  @media ${device.laptopL} {
    font-size: 13px;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/2;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  

  @media ${device.laptopL} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${device.mobileL} {
    width: 90%;
    left:35%;
  }
`;

export const StyledImage = styled.img`
  width: 70%;
  max-width: 169px;

  @media ${device.laptopL} {
    width: 150px;
  }
`;

export const ProfileWrapper = styled(MenuWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 3/4;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  


  @media ${device.laptop} {
    align-self: flex-end;
    justify-content: flex-end;
  }
`;

export const Profile = styled(Button)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  @media ${device.tablet} {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledButton = styled(Button)`
  height: 40px;
  width: 152px;
  @media ${device.laptopL} {
    font-size: 15px;
    height: 38px;
    width: 130px;
  }
  @media ${device.laptop} {
    font-size: 14px;
    height: 38px;
    width: 100px;
    font-weight: 500;
  }

  @media ${device.mobileL} {
    width: 90px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  position: relative;
  @media ${device.laptop} {
    grid-column: 1/2;

    display: inline;
    width: 70%;
    z-index:999;
  }
`;

export const HamburgerLine = styled.div`
  width: 24px;
  height: 2px;
  background-color: #292929;
  margin-bottom: 2px;

  &:last-child {
    margin: 0;
  }
`;

export const ProfileText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  margin-right: 8px;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`

export const ProfileIconWrapper = styled.div`
  width: 22px;
  height: 21px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);

  @media ${device.tablet} {
    transform: translate(-50%, -50%);
  }
`;