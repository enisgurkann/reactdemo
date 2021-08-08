import React from 'react';
import { Router } from '@reach/router';
import { useSelector } from 'react-redux';
import { Adress, Auth, Dashboard, DeliveryAdress, DeliveryPerson, OrderDetail, Orders, PersonalInfo, SignUpStepper, EmailVerify } from '../screens';
import { RootState } from '../store/reducer';
import { Loader, InfoModal } from '../components';
import { MyProfile } from '../screens/profile/MyProfile';

export const Route = () => {
  const loaderCount = useSelector((state: RootState) => state.general.loader.loaderCount);
  const isModalOpen = useSelector((state: RootState) => state.general.modal.isModalOpen);
  const isSmallScreen = useSelector((state: RootState) => state.device.isSmallScreen);
  const type = useSelector((state: RootState) => state.general.modal.type);
  const message = useSelector((state: RootState) => state.general.modal.message);
  
  return (
  <>
    <Router>
        <Dashboard path="/" />
        <Auth path="/auth" />
        <Orders path="orders" />
        <OrderDetail path="orders/order/:orderId" />
        <SignUpStepper path="/signup" />
        {isSmallScreen ? (
          <>
            <MyProfile path="/profile" />
            <MyProfile path="/profile/personal-info" />
            <MyProfile path="/profile/delivery-adress" />
            <MyProfile path="/profile/delivery-person" />
            <MyProfile path="/profile/adress" />
          </>
        ) : (
          <div path="/profile">
            <PersonalInfo path="personal-info" />
            <DeliveryAdress path="delivery-adress" />
            <DeliveryPerson path="delivery-person" />
            <Adress path="adress" />  
          </div>
        ) }
        <EmailVerify path="email-onay"/>
    </Router>
    {loaderCount > 0 && <Loader />}
    {isModalOpen && <InfoModal isModalOpen={isModalOpen} type={type} message={message} />}
    </>
)}
