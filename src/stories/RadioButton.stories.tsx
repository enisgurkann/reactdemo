import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RadioButton } from '../components/radio-button/RadioButton';
import { RadioButtonGroup } from '../components/radio-button/RadioButtonGroup';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story = (args) => (
  <RadioButtonGroup value='deneme' {...args}>
    <RadioButton label="Erkek" value='man' />
    <RadioButton label="Kadin" value='woman' />
  </RadioButtonGroup>
)

export const Primary = Template.bind({});
Primary.args = {
  value: 'deneme'
};
