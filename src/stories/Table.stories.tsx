import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table, Button, ButtonTypes } from '../components';

export default {
  title: 'Example/Table',
  component: Table,
} as Meta;

const COLUMNS = [
  {
    Header: 'Gönderen',
    accessor: 'sender',
  },
  {
    Header: 'Sipariş Numarası',
    accessor: 'orderNo',
  },
  {
    Header: 'Tahmini Teslim Zaman',
    accessor: 'destinationTime',
  },
  {
    Header: 'Teslimat Tipi',
    accessor: 'destinationType',
  },
  {
    Header: 'Durumu',
    accessor: 'status',
  },
  {
    Header: '',
    accessor: 'rightElement',
  },
];

const DATA = [
  {
    sender: 'deneme',
    orderNo: 'deneme',
    destinationTime: 'deneme',
    destinationType: 'deneme',
    status: 'deneme',
    rightElement: <Button buttonType={ButtonTypes.secondary} label="Detay" />,
  },
  {
    sender: 'deneme',
    orderNo: 'deneme',
    destinationTime: 'deneme',
    destinationType: 'deneme',
    status: 'deneme',
    rightElement: <Button buttonType={ButtonTypes.secondary} label="Detay" />,
  },
];

const Template: Story = (args) => <Table data={DATA} columns={COLUMNS} {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  columns: COLUMNS,
  data: DATA,
};
