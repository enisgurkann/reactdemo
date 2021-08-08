import styled from 'styled-components';

import { device } from '../../constants/device';

export const MapInputWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`

export const StyledFormWrapper = styled.div`
  position: absolute;
  z-index: 99999;
  width: 95%;
  height: 47px;
  display: flex;
  align-items: center;
  margin: 10px;

  @media ${device.mobileL} {
    flex-direction: column;
    height: auto;
  }
`;
export const StyledSelectWrapper = styled.div`
  width: 200px;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 1px ${({ theme }) => theme.colors.darkGray4};
  border-radius: 24px;
  margin-right: 12px;
  & .css-1okebmr-indicatorSeparator {
    display: none;
  }

  & > div > div {
    border: solid 1px ${({ theme }) => theme.colors.darkGray4};
    border-radius: 24px;
    border: none !important;
    border: none !important;
    overflow: hidden;
  }

  & div {
    border: none;
    box-shadow: none;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 47px;
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

export const StyledInputWrapper = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.darkGray4};
  display: flex;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding-left: 20px;
  border-radius: 24px;
  margin-bottom: 6px;
`;
export const StyledInput = styled.input`
  padding: 14px 0;
  margin-left: 16px;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`



export const SelectInputWrapper = styled.div`
  width: 30%;
`

export const TextInputWrapper = styled.div`
  position: relative;
  width: 68%;
  margin-top: -15px;
`

export const SuggestionWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  transform: translateY(100%);
`

export const SuggestedLocationList = styled.ul`
  margin: 0;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.gray89};
`;

export const SuggestedLocationItem = styled.li`
  position: relative;
  padding: 10px 42px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  list-style: none;
  display: flex;
  align-items: center;

  &:last-child{
    border: none;
  }
`;

export const SuggestedLocationItemIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuggestedLocationItemText = styled.a`
  text-decoration: none;
  width: 100%;
`;

export const SuggestedLocationItemSubText = styled.span`
`;