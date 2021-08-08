/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '@reach/router';
import { useForm } from "react-hook-form"
import { theme } from '../../theme/theme';
import {
    OrdersRowConatiner,
    OrderStateContainer,
    OrdersRowLabel,
    OrdersRowImg,
    OrdersRowCircle,
    StyledButton,
    StyledTableHeader,
    TableName,
    StyledFilterButton,
    StyledFilterLabel,
    StyledFilterImage,
    Wrapper,
    StyledSmallScreenCard,
    StyledOrdersLeftTable,
    StyledOrdersBodyTable,
    StyledOrdersRightTable,
    StyledCargoLabel,
    TitleLabel,
} from './Orders.styles';

import { NoOrder } from './NoOrder';
import { ButtonTypes, Container, Screen, Table } from '../../components';
import { COLUMNS } from '../../components/table/Table.constant';
import { FilterModal } from '../../components/filter-modal/FilterModal';
import { CleanButton } from '../../components/filter-modal/FilterModal.styles';

import truck from '../../assets/icons/truck.svg';
import garage from '../../assets/icons/garage.svg';
import filter from '../../assets/icons/filter.svg';
import close from '../../assets/images/close.png';

import { RootState } from '../../store/reducer';
import { getShipments } from '../../store/actions/customerActions/customerShipmentsActions';
import { GetShipmentsRequest } from '../../services/interfaces/Customer';

const tableStyle = {
    bgColor: theme.colors.white,
};

export interface OrdersProps { }

export const Orders: React.FC<OrdersProps> = () => {
    const [data, setData] = useState([]);
    const [previousData, setPreviousData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isServiceCalled, setIsServiceCalled] = useState(false);
    const customerId = useSelector((state: RootState) => state.customer.info.id);
    const shipmentItems = useSelector((state: RootState) => state.customer.shipments.shipmentItems);
    const previousItems = useSelector((state: RootState) => state.customer.shipments.previousItems);
    const filterOptions = useSelector((state: RootState) => state.customer.shipments.filterOptions);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hasShipmentFilter, setHasShipmentFilter] = useState(false);
    const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);
    const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);

    useEffect(() => {
        const request: GetShipmentsRequest = {
            customerId,
            pageNumber: 0,
            pageSize: 20,
            sortBy: 0,
            deliveryStatuses: [],
            deliveryTypes: [],
            senders: [],
            deliveryAddresses: []
        };

        async function fetchMyAPI() {
            const response = await dispatch(getShipments(request));
            const tempData = await response.payload;
            setIsServiceCalled(true);

            if (tempData.isSuccess && tempData.totalItemCount > 0) {
              setHasShipmentFilter(true);
            }
        }

        fetchMyAPI();
    }, []);

    const getSenderStatu = (index: number) => {
        if (index % 2 === 0) {
            return truck;
        }
        return garage;
    };

    const handlePushOrderDetail = (trackingNumber: number) => {
        navigate(`/orders/order/${trackingNumber}`);
    };

    useEffect(() => {
        const array: any = [];

        shipmentItems?.map((item, index) => {
            const object = {
                sender: (
                    <OrdersRowConatiner>
                        {/* <OrdersRowImg src={item.sender.imageUrl} /> */}
                        <OrdersRowLabel>{item?.sender.name}</OrdersRowLabel>
                    </OrdersRowConatiner>
                ),
                orderNo: <OrdersRowLabel>{item?.trackingNumber}</OrdersRowLabel>,
                destinationTime: <OrdersRowLabel>{item?.plannedDeliveryDate}</OrdersRowLabel>,
                destinationType: <OrdersRowLabel colors={theme.colors.primaryBlue}>{item?.deliveryType.name}</OrdersRowLabel>,
                status: (
                    <OrderStateContainer>
                        <OrdersRowCircle>
                            <img src={getSenderStatu(index)} alt="logo" />
                        </OrdersRowCircle>
                        <OrdersRowLabel colors={theme.colors.primaryGreen}>{item?.status}</OrdersRowLabel>
                    </OrderStateContainer>
                ),
                rightElement: <StyledButton onClick={() => handlePushOrderDetail(item.trackingNumber)} buttonType={ButtonTypes.secondary} label="Detay" />,
            };
            return array.splice(index, 0, object);
        });

        setData(array);
    }, [shipmentItems]);

    useEffect(() => {
        const array: any = [];

        previousItems?.map((item, index) => {
            const previousObject = {
                sender: (
                    <OrdersRowConatiner>
                        {/* <OrdersRowImg src={item.sender.imageUrl} /> */}
                        <OrdersRowLabel>{item?.sender.name}</OrdersRowLabel>
                    </OrdersRowConatiner>
                ),
                orderNo: <OrdersRowLabel>{item?.trackingNumber}</OrdersRowLabel>,
                destinationTime: <OrdersRowLabel>{item?.plannedDeliveryDate}</OrdersRowLabel>,
                destinationType: <OrdersRowLabel colors={theme.colors.primaryBlue}>{item?.deliveryType.name}</OrdersRowLabel>,
                status: (
                    <OrderStateContainer>
                        <OrdersRowCircle>
                            <img src={getSenderStatu(index)} alt="logo" />
                        </OrdersRowCircle>
                        <OrdersRowLabel colors={theme.colors.primaryGreen}>{item?.status}</OrdersRowLabel>
                    </OrderStateContainer>
                ),
                rightElement: <StyledButton onClick={() => handlePushOrderDetail(item.trackingNumber)} buttonType={ButtonTypes.secondary} label="Detay" />,
            };
            return array.splice(index, 0, previousObject);
        });

        setPreviousData(array);
    }, [previousItems]);

  const { reset } = useForm();

    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    const leftElement = () => <img src={close} width={24} height={24} alt="logo" onClick={() => setIsModalOpen(false)} />;
    const titleElement = () => <TitleLabel>Filtrele</TitleLabel>;
    const rightElement = () => <CleanButton bold>Sıfırla</CleanButton>;



    const renderTableContainer = () => (
        <>
            <Row center="xs" start="lg">
                <Col sm={12}>
                    {isLargeScreen ? (
                        <>
                            <StyledTableHeader>
                                <TableName>Sana Gelecek Paketler {`(${shipmentItems.length})`}</TableName>
                                <StyledFilterButton onClick={() => setIsModalOpen(true)}>
                                    <StyledFilterLabel>Filtrele</StyledFilterLabel>
                                    <img src={filter} width={12} height={12} alt="logo" />
                                </StyledFilterButton>
                            </StyledTableHeader>
                            <Table data={data} columns={COLUMNS} tableStyle={tableStyle} />
                        </>
                    ) : (
                        <>
                            <StyledTableHeader>
                                <TableName>Sana Gelecek Paketler {`(${shipmentItems.length})`}</TableName>
                                <StyledFilterImage src={filter} width={20} height={20} onClick={() => setIsModalOpen(true)} />
                            </StyledTableHeader>
                            {shipmentItems?.map((item, index) => (
                                <>
                                    <StyledSmallScreenCard onClick={() => handlePushOrderDetail(item.trackingNumber)}>
                                        <StyledOrdersLeftTable>
                                            {/* <OrdersRowImg src={item.sender.imageUrl} height={47} /> */}
                                        </StyledOrdersLeftTable>
                                        <StyledOrdersBodyTable>
                                            <OrdersRowLabel isThin isSmall color={theme.colors.thinGray}>
                                                {item?.sender.name}
                                            </OrdersRowLabel>
                                            <OrdersRowLabel>{item?.plannedDeliveryDate}</OrdersRowLabel>
                                            <OrdersRowLabel isSmall colors={theme.colors.primaryBlue}>
                                                {item?.deliveryType.name}
                                            </OrdersRowLabel>
                                        </StyledOrdersBodyTable>
                                        <StyledOrdersRightTable>
                                            <OrdersRowConatiner>
                                                <OrdersRowCircle>
                                                    <img src={getSenderStatu(index)} alt="status" />
                                                </OrdersRowCircle>
                                                <StyledCargoLabel isSmall isThin isCenter={true} colors={theme.colors.primaryGreen}>
                                                    {item?.status}
                                                </StyledCargoLabel>
                                            </OrdersRowConatiner>
                                        </StyledOrdersRightTable>
                                    </StyledSmallScreenCard>
                                </>
                            ))}
                        </>
                    )}
                </Col>
            </Row>
            <Row center="xs" start="lg">
                <Col sm={12}>
                    {isLargeScreen ? (
                        <>
                            <StyledTableHeader>
                                <TableName>Geçmiş Paketlerin {`(${previousItems.length})`}</TableName>
                            </StyledTableHeader>
                            <Table data={previousData} columns={COLUMNS} tableStyle={tableStyle} />
                        </>
                    ) : (
                        <>
                            <StyledTableHeader>
                                <TableName>Geçmiş Paketlerin {`(${previousItems.length})`}</TableName>
                            </StyledTableHeader>
                            {previousItems?.map((item, index) => (
                                <>
                                    <StyledSmallScreenCard onClick={() => handlePushOrderDetail(item.trackingNumber)}>
                                        <StyledOrdersLeftTable>
                                            {/* <OrdersRowImg src={item.sender.imageUrl} height={47} /> */}
                                        </StyledOrdersLeftTable>
                                        <StyledOrdersBodyTable>
                                            <OrdersRowLabel isThin isSmall color={theme.colors.thinGray}>
                                                {item?.sender.name}
                                            </OrdersRowLabel>
                                            <OrdersRowLabel>{item?.plannedDeliveryDate}</OrdersRowLabel>
                                            <OrdersRowLabel isSmall colors={theme.colors.primaryBlue}>
                                                {item?.deliveryType.name}
                                            </OrdersRowLabel>
                                        </StyledOrdersBodyTable>
                                        <StyledOrdersRightTable>
                                            <OrdersRowConatiner>
                                                <OrdersRowCircle>
                                                    <img src={getSenderStatu(index)} alt="status" />
                                                </OrdersRowCircle>
                                                <StyledCargoLabel isSmall isThin isCenter={true} colors={theme.colors.primaryGreen}>
                                                    {item?.status}
                                                </StyledCargoLabel>
                                            </OrdersRowConatiner>
                                        </StyledOrdersRightTable>
                                    </StyledSmallScreenCard>
                                </>
                            ))}
                        </>
                    )}
                </Col>
            </Row>
        </>
    );

    const isVisible = (ReactElement: any) => {
        if (isModalOpen && ReactElement && isSmallScreen) {
            return ReactElement;
        }
        return undefined;
    };


    return (
      <Screen 
        isModalOpen={isModalOpen}
        LeftElement={isVisible(leftElement)}
        TitleElement={isVisible(titleElement)}
        RightElement={isVisible(rightElement)}
      >
        {!isServiceCalled ? <></> : (
          <Container>
          {!hasShipmentFilter ? (
              <NoOrder />
            ) : (
              <Wrapper>
              {isSmallScreen && isModalOpen ? null : renderTableContainer()}
              <FilterModal isModalOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
        </Wrapper>
          )}
        </Container>
        )}
        
      </Screen>
  );
};
