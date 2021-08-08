import styled from 'styled-components';

export const MyProfileWrapper = styled.div`
  padding-top: 27px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 18px;
`

export const ProfileName = styled.h2`
  font-size: 21px;
  font-weight: bold;
  color: ${({ theme })=> theme.colors.darkGray3};
  margin: 0;
`

export const EditWrapper = styled.div``

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`

export const ItemWrapper = styled.div`
  padding: 0 16px;
`

export const Item = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child{
    border: none;
  }
`

export const ItemKey = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.darkGray2};
  margin-left: 10px;
`

export const ItemValue = styled.span`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.darkGray2};
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const ArrowImg = styled.img`
  width: 9px;
  transform: rotate(90deg);
`

export const StyledTitle = styled.h3`
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: 17px;
`