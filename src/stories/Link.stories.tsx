import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Link } from '../components/link/Link';
import { LinkProps } from '../components/link/LinkTypes';

export default {
  title: 'Example/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: 'Tekrar Gönder',
  url: 'www.google.com',
};
