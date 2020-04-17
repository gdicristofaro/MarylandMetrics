import React from 'react';
import Table from './Table';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chart from './Chart';
import { DATE_FIELD, STMA, STMA_DELTA, STMA_PERC_DELTA } from './dataimport';
const {convertArrayToCSV} = require('convert-array-to-csv');
const download = require('downloadjs');


export default (props: { data: any[] }) => {
  const color = ['52, 163, 73', '51, 72, 176', '145, 36, 36'];
  return (
    <>
      <Table {...props} />
      <Button onClick={() => download(convertArrayToCSV(props.data), "data.csv", "text/csv")}>Download CSV</Button>
      <Box marginTop={5}>
        {["TotalCases", "CaseDelta", "PercentDelta", STMA, STMA_DELTA, STMA_PERC_DELTA]
          .map((col, idx) => {
            return (<Chart
              fillColor={`rgb(${color[idx % color.length]}, 1)`}
              lineColor={`rgb(${color[idx % color.length]}, 0.4)`}
              title={col}
              key={col}
              data={props.data.map((r) => ({ date: r[DATE_FIELD], value: r[col] }))}
            />)
          })}
      </Box>
    </>
  );
}