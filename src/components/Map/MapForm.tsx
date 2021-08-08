import React, { FC, useEffect } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCustomerAdressRequest } from '../../services/interfaces/Customer';
import { createCustomerAdress, getCustomerAdress } from '../../store/actions/customerActions/customerInfoActions';
import { RootState } from '../../store/reducer';
import { Button } from '../button/Button';
import { TextArea } from '../input/TextArea';
import { TextInput } from '../input/TextInput';
import { ButtonWrapper, FormWrapper } from './MapForm.styles';

interface MapFormProps {
  places?: google.maps.GeocoderResult;
  onSubmit(data: MapFormInputs): void;
}

const semtType = "administrative_area_level_2";
const cityType = "administrative_area_level_1";

export type MapFormInputs = {
  title: string;
  addressType: string;
  cityName: string;
  district: string;
  building: string;
  floor: string;
  address: string;
  doorNumber: string;
};

export const  MapForm: FC<MapFormProps> = ({ places, onSubmit }) => {
  const { control, handleSubmit, setValue } = useForm<MapFormInputs>();
  useEffect(() => {
    places?.address_components.forEach((item) => {
      item.types.forEach((type) => {
        if(type === cityType){
          setValue('cityName', item.long_name, { shouldValidate: true })
        }
        if(type === semtType){
          setValue('district', item.long_name, { shouldValidate: true })
        }
      })
    })
    setValue('address', places!.formatted_address, { shouldValidate: true })
  }, [places, setValue]);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Row style={{ margin: 5 }}>
        <Col lg={6}>
          <Controller
            rules={{
              required: true,
            }}
            name="title"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Adres Başlığı"
                id="title"
                {...field}
              />
            )}
          />
        </Col>
        <Col lg={6}>
          <Controller
            rules={{
              required: true,
            }}
            name="addressType"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Adres Türü"
                id="addressType"
                {...field}
              />
            )}
          />
        </Col>
      </Row>
      <Row style={{ margin: 5 }}>
        <Col lg={6}>
          <Controller
            rules={{
              required: true,
            }}
            name="cityName"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Şehir"
                id="cityName"
                {...field}
              />
            )}
          />
        </Col>
        <Col lg={6}>
          <Controller
            rules={{
              required: true,
            }}
            name="district"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Semt"
                id="district"
                {...field}
              />
            )}
          />
        </Col>
      </Row>
      <Row style={{ margin: 5 }}>
        <Col lg={4}>
          <Controller
            rules={{
              required: true,
            }}
            name="building"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Bina"
                id="building"
                {...field}
              />
            )}
          />
        </Col>
        <Col lg={4}>
          <Controller
            rules={{
              required: true,
            }}
            name="floor"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Kat"
                id="floor"
                {...field}
              />
            )}
          />
        </Col>
        <Col lg={4}>
          <Controller
            rules={{
              required: true,
            }}
            name="doorNumber"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Daire"
                id="doorNumber"
                {...field}
              />
            )}
          />
        </Col>
      </Row>
      <Row style={{ margin: 5 }}>
        <Col lg={12}>
          <Controller
            rules={{
              required: true,
            }}
            name="address"
            control={control}
            render={({ field }) => (
              <TextArea
                label="Adres"
                id="address"
                {...field}
              />
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ButtonWrapper>
            <Button label="Kaydet" onClick={handleSubmit(onSubmit)}/>
          </ButtonWrapper>
        </Col>
      </Row>
    </FormWrapper>
  )
}