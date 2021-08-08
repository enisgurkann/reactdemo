interface BaseResponse {
    isSuccess: boolean;
    message: string;
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  tcIdentityNumber: string;
  emailAddress?: string;
  isSmsActive: boolean;
  isEmailActive: boolean;
  isPhoneCallActive: boolean;
  isKVKKContractAccepted: boolean;
  isServiceContractAccepted: boolean;
  emailConfirmed: boolean;
  phoneConfirmed: boolean;
}

interface LoginRequest {
  phoneNumber: string;
}

interface LoginConfirmRequest {
  phoneNumber: string;
  verificationCode: string;
}

interface LoginConfirmResponse extends BaseResponse {
  customer: Customer;
  token: string;
}

interface Shipment {
    deliveryType: {
        name: string;
        type: number;
    };
    plannedDeliveryDate: string;
    sender: {
        imageUrl: string;
        name: string;
    };
    status: 'İptal Gönderi' | 'Teslim Edildi' | 'Kargo Sevk Emri Alındı' | 'Gönderi Alındı' | 'Yönlendirme' | 'Belge Düzenlendi' | 'Şube TM Yükleme';
    trackingNumber: number;
}
interface GetShipmentsRequest {
    customerId: number;
    pageNumber?: number;
    pageSize?: number;
    sortBy?: number;
    deliveryStatuses?: number[];
    deliveryTypes?: number[];
    senders?: number[];
    deliveryAddresses?: number[];
}

interface GetShipmentsResponse extends BaseResponse {
    previousItems: Array<Shipment>;
    shipmentItems: Array<Shipment>;
    filterOptions: {
        deliveryStatuses: [
            {
                key: string;
                value: number;
            }
        ];
        deliveryTypes: [
            {
                key: string;
                value: number;
            }
        ];
        senders: [
            {
                key: string;
                value: number;
            }
        ];
        deliveryAddresses: [
            {
                key: string;
                value: number;
            }
        ];
        sortOptions: [
            {
                key: string;
                value: number;
            }
        ];
    };
    pageNumber: number;
    pageCount: number;
    totalItemCount: number;
}

interface UpdateCustomerRequest {
  id: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  tcIdentityNumber?: string;
  isSmsActive: boolean;
  isEmailActive: boolean;
  isPhoneCallActive: boolean;
  isKVKKContractAccepted: boolean;
  isServiceContractAccepted: boolean;
  emailAddress?: string;
}

interface UpdateCustomerResponse extends BaseResponse {
  otpRequired: boolean;
}

interface GetCustomerRequest {
    id: number;
}

interface GetCustomerResponse extends BaseResponse {
    customer: Customer;
}

interface SignUpRequest {
  name: string;
  surname: string;
  tcIdentityNumber: string;
  phoneNumber: string;
  adress: string;
  kvkkApproved: boolean;
  contractApproved: boolean;
  emailAddress?: string;
  smsActive: boolean;
  emailActive: boolean;
  phoneCallActive: boolean;
}

interface SignUpResponse extends BaseResponse {
  customerId: number;
  token: string;
}

interface GetCustomerAdressRequest {
  customerId: number;
}

interface DeleteCustomerAdressRequest extends GetCustomerAdressRequest {
  addressId: number;
}

interface GetCustomerAdressForAdressIdRequest extends GetCustomerAdressRequest {
  addressId: number;
}

interface GetCustomerAdressForAdressIdResponse extends CustomerAdressType {
}

interface CustomerAdressType {
    addressId: number;
    title: string;
    addressType: number;
    address: string;
    cityName: string;
    district: string;
    building: string;
    floor: string;
    doorNumber: string;
    latitude: number;
    longitude: number;
  }

interface GetCustomerAdressResponse extends Array<CustomerAdressType>, BaseResponse { }

interface CreateCustomerAdressRequest extends CustomerAdressType {
    customerId?: number;
}

interface CreateCustomerAdressResponse extends BaseResponse { }

interface UpdateCustomerAdressRequest extends CustomerAdressType {
    customerId?: number;
}

interface UpdateCustomerAdressResponse extends BaseResponse { }

interface GetCustomerDeliveryPointRequest {
    customerId: number;
}
interface CustomerDeliveryPointType {
    id: number;
    title: string;
    address: string;
    cityName: string;
    district: string;
    phone: string;
    longitude: string;
    latitude: string;
    imageUrl: string;
    openTime: string;
    endTime: string;
    distance: string
}

interface GetCustomerDeliveryPointResponse extends BaseResponse {
    officePoints: Array<CustomerDeliveryPointType>;
    homePoints: Array<CustomerDeliveryPointType>;
}

interface CustomerVerifyPhoneRequest {
  phoneNumber: string;
  verificationCode: string;
  customerId: string;
}

interface CustomerVerifyEmailRequest {
  email: string;
  token: string;
}

interface CustomerUpdateEmailRequest {
  email: string;
  customerId: string;
}

export type {
  Customer,
  LoginRequest,
  LoginConfirmRequest,
  BaseResponse,
  LoginConfirmResponse,
  GetShipmentsRequest,
  GetShipmentsResponse,
  Shipment,
  UpdateCustomerRequest,
  GetCustomerRequest,
  GetCustomerResponse,
  SignUpRequest,
  SignUpResponse,
  GetCustomerAdressRequest,
  DeleteCustomerAdressRequest,
  GetCustomerAdressResponse,
  CreateCustomerAdressRequest,
  CreateCustomerAdressResponse,
  UpdateCustomerAdressRequest,
  UpdateCustomerAdressResponse,
  GetCustomerAdressForAdressIdRequest,
  GetCustomerAdressForAdressIdResponse,
  CustomerAdressType,
  GetCustomerDeliveryPointRequest,
  GetCustomerDeliveryPointResponse,
  CustomerDeliveryPointType,
  UpdateCustomerResponse,
  CustomerVerifyPhoneRequest,
  CustomerVerifyEmailRequest,
  CustomerUpdateEmailRequest
};
