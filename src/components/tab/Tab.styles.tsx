import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const TabHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d4d4d4;
  border-radius: 17px;
`;

interface ItemProps {
  isActive: boolean;
}

export const TabHeaderItem = styled.div<ItemProps>`
  flex: 1;
  background-color: ${({ isActive }) => (isActive ? '#334B5D' : '#D4D4D4')};
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 17px;

  &:hover {
    cursor: pointer;
  }
`;

export const TabHeaderItemTitle = styled.a<ItemProps>`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? '#fff' : theme.colors.thinGray)};
`;

export const TabContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
