/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GetShipmentsResponse } from '../../../services/interfaces/Customer';
import { CustomerShipmentActions } from '../../actions/customerActions/customerShipmentsActions';

export interface CustomerShipmentReducer extends GetShipmentsResponse { }

const initialState: CustomerShipmentReducer = {
    shipmentItems: [],
    previousItems: [],
    isSuccess: false,
    message: '',
    filterOptions: {
        deliveryStatuses: [
            {
                key: '',
                value: 0
            }
        ],
        deliveryTypes: [
            {
                key: '',
                value: 0
            }
        ],
        senders: [
            {
                key: '',
                value: 0
            }
        ],
        deliveryAddresses: [
            {
                key: '',
                value: 0
            }
        ],
        sortOptions: [
            {
                key: '',
                value: 0
            }
        ]
    },
    pageNumber: 0,
    pageCount: 0,
    totalItemCount: 0
};

function customerShipmentReducer(state = initialState, action: { type: CustomerShipmentActions; payload: unknown; }) {
    switch (action.type) {
        case CustomerShipmentActions.GET_SHIPMENT:
            const data = action.payload as unknown as GetShipmentsResponse;
            return { ...state, ...data }
        default:
            return state;
    }
}

export default customerShipmentReducer;
