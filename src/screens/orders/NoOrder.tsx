import React from 'react';
import { Content, NoOrderWrapper, Text } from './NoOrder.styles';
import SignUpIcon from '../../assets/images/signup_icon.png';

export const NoOrder = () => (
  <NoOrderWrapper>
    <Content>
      <img src={SignUpIcon} alt="no package" style={{ width: "69px", margin: "auto" }} />
      <Text>
          Henüz gönderiniz bulunmamaktadır.
      </Text>
    </Content>
  </NoOrderWrapper>
)
