import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '@reach/router';
import { Stepper, StepperItem, StepperRef } from '../../components/stepper/Stepper';
import { ILoginFormFirstStepInput, LoginFormFirstStep } from './LoginFormFirstStep';
import { OtpForm, OTPFormInputs } from './OtpForm';
import LastStep, { KvkkFormInputs } from './LastStep';
import { login, loginConfirm, updateCustomer } from '../../store/actions/customerActions/customerInfoActions';
import { RootState } from '../../store/reducer';

interface LoginFormProps {
    initialStep?: number;
    toPath?: string;
    phoneNum: string;
}

export const LoginForm: FC<LoginFormProps> = ({ initialStep, toPath, phoneNum }) => {
    const dispatch = useDispatch();
    const [phoneNo, setPhoneNo] = useState(phoneNum);
    const [otpErrorMessage, setOtpErrorMessage] = useState('');
    const [firstStepErrorMessage, setFirstStepErrorMessage] = useState('');
    const customerId = useSelector((state: RootState) => state.customer.info.id);

    const stepperRef: React.MutableRefObject<StepperRef | null | undefined> = React.useRef(null);
    const navigation = useNavigate();
    const handlePrevStep = () => navigation('/');
    const handleNextStep = () => {
        stepperRef.current?.goToNextStep();
    };

    const handleFirstStep = async (formField: ILoginFormFirstStepInput) => {
        const phoneNumber = formField.phone;
        if (!phoneNumber || phoneNumber?.length < 8) return;
        const data = await dispatch(login({ phoneNumber: `0${phoneNumber}` }));
        const response = await data.payload;

        if (response.isSuccess) {
            stepperRef.current?.goToNextStep();
            setPhoneNo(phoneNumber);
        } else {
            setFirstStepErrorMessage(response.message);
        }
    };

    const handleSecondStep = async (formField: OTPFormInputs) => {
        const { otpNo } = formField;
        const data = await dispatch(loginConfirm({ phoneNumber: `0${phoneNo}`, verificationCode: otpNo }));
        const response = await data.payload;

        if (response.isSuccess) {
          if (response.customer) {
            const { isKVKKContractAccepted, isServiceContractAccepted } = response.customer;
            if (toPath) {
              navigation(toPath, { state: { phoneNum: phoneNo } });
            }
            if (isKVKKContractAccepted && isServiceContractAccepted) {
              navigation('/orders');
            } else {
              handleNextStep();
            }
          } else {
            navigation('/signup', { state: { phoneNum: phoneNo } });
          }
        } else {
          setOtpErrorMessage(response.message);
        }
    };

    const handleKvkkFormSubmit = async (data: KvkkFormInputs) => {
        const tempData = await dispatch(updateCustomer({ id: customerId, phone: phoneNo, ...data }));
        const response = await tempData.payload;

        if (response.isSuccess) {
            navigation('/orders');
        }
    };

    const STEPPER_ITEMS = [
        { Component: <LoginFormFirstStep errorMessage={firstStepErrorMessage} onSubmit={handleFirstStep} /> },
        { Component: <OtpForm errorMessage={otpErrorMessage} phoneNumber={phoneNo} onSubmit={handleSecondStep} /> },
        { Component: <LastStep cancel={handlePrevStep} onSubmit={handleKvkkFormSubmit} /> },
    ] as StepperItem[];

    return <Stepper initialStep={initialStep} ref={stepperRef} stepperItems={STEPPER_ITEMS} />;
};
