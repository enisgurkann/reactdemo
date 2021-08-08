import styled from 'styled-components';

import { theme } from '../../theme/theme';
import { device } from '../../constants/device';

import { Button } from '../../components';

export const Wrapper = styled.div`
  padding: 10px 0 30px 0;
`;

export const StyledTableHeader = styled.div<{ isMargin?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: row;
  height: 40px;
  margin-top: 30px;

  @media ${device.smallScreen} {
    margin-top: ${(props) => (props.isMargin ? '15px' : '5px')};
  }
`;

export const TableName = styled.div`
  color: ${theme.colors.primaryNavy};
  font-family: Ubuntu;
  font-size: 12px;
  font-weight: 500;

  @media ${device.smallScreen} {
    font-size: 15px;
  }
`;

export const OrderStateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.smallScreen} {
    flex-direction: column;
  }
`;

export const OrdersRowConatiner = styled(OrderStateContainer)`
  // width: 300px;
`;

export const OrdersRowImg = styled.img`
  margin-right: 15px;

  @media ${device.smallScreen} {
    margin-right: 0px;
  }
`;

export const OrdersRowCircle = styled.div`
  margin-right: 7px;
  background-color: ${theme.colors.primaryGreen};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media ${device.smallScreen} {
    margin-bottom: 5px;
  }
`;

export const OrdersRowLabel = styled.div<{ colors?: string; isThin?: boolean; isSmall?: boolean; isCenter?: boolean }>`
  color: ${(props) => (props.colors ? `${props.colors}` : `${theme.colors.primaryNavy}`)};
  font-family: Ubuntu;
  font-size: 12px;
  font-weight: ${(props) => (props.isThin ? '400' : '500')};

  @media ${device.smallScreen} {
    padding-bottom: 10px;
    font-size: ${(props) => (props.isSmall ? '12px' : '15px')};
    ${(props) => props.isCenter && 'text-align: center'};
  }
`;

export const StyledFilterButton = styled.div`
  height: 30px;
  width: 120px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 24px;
  cursor: pointer;
  border: 1px solid ${theme.colors.darkGray};
  background-color: ${theme.colors.white};
  margin-right: 30px;

  @media ${device.smallScreen} {
    margin-right: 0px;
  }
`;

export const TitleLabel = styled.div`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFilterLabel = styled(OrdersRowLabel)`
  color: ${theme.colors.primaryBlue};
  margin-right: 15px;
`;

export const StyledFilterImage = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  height: 40px;
`;

export const StyledSmallScreenCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  margin-top: 10px;
`;

export const StyledOrdersLeftTable = styled.div`
  
  display: flex;
  padding: 10px 5px;
  justify-content: center;
`;

export const StyledOrdersBodyTable = styled.div`
  
  padding: 10px 5px 0 5px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const StyledOrdersRightTable = styled.div`
 
  padding: 10px 5px 0 5px;
  justify-content: center;
  align-items: center;
`;

export const StyledCargoLabel = styled(OrdersRowLabel)`
  font-size: 10px;
`;
