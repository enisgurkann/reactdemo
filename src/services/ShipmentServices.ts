/* eslint-disable import/no-cycle */

import serviceCall from './core/request';
import { SearchRequest, SearchResponse, TrackingRequest, TrackingResponse } from './interfaces/Shipment';


class ShipmentServices {
    static search = async (data: SearchRequest) => serviceCall('shipments/search', {
        method: 'POST',
        data,
    }) as unknown as SearchResponse;

    static trancking = async (data: TrackingRequest) => serviceCall('shipments/tracking', {
        method: 'POST',
        data,
    }) as unknown as TrackingResponse;
}

export default ShipmentServices;