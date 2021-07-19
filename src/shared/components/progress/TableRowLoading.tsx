import React from 'react';
import { TableRow, TableCell, useTheme } from '@material-ui/core';
import Loader from 'react-loader-spinner';

interface TableRowLoadingProps {
  colSpan: number;
  loading?: boolean;
}
export const TableRowLoading: React.FC<TableRowLoadingProps> = ({
  colSpan,
  loading,
}) => {
  const theme = useTheme();
  const content = loading ? (
    <Loader type="ThreeDots" color={theme.palette.primary.main} />
  ) : (
    'No Records'
  );
  return (
    <TableRow>
      <TableCell align="center" colSpan={colSpan}>
        {content}
      </TableCell>
    </TableRow>
  );
};
