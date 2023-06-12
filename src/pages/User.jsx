/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import TwilioBanner from '../components/TwilioBanner';
import apiEndpoints from '../utils/apiEndpoints';

axios.defaults.withCredentials = true;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const monthlyOptions = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly',
    },
  },
};

export const yearlyOptions = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Yearly',
    },
  },
};

const monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const yearlyLabels = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039'];
function User() {
  const endpoints = apiEndpoints();

  const [userData, setUserData] = useState();

  const sendRequest = async () => {
    const response = await axios.get(endpoints.user, {
      withCredentials: true,
    }).catch((err) => console.log(err));
    const data = await response.data;
    return data;
  };

  const refreshToken = async () => {
    const tokenResponse = await axios.get(endpoints.refresh, {
      withCredentials: true,
    }).catch((err) => console.log(err));

    const tokenData = await tokenResponse.data;
    return tokenData;
  };

  useEffect(() => {
    sendRequest()
      .then((data) => setUserData(data))
      .catch((error) => {
        console.log(error);
      });

    const refreshTokenInterval = setInterval(() => {
      refreshToken()
        .then((data) => setUserData(data))
        .catch((error) => {
          console.log(error);
        });
    }, 1000 * 30);

    return () => clearInterval(refreshTokenInterval);
  }, []);

  // Calculate monthly expenses
  const calculateMonthlyExpenses = (expenses) => {
    const expensesByMonth = {};
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const month = date.getMonth();
      // eslint-disable-next-line no-prototype-builtins
      if (!expensesByMonth.hasOwnProperty(month)) {
        expensesByMonth[month] = [];
      }
      expensesByMonth[month].push(expense.price);
    });

    const monthlyTotalExpenses = Object.values(expensesByMonth).map((monthExpenses) => monthExpenses.reduce((sum, expense) => sum + expense, 0));

    return monthlyTotalExpenses;
  };

  const monthlyChartData = {
    labels: monthlyLabels,
    datasets: [
      {
        label: 'Expenses',
        data: userData?.user?.expenses ? calculateMonthlyExpenses(userData.user.expenses) : [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  // Calculate yearly expenses
  const calculateYearlyExpenses = (expenses) => {
    const expensesByYear = {};
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      // eslint-disable-next-line no-prototype-builtins
      if (!expensesByYear.hasOwnProperty(year)) {
        expensesByYear[year] = [];
      }
      expensesByYear[year].push(expense.price);
    });

    const yearlyTotalExpenses = Object.values(expensesByYear).map((yearExpenses) => yearExpenses.reduce((sum, expense) => sum + expense, 0));

    return yearlyTotalExpenses;
  };

  const yearlyChartData = {
    labels: yearlyLabels,
    datasets: [
      {
        label: 'Expenses',
        data: userData?.user?.expenses ? calculateYearlyExpenses(userData.user.expenses) : [],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <TwilioBanner />
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-12 grid-rows-1 m-8 gap-y-8 gap-x-8">
          <div className="col-span-12 col-start-1 lg:col-start-2 lg:col-span-4 row-span-1">
            {userData && <ProfileCard userData={userData.user} />}
          </div>
          <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-7 lg:col-start-6 lg:col-end-12 row-span-3">
            {userData && userData.user.expenses && <Table expenses={userData.user.expenses} />}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-8 gap-y-8">
          <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-6 lg:col-start-2 lg:col-end-7">
            <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              {userData?.user?.expenses ? (
                <Line options={monthlyOptions} data={monthlyChartData} />
              ) : (
                <p>No expenses yet</p>
              )}
              {/* <Line options={options} data={chartData} /> */}
            </div>
          </div>
          <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-6 lg:col-start-7 lg:col-end-12">
            <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              {userData?.user?.expenses ? (
                <Line options={yearlyOptions} data={yearlyChartData} />
              ) : (
                <p>No expenses yet</p>
              )}
              {/* <Line options={options} data={chartData} /> */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default User;
