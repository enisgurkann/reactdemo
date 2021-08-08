import styled from 'styled-components';
import { TableStyle } from './Table.constant';

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0 15px;
`;

export const StyledTh = styled.th`
  text-align: left;
  color: ${({ theme }) => theme.colors.tableHeader};
  font-family: Ubuntu;
  font-size: 12px;
  font-weight: 500;
  padding: 10px 0;
  &:first-child {
    padding-left: 30px;
  }
  &:last-child {
    padding-right: 30px;
  }
`;

export const StyledRow = styled.tr<{ tableStyle?: TableStyle }>`
  height: 80px;
  box-shadow: 0 7.5px 15px 0 rgba(216, 217, 217, 0.59);
  border-radius: 10px;

  ${(props) => props.tableStyle?.bgColor && `background-color: ${props.tableStyle?.bgColor}`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.warmGray};
    cursor: pointer;
  }
`;

export const StyledTd = styled.td`
  &:first-child {
    padding-left: 30px;
    border-radius: 7px 0 0 7px;
  }
  &:last-child {
    padding-right: 30px;
    border-radius: 0 7px 7px 0;
  }
`;
