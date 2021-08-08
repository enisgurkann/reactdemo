import styled from 'styled-components';
import { device } from '../../constants/device';

export const PackageStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const PackageStatusCoulNotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    margin-top: -20px;
  }
`;

interface ItemWrapperProps {
    isActive?: boolean;
    isCurrent?: boolean;
}

export const Item = styled.div<ItemWrapperProps>`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${({ theme, isActive, isCurrent }) => (isActive || isCurrent ? `1px solid ${theme.colors.primaryGreen}` : `1px dashed ${theme.colors.lightGray2}`)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 13px;
  background-color: ${({ isActive, theme, isCurrent }) => (isActive || isCurrent) && theme.colors.primaryGreen};

  @media ${device.tablet} {
    margin: 0 15px 0 0;
    background-color: ${({ isActive, theme, isCurrent }) => (isActive || isCurrent) ? theme.colors.primaryGreen : theme.colors.white};
  }

  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 145px;
    top: 50%;
    left: 49px;
    transform: translateY(-50%);
    border-bottom: ${({ theme, isActive }) => (isActive ? `3px solid ${theme.colors.primaryGreen}` : `1px dashed ${theme.colors.lightGray2}`)};
    border-top: ${({ theme, isActive }) => (isActive ? `3px solid ${theme.colors.primaryGreen}` : `0 dashed ${theme.colors.lightGray2}`)};

    border-bottom: ${({ theme, isCurrent }) => isCurrent && `1px dashed ${theme.colors.primaryGreen}`};

    @media ${device.tablet} {
      transform: translate(-50%, 0);
      left: 50%;
      top: -26px;
      width: 1px;
      height: 26px;
      border-bottom: none;
      border-top: none;

      border-left: ${({ theme, isActive }) => (isActive ? `1px solid ${theme.colors.primaryGreen}` : `1px dashed ${theme.colors.lightGray2}`)};

      border-left: ${({ theme, isCurrent }) => isCurrent && `1px dashed ${theme.colors.primaryGreen}`};
    }
  }
`;

export const ItemWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  width: 155px;

  &:last-child {
    margin-right: 0;
    ${Item} {
      &::after {
        display: none;
      }
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    width: auto;
    align-items: center;
    margin-bottom: 25px;

    &:first-child {
      margin-bottom: 0;
    }
  }

  @media ${device.mobileL} {
    padding: 0;
  }
`;

export const ItemTitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primaryNavy};
  font-weight: 500;
  font-size: 14px;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
    margin-bottom: 5px;
    font-size: 15px;
  }

  @media ${device.mobileL} {
    font-size: 13px;
  }
`;

export const ItemDate = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.light2};
  font-size: 13px;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }

  @media ${device.mobileL} {
    font-size: 12px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;