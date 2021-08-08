/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SearchResponse } from '../../../services/interfaces/Shipment';
import { ShipmentActions } from '../../actions/shipmentActions/shipmentSearchActions';

export interface ShipmentSearchReducer extends SearchResponse {}

const initialState: ShipmentSearchReducer = {
  customerFound: false,
  otpLoginRequired: false,
  trackingNumberFound: false,
  shipments: [
    {
      trackingNumber: 0
    }
  ],
  isSuccess: false,
  message: ''
};

function shipmentSearchReducer(state = initialState, action: { type: ShipmentActions; payload: unknown; }) {
  switch (action.type) {
    case ShipmentActions.SEARCH:
      const data = action.payload as unknown as SearchResponse;
      return { ...state, ...data }
    default:
      return state;
  }
}

export default shipmentSearchReducer;
