/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable no-script-url */
import React, { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/button/Button';
import { TextInput } from '../../components/input/TextInput';
import { ErrorMessage, OtpDescription, StyledForm, Timer, TimerWrapper, WarningText, WarningTextWrapper, WhiteArea } from './OtpForm.styles';
import { FormWrapper, Title } from './LoginForm.styles';
import { formatNumber, hideNumber } from '../../common/utulity/phoneUtulity';
import { login } from '../../store/actions/customerActions/customerInfoActions';
import { isNumber, otpRegex } from '../../common/utulity/normalize';
import { ReactComponent as ErrorIcon } from '../../assets/icons/atom-icon-filled-exclamation-24-x-24-copy.svg';

export type OTPFormInputs = {
  otpNo: string;
};

interface OtpFormProps {
  onSubmit(data: OTPFormInputs): void;
  phoneNumber: string;
  errorMessage: string;
}

interface ICountdown {
  minutes: number;
  seconds: number;
}

const initialCountTime = { minutes: 1, seconds: 59 };

export const OtpForm: FC<OtpFormProps> = ({ onSubmit, phoneNumber, errorMessage }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [time, setTime] = React.useState<ICountdown>(initialCountTime);
  const [isTimeFinished, setIsTimeFinished] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { control, handleSubmit, watch, setValue } = useForm<OTPFormInputs>();
  const otpNo = watch('otpNo');

  // start the count down timer
  const tick = () => {
    if (time.minutes === 0 && time.seconds === 0) return setIsTimeFinished(true);
    setIsTimeFinished(false);
    if (time.seconds === 0) {
      setTime({ minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
    }
  };

  // reset the count down timer
  const reset = () => {
    setIsTimeFinished(false);
    setTime(initialCountTime);
  };

  // run the count down timer handlers
  useEffect(() => {
    const timerId = setInterval(() => {
      if (!isTimeFinished) {
        tick();
      } else {
        clearInterval(timerId);
        setIsDisabled(true);
        setIsInputDisabled(true);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [time]);

  const RightElement = () => (
    <TimerWrapper>
      <Timer>{`${time.minutes > 0 ? `${time.minutes.toString().padStart(2, '')}:` : ''}${time.seconds.toString().padStart(2, '0')} sn`}</Timer>
    </TimerWrapper>
  );

  useEffect(() => {
    if (otpNo && otpNo.length === 6) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [otpNo]);

  const handleAgainClick = async () => {
    const data = await dispatch(login({ phoneNumber: `0${phoneNumber}` }));
    const response = await data.payload;

    if (response.isSuccess) {
      setIsInputDisabled(false);
      reset();
      if (otpNo && otpNo.length === 6) {
        setIsDisabled(false);
      }
    } else {
      console.log('hata');
    }
  };

  const onPasteHandler = (e: any) => {
    const str = e.clipboardData?.getData('Text');
    if (!str) return;
    const newStr = str.replace(/^\d+$/, '');
    if (str !== newStr) {
      e.preventDefault();
    }
  };

  return (
    <StyledForm error={Boolean(errorMessage)} onSubmit={isTimeFinished ? handleAgainClick : handleSubmit(onSubmit)}>
      <FormWrapper>
        <Title>Giriş Yap</Title>
        <OtpDescription>{hideNumber(formatNumber(`${phoneNumber}`))} numaralı telefonunuza gönderilen tek kullanımlık SMS şifrenizi girin.</OtpDescription>
        <Controller
          rules={{
            required: true,
            pattern: otpRegex,
          }}
          name="otpNo"
          control={control}
          render={({ field }) => (
            <TextInput
              autoComplete="one-time-code"
              inputMode="numeric"
              type="numeric"
              onPaste={onPasteHandler}
              maxLength={6}
              disabled={isInputDisabled}
              label="Tek Kullanımlık SMS Şifresi"
              RightElement={RightElement()}
              id="otp"
              {...field}
            />
          )}
        />
        {errorMessage && (
          <ErrorMessage>
            <ErrorIcon />
            <span>{errorMessage}</span>
          </ErrorMessage>
        )}
        {isTimeFinished && (
          <WarningTextWrapper>
            <WarningText>Kod size ulaşmadı mı?</WarningText>
          </WarningTextWrapper>
        )}
        <WhiteArea>
          <Button
            onClick={isTimeFinished ? handleAgainClick : handleSubmit(onSubmit)}
            label={isTimeFinished ? 'TEKRAR GÖNDER' : 'DOĞRULA'}
            isDisabled={isTimeFinished ? false : isDisabled}
          />
        </WhiteArea>
      </FormWrapper>
    </StyledForm>
  );
};
