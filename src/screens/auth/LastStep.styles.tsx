import styled from 'styled-components';
import { Section } from '../../components/section/Section';
import { device } from '../../constants/device';
import { Button } from '../../components';

export const FormWrapper = styled(Section)`
  padding: 40px 58px 0 47px;

  @media ${device.laptopL} {
    padding: 30px 42px 0;
  }
  @media ${device.laptopM} {
    padding: 20px 22px 0;
  }
  @media ${device.tablet} {
    padding: 40px 58px 0 47px;
  }
  @media ${device.mobileL} {
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  margin: 0 0 17px;
`;

export const Description = styled.p`
  margin-bottom: 12px;
`;

export const Row = styled.div`
  margin: 8px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  @media ${device.laptopL} {
    margin-top: 20px;
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 20px;
  @media ${device.laptopL} {
    margin-bottom: 15px;
  }
`