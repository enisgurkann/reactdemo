import React, { FC } from 'react';
import { Story, Meta } from '@storybook/react';

import { LiveChat, LiveChatProps } from '../components/liveChat/LiveChat';

export default {
  title: 'Example/Livechat',
  component: LiveChat,
} as Meta;


const Template: Story = (args) => (
  <LiveChat onClick={() => console.log('caner')} {...args}></LiveChat>
);

export const Primary = Template.bind({});

Primary.args = {};
