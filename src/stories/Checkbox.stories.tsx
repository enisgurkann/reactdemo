import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox } from '../components/checkbox/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as Meta;

export const BaseCheckbox: Story = (args) => <Checkbox label="E-Posta ile" checked={false} {...args} />;
