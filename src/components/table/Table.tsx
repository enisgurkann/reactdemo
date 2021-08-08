/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable } from 'react-table';
import { TableProps } from './Table.constant';
import { StyledRow, StyledTable, StyledTd, StyledTh } from './Table.styles';

export const Table: React.FC<TableProps> = ({ columns, data, tableStyle }) => {
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <StyledTable>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <StyledTh {...column.getHeaderProps()}>{column.render('Header')}</StyledTh>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <StyledRow {...row.getRowProps()} tableStyle={tableStyle}>
              {row.cells.map((cell) => (
                <StyledTd {...cell.getCellProps()}>{cell.render('Cell')}</StyledTd>
              ))}
            </StyledRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
