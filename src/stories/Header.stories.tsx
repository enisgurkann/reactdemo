import React, { FC } from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from '../components';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  isLoggedIn: false,
};
