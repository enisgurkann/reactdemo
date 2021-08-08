import styled from 'styled-components';

import { device } from '../../constants/device';
import { theme } from '../../theme/theme';

import { Button } from '../../components/button/Button';

export const Wrapper = styled.div`
  padding: 10px 0 30px 0;
`;

export const StyledCard = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 15px 30px 0 rgba(216, 217, 217, 0.59);
  border-radius: 10px;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media ${device.tablet} {
    border-radius: 0px;
    margin-top: 0px;
    padding: 16px 0px 0px 16px;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    flex: 2;
    justify-content: flex-start;
    padding-top: 7px;
  }
`;

export const Body = styled.div`
  flex: 14;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex: 7;
    padding: 7px 10px 30px 10px;
    border-bottom: 1px solid ${theme.colors.lightGray2};
  }
`;

export const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    flex: 1;
    align-items: flex-start;
    border-bottom: 1px solid ${theme.colors.lightGray2};
  }
`;

export const RecipientImage = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 3px;

  @media ${device.tablet} {
    width: 32px;
    height: 32px;
    margin: 0px;
  }
`;

export const RecipientName = styled.div`
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

export const RecipientType = styled(RecipientName)`
  color: ${theme.colors.light2};
  font-size: 14px;
  margin-top: 4px;

  @media ${device.tablet} {
    font-size: 13px;
  }
`;

export const StyledAddButton = styled(Button)`
  margin-top: 84px;
  width: 343px;

  @media ${device.tablet} {
    display: flex;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    align-items: center;
    justify-content: center;
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
