/* eslint-disable import/no-mutable-exports */
import GoogleMapReact from 'google-map-react';

const ISTANBUL_COORDINATES: GoogleMapReact.Coords  = { lat: 41.015137, lng: 28.979530 };

let userLocation: GoogleMapReact.Coords = ISTANBUL_COORDINATES;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    userLocation = { lat: position.coords.latitude, lng: position.coords.longitude }
  });
}

export { userLocation, ISTANBUL_COORDINATES }