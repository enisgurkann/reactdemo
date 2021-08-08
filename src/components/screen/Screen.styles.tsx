import styled from 'styled-components';


interface StyledScreenProps {
  isModalOpen?: boolean;
}
export const StyledScreen = styled.div<StyledScreenProps>`
  display: ${({ isModalOpen }) => isModalOpen ? 'none' : 'flex'};
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export const StyledContent = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.warmGray};
`;

export const SideMenu = styled.aside`
  margin: 40px 0 70px;
  border-right: 1px solid #dedede;
  height: 800px;

  @media (max-width: 1023px) {
    display: none;
  }
`

export const MenuItemWrapper = styled.ul`
  padding: 0;
  margin: 0;
`


export const MenuItemText = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light2};
  text-decoration: none;
`

interface MenuItemProps {
  isActive?: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  position: relative;
  list-style: none;
  padding: 3px 0;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &:after{
    content: '';
    position: absolute;
    width: ${({ isActive }) => isActive ? '4px' : '0'};
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    right: -1px;
    top: 0;
  }

  ${MenuItemText} {
    color: ${({ theme, isActive }) => isActive && theme.colors.black}
  }
`
