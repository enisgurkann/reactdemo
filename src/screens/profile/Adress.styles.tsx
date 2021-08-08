import styled from 'styled-components';
import { Button } from '../../components';
import { device } from '../../constants/device';
import { theme } from '../../theme/theme';

export const AdressWrapper = styled.div`
  margin-top: 38px;
  margin-left: 30px;

  @media ${device.laptop} {
    margin-top: 7px;
    margin-left: 0px;
  }
`;

export const UserAdressWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;

  @media ${device.tablet} {
    width: auto;
  }
`;

export const UserAdressButtonWrapper = styled.div`
  width: 343px;
  height: 48px;
  border-radius: 24px;
  padding-top: 74px;

  @media ${device.laptop} {
    width: auto;
  }
  @media ${device.tablet} {
    padding-top: 0;
    margin: 20px 0;
  }
`;

export const TitleLabel = styled.div`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
`;

export const CleanButton = styled.div<{ bold?: boolean }>`
  display: inline-block;
  color: ${theme.colors.primaryBlue};
  margin-left: auto;
  cursor: pointer;

  font-size: ${(props) => (props.bold ? '14px' : '12px')};
  font-weight: ${(props) => (props.bold ? '500' : '400')};
`;

export const ModalDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionLabel = styled.div`
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)<{ cancel?: boolean }>`
  height: 40px;
  width: 152px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.laptopL} {
    font-size: 15px;
    height: 38px;
    width: 130px;
  }
  @media ${device.laptop} {
    width: 102px;
    font-size: 14px;
    font-weight: 500;
  }

  ${(props) => props?.cancel && `background-color: ${theme.colors.red}`}
`;
