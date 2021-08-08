import React from 'react';
import { Stepper, StepperItem, StepperRef } from '../stepper/Stepper';
import { ChatContent, ChatHeader, ChatIconWrapper, ChatWrapper, HeaderTitle } from './LiveChat.styles';
import { LiveChatFirstStep } from './LiveChatFirstStep';
import { LiveChatSecondStep } from './LiveChatSecondStep';
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";

export interface LiveChatProps {
  isActive?: boolean;
  onClick(): void;
}

 
export const LiveChat: React.FC<LiveChatProps> = ({ isActive, onClick }) => {
  const stepperRef: React.MutableRefObject<StepperRef | null | undefined> = React.createRef();

  const STEPPER_ITEMS = [
    { Component: <LiveChatFirstStep onSubmit={() => null} /> },
    { Component: <LiveChatSecondStep /> },
  ] as StepperItem[]

  return(
    <>
      <ChatWrapper isActive={isActive}>
        <ChatHeader onClick={onClick}> 
          {!isActive && (
            <ChatIconWrapper>
              <ChatIcon />
            </ChatIconWrapper>
          )}
          <HeaderTitle isActive={isActive}>Canlı Destek</HeaderTitle>
        </ChatHeader>
        {isActive && (
          <ChatContent >
            <Stepper ref={stepperRef} stepperItems={STEPPER_ITEMS} />
          </ChatContent>
        )}
      </ChatWrapper>
    </>
  )
   
}