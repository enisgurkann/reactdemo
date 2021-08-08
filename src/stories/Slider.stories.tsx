import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Slider } from '../components/slider/Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Slider></Slider>;

export const BaseSlider = Template.bind({});
