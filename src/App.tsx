import React from 'react';
import Table from './Table';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Chart from './Chart';
import { DATE_FIELD, STMA, STMA_DELTA, STMA_PERC_DELTA, COUNTY_COLUMNS } from './dataimport';
import { arrAvg } from './dataprocessing';
const { convertArrayToCSV } = require('convert-array-to-csv');
const download = require('downloadjs');
const dc = require('distinct-colors').default;

const palette = dc({ count: 30 }).map((c: any) => c.toString());

export default (props: { data: any[] }) => {
  const color = ['52, 163, 73', '51, 72, 176', '145, 36, 36'];

  return (
    <>
      <Box padding="1rem">
        <Table {...props} />
        <Button onClick={() => download(convertArrayToCSV(props.data), "data.csv", "text/csv")}>Download CSV</Button>
      </Box>
      {["TotalCases", "CaseDelta", "PercentDelta", STMA, STMA_DELTA, STMA_PERC_DELTA]
        .map((col, idx) => {
          return (
            <Box padding="1rem">
              <Chart
                displayLegend={false}
                logarithmic={false}
                dateLabels={props.data.map(r => r[DATE_FIELD])}
                lines={[{
                  lineColor: `rgb(${color[idx % color.length]})`,
                  fillColor: `rgb(${color[idx % color.length]}, 0.35)`,
                  title: col,
                  values: props.data.map(r => r[col])
                }]}
                title={col}
                key={col}
              />
            </Box>)
        })}
      {[{
        title: 'Cases by County',
        datasets: COUNTY_COLUMNS.map(county => ({ title: county, data: props.data.map(r => r[county]) }))
      },
      {
        title: '5-Day Moving Average',
        datasets: COUNTY_COLUMNS.map(county => {
          let countyArr = props.data.map(r => parseInt(r[county]) || 0);
          let countyAvgArr = arrAvg(countyArr);
          return { title: county, data: countyAvgArr };
        })
      }]
        .map((chart) => {
          return (
            <Box padding="1rem">
              <Chart
                height='90vh'
                displayLegend={true}
                logarithmic={true}
                dateLabels={props.data.map(r => r[DATE_FIELD])}
                lines={chart.datasets.map((line, idx) => ({
                  lineColor: palette[idx],
                  title: line.title,
                  values: line.data
                }))}
                title={chart.title}
                key={chart.title}
              />
            </Box>)
        })}
    </>
  );
}