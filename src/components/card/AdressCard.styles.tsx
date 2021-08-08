import styled from 'styled-components';
import { device } from '../../constants/device';
import { theme } from '../../theme/theme';
import { Button } from '../button/Button';

export const StyledAdressCard = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 10px;

  @media ${device.laptop} {
    padding: 0px 15px;
  }
`;

export const Left = styled.div<{ lastItem?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    flex: 1;
    justify-content: flex-start;
    padding-top: 7px;
    ${(props) => !props.lastItem && `border-bottom: 1px solid ${theme.colors.lightGray2} `}
  }
`;

export const Body = styled.div<{ lastItem?: boolean }>`
  flex: 14;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex: 11;
    padding: 7px 10px 20px 10px;
    ${(props) => !props.lastItem && `border-bottom: 1px solid ${theme.colors.lightGray2} `}
  }
`;

export const Right = styled.div<{ lastItem?: boolean }>`
  flex: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    flex: 4;
    align-items: flex-start;
    ${(props) => !props.lastItem && `border-bottom: 1px solid ${theme.colors.lightGray2} `}
  }
`;

export const CardImage = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 3px;

  @media ${device.tablet} {
    width: 16px;
    height: 16px;
    margin: 0px;
  }
`;

export const FirstLabel = styled.div`
  display: inline-block;
  color: ${theme.colors.darkGray3};

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  @media ${device.tablet} {
    font-size: 13px;
  }
`;

export const SecondLabel = styled(FirstLabel)`
  color: ${theme.colors.light2};
  font-size: 14px;
  margin-top: 4px;

  @media ${device.tablet} {
    font-size: 13px;
    margin-top: 7px;
  }
`;

export const StyledButton = styled(Button)`
  height: 50px;
  width: auto;
  border-width: 0px;
  text-decoration: underline;
  object-fit: contain;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const StyledRemoveButton = styled(StyledButton)`
  color: ${theme.colors.red};
  margin-left: 22px;
`;

export const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0px;
`;
