import styled from 'styled-components';

export const MenuWrapper = styled.div<{ visible?: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: ${({ visible }) => (visible ? 0 : '-100vw')};
  position: fixed;
  z-index: ${({ visible }) => (visible ? 99999 : 0)};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: all 0.1s;
`;
export const MenuBody = styled.div<{ visible?: boolean }>`
  width: ${({ visible }) => (visible ? '70%' : '0')};
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  padding: 20px;
  transition: all 0.2s;
`;
export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;
export const MenuLogo = styled.img`
  width: 120px;
`;
export const MenuCloseButton = styled.button`
  background: transparent;
  border: none;
`;
export const MenuList = styled.ul`
  padding-left: 0;
  list-style: none;
`;
export const MenuItem = styled.li`
  margin-bottom: 30px;
`;
export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;
