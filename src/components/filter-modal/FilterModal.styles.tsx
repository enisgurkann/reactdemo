import styled from 'styled-components';
import { device } from '../../constants/device';
import { theme } from '../../theme/theme';
import { Button } from '../button/Button';

export const customStyles = {
  content: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginLeft: 'auto',
    width: 500,
    borderRadius: 0,
    boxShadow: '0 15px 30px 0 rgba(216, 217, 217, 0.59)',
    borderWidth: 0,
    height: window.innerHeight,
    display: 'flex',
  },
};

export const ModalWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalSmallScreenWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterContent = styled.div`
  width: 100%;
  padding-bottom: 10px;
  height: ${window.innerHeight - 120}px;
  scroll-behaviour: smooth;
  overflow-y: scroll;

  @media ${device.tablet} {
    height: ${window.innerHeight - 200}px;
  }
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  padding: 20px 0;

  

  @media ${device.tablet} {
    padding: 0 0 15px 0;
    margin-bottom: 10px;
    border-bottom: 2px solid ${theme.colors.lightGray2};
  }
`;

export const MobileFilterItem = styled.div`
  & label {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  & div {
    margin:0;
  }
`

export const TitleLabel = styled.div`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 15px;
`;

export const CleanButton = styled.div<{ bold?: boolean }>`
  display: inline-block;
  color: ${theme.colors.primaryBlue};
  margin-left: auto;
  cursor: pointer;

  font-size: ${(props) => (props.bold ? '14px' : '12px')};
  font-weight: bold;
`;

export const FilterTitle = styled.div`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 15px;
  font-weight: 600;
  padding: 10px 0;
`;

export const ButtonContainer = styled.div`
  height: 110px;
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 20px;
  height: 50px;
`;

export const CancelButton = styled.div`
  display: inline-block;
  color: ${theme.colors.primaryBlue};
  font-size: 16px;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export const SeeAllLabel = styled.div`
  display: inline-block;
  color: ${theme.colors.black};
  font-size: 12px;
  text-decoration: underline;
`;
