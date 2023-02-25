import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

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

  useEffect(() => {
    if (data.length > 0) {
      const labels = data.map(item => item.dest_zone_alpha);
      const values = data.map(item => item.count);

      const chart = new Chart('my-chart', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Destinations',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
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
        }
      });

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return (
    <canvas id="my-chart"></canvas>
  );
}

export default MyChart;