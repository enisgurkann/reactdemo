import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Screen } from '../../components';
import { TextInput } from '../../components/input/TextInput';

import SignUpIcon from '../../assets/images/signup_icon.png';
import { SignUpFirstText, SignUpInputFormWrapper, SignUpSecondText, SignUpInfoText, WhiteArea, SignUpHeaderWrapper } from './SignUp.styles';

export type SignUpFormInputs = {
  name: string;
  surname: string;
  identityNo: string;
}
interface SignUpProps {
  onSubmit(data: SignUpFormInputs): void;
}

export const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  return (
    <Screen>
      <SignUpInputFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SignUpHeaderWrapper>
          <img src={SignUpIcon} alt="logo" style={{ width: "69px", margin: "auto" }} />
          <SignUpFirstText>
            Henüz gönderiniz bulunmamaktadır.
          </SignUpFirstText>
          <SignUpSecondText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna magna, euismod eu enim non, efficitur aliquet.
          </SignUpSecondText>
        </SignUpHeaderWrapper>
        <Controller rules={{ required: "Bu alanı doldurunuz." }} name="name" control={control} render={({ field: { onChange, value } }) => (
          <TextInput error={errors.name?.message} value={value} onChange={(event) => onChange(event)} label="Ad" id="name" />
        )} />
        <Controller rules={{ required: "Bu alanı doldurunuz." }} name="surname" control={control} render={({ field: { onChange, value } }) => (
          <TextInput error={errors.surname?.message} value={value} onChange={(event) => onChange(event)} label="Soyad" id="surname" />
        )} />
        <Controller rules={{ required: "Bu alanı doldurunuz." }} name="identityNo" control={control} render={({ field: { onChange, value } }) => (
          <TextInput error={errors.identityNo?.message} value={value} onChange={(event) => onChange(event)} label="TCKN" id="identityNo" />
        )} />
        <SignUpInfoText>
          TCK gereği gönderi doğrulamak için xx maddesi masak kanunu gereği alınması zorunludur.
        </SignUpInfoText>
        <WhiteArea>
          <Button onClick={handleSubmit(onSubmit)} type="submit" label="HEMEN KAYIT OL" />
        </WhiteArea>
      </SignUpInputFormWrapper>
    </Screen>
  );
}