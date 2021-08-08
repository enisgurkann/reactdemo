import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Card, CardProps, StatusCard, StatusCardProps, PackageDetailCard, PackageDetailCardProps, DestinationCard, DestinationCardProps, DeliveryCard, DeliveryCardProps } from "../components/card";

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card><h1>Card</h1></Card>
const DeliveryCardTemplate: Story<DeliveryCardProps> = (args) => <DeliveryCard></DeliveryCard>
const DestinationCardTemplate: Story<DestinationCardProps> = (args) => <DestinationCard linkClick={() => console.log('icerde')}></DestinationCard>
const PackageDetailCardTemplate: Story<PackageDetailCardProps> = (args) => <PackageDetailCard></PackageDetailCard>
const StatusCardTemplate: Story<StatusCardProps> = (args) => <StatusCard activeIndex={2}></StatusCard>

export const Primary = Template.bind({});
export const BasicDeliveryCard = DeliveryCardTemplate.bind({});
export const BasicDestinationCard = DestinationCardTemplate.bind({});
export const BasicPackageDetail = PackageDetailCardTemplate.bind({});
export const BasicStatusCard = StatusCardTemplate.bind({});

Primary.args = {};
BasicDeliveryCard.args = {};
BasicDestinationCard.args = {};
BasicPackageDetail.args = {};
BasicStatusCard.args = {};