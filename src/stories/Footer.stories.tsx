import React, { FC } from 'react';
import { Story, Meta } from '@storybook/react';

import { Footer } from '../components';

export default {
  title: 'Example/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
