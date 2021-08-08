/* eslint-disable react/no-string-refs */
import React, { FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';
import HomeIcon from '../../assets/images/mapHomeIcon.png';
import { MapInputWrapper } from "./Map.styles";
import { Search } from './Search';
import { Button } from '../button/Button';
import { ButtonWidth } from '../button/Button.types';
import { userLocation } from './Map.constant';


const mapContainerStyle = {
  height: "100%",
  width: "100%",
  top: '0',
  bottom: '0'
};

const libraries: Libraries = ["places"]

interface MapProps{
  onAddressClick(markerPosition: GoogleMapReact.Coords | undefined): void;
}

export const Map: FC<MapProps> = ({ onAddressClick }) => {
  const [markerPosition, setMarkerPosition] = useState<GoogleMapReact.Coords | undefined>();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCs2e7y5191x_fb_BrqdFPtn_WyhlAaVBw',
    libraries,
  });
  const mapRef = React.useRef<google.maps.Map>();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef?.current?.panTo({ lat, lng });
    mapRef?.current?.setZoom(16);;
  }, []);

  const onMapClick = React.useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng()
    setMarkerPosition({ lat, lng })
  }, []);

  const handleDrag = React.useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng()
    setMarkerPosition({ lat, lng })
  }, []);

  return (
    <div style={{ height:'100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', position: 'relative', flex: 1 }}>
        {
          !isLoaded ? <></> : (
            <GoogleMap
              id="map"
              mapContainerStyle={mapContainerStyle}
              zoom={16}
              center={userLocation}
              onClick={onMapClick}
              onLoad={onMapLoad}
            >
              {markerPosition && 
                <Marker
                  position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
                  draggable
                  onDragEnd={handleDrag}
                  icon={{
                    url: HomeIcon,
                  }}
                />
              }
            </GoogleMap>
          )
        }
        <MapInputWrapper>
          {
            !isLoaded ? <></> : (
              <Search panTo={panTo}/>
            )
          }
        </MapInputWrapper>
      </div>
      <div style={{ padding: '22px 0', display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => onAddressClick(markerPosition)} isDisabled={!markerPosition} buttonWidth={ButtonWidth.MEDIUM} label="Bu Adresi Kullan" />
      </div>
    </div>
)}