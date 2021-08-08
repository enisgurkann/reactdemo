import styled from 'styled-components';
import { device } from '../../constants/device';

export const ChatHeader = styled.div`
  width: 100%;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 24px;
  padding: 0 10px;
  transition: 0.3s;

  @media ${device.tablet} {
    height: 50px;
  }
`;

export const HeaderTitle = styled.h4<ChatWrapperProps>`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  }
`;

interface ChatWrapperProps {
  isActive?: boolean;
}
export const ChatWrapper = styled.div<ChatWrapperProps>`
  width: ${({ isActive }) => (isActive ? '390' : '155')}px;
  transition: 0.3s;
  box-shadow: ${({ isActive }) => isActive && '0 10px 30px 0 rgba(29, 96, 145, 0.31)'};
  border-radius: 10px;
 

  ${ChatHeader} {
    background-color: ${({ isActive, theme }) => isActive && theme.colors.primaryBlue};
    border-bottom-left-radius: ${({ isActive }) => isActive && 0};
    border-bottom-right-radius: ${({ isActive }) => isActive && 0};
    border-top-right-radius: ${({ isActive }) => isActive && 8}px;
    border-top-left-radius: ${({ isActive }) => isActive && 8}px;
    height: ${({ isActive }) => isActive && 55}px;
    justify-content: center;
  }

  @media ${device.tablet} {
    width: ${({ isActive }) => (isActive ? '100%' : '50px')};
    border-radius: ${({ isActive }) => (isActive ? '0' : '50%')};
  }
`;

export const ChatContent = styled.div`
  height: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  @media ${device.tablet} {
    height: 100%;
    padding-bottom: 80px;
  }
`;

export const ChatIconWrapper = styled.div`
  margin-right: 10px;

  @media ${device.tablet} {
    margin-right: 0;
  }
`;
