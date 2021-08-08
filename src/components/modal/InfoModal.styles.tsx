import Modal from "react-modal";
import styled from "styled-components";
import { device } from "../../constants/device";

export const ModalContent = styled(Modal)`
  padding: 58px 20px 22px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 500px;
  height: 440px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 30px 0 rgba(29, 96, 145, 0.1);
  border-radius: 10px;
  z-index: 9999;
  
  @media ${device.tablet} {
    width: 400px;
    height: 340px;
  }

  @media ${device.mobileL} {
    width: 95%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`

export const StyledImage = styled.img`
  width: 80px;
  height: 80px;
`

export const Body = styled.div`
  width: 280px;
  margin: 0 auto 36px;
`

export const InfoTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-weight: 500;
  margin-bottom: 23px;
`

export const Info = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  text-align: center;
  line-height: 1.7;
  margin: 0;
`