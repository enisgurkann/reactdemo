import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PackageStatus, PackageStatusProps } from '../components/packageStatus/PackageStatus';

export default {
  title: 'Example/PackageStatus',
  component: PackageStatus,
} as Meta;

const Template: Story<PackageStatusProps> = (args) => <PackageStatus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  activeIndex: -1,
};
