import { BaseResponse } from "./Customer";

interface SearchRequest {
    searchTerm: string;
}

interface TrackingRequest {
    trackingNumber: number,
    customerFound: boolean,
    otpLoginRequired: boolean
}

interface SearchResponse extends BaseResponse {
    customerFound: boolean,
    otpLoginRequired: boolean,
    trackingNumberFound: boolean;
    shipments: [
        {
            trackingNumber: number
        }
    ]
}

interface TrackingResponse extends BaseResponse {
    id: number,
    orderNumber: string,
    trackingNumber: number,
    address: string,
    cityName: string,
    districtName: string,
    doorNumber: string,
    streetName: string,
    neighborhoodName: string,
    customerName: string,
    courier: 
        {
            name: string,
            image: string,
            message: string
        }
    ,
    packages: [
        {
            orderNumber: string,
            trackingNumber: number,
            quantity: number,
            package: string
        }
    ],
    statuses: [
        {
            message: string,
            date: string,
            active: true
        }
    ],
    message: string,
    couldNotDelivered: boolean
}

export type { SearchRequest, SearchResponse, TrackingRequest, TrackingResponse }