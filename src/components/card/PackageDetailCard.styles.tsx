import styled from 'styled-components';
import { device } from '../../constants/device';

export const PackageDetailCardWrapper = styled.div`
  padding: 15px 40px;
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
    padding: 15px 18px;
  }

  @media ${device.mobileM} {
    padding: 15px 9px;
  }
`;


export const PackageDetailContent = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    width: 100%;
    flex-direction: column-reverse;
  } 
`;

export const PackageDetailContentDetail = styled(PackageDetailContent)`
  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
  }
`

export const ImageWrapper = styled.div`
  margin-right: 40px;
  @media ${device.mobileL} {
    margin-right: 20px;
  } 
`;

export const Column = styled.div`
  padding: 0 10px;
  min-height: 100px;

  @media ${device.mobileL} {
    padding: 0;
    min-height: 0;
  } 
`;

export const PackageDetailColumn = styled(Column)`
  min-width: 230px;
  margin-right: 120px;

  @media ${device.laptopL} {
    margin-right: 80px;
  }
  @media ${device.mobileL} {
    min-width: 0;
    margin: 0;
    width: 100%;
  } 
`;

export const PackageDetailTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 15px;
  font-weight: 500;
  color: #292929;

  @media ${device.mobileL} {
    display: none;
  } 
`;

export const PackageDetailText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  margin: 0 0 10px;
`

export const PackageDetailKey = styled.span`
  display: inline-block;
  min-width: 75px;

  @media ${device.mobileL} {
    min-width: 85px;
    font-size: 15px;
    font-weight: 700;
    color: #292929;
  }
  @media ${device.mobileM} {
    min-width: 75px;
    font-size: 13px;
  }
`;

export const PackageImg = styled.img`
  @media ${device.mobileL} {
    width: 80px;
  }
`

export const PackageDetailImg = styled.img`
  @media ${device.mobileL} {
    float: right;
  }
`;

export const PackageDetailValue = styled.span`
  display: inline-block;
  min-width: 145px;
  @media ${device.mobileL} {
    min-width: 0;
    font-size: 15px;
    font-weight: 500;
    color: #545454;
  }
  @media ${device.mobileM} {
    min-width: 0;
    font-size: 13px;
  }
`

export const PackageCountColumn = styled(Column)`
  margin-right: 180px;
  @media ${device.laptopL} {
    margin-right: 100px;
  } 
  @media ${device.mobileL} {
    min-width: 0;
    margin: 0;
    padding: 0;
  } 
`;

export const ColumnTitle = styled.h3`
  margin: 0 0 14.5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  font-weight: 400;

  @media ${device.mobileL} {
    display: none;
  } 
`

export const ColumnValue = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryNavy};
  font-weight: 700;
`