/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import customerReducer, { ICustomerReducer } from './customer/customerReducer';
import deviceReducer, { IDeviceReducer } from './device/deviceReducer';
import generalReducer, { IGeneralReducer } from './general/generalReducer';
import shipmentReducer, { IShipmentReducer } from './shipment/shipmentReducer';

export interface RootState {
  customer: ICustomerReducer;
  shipment: IShipmentReducer;
  device: IDeviceReducer;
  general: IGeneralReducer;
}

export enum StoreActions {
  RESET = '@@STORE/RESET'
} 

const appReducer = combineReducers({
  customer: customerReducer,
  shipment: shipmentReducer,
  device: deviceReducer,
  general: generalReducer,
});

export default appReducer;
