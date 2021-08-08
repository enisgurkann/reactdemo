import styled from 'styled-components';
import Modal from "react-modal";
import { device } from '../../constants/device';

export const ModalContent = styled(Modal)`
  padding: 30px 16px 30px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 400px;
  height: 340px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 30px 0 rgba(29, 96, 145, 0.1);
  border-radius: 10px;
  z-index: 9999;

  @media ${device.tablet} {
    width: 95%;
    margin: auto;    
  }
`;

export const ModalText = styled.p`
  font-size: 14px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
`