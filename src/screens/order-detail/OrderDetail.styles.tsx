import styled from 'styled-components';
import Modal from 'react-modal';

import { device } from '../../constants/device';

export const OrderDetailWrapper = styled.div`
  padding: 20px 0;

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const CardWrapper = styled.div`
  margin: 7px 0;

  @media ${device.tablet} {
    margin: 0px 0 16px 0;
  }
`;

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #292929;

  @media ${device.tablet} {
    margin: 3px 0 10px 0;
  }
`;

export const AdressModal = styled(Modal)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 750px;
  height: 560px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 30px 0 rgba(29, 96, 145, 0.1);
  border-radius: 10px;
`;

export const AdressModalHeader = styled.header`
  width: 100%;
  padding: 9px 25px;
  display: flex;
  justify-content: space-between;
`;

export const AdressModalTitle = styled.h3`
  flex: 1;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryNavy};
  text-align: center;
  line-height: 2.63;
`;

export const CloseCircleWrapper = styled.div`
  flex: 1;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const CloseCircle = styled.a`
  width: 25px;
  height: 25px;
  border: 2px solid ${({ theme }) => theme.colors.light2};
  border-radius: 50%;
  position: relative;
`;

export const CloseCircleLine = styled.div`
  width: 2px;
  background-color: ${({ theme }) => theme.colors.light2};
  height: 17px;
  position: absolute;
`;

export const CloseCircleLineLeft = styled(CloseCircleLine)`
  top: 6px;
  left: 4px;
  transform-origin: top left;
  transform: rotate(315deg);
`;

export const CloseCircleLineRight = styled(CloseCircleLine)`
  top: 6px;
  right: 4px;
  transform-origin: top right;
  transform: rotate(45deg);
`;

export const AdressModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled.a`
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryBlue};
  margin-top: 10px;
`;
