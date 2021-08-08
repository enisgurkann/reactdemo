/* eslint-disable max-len */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import GoogleMapReact from 'google-map-react';


import {
  customAddressModalStyles,
  ModalWrapper,
  ModalSmallScreenWrapper,
  ModalHeaderContainer,
  ModalHeaderLeft,
  ModalHeaderBody,
  ModalHeaderRight,
  ModalFooterContainer,
  StyledButton,
  StyledSectionContainer,
  ModalContent,
  StyledSmallModalContent,
  MapsSmallWrapper,
  StyledFirstStepContainer,
  InputAreaWrapper,
  MapsWrapper,
} from './MapsModal.styles';
import { ButtonTypes, TextInput, SelectionInput, TextLabel, TextArea } from '..';

import back from '../../assets/images/back.png';
import close from '../../assets/images/close.png';
import { RootState } from '../../store/reducer';

export interface ModalProps {
  isModalOpen: boolean;
  handleClose(): void;
  selectedIndex?: number; 
  onSubmit(data: MapsModalInputs): void;
}

const options = [
  { value: 'Istanbul', label: 'Istanbul' },
  { value: 'Ankara', label: 'Ankara' },
  { value: 'Izmir', label: 'Izmir' },
];

export type MapsModalInputs = {
  addressTitle: string;
  addressType: string;
  addressCity: string;
  addressNeighborhood: string;
  addressBuilding: string;
  addressFloor: string;
  addressApartman: string;
  address: string;
};

export const MapsModal: FC<ModalProps> = ({ isModalOpen, handleClose, onSubmit, selectedIndex }) => {
  const [nextStep, setNextStep] = useState(false);
  const {
    control,
    handleSubmit,
  } = useForm();

    const selectedAdress = useSelector((state: RootState) => selectedIndex !== undefined ? state.customer.info.addressList[selectedIndex] : undefined);

  const renderController = (name: string, defaultValue: string, label: string, style?: any) => (
    <Controller
      rules={{ required: 'Bu alanı doldurunuz.' }}
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { onChange, value } }) => {
        switch (name) {
          case 'address':
            return <TextArea id={name} label={label} onChange={onChange} value={value} style={{ flex: 1, height: 100, ...style }} />;
          default:
            return <TextLabel id={name} label={label} onChange={onChange} value={value} style={{ flex: 1, ...style }} />;
        }
      }}
    />
  );

  const renderHeaderContainer = () => (
    <ModalHeaderContainer>
      <ModalHeaderLeft onClick={() => setNextStep(false)}>{nextStep && <img src={back} width={10} height={17.1} alt="logo" />}</ModalHeaderLeft>
      <ModalHeaderBody>Yeni Adres Ekle</ModalHeaderBody>
      <ModalHeaderRight onClick={handleClose}>
        <img src={close} width={20} height={20} alt="logo" />
      </ModalHeaderRight>
    </ModalHeaderContainer>
  );

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderMaps = (visible?: boolean) => (
    <MapsWrapper nextStep={visible}>
      <GoogleMapReact
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={11}
      />
    </MapsWrapper>
  );

  const renderButton = (label: string, onClick: any, type?: string) => (
    <ModalFooterContainer>
      <StyledButton buttonType={ButtonTypes.primary} label={label} onClick={onClick} type="submit" />
    </ModalFooterContainer>
  );

  const renderSectionContainer = (sectionStyle?: any, InputStyle?: any) => (
    <StyledFirstStepContainer>
      <StyledSectionContainer>
        {/* <SelectionInput placeholder="İl Seç" options={options} style={sectionStyle} /> */}
        <TextInput id="searc" label=" " onChange={() => null} style={InputStyle} />
      </StyledSectionContainer>
      {renderMaps()}
      {renderButton('Bu Adresi Kullan', () => {
        setNextStep(true);
      })}
    </StyledFirstStepContainer>
  );

  <StyledFirstStepContainer>
    <StyledSectionContainer>
      {/* <SelectionInput placeholder="İl Seç" options={options} /> */}
      <TextInput id="search" label=" " onChange={() => null} style={{ marginTop: -30 }} />
    </StyledSectionContainer>
    {renderMaps()}
    {renderButton('Bu Adresi Kullan', () => {
      setNextStep(true);
    })}
  </StyledFirstStepContainer>;

  const renderLargeScreen = () => (
    <Modal onRequestClose={handleClose} style={customAddressModalStyles} isOpen={isModalOpen} contentLabel="Example Modal">
      <ModalWrapper>
        {renderHeaderContainer()}
        {!nextStep ? (
          renderSectionContainer({ width: 200, marginTop: 16 }, { width: 400, marginLeft: 10 })
        ) : (
          <form id="create-address-form" onSubmit={handleSubmit(onSubmit)}>
            <ModalContent>
              <InputAreaWrapper>
                {renderController('addressTitle', selectedAdress?.title ? selectedAdress?.title : '', 'Adres Başlığı')}
                {renderController('addressType', selectedAdress?.addressType ? selectedAdress?.addressType.toString() : '', 'Adres Türü', { marginLeft: 10 })}
              </InputAreaWrapper>
              <InputAreaWrapper>
                {renderController('addressCity', selectedAdress?.cityName ? selectedAdress?.cityName : '', 'Şehir')}
                {renderController('addressNeighborhood', selectedAdress?.district? selectedAdress?.district : '' , 'Semt', { marginLeft: 10 })}
              </InputAreaWrapper>
              <InputAreaWrapper>
                {renderController('addressBuilding', selectedAdress?.building ? selectedAdress?.building : '', 'Bina')}
                {renderController('addressFloor', selectedAdress?.floor? selectedAdress?.floor : '', 'Kat', { marginLeft: 10 })}
                {renderController('addressApartman', selectedAdress?.doorNumber ? selectedAdress?.doorNumber : '', 'Daire', { marginLeft: 10 })}
              </InputAreaWrapper>
              <InputAreaWrapper>{renderController('address', selectedAdress?.address ? selectedAdress?.address : '', 'Adres', { height: 100 })}</InputAreaWrapper>
            </ModalContent>
            {renderButton('Kaydet', () => {
              setNextStep(true);
              handleSubmit(onSubmit);
            })}
          </form>
        )}
      </ModalWrapper>
    </Modal>
  );

  const renderSmallScreen = () => {
    if (isModalOpen) {
      return (
        <ModalSmallScreenWrapper nextStep>
          {!nextStep ? (
            renderSectionContainer({}, { marginTop: -30 })
          ) : (
            <StyledSmallModalContent>
              <MapsSmallWrapper>{renderMaps(true)}</MapsSmallWrapper>
              <form id="create-address-form" onSubmit={handleSubmit(onSubmit)}>
                {renderController('addressTitle', selectedAdress?.title ? selectedAdress?.title : '', 'Adres Başlığı', { marginTop: 20 })}
                {renderController('addressType', selectedAdress?.addressType ? selectedAdress?.addressType.toString() : '', 'Adres Türü')}
                {renderController('addressCity', selectedAdress?.cityName ? selectedAdress?.cityName : '', 'Şehir')}
                {renderController('addressNeighborhood', selectedAdress?.district ? selectedAdress?.district : '', 'Semt')}
                {renderController('addressBuilding', selectedAdress?.building ? selectedAdress?.building : '', 'Bina')}
                {renderController('addressFloor', selectedAdress?.floor ? selectedAdress?.floor : '', 'Kat')}
                {renderController('addressApartman', selectedAdress?.doorNumber ? selectedAdress?.doorNumber : '' , 'Daire')}
                {renderController('address', selectedAdress?.title ? selectedAdress?.title : '', 'Adres', { marginBottom: 30 })}
                {renderButton('Kaydet', () => {
                  setNextStep(true);
                  handleSubmit(onSubmit);
                })}
              </form>
            </StyledSmallModalContent>
          )}
        </ModalSmallScreenWrapper>
      );
    }

    return null;
  };
  const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);

  return isLargeScreen ? renderLargeScreen() : renderSmallScreen();
};
