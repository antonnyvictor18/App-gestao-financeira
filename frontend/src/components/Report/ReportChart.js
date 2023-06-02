import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ReportChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Receitas',
            data: data.incomes,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 1,
          },
          {
            label: 'Despesas',
            data: data.expenses,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
            stacked: true,
          },
        },
      },
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ReportChart;
