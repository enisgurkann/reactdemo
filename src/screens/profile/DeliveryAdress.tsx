import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-flexbox-grid';

import { Screen } from '../../components';
import { NavItem } from '../../components/screen/Screen';
import {
    StyledSmallScreenContainer,
    CardWrapper,
    Wrapper,
    StyledCard,
    StyledCardBox,
    Left,
    Body,
    Right,
    BrandImage,
    BrandName,
    BrandAddress,
    ClockImage,
    AdditionalInfo,
    Distance,
    TimeLabel,
    Direction,
    Telephone,
    HeadlineTitle,
    HeadlineContainer,
    HeadlineImage,
    StyledButton,
    StyledSvgIcon,
    Divider,
} from './DeliveryAdress.styles';

import Brand from '../../assets/images/bim.png';
import Office from '../../assets/images/office.png';
import Clock from '../../assets/images/clock.png';
import Call from '../../assets/icons/call.svg';
import Location from '../../assets/icons/location.svg';
import { RootState } from '../../store/reducer';
import { getCustomerDeliveryPoint } from '../../store/actions/customerActions/customerInfoActions';
import { GetCustomerDeliveryPointRequest } from '../../services/interfaces/Customer';

export interface DeliveryAdressProps { }

const SIDE_MENU_ITEMS: Array<NavItem> = [
    { path: 'personal-info', text: 'Kişisel Bilgiler' },
    { path: 'adress', text: 'Adreslerim' },
    { path: 'delivery-adress', text: 'Kargon Burada Noktalarım', isActive: true },
    { path: 'delivery-person', text: 'Kim Alabilir' },
];

const StyledLargeScreen = () => {
    const customerId = useSelector((state: RootState) => state.customer.info.id);
    const officePoints = useSelector((state: RootState) => state.customer.info.officePoints);
    const homePoints = useSelector((state: RootState) => state.customer.info.homePoints);
    const dispatch = useDispatch();

    useEffect(() => {
        getDeliveryPoint();
    }, []);

    const getDeliveryPoint = async () => {
        const request: GetCustomerDeliveryPointRequest = {
            customerId
        }
        await dispatch(getCustomerDeliveryPoint(request));
    }

    return (
        <Row>
            <Col lg={10}>
            <Wrapper>
            <CardWrapper>
                <HeadlineContainer>
                    <HeadlineImage src={Office} />
                    <HeadlineTitle>Ev Adresine Yakın Noktalar</HeadlineTitle>
                </HeadlineContainer>
                {homePoints.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <StyledCard>
                        <Left>
                            <BrandImage src={item.imageUrl} />
                        </Left>
                        <Body>
                            <BrandName>{item.title}</BrandName>
                            <BrandAddress>{`${item.address} ${item.district} ${item.cityName}`}</BrandAddress>
                            <AdditionalInfo>
                                <Distance>{`${item.distance}`}</Distance>
                                <ClockImage src={Clock} />
                                <TimeLabel>{`${item.openTime} - ${item.endTime}`}</TimeLabel>
                            </AdditionalInfo>
                        </Body>
                        <Right>
                            <Direction>Lokasyon Tarifi</Direction>
                            <Telephone>{item.phone}</Telephone>
                        </Right>
                    </StyledCard>
                ))}
            </CardWrapper>
            <CardWrapper>
                <HeadlineContainer>
                    <HeadlineImage src={Office} />
                    <HeadlineTitle>Ofis Adresine Yakın Noktalar</HeadlineTitle>
                </HeadlineContainer>
                {officePoints.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <StyledCard>
                        <Left>
                            <BrandImage src={item.imageUrl} />
                        </Left>
                        <Body>
                            <BrandName>{item.title}</BrandName>
                            <BrandAddress>{`${item.address} ${item.district} ${item.cityName}`}</BrandAddress>
                            <AdditionalInfo>
                                <Distance>{`${item.distance}`}</Distance>
                                <ClockImage src={Clock} />
                                <TimeLabel>{`${item.openTime} - ${item.endTime}`}</TimeLabel>
                            </AdditionalInfo>
                        </Body>
                        <Right>
                            <Direction>Lokasyon Tarifi</Direction>
                            <Telephone>{item.phone}</Telephone>
                        </Right>
                    </StyledCard>
                ))}
            </CardWrapper>
        </Wrapper>
            </Col>
            
    
        </Row>
        )
};

const StyledSmallScreenCard = () => {

    const customerId = useSelector((state: RootState) => state.customer.info.id);
    const officePoints = useSelector((state: RootState) => state.customer.info.officePoints);
    const homePoints = useSelector((state: RootState) => state.customer.info.homePoints);
    const dispatch = useDispatch();

    useEffect(() => {
        getDeliveryPoint();
    }, []);

    const getDeliveryPoint = async () => {
        const request: GetCustomerDeliveryPointRequest = {
            customerId
        }
        await dispatch(getCustomerDeliveryPoint(request));
    }
    return (
        <StyledSmallScreenContainer>
            <Wrapper>
                <HeadlineContainer>
                    <HeadlineTitle>Ev Adresine Yakın Noktalar</HeadlineTitle>
                </HeadlineContainer>
                {homePoints.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <StyledCard>
                        <StyledCardBox>
                            <Left>
                                <BrandImage src={item.imageUrl} />
                            </Left>
                            <Body>
                                <BrandName>{item.title}</BrandName>
                                <BrandAddress>{`${item.address} ${item.district} ${item.cityName}`}</BrandAddress>
                                <AdditionalInfo>
                                    <Distance>{`${item.distance}`}</Distance>
                                    <ClockImage src={Clock} />
                                    <TimeLabel>{`${item.openTime} - ${item.endTime}`}</TimeLabel>
                                </AdditionalInfo>
                            </Body>
                            <Right>
                                <StyledButton>
                                    <StyledSvgIcon src={Location} />
                                </StyledButton>
                                <StyledButton>
                                    <StyledSvgIcon src={Call} />
                                </StyledButton>
                            </Right>
                        </StyledCardBox>
                        <Divider />
                    </StyledCard>
                ))}
            </Wrapper>
            <Wrapper>
                <HeadlineContainer>
                    <HeadlineTitle>Ofis Adresine Yakın Noktalar</HeadlineTitle>
                </HeadlineContainer>
                {officePoints.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <StyledCard>
                        <StyledCardBox>
                            <Left>
                                <BrandImage src={item.imageUrl} />
                            </Left>
                            <Body>
                                <BrandName>{item.title}</BrandName>
                                <BrandAddress>{`${item.address} ${item.district} ${item.cityName}`}</BrandAddress>
                                <AdditionalInfo>
                                    <Distance>{`${item.distance}`}</Distance>
                                    <ClockImage src={Clock} />
                                    <TimeLabel>{`${item.openTime} - ${item.endTime}`}</TimeLabel>
                                </AdditionalInfo>
                            </Body>
                            <Right>
                                <StyledButton>
                                    <StyledSvgIcon src={Location} />
                                </StyledButton>
                                <StyledButton>
                                    <StyledSvgIcon src={Call} />
                                </StyledButton>
                            </Right>
                        </StyledCardBox>
                        <Divider />
                    </StyledCard>
                ))}
            </Wrapper>
        </StyledSmallScreenContainer>
    )
};

export const DeliveryAdressForm: React.FC<DeliveryAdressProps> = () => {
  const isLargeScreen = useSelector((state: RootState) => state.device.isLargeScreen);
  return (
    <>{isLargeScreen ? StyledLargeScreen() : StyledSmallScreenCard()}</>
  )}

export const DeliveryAdress = () => (
  <Screen sideMenuItems={SIDE_MENU_ITEMS}><DeliveryAdressForm /></Screen>
)