/* eslint-disable no-octal */
/* eslint-disable import/no-cycle */
import ShipmentServices from "../../../services/ShipmentServices";
import { SearchRequest, TrackingRequest } from "../../../services/interfaces/Shipment";

export enum ShipmentActions {
    SEARCH = '@@SHIPMENT/SEARCH',
    TRACKING = '@@SHIPMENT/TRACKING'
}

export const search = (data: SearchRequest) => ({
    type: ShipmentActions.SEARCH,
    payload: ShipmentServices.search(data)
});

export const tracking = (data: TrackingRequest) => ({
    type: ShipmentActions.TRACKING,
    payload: ShipmentServices.trancking(data)
});

