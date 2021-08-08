import React, { FC } from 'react';
import { useLocation } from '@reach/router';
import { AuthCard, Left, LeftContent, LogoWrapper, Right, RightArea, RightAreaTitle, Wrapper } from './Auth.styles';
import AykargoLogo from '../../assets/images/aykargo_logo.png';
import { LoginForm } from './LoginForm';

interface ILocationState {
  key: number;
  initialStep?: number;
  toPath?: string;
  phoneNum?: string;
}

export const Auth: FC = ({ ...props }) => {
  const locationState = useLocation().state as unknown as ILocationState;
  const controlledPhonuNum = locationState && locationState.phoneNum ? locationState.phoneNum : ''; 
  const controlledToPath = locationState && locationState.toPath; 
  let initialStep = 0;
  if(locationState && locationState.initialStep){
    initialStep = locationState.initialStep;
  }

  return(
    <Wrapper>
      <Left>
        <LeftContent>
          <LogoWrapper>
            <a href='/'>
              <img src={AykargoLogo} alt="logo" />
            </a>
          </LogoWrapper>
          <AuthCard>
            <div>
              <LoginForm phoneNum={controlledPhonuNum} toPath={controlledToPath} initialStep={initialStep}/>
            </div>
          </AuthCard>
        </LeftContent>
      </Left>
      <Right>
        <RightArea>
          <RightAreaTitle>
            “Kargon Burada” noktasından
            kolay teslimat seçeneği Aykargo’da.
          </RightAreaTitle>
        </RightArea>        
      </Right>
    </Wrapper>
  );
}
