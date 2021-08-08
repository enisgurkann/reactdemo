import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SelectionInput, SelectionInputProps } from '../components/input/SelectionInput';

export default {
  title: 'Example/Input',
  component: SelectionInput,
} as Meta;

const Template: Story<SelectionInputProps<any, boolean>> = (args) => <SelectionInput {...args} />;

export const DefaultSelectionInput = Template.bind({});
