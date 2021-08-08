import { Story, Meta } from '@storybook/react';

import { AdressCard, AdressCardProps } from '../components/card/AdressCard';

export default {
  title: 'Example/AdressCard',
  component: AdressCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Adress1: Story<AdressCardProps> = (args) => <AdressCard  {...args} />;
const Adress2: Story<AdressCardProps> = (args) => <AdressCard  {...args} />;

export const Ev = Adress1.bind({});
export const Is = Adress2.bind({});

Ev.args = {
  adressType: 1,
  name: "EV",
  adress: "Suadiye, Sancak Sok. no 12 Kadıköy, İstanbul 31401"
};
Is.args = {
  adressType: 2,
  name: "IS",
  adress: "Eti Sitesi A2 Blok 9/5 Beşiktaş, İstanbul 34335"
};