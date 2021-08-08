import styled from 'styled-components';
import { Section } from '../../components/section/Section';
import { device } from '../../constants/device';

export const PhoneInputWrapper = styled.div`
  margin-top: 45px;
`;
export const SocialMediaButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

export const TextWrapper = styled.div`
  margin: 67px 0px 67px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  margin: 42px 0 0 0;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #d4d4d4;
`;

export const DividerText = styled.p`
  margin: 0;
  padding: 0 7px;
  font-size: 13px;
  color: #a9a9a9;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  margin: 0;
`;

export const FormWrapper = styled(Section)`
  padding: 90px 58px 0 47px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }

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
