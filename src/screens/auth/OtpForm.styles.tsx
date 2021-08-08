import styled from 'styled-components';
import { Section } from '../../components/section/Section';
import { device } from '../../constants/device';

export const TimerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
`;

export const Timer = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-weight: 500;
  white-space: nowrap;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const WhiteArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;

export const StyledForm = styled.form<{ error?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  & label {
    color: ${({ theme, error }) => error && theme.colors.error};
  }
`;

export const WarningText = styled.p`
  margin: 0 0 28px;
  font-size: 13px;
  color: #000;
`;

export const AgainText = styled.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  cursor: pointer;
`;

export const OtpDescription = styled.p`
  margin: 8px 0 37px;
  line-height: 1.5;
`;

export const WarningTextWrapper = styled.div`
  text-align: center;
`;
export const FormWrapper = styled(Section)`
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

export const ErrorMessage = styled.p`
  margin: 0;
  margin-top: 5px;
  padding-left: 14px;
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};

  align-items: center;

  & span {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.error};
    font-size: 12px;
  }
`;
