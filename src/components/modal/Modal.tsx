import React, { FC, ReactNode } from 'react';
import { Button } from '../button/Button';
import { ButtonWidth } from '../button/Button.types';
import { ModalButtonWrapper, ModalContent, ModalContentWrapper, ModalWrapper } from './Modal.styles';

export interface ModalProps {
  content: ReactNode;
  isModalOpen: boolean;
  handleClose(): void;
}

export const Modal: FC<ModalProps> = ({ content, isModalOpen, handleClose }) => (
  <>
    {isModalOpen ? (
      <ModalWrapper>
        <ModalContentWrapper>
          <ModalContent>{content}</ModalContent>
          <ModalButtonWrapper>
            <Button buttonWidth={ButtonWidth.MEDIUM} onClick={handleClose} label="KAPAT" />
          </ModalButtonWrapper>
        </ModalContentWrapper>
      </ModalWrapper>
    ) : null}
  </>
);
