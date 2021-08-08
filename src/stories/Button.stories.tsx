import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../components/button/Button';
import { ButtonWidth } from "../components/button/Button.types";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button buttonWidth={ButtonWidth.MEDIUM} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'GİRİŞ',
  isDisabled: false,
};
