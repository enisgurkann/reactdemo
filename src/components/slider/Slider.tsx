import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SliderTextWrapper, SliderWrapper } from './Slider.styles';
import SliderImage from '../../assets/images/slider_image.jpg';

export interface SliderProps {
  text?: string;
}

export const Slider: FC<SliderProps> = ({ text }) => {
  const slides = [{ SliderImage }, { SliderImage }, { SliderImage }];

  return (
    <SliderWrapper>
      <Carousel infiniteLoop autoPlay interval={5000} showThumbs={false} showStatus={false} autoFocus emulateTouch showArrows={false}>
        {slides.map((slideItem, index) => (
          <div
            key="slider"
            style={{
              backgroundImage: `url(${SliderImage})`,
              width: 944,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </Carousel>
      <SliderTextWrapper>{text}</SliderTextWrapper>
    </SliderWrapper>
  );
};
