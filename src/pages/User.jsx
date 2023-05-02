/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ProfileCard from '../components/ProfileCard';
import Table from '../components/Table';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function User() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-12 grid-rows-1 m-8 gap-y-8 gap-x-8">
        <div className="col-span-12 col-start-1 lg:col-start-2 lg:col-span-4 row-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-7 lg:col-start-6 lg:col-end-12 row-span-3">
          <Table />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-8 gap-y-8">
        <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-6 lg:col-start-2 lg:col-end-7">
          <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <Line options={options} data={data} />
          </div>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-6 lg:col-start-7 lg:col-end-12">
          <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
