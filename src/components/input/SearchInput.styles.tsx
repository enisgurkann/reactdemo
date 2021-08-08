import styled from 'styled-components';

export const SearchWrapper = styled.button`
  width: 59px;
  height: 59px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  z-index: 99;
`;

export const SearchImg = styled.img`
  width: 17px;
`;
