/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CgTwilio } from 'react-icons/cg';

function TwilioBanner() {
  return (
    <div>
      <div id="marketing-banner" tabIndex="-1" className="relative z-50 flex flex-col md:flex-row justify-between p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm w-3/4 left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600">
            <CgTwilio className="mr-2 text-2xl text-red-600" />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white font-archivo">Twilio Sandbox</span>
          </a>
          <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400 font-roboto">You need to connect to our Twilio Sandbox for starting with our app. Get started now!</p>
        </div>
        <div className="flex items-center flex-shrink-0 animate-pulse">
          <a href="https://wa.me/+14155238886?text=join%20discover-series" className="px-5 font-roboto text-sm py-2 mr-2 font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Connect now!</a>
        </div>
      </div>
    </div>
  );
}

export default TwilioBanner;
