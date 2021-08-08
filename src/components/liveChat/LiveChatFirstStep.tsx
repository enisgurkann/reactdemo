import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../button/Button';
import { PhoneInput } from '../input/PhoneInput';
import { TextInput } from '../input/TextInput';
import { FirstStepForm, PhoneWrapper, Wrapper } from './LiveChatFirstStep.styles';


export type LiveChatFirstStepFormInputs = {
  name: string;
  surname: string;
  phone: string;
  sendNo: string;
  meetingReason: string;
};
export interface LiveChatFirstStepProps {
  onSubmit(data: LiveChatFirstStepFormInputs): void;
}

 
export const LiveChatFirstStep: React.FC<LiveChatFirstStepProps> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();
  return(
    ( 
      <FirstStepForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Wrapper>
            <Controller name="name" control={control} render={({ field }) => <TextInput label="Ad" id="name" {...field} />} />
          </Wrapper>
          <Wrapper>
            <Controller name="surname" control={control} render={({ field }) => <TextInput label="Soyad" id="surname" {...field} />} />
          </Wrapper>
          <PhoneWrapper>
            <Controller name="phone" control={control} render={({ field }) => <PhoneInput {...field} />} />
          </PhoneWrapper>
          <Wrapper>
            <Controller name="sendNo" control={control} render={({ field }) => <TextInput label="Gönderi Numarası" id="sendNo" {...field} />} />
          </Wrapper>
          <Wrapper>
            <Controller name="meetingReason" control={control} render={({ field }) => <TextInput label="Görüşme nedeni" id="meetingReason" {...field} />} />
          </Wrapper>
        </div>
        <div>
          <Button label="Görüşmeye Başla"/>
        </div>
      </FirstStepForm>
     )
  )
}
 