import React, { FC, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { phoneNumberRegex } from '../../common/utulity/normalize';
import { Button } from '../../components/button/Button';
import { PhoneInput } from '../../components/input/PhoneInput';
import { PhoneInputWrapper, ButtonWrapper, Title, FormWrapper } from './LoginForm.styles';
import { ErrorMessage } from './OtpForm.styles';

interface LoginFormFirstStepProps {
  onSubmit(data: ILoginFormFirstStepInput): void;
  errorMessage?: string;
}

export interface ILoginFormFirstStepInput {
  phone: string;
}

export const LoginFormFirstStep: FC<LoginFormFirstStepProps> = ({ onSubmit, errorMessage }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { control, handleSubmit, watch } = useForm();
  const phoneNumber = watch('phone');

  useEffect(() => {
    if (phoneNumber && phoneNumber.includes('_')) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [phoneNumber]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Title>Giriş Yap</Title>
        <PhoneInputWrapper>
          <Controller rules={{ required: true, pattern: phoneNumberRegex }} name="phone" control={control} defaultValue="" render={({ field }) => <PhoneInput {...field} />} />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </PhoneInputWrapper>
        <ButtonWrapper>
          <Button label="GİRİŞ YAP" type="submit" isDisabled={isDisabled} />
        </ButtonWrapper>
      </FormWrapper>
    </form>
  );
};
