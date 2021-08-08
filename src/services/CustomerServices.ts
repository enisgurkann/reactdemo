/* eslint-disable import/no-cycle */

import serviceCall from './core/request';
import {
    BaseResponse,
    LoginConfirmResponse,
    LoginConfirmRequest,
    LoginRequest,
    GetShipmentsRequest,
    GetShipmentsResponse,
    UpdateCustomerRequest,
    GetCustomerRequest,
    SignUpRequest,
    SignUpResponse,
    GetCustomerAdressRequest,
    GetCustomerAdressResponse,
    CreateCustomerAdressRequest,
    CreateCustomerAdressResponse,
    UpdateCustomerAdressRequest,
    UpdateCustomerAdressResponse,
    DeleteCustomerAdressRequest,
    GetCustomerAdressForAdressIdRequest,
    GetCustomerAdressForAdressIdResponse,
    GetCustomerDeliveryPointRequest,
    GetCustomerDeliveryPointResponse,
    UpdateCustomerResponse,
    CustomerVerifyPhoneRequest,
    CustomerVerifyEmailRequest,
    CustomerUpdateEmailRequest,
} from './interfaces/Customer';

class CustomerServices {
    static login = async (data: LoginRequest) =>
        (serviceCall('customers/login', {
            method: 'POST',
            data,
        }) as unknown) as BaseResponse;

    static loginConfirm = async (data: LoginConfirmRequest) =>
        (serviceCall('customers/confirm', {
            method: 'POST',
            data,
        }) as unknown) as LoginConfirmResponse;

    static updateCustomer = async (data: UpdateCustomerRequest) =>
        (serviceCall(`customers/${data.id}`, {
            method: 'PUT',
            data,
        }) as unknown) as UpdateCustomerResponse;

    static getCustomer = async (data: GetCustomerRequest) =>
        (serviceCall(`customers/${data.id}`, {
            method: 'GET',
        }) as unknown) as BaseResponse;

    static getShipments = async (data: GetShipmentsRequest) =>
        (serviceCall(`customers/${data.customerId}/shipments`, {
            method: 'POST',
            data,
        }) as unknown) as GetShipmentsResponse;

    static signup = async (data: SignUpRequest) =>
        (serviceCall(`customers/register`, {
            method: 'POST',
            data,
        }) as unknown) as SignUpResponse;

    static deleteCustomerAdress = async (data: DeleteCustomerAdressRequest) =>
        (serviceCall(`customers/${data.customerId}/address/${data.addressId}`, {
            method: 'DELETE',
        }) as unknown) as GetCustomerAdressResponse;

    static getCustomerAdress = async (data: GetCustomerAdressRequest) =>
        (serviceCall(`customers/${data.customerId}/address`, {
            method: 'GET',
        }) as unknown) as GetCustomerAdressResponse;

    static getCustomerAdressForCustomerId = async (data: GetCustomerAdressForAdressIdRequest) =>
        (serviceCall(`customers/${data.customerId}/address/${data.addressId}`, {
            method: 'GET',
        }) as unknown) as GetCustomerAdressForAdressIdResponse;

    static createCustomerAdress = async (data: CreateCustomerAdressRequest) =>
        (serviceCall(`customers/${data.customerId}/address`, {
            method: 'POST',
            data: {
                addressId: data.addressId,
                title: data.title,
                addressType: data.addressType,
                address: data.address,
                latitude: data.latitude,
                longitude: data.longitude,
                cityName: data.cityName,
                district: data.district,
                building: data.building,
                floor: data.floor,
                doorNumber: data.doorNumber,
            },
        }) as unknown) as CreateCustomerAdressResponse;

    static updateCustomerAdress = async (data: UpdateCustomerAdressRequest) =>
        (serviceCall(`customers/${data.customerId}/address`, {
            method: 'PUT',
            data: {
                addressId: data.addressId,
                title: data.title,
                addressType: data.addressType,
                address: data.address,
                cityName: data.cityName,
                district: data.district,
                building: data.building,
                floor: data.floor,
                doorNumber: data.doorNumber,
            },
        }) as unknown) as UpdateCustomerAdressResponse;

    static getCustomerDeliveryPoint = async (data: GetCustomerDeliveryPointRequest) =>
        (serviceCall(`customers/${data.customerId}/deliverypoint`, {
            method: 'GET',
        }) as unknown) as GetCustomerDeliveryPointResponse;

    static verifyPhone = async (data: CustomerVerifyPhoneRequest) =>
        (serviceCall(`customers/${data.customerId}/verify-phone`, {
            method: 'POST',
            data: {
              phoneNumber: data.phoneNumber,
              verificationCode: data.verificationCode
            }
        }) as unknown) as BaseResponse;

    static verifyEmail = async (data: CustomerVerifyEmailRequest) =>
      (serviceCall(`customers/verify-email`, {
        method: 'POST',
        data
    }) as unknown) as BaseResponse;

    static updateEmail = async (data: CustomerUpdateEmailRequest) =>
      (serviceCall(`customers/${data.customerId}/email`, {
        method: 'PUT',
        data: {
          email: data.email,
        }
    }) as unknown) as BaseResponse;
}

export default CustomerServices;
