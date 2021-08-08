import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, PhoneInput, Screen, TextInput, SmsModal } from '../../components';
import { NavItem } from '../../components/screen/Screen';
import { PermissionButton, PermissionCheck, PermissionDetail, PermissionTitle, PersonelInfoInput, PersonelInfoForm } from './PersonalInfo.styles';
import { CustomerVerifyPhoneRequest, UpdateCustomerRequest } from '../../services/interfaces/Customer';
import { getCustomer, updateCustomerForPersonalInfo, verifyPhone, updateEmail } from '../../store/actions/customerActions/customerInfoActions';
import { RootState } from '../../store/reducer';
import { addModal } from '../../store/actions/generalActions/modalActions';
import { SmsModalInputs } from '../../components/modal/SmsModal';
import { EmailForm, EmailFormFields } from './EmailForm';

export interface PersonalInfoProps {}

const SIDE_MENU_ITEMS: Array<NavItem> = [
  { path: 'personal-info', text: 'Kişisel Bilgiler', isActive: true },
  { path: 'adress', text: 'Adreslerim' },
  { path: 'delivery-adress', text: 'Kargon Burada Noktalarım' },
  { path: 'delivery-person', text: 'Kim Alabilir' },
];

export type PersonelInfoFormInputs = {
  firstName: string;
  lastName: string;
  phone: string;
  emailAddress?: string;
  tcIdentityNumber: string;
  isSmsActive: boolean;
  isEmailActive: boolean;
  isPhoneCallActive: boolean;
};

export const PersonalInfoForm: React.FC<PersonalInfoProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm<PersonelInfoFormInputs>();
  const dispatch = useDispatch();
  const customer = useSelector((state: RootState) => state.customer.info);
  const [showEmail, setShowEmail] = useState(customer.isEmailActive);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsError, setSmsError] = useState('');
  const isEmailActive = watch('isEmailActive');

  useEffect(() => {
    dispatch(getCustomer({ id: customer.id }));
  }, [customer.id, dispatch]);


  useEffect(() => {
    setShowEmail(isEmailActive);
  }, [isEmailActive]);

  const handlePersonal = async (formField: PersonelInfoFormInputs) => {
    setPhoneNumber(formField.phone);
    const request: UpdateCustomerRequest = {
      id: customer.id,
      firstName: formField.firstName,
      lastName: formField.lastName,
      phone: formField.phone,
      tcIdentityNumber: formField.tcIdentityNumber,
      isSmsActive: formField.isSmsActive,
      isEmailActive: formField.isEmailActive,
      isPhoneCallActive: formField.isPhoneCallActive,
      isKVKKContractAccepted: true,
      isServiceContractAccepted: true,
      emailAddress: formField.emailAddress,
    };
    const data = await dispatch(updateCustomerForPersonalInfo(request));
    const response = await data.payload;

    if (response.isSuccess) {
      if(response.otpRequired) {
        setIsModalOpen(true);
      } else {
        dispatch(getCustomer({ id: customer.id }));
        dispatch(addModal( { type: 'success', message: response.message } ));
      }
    }
  };

  const handleCloseSmsModal = () => {
    setSmsError('');
    setIsModalOpen(false);
  }

  const handleSmsSubmit = async (formField: SmsModalInputs) => {
    const request: CustomerVerifyPhoneRequest = {
      phoneNumber,
      verificationCode: formField.verificationCode,
      customerId: `${customer.id}`,
    }
    const data = await dispatch(verifyPhone(request));
    const response = await data.payload;
    if (response.isSuccess) {
      dispatch(getCustomer({ id: customer.id }));
      dispatch(addModal( { type: 'success', message: response.message } ));
      handleCloseSmsModal();
    } else {
      setSmsError(response.message);
    }
  }

  const handleEmailSubmit = async (formField: EmailFormFields) => {
    dispatch(updateEmail({
      email: formField.emailAddress,
      customerId: customer.id.toString()
    }))
  } 

  return (
    <>
      <SmsModal 
        onRequestClose={handleCloseSmsModal} 
        errorMessage={smsError}
        phoneNumber={phoneNumber}
        isModalOpen={isModalOpen}
        onSubmit={handleSmsSubmit}
      />
      <PersonelInfoForm onSubmit={handleSubmit(handlePersonal)}>
        <Row>
          <Col lg={4}>
            <PersonelInfoInput>
              <Controller
                defaultValue={customer.firstName}
                rules={{ required: 'Bu alanı doldurunuz.' }}
                name="firstName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput value={value} onChange={(event) => onChange(event)} label="Ad" id="firstName" error={errors.firstName?.message} />
                )}
              />
            </PersonelInfoInput>
            <PersonelInfoInput>
              <Controller
                defaultValue={customer.lastName}
                rules={{ required: 'Bu alanı doldurunuz.' }}
                name="lastName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput value={value} onChange={(event) => onChange(event)} label="Soyad" id="lastName" error={errors.lastName?.message} />
                )}
              />
            </PersonelInfoInput>
            <PersonelInfoInput>
              <Controller
                name="phone"
                control={control}
                defaultValue={customer.phone?.substring(1)}
                render={({ field }) => <PhoneInput {...field} id="phone" placeHolder="Cep Telefonu" error={errors.phone?.message} />}
              />
            </PersonelInfoInput>
            <PersonelInfoInput>
              <Controller
                defaultValue={customer.tcIdentityNumber}
                rules={{ required: 'Bu alanı doldurunuz.' }}
                name="tcIdentityNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    value={value}
                    type="numeric"
                    maxLength={11}
                    onChange={(event) => onChange(event)}
                    label="T.C. Kimlik Numarası"
                    id="tcIdentityNumber"
                    error={errors.tcIdentityNumber?.message}
                  />
                )}
              />
            </PersonelInfoInput>
          </Col>
          <Col lg={5} lgOffset={1}>
            <PermissionTitle>İletişim İzinleri</PermissionTitle>
            <PermissionDetail>
              Aykargo’nun ürün ve hizmetlerine ilişkin yapılacak tanıtım,
              pazarlama ve bilgilendirme faaliyetleri kapsamında tarafıma ticari elektronik ileti ve diğer iletilerin
              gönderilebilmesine onay veriyorum.
            </PermissionDetail>
            <PermissionCheck>
              <div>
                <Controller
                  name="isEmailActive"
                  control={control}
                  defaultValue={customer.isEmailActive}
                  render={({ field: { value, onChange } }) => <Checkbox label="E-Posta ile" checked={value} onChange={(event) => onChange(event.target.checked)} />}
                />
                {showEmail && (
                  <EmailForm onSubmit={handleEmailSubmit} />
                )}
              </div>
              <div>
                <Controller
                  name="isPhoneCallActive"
                  control={control}
                  defaultValue={customer.isPhoneCallActive}
                  render={({ field: { value, onChange } }) => (
                    <Checkbox label="Telefon ile (Arama ve Çağrılar)" checked={value} onChange={(event) => onChange(event.target.checked)} />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="isSmsActive"
                  control={control}
                  defaultValue={customer.isSmsActive}
                  render={({ field: { value, onChange } }) => <Checkbox label="SMS ile" checked={value} onChange={(event) => onChange(event.target.checked)} />}
                />
              </div>
            </PermissionCheck>
          </Col>
        </Row>
        <Row center="sm" start="lg">
          <Col xs={12} md={6} lg={7} lgOffset={2}>
            <PermissionButton>
              <Button type="submit" label="GÜNCELLE" isDisabled={!isDirty} />
            </PermissionButton>
          </Col>
        </Row>
      </PersonelInfoForm>
    </>
  );
};

export const PersonalInfo = () => (
  <Screen sideMenuItems={SIDE_MENU_ITEMS}>
    <PersonalInfoForm />
  </Screen>
)