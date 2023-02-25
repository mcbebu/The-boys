import React, { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto';

function MyChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/getdata/02')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const chartData = {
    labels: data.map(item => item.dest_zone_alpha),
    datasets: [
      {
        label: 'Count Inbound Parcels',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Years'
          },
          ticks: {
            beginAtZero: true
          },
          position: 'bottom'
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <Chart type="bar" data={chartData} options={chartOptions} />
  );
}

export default MyChart;