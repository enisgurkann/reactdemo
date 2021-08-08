import styled from 'styled-components';
import { StyledForm } from '../auth/OtpForm.styles';

export const SignUpInputFormWrapper = styled(StyledForm)`
  width: 342px;
  margin: 0 auto;
  padding-top: 50px;
`;

export const SignUpFirstText = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 18px 0;
    text-align: center;
`;

export const SignUpSecondText = styled.p`
    opacity: 0.7;
    font-size: 12px;
    text-align: center;
    line-height: 1.58;
`;

export const SignUpInfoText = styled.p`
    margin: 18px 0 0;
    text-align: left;
    font-size: 12px;
    font-style: italic;
    color: #8b8b8b;
`;

export const WhiteArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 33px 0 60px;
`;

export const SignUpHeaderWrapper = styled.div`
  padding: 0 20px 0 20px;
  text-align: center;
`;