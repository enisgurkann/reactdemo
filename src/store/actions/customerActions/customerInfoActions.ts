/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable no-octal */
/* eslint-disable import/no-cycle */
import CustomerServices from '../../../services/CustomerServices';
import {
    CreateCustomerAdressRequest,
    CustomerUpdateEmailRequest,
    CustomerVerifyEmailRequest,
    CustomerVerifyPhoneRequest,
    DeleteCustomerAdressRequest,
    GetCustomerAdressForAdressIdRequest,
    GetCustomerAdressRequest,
    GetCustomerDeliveryPointRequest,
    GetCustomerRequest,
    LoginConfirmRequest,
    LoginRequest,
    SignUpRequest,
    UpdateCustomerAdressRequest,
    UpdateCustomerRequest,
} from '../../../services/interfaces/Customer';

export enum CustomerActions {
  LOGIN = '@@customer/LOGIN',
  LOGIN_CONFIRM = '@@customer/LOGIN_CONFIRM',
  UPDATE_CUSTOMER = '@@customer/UPDATE_CUSTOMER',
  UPDATE_CUSTOMER_FOR_PERSONAL_INFO = '@@customer/UPDATE_CUSTOMER_FOR_PERSONAL_INFO',
  GET_CUSTOMER = '@@customer/GET_CUSTOMER',
  SIGN_UP = '@@customer/SIGN_UP',
  GET_CUSTOMER_ADRESS = '@@customer/GET_CUSTOMER_ADRESS',
  DELETE_CUSTOMER_ADRESS = '@@customer/DELETE_CUSTOMER_ADRESS',
  CREATE_CUSTOMER_ADRESS = '@@customer/CREATE_CUSTOMER_ADRESS',
  UPDATE_CUSTOMER_ADRESS = '@@customer/UPDATE_CUSTOMER_ADRESS',
  GET_CUSTOMER_ADRESS_FOR_ADRESS_ID = '@@customer/GET_CUSTOMER_ADRESS_FOR_ADRESS_ID',
  GET_CUSTOMER_DELIVERY_POINT = '@@customer/GET_CUSTOMER_DELIVERY_POINT',
  VERIFY_CUSTOMER_PHONE = '@@customer/VERIFY_CUSTOMER_PHONE',
  VERIFY_CUSTOMER_MAIL = '@@customer/VERIFY_CUSTOMER_MAIL',
  UPDATE_CUSTOMER_MAIL = '@@customer/UPDATE_CUSTOMER_MAIL',
}

export const login = (data: LoginRequest) => ({
    type: CustomerActions.LOGIN,
    payload: CustomerServices.login(data),
});

export const loginConfirm = (data: LoginConfirmRequest) => ({
    type: CustomerActions.LOGIN_CONFIRM,
    payload: CustomerServices.loginConfirm(data),
});

export const updateCustomer = (data: UpdateCustomerRequest) => ({
    type: CustomerActions.UPDATE_CUSTOMER,
    payload: CustomerServices.updateCustomer(data),
});

// show popup personalinfo page 
export const updateCustomerForPersonalInfo = (data: UpdateCustomerRequest) => ({
    type: CustomerActions.UPDATE_CUSTOMER_FOR_PERSONAL_INFO,
    payload: CustomerServices.updateCustomer(data),
});

export const getCustomer = (data: GetCustomerRequest) => ({
    type: CustomerActions.GET_CUSTOMER,
    payload: CustomerServices.getCustomer(data),
});

export const signup = (data: SignUpRequest) => ({
    type: CustomerActions.SIGN_UP,
    payload: CustomerServices.signup(data),
});

export const deleteCustomerAdress = (data: DeleteCustomerAdressRequest) => ({
    type: CustomerActions.DELETE_CUSTOMER_ADRESS,
    payload: CustomerServices.deleteCustomerAdress(data),
});

export const getCustomerAdress = (data: GetCustomerAdressRequest) => ({
    type: CustomerActions.GET_CUSTOMER_ADRESS,
    payload: CustomerServices.getCustomerAdress(data),
});

export const getCustomerAdressForCustomerId = (data: GetCustomerAdressForAdressIdRequest) => ({
    type: CustomerActions.GET_CUSTOMER_ADRESS_FOR_ADRESS_ID,
    payload: CustomerServices.getCustomerAdressForCustomerId(data),
});

export const createCustomerAdress = (data: CreateCustomerAdressRequest) => ({
    type: CustomerActions.CREATE_CUSTOMER_ADRESS,
    payload: CustomerServices.createCustomerAdress(data),
});

export const updateCustomerAdress = (data: UpdateCustomerAdressRequest) => ({
    type: CustomerActions.UPDATE_CUSTOMER_ADRESS,
    payload: CustomerServices.updateCustomerAdress(data),
});

export const getCustomerDeliveryPoint = (data: GetCustomerDeliveryPointRequest) => ({
  type: CustomerActions.GET_CUSTOMER_DELIVERY_POINT,
  payload: CustomerServices.getCustomerDeliveryPoint(data),
});

export const verifyPhone = (data: CustomerVerifyPhoneRequest) => ({
  type: CustomerActions.VERIFY_CUSTOMER_PHONE,
  payload: CustomerServices.verifyPhone(data),
});

export const verifyEmail = (data: CustomerVerifyEmailRequest) => ({
  type: CustomerActions.VERIFY_CUSTOMER_MAIL,
  payload: CustomerServices.verifyEmail(data),
});

export const updateEmail = (data: CustomerUpdateEmailRequest) => ({
    type: CustomerActions.UPDATE_CUSTOMER_MAIL,
    payload: CustomerServices.updateEmail(data),
});
