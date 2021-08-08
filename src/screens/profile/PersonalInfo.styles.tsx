import styled from 'styled-components';
import { device } from '../../constants/device';

export const PersonelInfoForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  margin-left:30px;

  @media (max-width: 1023px) {
    margin-top: 15px;
    margin-left: 0;
  }
`

export const PersonelInfoInput = styled.div`
  margin-bottom: 5px;

  input {
    text-transform: capitalize;
  }
`

export const PermissionTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 26px;
  object-fit: contain;
  font-size: 18px;
  color: #000000;

  @media ${device.tablet} {
    margin-top: 46px;
  }
`

export const PermissionDetail = styled.div`
  width: 354px;
  object-fit: contain;
  font-size: 14px;
  line-height: 1.86;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: 27px;

  @media ${device.tablet} {
    width: auto;
  }
`

export const PermissionCheck = styled.div`
`

export const PermissionButton = styled.div`
  margin-top: 120px;
  width: 343px;
  
  @media ${device.tablet} {
    margin-top: 60px;
    margin-bottom: 35px;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`
