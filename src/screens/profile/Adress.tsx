/* eslint-disable radix */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import { Button, ButtonTypes, Screen, Stepper, StepperItem, StepperRef } from '../../components';
import { AdressCard } from '../../components/card/AdressCard';
import { NavItem } from '../../components/screen/Screen';
import { customDeleteItemModalStyles } from '../../components/maps-modal/MapsModal.styles';
import { AdressWrapper, UserAdressButtonWrapper, UserAdressWrapper, TitleLabel, CleanButton, QuestionLabel, StyledButtonContainer, StyledButton } from './Adress.styles';
import { CreateCustomerAdressRequest, DeleteCustomerAdressRequest, GetCustomerAdressRequest } from '../../services/interfaces/Customer';
import { RootState } from '../../store/reducer';
import {
    getCustomerAdress,
    deleteCustomerAdress,
    createCustomerAdress,
} from '../../store/actions/customerActions/customerInfoActions';
import close from '../../assets/images/close.png';
import MapModal from '../../components/Map/MapModal/MapModal';
import { Map } from '../../components/Map/Map';
import { MapForm, MapFormInputs } from '../../components/Map/MapForm';

export interface AdressProps { }

const SIDE_MENU_ITEMS: Array<NavItem> = [
  { path: 'personal-info', text: 'Kişisel Bilgiler' },
  { path: 'adress', text: 'Adreslerim', isActive: true },
  { path: 'delivery-adress', text: 'Kargon Burada Noktalarım' },
  { path: 'delivery-person', text: 'Kim Alabilir' },
];

export const AdressForm: React.FC<AdressProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longtitude, setLongtitude] = useState(0);
  const [addressId, setAddressId] = useState(0);
  const [places, setPlaces] = useState<google.maps.GeocoderResponse>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const customerId = useSelector((state: RootState) => state.customer.info.id);
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);
  const adressList = useSelector((state: RootState) => state.customer.info.addressList);
  const dispatch = useDispatch<any>();
  const stepperRef: React.MutableRefObject<StepperRef | null | undefined> = React.useRef(null);

  useEffect(() => {
    handleGetAddress();
  }, []);

  const handlePopupOpen = () => setIsModalOpen(true);

  const handlePopupClosed = () => setIsModalOpen(false);

  const handleDeleteModal = (id: number | undefined) => {
    id && setAddressId(id);
    setIsDeleteModalOpen(true);
  };

  const handleGetAddress = () => {
    const request: GetCustomerAdressRequest = {
        customerId,
    };

    dispatch(getCustomerAdress(request));
  };

  const handleDelete = () => {
    const request: DeleteCustomerAdressRequest = {
        customerId,
        addressId,
    };

    dispatch(deleteCustomerAdress(request)).then(() => {
        handleGetAddress();
    });

    setIsDeleteModalOpen(false);
    handleGetAddress();
  };

  const handleAddressClick = async (markerPosition: GoogleMapReact.Coords) => {
    console.log('markerposition')
    console.log(markerPosition)
    setLatitude(markerPosition.lat);
    setLongtitude(markerPosition.lng);
    const geocoder = new google.maps.Geocoder();
    const data = 
      await geocoder.geocode({ location: { lat: markerPosition?.lat, lng: markerPosition?.lng } });
    setPlaces(data);
    stepperRef.current?.goToNextStep();
  }

  const onSubmit = async (data: MapFormInputs) => {
    console.log('latitude');
    console.log(latitude);
    console.log(longtitude);
    const request: CreateCustomerAdressRequest = {
      ...data,
      latitude,
      longitude: longtitude,
      addressType: 0,
      addressId: 0,
      customerId,
    }

    await dispatch(createCustomerAdress(request));
    await dispatch(getCustomerAdress({ customerId }));
    setIsModalOpen(false);
  }

  const renderContent = () => (
      <AdressWrapper>
          {adressList?.map((adress, index) => adress && (
              <UserAdressWrapper>
                  <AdressCard
                      lastItem={index === adressList.length - 1}
                      adressType={adress.addressType}
                      name={adress.title}
                      adress={`${adress.address} ${adress.building} ${adress.doorNumber} ${adress.floor} ${adress.district} ${adress.cityName}`}
                      key={index.toString()}
                      id={adress.addressId}
                      onClickUpdate={() => {
                          handlePopupOpen();
                          setAddressId(adress.addressId)
                      }}
                      onClickDelete={() => handleDeleteModal(adress.addressId)}
                  />
              </UserAdressWrapper>
          ))}
          <UserAdressButtonWrapper>
              <Button
                  label="Adres Ekle"
                  buttonType={ButtonTypes.primary}
                  onClick={() => {
                      handlePopupOpen();
                  }}
              />
          </UserAdressButtonWrapper>
          <Modal onRequestClose={() => setIsDeleteModalOpen(false)} style={customDeleteItemModalStyles} isOpen={isDeleteModalOpen} contentLabel="Example Modal">
              <QuestionLabel>Adresi Silmek Istiyor Musunuz ?</QuestionLabel>
              <StyledButtonContainer>
                  <StyledButton buttonType={ButtonTypes.primary} label="Evet" onClick={handleDelete} />
                  <StyledButton cancel buttonType={ButtonTypes.primary} label="Kapat" onClick={() => setIsDeleteModalOpen(false)} />
              </StyledButtonContainer>
          </Modal>
      </AdressWrapper>
  );

  const STEPPER_ITEMS = [
    { Component: <Map onAddressClick={handleAddressClick}/> },
    { Component: <MapForm onSubmit={onSubmit} places={places?.results[0]}/> },
  ] as StepperItem[]

  return (
    <>
      {isSmallScreen && isModalOpen ? null : renderContent()}
      {isModalOpen &&
        <MapModal
          onSubmit={() => null}
          isModalOpen={isModalOpen}
          handleClose={handlePopupClosed}
          headerLabel="Yeni Adres Ekle"
          buttonLabel="Bu Adresi Kullan"
        >
          <Stepper ref={stepperRef} stepperItems={STEPPER_ITEMS}/>
        </MapModal>
      }
    </>
  );
};

export const Adress: React.FC<AdressProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const customerId = useSelector((state: RootState) => state.customer.info.id);
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);

  const dispatch = useDispatch<any>();

  const leftElement = () => <img src={close} width={24} height={24} alt="logo" onClick={() => setIsModalOpen(false)} />;
  const titleElement = () => <TitleLabel>Yeni Adres Ekle</TitleLabel>;
  const rightElement = () => <CleanButton bold>Sıfırla</CleanButton>;

  const isVisible = (ReactElement: any) => {
    if (isModalOpen && ReactElement && isSmallScreen) {
        return ReactElement;
    }
    return undefined;
  };

  useEffect(() => {
    handleGetAddress();
  }, []);

  const handleGetAddress = () => {
    const request: GetCustomerAdressRequest = {
        customerId,
    };

    dispatch(getCustomerAdress(request));
  };

  return (
      <Screen
        isModalOpen={isModalOpen}
        LeftElement={isVisible(leftElement)}
        TitleElement={isVisible(titleElement)}
        RightElement={isVisible(rightElement)}
        sideMenuItems={SIDE_MENU_ITEMS}
      >
        <AdressForm />
      </Screen>
  );
};
