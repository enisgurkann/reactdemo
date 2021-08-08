import styled from 'styled-components';
import { Section } from '../../components/section/Section';
import SliderImage from '../../assets/images/slider_image.jpg';
import { device } from '../../constants/device';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.lightGray};
  overflow: hidden;
  @media ${device.tablet} {
    height: 100vh;
  }
  @media ${device.mobileL} {
    height: auto;
    display: block;
  }
`;

export const Left = styled.div`
  flex: 1;
  padding-top: 99px;
  display: flex;
  justify-content: center;
  margin: 0 30px;

  @media ${device.laptopL} {
    padding-top: 50px;
  }

  @media (max-height: 925px){
    padding-top: 50px;
  } 

  @media ${device.laptopM} {
    padding-top: 30px;
  }
  @media ${device.tablet} {
    padding-top: 100px;
  }
  @media ${device.mobileL} {
    padding: 20px 15px 0;
    flex: 0 1 auto;
    width: 100%;
    margin: 0;
    display: block;
  }
`;

export const LeftContent = styled.div`
  width: 448px;
  text-align: left;
  @media ${device.laptop} {
    width: 400px;
  }
  @media ${device.tablet} {
    width: 550px;
  }
  @media ${device.mobileL} {
    width: auto;
  }
`;

export const Right = styled.div`
  width: 944px;
  @media ${device.laptopL} {
    width: 900px;
  }
  @media ${device.laptopM} {
    width: 750px;
  }
  @media ${device.laptop} {
    width: 600px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 51px;

  @media (max-height: 925px){
    margin-bottom: 30px;
  }
  @media ${device.laptopL} {
    margin-bottom: 30px;
  }
  @media ${device.laptopM} {
    margin-bottom: 20px;
  }
`;

export const AuthCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 700px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(29, 96, 145, 0.1);
  border-radius: 10px;
  @media ${device.laptopL} {
    height: 600px;
  }
  @media ${device.mobileL} {
    background-color: transparent;
    box-shadow: none;
  }
`;

export const AuthSection = styled(Section)`
  padding: 90px 58px 0 47px;
  @media ${device.laptopL} {
    padding: 75px 42px 0;
  }
  @media ${device.laptopM} {
    padding: 45px 22px 0;
  }
  @media ${device.tablet} {
    padding: 90px 58px 0 47px;
  }
  @media ${device.mobileL} {
    padding: 0;
  }
`;

export const RightArea = styled.div`
  height: 100vh;
  padding: 0 140px;
  background-image: url(${SliderImage});
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptopL} {
    padding: 0px 80px;
  }
  @media ${device.laptopM} {
    padding: 0px 50px;
  }
  @media ${device.laptop} {
    padding: 0px 40px;
  }
`

export const RightAreaTitle = styled.h3`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  line-height: 56px;
  @media ${device.laptopM} {
    font-size: 34px;
    line-height: 50px;
  }
  @media ${device.laptop} {
    font-size: 32px;
    line-height: 46px;
  }
`