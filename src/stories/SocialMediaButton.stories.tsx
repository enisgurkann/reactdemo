import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SocialMediaButton } from '../components/socialMediaButton/SocialMediaButton';
import { SocialMediaButtonProps, SocialMediaType } from '../components/socialMediaButton/SocialMediaTypes';

export default {
  title: 'Example/SocialMediaButton',
  component: SocialMediaButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SocialMediaButtonProps> = (args) => <SocialMediaButton {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  mediaType: SocialMediaType.facebook,
};

export const Google = Template.bind({});
Google.args = {
  mediaType: SocialMediaType.google,
};
