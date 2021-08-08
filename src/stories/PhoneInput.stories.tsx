import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PhoneInput } from '../components/input/PhoneInput';

export default {
  title: 'Example/PhoneField',
  component: PhoneInput,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: 375 }}>
    <PhoneInput placeHolder="Telefon numarasi" {...args} onChange={() => null} />
  </div>
);

export const BasicPhone = Template.bind({});
