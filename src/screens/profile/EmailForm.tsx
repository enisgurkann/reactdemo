import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Button, ButtonWidth, TextInput } from '../../components';
import { RootState } from '../../store/reducer';
import { ButtonWrapper, EmailRowWrapper, EmailWrapper, RightElementWrapper, RightTitle } from './EmailForm.styles';

export type EmailFormFields = {
  emailAddress: string;
}

interface EmailFormProps {
  onSubmit(data: EmailFormFields): void;
}

const RightElement = () => (
  <RightElementWrapper>
    <RightTitle>!</RightTitle>
  </RightElementWrapper>
)

export const EmailForm: FC<EmailFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: {isDirty}} = useForm();
  const customer = useSelector((state: RootState) => state.customer.info);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailRowWrapper>
        <EmailWrapper>
          <Controller
            name="emailAddress"
            defaultValue={customer.emailAddress || ''}
            control={control}
            // render={({ field: { onChange, value } }) => <TextInput RightElement={<RightElement/>} disabled={!customer.emailConfirmed} value={value} onChange={(event) => onChange(event)} label="Email" id="email" />}
            render={({ field: { onChange, value } }) => <TextInput RightElement={!customer.emailConfirmed ? <RightElement/> : <></>} value={value} onChange={(event) => onChange(event)} label="Email" id="email" />}
          />
        </EmailWrapper>
        <ButtonWrapper>
          {isDirty && <Button onClick={handleSubmit(onSubmit)} buttonWidth={ButtonWidth.XSMALL} label="Güncelle"/>}
          {/* <Button isDisabled={!customer.emailConfirmed} onClick={handleSubmit(onSubmit)} buttonWidth={ButtonWidth.XSMALL} label="Güncelle"/> */}
        </ButtonWrapper>
      </EmailRowWrapper>
    </form>
  )
}