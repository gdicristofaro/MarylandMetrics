import React from 'react';
import {DATE_FIELD, COLUMN_FIELDS, PERC_DELTA, STMA_PERC_DELTA} from './dataimport';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const formatPerc = (perc: number) => perc ? (Math.round(perc * 1000) / 10) + '%' : '';

const percCols = [
    PERC_DELTA,
    STMA_PERC_DELTA
];

export default (props: {data: any[]}) => {
  let cols = [DATE_FIELD, ...COLUMN_FIELDS];
  let rows = props.data;
  return (
    <Paper>
    <TableContainer style={{maxHeight: 600}}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            {cols.map((column) => (
              <TableCell
                key={column}
                align='left'
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
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