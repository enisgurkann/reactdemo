import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from '@reach/router';
import { Stepper, StepperItem, StepperRef } from '../../components/stepper/Stepper';
import { SignUp, SignUpFormInputs } from './SignUp';
import SignUpPermission, { KvkkFormInputs } from './SignUpPermission';
import { SignUpRequest } from '../../services/interfaces/Customer';
import { getCustomer, signup } from '../../store/actions/customerActions/customerInfoActions';

interface LoginFormProps {
  initialStep?: number;
  toPath?: string;
}

interface ILocationState{
  phoneNum?: string;
}

const request = {} as SignUpRequest;

export const SignUpStepper: FC<LoginFormProps> = ({ initialStep }) => {
  const dispatch = useDispatch();
  const locationState = useLocation().state as unknown as ILocationState;
  const phoneNumber = (locationState && locationState.phoneNum) ||  '';

  const stepperRef: React.MutableRefObject<StepperRef | null | undefined> = React.useRef(null);
  const navigation = useNavigate();
  const handleNextStep = () => {
    stepperRef.current?.goToNextStep();
  }

  const handleFirstStep = async (data: SignUpFormInputs) => {
    request.name = data.name;
    request.surname = data.surname;
    request.tcIdentityNumber = data.identityNo;

    handleNextStep();
  }

  const handleSecondStep = async ({ isKVKKContractAccepted, isServiceContractAccepted, emailAdress, isEmailActive,
    isPhoneCallActive, isSmsActive }: KvkkFormInputs) => {
    const req = {
      name: request.name,
      surname: request.surname,
      tcIdentityNumber: request.tcIdentityNumber,
      kvkkApproved: isKVKKContractAccepted,
      contractApproved: isServiceContractAccepted,
      emailAddress: emailAdress,
      adress: '',
      phoneNumber,
      smsActive: isSmsActive,
      emailActive: isEmailActive,
      phoneCallActive: isPhoneCallActive
    }

    const signUpResponse = await dispatch(signup(req))
    const response = await signUpResponse.payload;

    if (response.isSuccess) {
      const getCustomerRequest = {
        id: response.customerId
      }

      const getCustomerResponse = await dispatch(getCustomer(getCustomerRequest));
      navigation('orders');
    }
  }

  const handleCancelSecondStep = () => {
    stepperRef.current?.goToPreviousStep();
  }

  const STEPPER_ITEMS = [
    { Component: <SignUp onSubmit={handleFirstStep} /> },
    { Component: <SignUpPermission cancel={handleCancelSecondStep} onSubmit={handleSecondStep} /> },
  ] as StepperItem[]

  return (
    <Stepper initialStep={initialStep} ref={stepperRef} stepperItems={STEPPER_ITEMS} />
  )
};
