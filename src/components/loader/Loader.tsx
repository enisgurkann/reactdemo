import React from 'react';
import Lottie from 'react-lottie';
import { LoaderModal } from "./Loader.styles";
import animationData from '../../assets/images/AykargoLoader.json'

export const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <LoaderModal>
      <Lottie 
        options={defaultOptions}
        height={100}
        width={100}
      />
    </LoaderModal>
  );
} 