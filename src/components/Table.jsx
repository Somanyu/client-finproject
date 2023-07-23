/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ITEMS_PER_PAGE = 5; // Number of items to display per page

function Table({ expenses }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(expenses.length / ITEMS_PER_PAGE);

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  // Get the current items to be displayed on the current page
  const currentItems = expenses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 font-archivo text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Your Expenses
          <p className="mt-1 text-sm font-normal font-roboto text-gray-500 dark:text-gray-400">Track and visualize your expenses on a yearly and monthly basis with easy-to-read graphs. Easily view every expense you&#39;ve made, including the product price and purchase date, for any specific month or year.</p>
        </caption>
        <thead className="text-xs text-gray-700 font-archivo uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            {/* <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th> */}
          </tr>
        </thead>
        <tbody className="font-roboto">
          {currentItems.map((expense) => (
            <tr
              key={expense.price}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {expense.product}
              </th>
              <td className="px-6 py-4">
                {expense.price}
                {' '}
                /-
              </td>
              <td className="px-6 py-4">{new Date(expense.date).toDateString()}</td>
              {/* <td className="px-6 py-4 text-right">
                <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <ol className="flex justify-center gap-1 text-xs font-medium font-archivo my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <li>
            <button
              type="button"
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`block h-8 w-8 rounded ${currentPage === index + 1
                ? 'border-blue-600 bg-blue-600 text-center leading-8 text-white'
                : 'border border-gray-100 bg-white text-center leading-8 text-gray-900'
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Table;
