import React, { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close-circle.svg';
import { device } from '../../../constants/device';

export const ModalMapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  left:0;
  z-index:999;

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
`;

export const ModalMapCenterWrapper = styled.div`
  width: 850px;
  height: 600px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    border-radius: 0;
    overflow: visible;
  }
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 0 10px 0 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 0;
    border-radius: 0px;
    overflow: visible;
    box-shadow: none;

  }
`;

export const ModalHeader = styled.div`
  width: 57%;
  margin-left: auto;
  display: flex;
  align-items: center;
  padding: 9px 25px 9px 0;

  @media ${device.mobileL} {
    width: 65%;
  }
`;

export const ModalHeaderLabel = styled.span`
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.63;
  color: ${({ theme }) => theme.colors.primaryNavy};
`;

export const ModalHeaderCloseButton = styled.span`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;

  @media ${device.tablet} {
    overflow: visible;
  }
`;

export interface ModalProps {
  isModalOpen: boolean;
  buttonLabel?: string;
  headerLabel?: string;
  // Modal Events
  handleClose(): void;
  onSubmit?: () => void;
}

const MapModal: FC<ModalProps> = ({ children, isModalOpen, handleClose, buttonLabel, headerLabel, onSubmit }) => (
  <>
    {isModalOpen ? (
      <ModalMapWrapper>
        <ModalMapCenterWrapper>
          <ModalContentWrapper>
            <ModalHeader>
              <ModalHeaderLabel>{headerLabel}</ModalHeaderLabel>
              <ModalHeaderCloseButton onClick={handleClose}>
                <CloseIcon />
              </ModalHeaderCloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalContentWrapper>
        </ModalMapCenterWrapper>
      </ModalMapWrapper>
    ) : null}
  </>
);

export default MapModal;
