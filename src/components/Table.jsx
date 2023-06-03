/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function Table({ expenses }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 font-archivo text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Our products
          <p className="mt-1 text-sm font-normal font-roboto text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
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
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="font-roboto">
          {expenses.map((expense) => (
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
              <td className="px-6 py-4">{expense.product}</td>
              <td className="px-6 py-4">{new Date(expense.date).toDateString()}</td>
              <td className="px-6 py-4 text-right">
                <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
