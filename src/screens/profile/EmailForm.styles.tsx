import styled from "styled-components"

export const EmailRowWrapper = styled.div`
  display: flex;
`

export const EmailWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
`

export const ButtonWrapper = styled.div`
  padding-top: 20px;
`

export const RightElementWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.darkGray2};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
`