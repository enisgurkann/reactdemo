import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { otpRegex } from '../../common/utulity/normalize';
import { formatNumber, hideNumber } from '../../common/utulity/phoneUtulity';
import { Button } from '../button/Button';
import { TextInput } from '../input/TextInput';
import { ErrorMessage, ModalContent, ModalText, Row } from './SmsModal.styles';

export type SmsModalInputs = {
  verificationCode: string;
};

export interface SmsModalProps {
  isModalOpen: boolean;
  phoneNumber: string;
  errorMessage: string;
  onSubmit(data: SmsModalInputs): void;
  onRequestClose(event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>): void;
}

export const SmsModal: FC<SmsModalProps> = ({ isModalOpen, onSubmit, phoneNumber, errorMessage, onRequestClose }) => {
  const { control, handleSubmit } = useForm();

  return (
    <ModalContent onRequestClose={onRequestClose} style={{ overlay: { zIndex: 50 } }} isOpen={isModalOpen}>
      <form style={{ height: '100%', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
        <ModalText>{hideNumber(formatNumber(`${phoneNumber}`))} numaralı telefonunuza gönderilen tek kullanımlık SMS şifrenizi girin.</ModalText>
        <Row>
          <div>
            <Controller
              rules={{
                required: true,
                pattern: otpRegex,
              }}
              name="verificationCode"
              control={control}
              render={({ field }) => (
                <TextInput
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  type="numeric"
                  maxLength={6}
                  label="Tek Kullanımlık SMS Şifresi"
                  id="verificationCode"
                  {...field}
                />
              )}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </div>
        <Button onClick={handleSubmit(onSubmit)} label="Gönder"/>
        </Row>
      </form>
    </ModalContent>
  )
}