/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TrackingResponse } from '../../../services/interfaces/Shipment';
import { ShipmentActions } from '../../actions/shipmentActions/shipmentSearchActions';

export interface ShipmentTrackingReducer extends TrackingResponse { }


const initialState: ShipmentTrackingReducer = {
    id: 0,
    orderNumber: '',
    trackingNumber: 0,
    address: '',
    cityName: '',
    districtName: '',
    doorNumber: '',
    streetName: '',
    neighborhoodName: '',
    customerName: '',
    courier: 
        {
            name: '',
            image:'',
            message: ''
        }
    ,
    packages: [
        {
            orderNumber: '',
            trackingNumber: 0,
            quantity: 0,
            package: ''
        }
    ],
    statuses: [
        {
            message: '',
            date: '',
            active: true
        }
    ],
    message: '',
    couldNotDelivered: false,
    isSuccess: false
};

function shipmentTrackingReducer(state = initialState, action: { type: ShipmentActions; payload: unknown; }) {
    switch (action.type) {
        case ShipmentActions.TRACKING:
            const data = action.payload as unknown as ShipmentTrackingReducer;
            return { ...state, ...data }
        default:
            return state;
    }
}

export default shipmentTrackingReducer;
