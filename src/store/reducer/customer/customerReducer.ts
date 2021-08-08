/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers } from 'redux';
import customerInfoReducer, { CustomerInfoReducer } from "./customerInfoReducer";
import customerShipmentReducer, { CustomerShipmentReducer } from "./customerShipmentReducer";

export interface ICustomerReducer {
  info: CustomerInfoReducer;
  shipments: CustomerShipmentReducer;
}

const customerReducer = combineReducers({
  shipments: customerShipmentReducer,
  info: customerInfoReducer,
});

export default customerReducer;
