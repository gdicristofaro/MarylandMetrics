import React from 'react';
import {DATE_FIELD, COLUMN_FIELDS, PERC_DELTA, STMA_PERC_DELTA} from './dataimport';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const formatPerc = (perc: number) => perc ? (Math.round(perc * 1000) / 10) + '%' : '';

const percCols = [
    PERC_DELTA,
    STMA_PERC_DELTA
];

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: any, b: any, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(
  order: Order,
  orderBy: string,
): (a: any, b: any) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default (props: {data: any[]}) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string>(DATE_FIELD);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  let cols = COLUMN_FIELDS;
  let rows = props.data;
  return (
    <Paper>
    <TableContainer style={{maxHeight: "calc(95vh - 50px)"}}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            {cols.map((column) => (
              <TableCell
                key={column}
                align='left'
              >
                <TableSortLabel
                  active={orderBy === column}
                  direction={orderBy === column ? order : 'asc'}
                  onClick={createSortHandler(column)}
                >
                  {column}
                  {orderBy === column ? (
                    //  className={classes.visuallyHidden}
                    <span style={{display: 'none'}}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy))
          .map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {cols.map((column) => {
                  const value = row[column];
                  return (
                    <TableCell key={column} align='left'>
                      {percCols.indexOf(column) >= 0 ? formatPerc(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
  );
}