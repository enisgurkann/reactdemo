import React, { FC } from 'react';
import { Story, Meta } from '@storybook/react';

import { Tab, TabItem } from '../components/tab/Tab';

export default {
  title: 'Example/Tab',
  component: Tab,
} as Meta;

const TabItemLogin: FC = () => (
  <div>
    <h1>Giris yap</h1>
  </div>
);

const TabItemSignUp: FC = () => (
  <div>
    <h1>kayit ol</h1>
  </div>
);

const TAB_ITEMS = [
  { title: 'GİRİŞ YAP', content: TabItemLogin },
  { title: 'KAYIT OL', content: TabItemSignUp },
];

const Template: Story = (args) => (
  <div style={{ width: 375 }}>
    <Tab tabItems={TAB_ITEMS} {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Cem',
  isDisabled: false,
};
