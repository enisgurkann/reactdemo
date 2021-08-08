/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonTypes, Checkbox, RadioButton, RadioButtonGroup } from '..';
import { GetShipmentsRequest } from '../../services/interfaces/Customer';
import { getShipments } from '../../store/actions/customerActions/customerShipmentsActions';
import { RootState } from '../../store/reducer';
// import { RadioButton } from '../radio-button/RadioButton';
import {
  ButtonContainer,
  CancelButton,
  CleanButton,
  customStyles,
  FilterContainer,
  FilterContent,
  FilterTitle,
  ModalWrapper,
  ModalSmallScreenWrapper,
  StyledButton,
  SubTitleContainer,
  TitleLabel,
  MobileFilterItem,
} from './FilterModal.styles';

export interface ModalProps {
  isModalOpen: boolean;
  handleClose(): void;
}

const RenderLargeScreen: FC<ModalProps> = ({ isModalOpen, handleClose }) => {
  const filterOptions = useSelector((state: RootState) => state.customer.shipments.filterOptions);

  const dispatch = useDispatch();
  const customerId = useSelector((state: RootState) => state.customer.info.id);

  const { control, handleSubmit, reset } = useForm();

  const handleFilter = (formField: any) => {
    const request: GetShipmentsRequest = {
      customerId,
      pageNumber: 0,
      pageSize: 20,
      sortBy: +formField.sortBy,
      deliveryStatuses: [],
      deliveryTypes: [],
      senders: [],
      deliveryAddresses: [],
    };

    const objectArray = Object.entries(formField);

    objectArray.forEach(([key, value]) => {
      if (value) {
        const filterName = key.split('-');
        const selectedValue = +filterName[1];

        switch (filterName[0]) {
          case 'sortOptions': {
            request.sortBy = +formField.sortBy;
            break;
          }
          case 'deliveryStatuses': {
            request.deliveryStatuses?.push(selectedValue);
            break;
          }
          case 'deliveryTypes': {
            request.deliveryTypes?.push(selectedValue);
            break;
          }
          case 'senders': {
            request.senders?.push(selectedValue);
            break;
          }
          case 'deliveryAddresses': {
            request.deliveryAddresses?.push(selectedValue);
            break;
          }
          default: {
            // statements;
            break;
          }
        }
      }
    });
    dispatch(getShipments(request));
    handleClose();
  };

  return (
    <Modal onRequestClose={handleClose} style={customStyles} isOpen={isModalOpen} contentLabel="Example Modal">
      <ModalWrapper style={{ paddingTop: '120px' }}>
        <FilterContent>
          <SubTitleContainer>
            <TitleLabel>Gönderileri Filtrele</TitleLabel>
            <CleanButton
              onClick={() => {
                dispatch(
                  getShipments({
                    customerId,
                    pageNumber: 0,
                    pageSize: 20,
                    sortBy: 0,
                    deliveryStatuses: [],
                    deliveryTypes: [],
                    senders: [],
                    deliveryAddresses: [],
                  })
                );

                reset({ sortBy: 1 } );
              }}
            >
              Tümünü sıfırla
            </CleanButton>
          </SubTitleContainer>
          <FilterContainer>
            <FilterTitle>Sırala</FilterTitle>
            <Controller
              name="sortBy"
              control={control}
              defaultValue={1}
              render={({ field: { onChange, value } }) => (
                <RadioButtonGroup onChange={(event) => onChange(event)} value={value}>
                  {filterOptions && filterOptions.sortOptions && filterOptions.sortOptions.map((item: any) => <RadioButton label={item.key} value={item.value} key={item.key} />)}
                </RadioButtonGroup>
              )}
            />
          </FilterContainer>

          {filterOptions && filterOptions?.deliveryStatuses.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Teslimat Durumu</FilterTitle>
              {filterOptions &&
                filterOptions.deliveryStatuses &&
                filterOptions.deliveryStatuses.map((item: any) => (
                  <Controller
                    key={item.key}
                    name={`deliveryStatuses-${item.value}`}
                    control={control}
                    render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                  />
                ))}
            </FilterContainer>
          ) : null}
          {filterOptions && filterOptions?.deliveryTypes.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Teslimat Tipi</FilterTitle>
              {filterOptions &&
                filterOptions.deliveryTypes &&
                filterOptions.deliveryTypes.map((item: any) => (
                  <Controller
                    key={item.key}
                    name={`deliveryTypes-${item.value}`}
                    control={control}
                    render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                  />
                ))}
            </FilterContainer>
          ) : null}
          {filterOptions && filterOptions?.senders.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Gönderici</FilterTitle>
              {filterOptions &&
                filterOptions.senders &&
                filterOptions.senders.map((item: any) => (
                  <Controller
                    key={item.key}
                    name={`senders-${item.value}`}
                    control={control}
                    render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                  />
                ))}
              {/* <SeeAllLabel>Tümünü Gör</SeeAllLabel> */}
            </FilterContainer>
          ) : null}

          {filterOptions && filterOptions?.deliveryAddresses.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Teslimat Adresi</FilterTitle>
              {filterOptions &&
                filterOptions.deliveryAddresses &&
                filterOptions.deliveryAddresses.map((item: any) => (
                  <Controller
                    key={item.key}
                    name={`deliveryAddresses-${item.value}`}
                    control={control}
                    render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                  />
                ))}
              {/* <SeeAllLabel>Tümünü Gör</SeeAllLabel> */}
            </FilterContainer>
          ) : null}
        </FilterContent>
        <ButtonContainer>
          <StyledButton buttonType={ButtonTypes.primary} label="Uygula" onClick={handleSubmit(handleFilter)} />
          <CancelButton onClick={handleClose}>Kapat</CancelButton>
        </ButtonContainer>
      </ModalWrapper>
    </Modal>
  );
};

const RenderSmallScreen: FC<ModalProps> = ({ isModalOpen, handleClose }) => {
  const filterOptions = useSelector((state: RootState) => state.customer.shipments.filterOptions);
  const dispatch = useDispatch();
  const customerId = useSelector((state: RootState) => state.customer.info.id);

  const { control, handleSubmit, reset } = useForm();

  const handleFilter = (formField: any) => {
    const request: GetShipmentsRequest = {
      customerId,
      pageNumber: 0,
      pageSize: 20,
      sortBy: +formField.sortBy,
      deliveryStatuses: [],
      deliveryTypes: [],
      senders: [],
      deliveryAddresses: [],
    };

    const objectArray = Object.entries(formField);

    objectArray.forEach(([key, value]) => {
      if (value) {
        const filterName = key.split('-');
        const selectedValue = +filterName[1];

        switch (filterName[0]) {
          case 'sortOptions': {
            request.sortBy = +formField.sortBy;
            break;
          }
          case 'deliveryStatuses': {
            request.deliveryStatuses?.push(selectedValue);
            break;
          }
          case 'deliveryTypes': {
            request.deliveryTypes?.push(selectedValue);
            break;
          }
          case 'senders': {
            request.senders?.push(selectedValue);
            break;
          }
          case 'deliveryAddresses': {
            request.deliveryAddresses?.push(selectedValue);
            break;
          }
          default: {
            // statements;
            break;
          }
        }
      }
    });
    dispatch(getShipments(request));
    handleClose();
  };

  const handleReset = () => {
    reset({ sortBy: 1 });
  }

  if (isModalOpen) {
    return (
      <ModalSmallScreenWrapper>
        {/* // TODO Cleam button should removed from orders page and move here , */}
        <div
          onClick={handleReset}
          role="button"
          tabIndex={-1}
          style={{
            position: 'absolute',
            top: '30px',
            right: '10px',
            width: '60px',
            height: '20px',
            zIndex: 99999,
            opacity: 0,
            backgroundColor: 'tomato',
          }}
        />
        <FilterContent>
          <FilterContainer>
            <FilterTitle>Sırala</FilterTitle>
            <Controller
              name="sortBy"
              control={control}
              defaultValue={1}
              render={({ field: { onChange, value } }) => (
                <RadioButtonGroup onChange={(event) => onChange(event)} value={value}>
                  {filterOptions && filterOptions.sortOptions && filterOptions.sortOptions.map((item: any) => <RadioButton label={item.key} value={item.value} key={item.key} />)}
                </RadioButtonGroup>
              )}
            />
          </FilterContainer>
          {filterOptions && filterOptions?.deliveryStatuses.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Teslimat Durumu</FilterTitle>
              <MobileFilterItem>
                {filterOptions &&
                  filterOptions.deliveryStatuses &&
                  filterOptions.deliveryStatuses.map((item: any) => (
                    <Controller
                      key={item.key}
                      name={`deliveryStatuses-${item.value}`}
                      control={control}
                      render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                    />
                  ))}
              </MobileFilterItem>
            </FilterContainer>
          ) : null}

          {filterOptions && filterOptions?.deliveryTypes.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Teslimat Tipi</FilterTitle>
              <MobileFilterItem>
                {filterOptions &&
                  filterOptions.deliveryTypes &&
                  filterOptions.deliveryTypes.map((item: any) => (
                    <Controller
                      key={item.key}
                      name={`deliveryTypes-${item.value}`}
                      control={control}
                      render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                    />
                  ))}
              </MobileFilterItem>
            </FilterContainer>
          ) : null}

          {filterOptions && filterOptions?.senders.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Gönderici</FilterTitle>
              <MobileFilterItem>
                {filterOptions?.senders &&
                  filterOptions.senders.map((item: any) => (
                    <Controller
                      key={item.key}
                      name={`senders-${item.value}`}
                      control={control}
                      render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                    />
                  ))}
              </MobileFilterItem>
            </FilterContainer>
          ) : null}

          {filterOptions && filterOptions?.deliveryAddresses.length > 0 ? (
            <FilterContainer>
              <FilterTitle>Teslimat Adresi</FilterTitle>
              <MobileFilterItem>
                {filterOptions &&
                  filterOptions.deliveryAddresses &&
                  filterOptions.deliveryAddresses.map((item: any) => (
                    <Controller
                      key={item.key}
                      name={`deliveryAddresses-${item.value}`}
                      control={control}
                      render={({ field: { onChange, value } }) => <Checkbox label={item.key} checked={value} key={item.key} onChange={(event) => onChange(event)} />}
                    />
                  ))}
              </MobileFilterItem>
              {/* <SeeAllLabel>Tümünü Gör</SeeAllLabel> */}
            </FilterContainer>
          ) : null}
        </FilterContent>
        <ButtonContainer>
          <StyledButton buttonType={ButtonTypes.primary} label="Uygula" onClick={handleSubmit(handleFilter)} />
        </ButtonContainer>
      </ModalSmallScreenWrapper>
    );
  }
  return <></>;
};

export const FilterModal: FC<ModalProps> = ({ isModalOpen, handleClose }) => {
  const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);
  return isLargeScreen ? <RenderLargeScreen isModalOpen={isModalOpen} handleClose={handleClose} /> : <RenderSmallScreen isModalOpen={isModalOpen} handleClose={handleClose} />;
};
