/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers } from 'redux';
import shipmentSearchReducer, { ShipmentSearchReducer } from "./shipmentSearchReducer";
import shipmentTrackingReducer, { ShipmentTrackingReducer } from './shipmentTrackingReducer';

export interface IShipmentReducer {
    search: ShipmentSearchReducer;
    tracking: ShipmentTrackingReducer;
}

const shipmentReducer = combineReducers({
    search: shipmentSearchReducer,
    tracking: shipmentTrackingReducer
});

export default shipmentReducer;
