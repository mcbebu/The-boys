import React, { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto';

function MyChart() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(2);

  useEffect(() => {
    fetch(`/getdata/${count < 10 ? `0${count}` : count}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [count]);

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
            labelString: 'Destination Zones',
            fontColor: 'white'
          },
          ticks: {
            beginAtZero: true,
            fontColor: 'white'
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: 'white'
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 30) {
        setCount(2);
      } else {
        setCount(count + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Chart type="bar" data={chartData} options={chartOptions} />
  );
}

export default MyChart;