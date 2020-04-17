import React from 'react';
import { Line } from 'react-chartjs-2';



export default (props: {
    title: string,
    data: { date: string, value: any }[],
    lineColor: string,
    fillColor: string
}) => {

    const { lineColor, fillColor, title, data } = props;

    const dataProps = {
        labels: data.map((d) => d.date),
        datasets: [
            {
                label: title,
                fill: false,
                lineTension: 0.1,
                backgroundColor: fillColor,
                borderColor: lineColor,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: lineColor,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: lineColor,
                pointHoverBorderColor: lineColor,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.map((d) => d.value || 0)
            }
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }


    return (
        <div style={{ height: 300, marginBottom: 100 }}>
            <Line data={dataProps} options={options} />
        </div>
    )
}