export type TableStyle = {
  bgColor: string;
};

export interface TableProps {
  columns: Array<ColumnItem>;
  data: object[];
  tableStyle?: TableStyle;
}

export type ColumnItem = {
  Header: string;
  accessor: string;
};

export const COLUMNS = [
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
