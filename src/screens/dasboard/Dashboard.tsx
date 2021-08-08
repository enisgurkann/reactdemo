import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from '@reach/router';
import { ButtonWidth, Container, LiveChat, Screen } from '../../components';
import {
  DestinationButton,
  DestinationsImage,
  DestionationContent,
  DestionationSection,
  DestionationTitle,
  ErrorMessage,
  Promotion,
  PromotionInfoItem,
  PromotionInfoWrapper,
  PromotionTitle,
  PromotionWrapper,
  StatisticContent,
  StatisticItem,
  StatisticItemCount,
  StatisticItemTitle,
  StatisticSection,
  StatisticTitle,
  StyledDestinationContent,
  StyledDestinationWrapper,
  StyledImage,
  StyledLink,
  SearchForm,
  LiveChatWrapper,
} from './Dashboard.styles';
import InfoIcon from '../../assets/icons/infoIcon.svg';
import QuestionIcon from '../../assets/icons/questionIcon.svg';
import DailyPackage from '../../assets/images/dailyPackage.png';
import { SearchInput } from '../../components/input/SearchInput';
import { search } from '../../store/actions/shipmentActions/shipmentSearchActions';

export type SearchFormInputs = {
  searchTerm: string;
};

export interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const [isLiveChatActive, setIsLiveChatActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onSubmit = async ({ searchTerm }: SearchFormInputs) => {
    if (!searchTerm || searchTerm?.length < 8) {
      setErrorMessage('Minimum 8 karakter giriniz.');
    } else {
      const data = await dispatch(search({ searchTerm }));
      const response = await data.payload;

      if (response.isSuccess) {
        if (response.trackingNumberFound) {
          navigation(`orders/order/${response.shipments[0].trackingNumber}`);
        } else if (response.customerFound && !response.trackingNumberFound && response.otpLoginRequired) {
          navigation(`auth`, { state: { initialStep: 1, phoneNum: searchTerm, toPath: 'orders' } });
        } else if (!response.customerFound && !response.trackingNumberFound && response.otpLoginRequired) {
          navigation(`auth`, { state: { initialStep: 1, phoneNum: searchTerm, toPath: 'signup' } });
        } else if (!response.customerFound && !response.trackingNumberFound && !response.otpLoginRequired) {
          setErrorMessage(response.message);
        }
      } else {
        setErrorMessage(response.message);
      }
    }
  };

  return (
    <Screen>
      <Promotion>
        <PromotionWrapper>
          <Container>
            <Row center="xs" start="lg">
              <Col sm={6} lg={5} xl={4}>
                <PromotionTitle>Paketlerini kolay ve hızlıca takip et!</PromotionTitle>
              </Col>
            </Row>
            <Row>
              <Col lg={5} xl={4}>
                <SearchForm onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="searchTerm"
                    control={control}
                    render={({ field }) => <SearchInput {...field} searchClick={() => handleSubmit(onSubmit)} id="search" label="Paket No, Telefon No veya T.C. Kimlik No girin" />}
                  />
                  {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                </SearchForm>
                <PromotionInfoWrapper>
                  <PromotionInfoItem>
                    <img style={{ marginRight: 10 }} src={QuestionIcon} alt="info icon" />
                    <StyledLink label="Paket no. nereden bulurum?" url="" />
                  </PromotionInfoItem>
                  <PromotionInfoItem>
                    <img style={{ marginRight: 10 }} src={InfoIcon} alt="info icon" />
                    <StyledLink label="Aydınlatma Metni" url="" />
                  </PromotionInfoItem>
                </PromotionInfoWrapper>
              </Col>
            </Row>
          </Container>
        </PromotionWrapper>
      </Promotion>
      <DestionationSection>
        <Container>
          <DestinationsImage>
            <LiveChatWrapper isActive={isLiveChatActive}>
              <LiveChat isActive={isLiveChatActive} onClick={() => setIsLiveChatActive(!isLiveChatActive)} />
            </LiveChatWrapper>
            <Row style={{ flex: 1 }}>
              <Col mdOffset={3} md={6} lg={6} lgOffset={0}>
                <DestionationContent>
                  <DestionationTitle>Aykargo’nun Gel-Al noktalarını denedin mi?</DestionationTitle>
                  <DestinationButton buttonWidth={ButtonWidth.SMALL} label="TÜMÜNÜ GÖR" />
                </DestionationContent>
              </Col>
            </Row>
          </DestinationsImage>
        </Container>
      </DestionationSection>
      <StatisticTitle>Rakamlarla Aykargo</StatisticTitle>
      <StatisticSection>
        <StatisticContent>
          <Container>
            <Row>
              <Col xs={4}>
                <StatisticItem shouldHaveBorder>
                  <StatisticItemTitle>Günlük Paket</StatisticItemTitle>
                  <StyledImage src={DailyPackage} alt="daily package" />
                  <StatisticItemCount>10.000</StatisticItemCount>
                </StatisticItem>
              </Col>
              <Col xs={4}>
                <StatisticItem>
                  <StatisticItemTitle>Günlük KM</StatisticItemTitle>
                  <StyledImage src={DailyPackage} alt="daily km" />
                  <StatisticItemCount>250.000</StatisticItemCount>
                </StatisticItem>
              </Col>
              <Col xs={4}>
                <StatisticItem>
                  <StatisticItemTitle>Gel-Al Noktası</StatisticItemTitle>
                  <StyledImage src={DailyPackage} alt="gel-al noktası" />
                  <StatisticItemCount>1.000+</StatisticItemCount>
                </StatisticItem>
              </Col>
            </Row>
          </Container>
        </StatisticContent>
      </StatisticSection>
      <StyledDestinationWrapper>
        <Container>
          <Row>
            <Col md={6} mdOffset={3} lgOffset={0} lg={12}>
              <StyledDestinationContent>
                <DestionationTitle>İstanbul’un her yerine güvenilir teslimat.</DestionationTitle>
              </StyledDestinationContent>
            </Col>
          </Row>
        </Container>
      </StyledDestinationWrapper>
    </Screen>
  );
};
