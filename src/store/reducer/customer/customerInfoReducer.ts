/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable radix */
/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Customer, CustomerAdressType, CustomerDeliveryPointType, GetCustomerAdressResponse, GetCustomerDeliveryPointResponse, GetCustomerResponse, LoginConfirmResponse, SignUpResponse } from '../../../services/interfaces/Customer';
import { CustomerActions } from '../../actions/customerActions/customerInfoActions';

export interface CustomerInfoReducer extends Customer {
    token: string;
    addressList: Array<CustomerAdressType>;

    // will be change after service revision
    deliveryPoint: Array<GetCustomerDeliveryPointResponse>;
    officePoints: Array<CustomerDeliveryPointType>;
    homePoints: Array<CustomerDeliveryPointType>;
}

const initialState: CustomerInfoReducer = {
  id: 0,
  firstName: '',
  lastName: '',
  phoneConfirmed: true,
  emailConfirmed: true,
  phone: '',
  tcIdentityNumber: '',
  isSmsActive: false,
  isEmailActive: false,
  isPhoneCallActive: false,
  isKVKKContractAccepted: false,
  isServiceContractAccepted: false,
  token: '',
  addressList: [],
  deliveryPoint: [],
  homePoints: [],
  officePoints: []
};

function customerInfoReducer(state = initialState, action: { type: CustomerActions; payload: unknown }) {
  switch (action.type) {
    case CustomerActions.LOGIN_CONFIRM:
      const data = (action.payload as unknown) as LoginConfirmResponse;
      return { ...state, ...data.customer, token: data.token };
    case CustomerActions.GET_CUSTOMER:
      const dataCustomer = (action.payload as unknown) as GetCustomerResponse;
      return { ...state, ...dataCustomer.customer };
    case CustomerActions.SIGN_UP:
      const dataSignUp = (action.payload as unknown) as SignUpResponse;
      return { ...state, ...dataSignUp, id: dataSignUp.customerId };
    case CustomerActions.GET_CUSTOMER_ADRESS:
      const dataCustomerAdress = (action.payload as unknown) as GetCustomerAdressResponse;
      const tempAdress = Object.keys(dataCustomerAdress).length &&
          Object.keys(dataCustomerAdress).map((item) =>  {
            if(!isNaN(+item)) {
              return ({
                addressId: dataCustomerAdress?.[parseInt(item)]?.addressId,
                title: dataCustomerAdress?.[parseInt(item)]?.title,
                addressType: dataCustomerAdress?.[parseInt(item)]?.addressType,
                address: dataCustomerAdress?.[parseInt(item)]?.address,
                cityName: dataCustomerAdress?.[parseInt(item)]?.cityName,
                district: dataCustomerAdress?.[parseInt(item)]?.district,
                building: dataCustomerAdress?.[parseInt(item)]?.building,
                floor: dataCustomerAdress?.[parseInt(item)]?.floor,
                doorNumber: dataCustomerAdress?.[parseInt(item)]?.doorNumber,
              })
            }
          });
      return { ...state, addressList: tempAdress };
    case CustomerActions.GET_CUSTOMER_DELIVERY_POINT:
        const deliveryPoint = (action.payload as unknown) as GetCustomerDeliveryPointResponse;
        return { ...state, ...deliveryPoint };

    default:
        return state;
  }
}

export default customerInfoReducer;
