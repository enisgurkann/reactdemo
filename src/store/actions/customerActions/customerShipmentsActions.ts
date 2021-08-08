/* eslint-disable no-octal */
/* eslint-disable import/no-cycle */
import CustomerServices from "../../../services/CustomerServices";
import { GetShipmentsRequest } from "../../../services/interfaces/Customer";

export enum CustomerShipmentActions {
    GET_SHIPMENT = '@@CUSTOMER_SHIPMENT/GET_SHIPMENT'
}

export const getShipments = (data: GetShipmentsRequest) => ({
    type: CustomerShipmentActions.GET_SHIPMENT,
    payload: CustomerServices.getShipments(data)
});

