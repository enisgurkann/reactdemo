/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-script-url */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState } from "react";
import {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  StandaloneSearchBox
} from "@react-google-maps/api";
import { TextInput } from "../input/TextInput";
import { SearchWrapper, SelectInputWrapper, TextInputWrapper } from "./Map.styles";
import { SelectionInput } from "../input/SelectionInput";
import { userLocation } from "./Map.constant";

/* eslint-disable react/react-in-jsx-scope */

interface SearchProps{
  panTo({ lat, lng }: any): void;
}

const options = [
  { value: { lat: 37.0000, lng:35.3213 }, label: 'Adana' },
  { value: { lat: 37.7648, lng:38.2786 }, label: 'Adıyaman' },
  { value: { lat: 38.7507, lng:30.5567 }, label: 'Afyonkarahisar' },
  { value: { lat: 39.7191, lng:43.0503 }, label: 'Ağrı' },
  { value: { lat: 40.6499, lng:35.8353 }, label: 'Amasya' },
  { value: { lat: 39.9208, lng:32.8541 }, label: 'Ankara' },
  { value: { lat: 36.8841, lng:30.7056 }, label: 'Antalya' },
  { value: { lat: 41.1828, lng:41.8183 }, label: 'Artvin' },
  { value: { lat: 37.8560, lng:27.8416 }, label: 'Aydın' },
  { value: { lat: 39.6484, lng:27.8826 }, label: 'Balıkesir' },
  { value: { lat: 40.0567, lng:30.0665 }, label: 'Bilecik' },
  { value: { lat: 39.0626, lng:40.7696 }, label: 'Bingöl' },
  { value: { lat: 38.3938, lng:42.1232 }, label: 'Bitlis' },
  { value: { lat: 40.5760, lng:31.5788 }, label: 'Bolu' },
  { value: { lat: 37.4613, lng:30.0665 }, label: 'Burdur' },
  { value: { lat: 40.2669, lng:29.0634 }, label: 'Bursa' },
  { value: { lat: 40.1553, lng:26.4142 }, label: 'Çanakkale' },
  { value: { lat: 40.6013, lng:33.6134 }, label: 'Çankırı' },
  { value: { lat: 40.5506, lng:34.9556 }, label: 'Çorum' },
  { value: { lat: 37.7765, lng:29.0864 }, label: 'Denizli' },
  { value: { lat: 37.9144, lng:40.2306 }, label: 'Diyarbakır' },
  { value: { lat: 41.6818, lng:26.5623 }, label: 'Edirne' },
  { value: { lat: 38.6810, lng:39.2264 }, label: 'Elâzığ' },
  { value: { lat: 39.7500, lng:39.5000 }, label: 'Erzincan' },
  { value: { lat: 39.9000, lng:41.2700 }, label: 'Erzurum' },
  { value: { lat: 39.7767, lng:30.5206 }, label: 'Eskişehir' },
  { value: { lat: 37.0662, lng:37.3833 }, label: 'Gaziantep' },
  { value: { lat: 40.9128, lng:38.3895 }, label: 'Giresun' },
  { value: { lat: 40.4386, lng:39.5086 }, label: 'Gümüşhane' },
  { value: { lat: 37.5833, lng:43.7333 }, label: 'Hakkâri' },
  { value: { lat: 36.4018, lng:36.3498 }, label: 'Hatay' },
  { value: { lat: 37.7648, lng:30.5566 }, label: 'Isparta' },
  { value: { lat: 36.8000, lng:34.6333 }, label: 'Mersin' },
  { value: { lat: 41.0053, lng:28.9770 }, label: 'Istanbul' },
  { value: { lat: 38.4189, lng:27.1287 }, label: 'İzmir' },
  { value: { lat: 40.6167, lng:43.1000 }, label: 'Kars' },
  { value: { lat: 41.3887, lng:33.7827 }, label: 'Kastamonu' },
  { value: { lat: 38.7312, lng:35.4787 }, label: 'Kayseri' },
  { value: { lat: 41.7333, lng:27.2167 }, label: 'Kırklareli' },
  { value: { lat: 39.1425, lng:34.1709 }, label: 'Kırşehir' },
  { value: { lat: 40.8533, lng:29.8815 }, label: 'Kocaeli' },
  { value: { lat: 37.8667, lng:32.4833 }, label: 'Konya' },
  { value: { lat: 39.4167, lng:29.9833 }, label: 'Kütahya' },
  { value: { lat: 38.3552, lng:38.3095 }, label: 'Malatya' },
  { value: { lat: 38.6191, lng:27.4289 }, label: 'Manisa' },
  { value: { lat: 37.5858, lng:36.9371 }, label: 'Kahramanmaraş' },
  { value: { lat: 37.3212, lng:40.7245 }, label: 'Mardin' },
  { value: { lat: 37.2153, lng:28.3636 }, label: 'Muğla' },
  { value: { lat: 38.9462, lng:41.7539 }, label: 'Muş' },
  { value: { lat: 38.6939, lng:34.6857 }, label: 'Nevşehir' },
  { value: { lat: 37.9667, lng:34.6833 }, label: 'Niğde' },
  { value: { lat: 40.9839, lng:37.8764 }, label: 'Ordu' },
  { value: { lat: 41.0201, lng:40.5234 }, label: 'Rize' },
  { value: { lat: 40.6940, lng:30.4358 }, label: 'Sakarya' },
  { value: { lat: 41.2928, lng:36.3313 }, label: 'Samsun' },
  { value: { lat: 37.9333, lng:41.9500 }, label: 'Siirt' },
  { value: { lat: 42.0231, lng:35.1531 }, label: 'Sinop' },
  { value: { lat: 39.7477, lng:37.0179 }, label: 'Sivas' },
  { value: { lat: 40.9833, lng:27.5167 }, label: 'Tekirdağ' },
  { value: { lat: 40.3167, lng:36.5500 }, label: 'Tokat' },
  { value: { lat: 41.0015, lng:39.7178 }, label: 'Trabzon' },
  { value: { lat: 39.3074, lng:39.4388 }, label: 'Tunceli' },
  { value: { lat: 37.1591, lng:38.7969 }, label: 'Şanlıurfa' },
  { value: { lat: 38.6823, lng:29.4082 }, label: 'Uşak' },
  { value: { lat: 38.4891, lng:43.4089 }, label: 'Van' },
  { value: { lat: 39.8181, lng:34.8147 }, label: 'Yozgat' },
  { value: { lat: 41.4564, lng:31.7987 }, label: 'Zonguldak' },
  { value: { lat: 38.3687, lng:34.0370 }, label: 'Aksaray' },
  { value: { lat: 40.2552, lng:40.2249 }, label: 'Bayburt' },
  { value: { lat: 37.1759, lng:33.2287 }, label: 'Karaman' },
  { value: { lat: 39.8468, lng:33.5153 }, label: 'Kırıkkale' },
  { value: { lat: 37.8812, lng:41.1351 }, label: 'Batman' },
  { value: { lat: 37.4187, lng:42.4918 }, label: 'Şırnak' },
  { value: { lat: 41.5811, lng:32.4610 }, label: 'Bartın' },
  { value: { lat: 41.1105, lng:42.7022 }, label: 'Ardahan' },
  { value: { lat: 39.8880, lng:44.0048 }, label: 'Iğdır' },
  { value: { lat: 40.6500, lng:29.2667 }, label: 'Yalova' },
  { value: { lat: 41.2061, lng:32.6204 }, label: 'Karabük' },
  { value: { lat: 36.7184, lng:37.1212 }, label: 'Kilis' },
  { value: { lat: 37.2130, lng:36.1763 }, label: 'Osmaniye' },
  { value: { lat: 40.8438, lng:31.1565 }, label: 'Düzce' },
];

export const Search: FC<SearchProps> = ({ panTo }) => {
  const [selectedCity, setSelectedCity] = useState<{value: {lat: number; lng: number}, label: string} | undefined>();
  const [value, setValue] = useState('');
  const searchRef = React.useRef<google.maps.places.SearchBox>();

  useEffect(() => {
    if(selectedCity?.value){
      panTo(selectedCity?.value);
    }
  }, [panTo, selectedCity, selectedCity?.value]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  const onSearchLoad = React.useCallback((searchBox: google.maps.places.SearchBox) => {
    searchRef.current = searchBox;
  }, []);

  const onPlacesChanged = async () => {
    const place = searchRef?.current?.getPlaces()![0];
    const result = await getGeocode({ address: place?.formatted_address });
    const { lat, lng } = await getLatLng(result[0])
    setValue(`${place?.formatted_address}`);
    panTo({ lat, lng })
  }

  return (
    <SearchWrapper>
      <SelectInputWrapper>
        <SelectionInput value={selectedCity} options={options} onChange={(val) => setSelectedCity(val)} />
      </SelectInputWrapper>
      <TextInputWrapper>
        <StandaloneSearchBox
          bounds={ new google.maps.LatLngBounds({ 
            lat: selectedCity ? selectedCity.value.lat : userLocation.lat,
            lng: selectedCity ? selectedCity.value.lng : userLocation.lng })}
          onLoad={onSearchLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <TextInput placeholder="Mahalle cadde veya sokak ara" disabled={!selectedCity} value={value} onChange={handleChange} id="search"/>
        </StandaloneSearchBox>
      </TextInputWrapper>
    </SearchWrapper>
  );
}