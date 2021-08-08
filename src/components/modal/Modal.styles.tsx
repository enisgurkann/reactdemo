import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(256, 256, 256, 0.7);
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 999;
`;

export const ModalContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 928px;
  height: 700px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 50px 30px 40px;
`;

export const ModalContent = styled.div`
  padding: 0 70px;
  height: 520px;
  overflow-y: scroll;
  margin-bottom: 38px;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    background-color: #fff;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d8d8d8;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
