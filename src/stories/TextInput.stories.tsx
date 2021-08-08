import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextInput, TextInputProps } from '../components/input/TextInput';
import { SearchInputProps, SearchInput } from '../components/input/SearchInput';

export default {
  title: 'Example/Input',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

const SearchTemplate: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const DefaultTextInput = Template.bind({});

export const SearchField = SearchTemplate.bind({});

DefaultTextInput.args = {
  label: 'Tek kullanımlık SMS Şifresi',
  value: '',
  id: 'sms'
};

SearchField.args = {
  label: 'Paket no, GSM veya TCKN',
  value: '',
  id: 'search'
};