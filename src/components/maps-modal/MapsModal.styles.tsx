import styled from 'styled-components';
import { device, isLargeScreen } from '../../constants/device';
import { theme } from '../../theme/theme';
import { Button } from '../button/Button';

export const customAddressModalStyles = {
  content: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    width: 700,
    height: 600,
    borderRadius: 10,
    boxShadow: '0 15px 30px 0 rgba(216, 217, 217, 0.59)',
    borderWidth: 0,
    display: 'flex',
    padding: 7,
  },
};

export const customDeleteItemModalStyles = {
  content: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    width: isLargeScreen() ? 500 : '90%',
    height: 170,
    borderRadius: 10,
    boxShadow: '0 15px 30px 0 rgba(216, 217, 217, 0.59)',
    borderWidth: 0,
    padding: 40,
  },
};

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalSmallScreenWrapper = styled.div<{ nextStep?: boolean }>`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${window.innerHeight - 75}px;
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  height: 50px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 100px;

  @media ${device.tablet} {
    padding: 0px;
    height: ${window.innerHeight - 75}px;
  }
`;

export const StyledSmallModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.warmGray};
`;

export const ModalHeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalHeaderBody = styled.div`
  flex: 15;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 15px;
  font-weight: 500;
  color: ${theme.colors.primaryNavy};
`;

export const ModalHeaderRight = styled.div`
  flex: 1;
`;

export const ModalFooterContainer = styled.div`
  padding: 13px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    flex: 2;
  }
`;

export const StyledButton = styled(Button)`
  height: 50px;
  width: 350px;
  margin-top: 7px;
`;

export const StyledSectionContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 999;
  width: 686px;
  margin-right: 7px;
  padding: 0 10px;
  margin-top: 30px;
  flex-direction: row;

  @media ${device.tablet} {
    margin-top: 5px;
    flex-direction: column;
    width: ${window.innerWidth - 32}px;
  }
`;

export const MapsWrapper = styled.div<{ nextStep?: boolean }>`
  width: '100%';
  height: ${(props) => (props.nextStep ? '150px' : '450px')};
  @media ${device.tablet} {
    flex: 13;
    width: '100%';
  }
`;

export const StyledFirstStepContainer = styled.div`
  @media ${device.tablet} {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const InputAreaWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const MapsSmallWrapper = styled.div`
  width: 100%;
  height: 150px;
`;
