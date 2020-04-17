import React from 'react';
import { Line } from 'react-chartjs-2';

export interface LineData {
    title: string,
    values: number[],
    lineColor: string,
    fillColor?: string
}

export default (props: {
    title: string,
    height?: number | string,
    displayLegend: boolean,
    dateLabels: string[],
    logarithmic: boolean,
    lines: LineData[]
}) => {

    const { lines, title, dateLabels, logarithmic, displayLegend, height } = props;

    const dataProps = {
        labels: dateLabels,
        datasets: lines.map((line) => ({
            label: line.title,
            fill: line.fillColor ? true : false,
            lineTension: 0.1,
            backgroundColor: line.fillColor,
            borderColor: line.lineColor,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: line.lineColor,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: line.lineColor,
            pointHoverBorderColor: line.lineColor,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: line.values
        })),
    };
    
    const options = {
        title: {
            text: title,
            display: true
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: true,
            }],
            yAxes: [{
                display: true,
                type: logarithmic ? 'logarithmic' : undefined,
            }]
        },
        legend: {
            display: displayLegend,
            position: 'bottom'
        }
    }


    return (
        <div style={{ height: height || 300, marginBottom: 0 }}>
            <Line data={dataProps} options={options} />
        </div>
    )
}