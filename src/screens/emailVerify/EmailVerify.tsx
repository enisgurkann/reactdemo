import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';
import { useDispatch } from 'react-redux';
import { Screen } from "../../components";
import { verifyEmail } from '../../store/actions/customerActions/customerInfoActions';
import { Body, IconWrapper, Info, InfoTitle, StyledImage } from '../../components/modal/InfoModal.styles';
import SuccessImage from "../../assets/images/infoModalSuccess.png";

export const EmailVerify = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const queryString = location.search.substring(1).split('&');
  const emailFields = queryString[0].substring(1).split('=');
  const tokenFields = queryString[1].substring(1).split('=');
  const email = emailFields[1];
  const token = tokenFields[1];

  useEffect(() => {
    dispatch(verifyEmail({ email, token }));
  }, [dispatch, email, token]);

  return(
    <Screen>
      <div style={{margin: 50}}>
        <IconWrapper>
          <StyledImage src={SuccessImage}/>
        </IconWrapper>
        <Body>
          <InfoTitle>İşlem Başarılı</InfoTitle>
          <Info>Email adresiniz başarılı bir şekilde güncellendi.</Info>
        </Body>
      </div>
    </Screen>
  )
}
