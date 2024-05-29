import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenditureAnalysisPage = ({ expenditureData }) => {
  const data = {
    labels: expenditureData.map(item => item.category),
    datasets: [
      {
        label: 'Expenditure',
        data: expenditureData.map(item => item.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Expenditure Analysis'
      }
    },
    scales: {
      x: {
        type: 'category',
        labels: expenditureData.map(item => item.category),
        display: true,
        title: {
          display: true,
          text: 'Category'
        }
      },
      y: {
        beginAtZero: true,
        display: true,
        title: {
          display: true,
          text: 'Amount'
        }
      }
    }
  };

  return (
    <div>
      <header>
        <h1>Expenditure Analysis</h1>
      </header>
      <main className="expenditure-analysis-main">
        <Bar data={data} options={options} />
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default ExpenditureAnalysisPage;
