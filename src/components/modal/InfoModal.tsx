import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Body, IconWrapper, Info, InfoTitle, ModalContent, StyledImage } from "./InfoModal.styles";
import ErrorImage from "../../assets/images/infoModalError.png";
import SuccessImage from "../../assets/images/infoModalSuccess.png";
import WarningImage from "../../assets/images/infoModalWarning.png";
import { Button } from '../button/Button';
import { ButtonWidth } from '../button/Button.types';
import { removeModal } from '../../store/actions/generalActions/modalActions';

interface InfoModalProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  isModalOpen: boolean;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, message, isModalOpen }) => {
  const dispatch = useDispatch();
  let image = SuccessImage;
  const handleCloseModal = () => dispatch(removeModal());
  let title= "İşlem Başarılı";

  switch(type) {
    case "success":
      image = SuccessImage;
      title= "İşlem Başarılı";
      break;
    case "error":
      image = ErrorImage;
      title="İşlem Başarısız";
      break;
    case "warning":
      image = WarningImage
      title="Uyarı";
      break;
    default:
      image = SuccessImage
      break;
  }

  useEffect(
    () => {
      const timer1 = setTimeout(() => {
        dispatch(removeModal())
      }, 3000);

      return () => {
        clearTimeout(timer1);
      };
    },
    [dispatch]
  );

  return( 
    <ModalContent style={{ overlay: { zIndex: 999 } }} onRequestClose={handleCloseModal} isOpen={!!isModalOpen}>
      <IconWrapper >
        <StyledImage src={image}/>
      </IconWrapper>
      <Body>
        <InfoTitle>{title}</InfoTitle>
        <Info>{message}</Info>
      </Body>
      <IconWrapper>
        <Button onClick={handleCloseModal} buttonWidth={ButtonWidth.MEDIUM} label="Tamam" />
      </IconWrapper>
    </ModalContent>
  )
};
