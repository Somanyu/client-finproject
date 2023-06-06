/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { CgTwilio } from 'react-icons/cg';
import { FcSms, FcApproval, FcMoneyTransfer } from 'react-icons/fc';
import TwilioSendVerify from './TwilioSendVerify';

function TwilioBanner() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <div id="marketing-banner" tabIndex="-1" className="relative z-50 flex flex-col md:flex-row justify-between p-4 mb-5 -translate-x-1/2 rounded-lg bg-white border-2 border-gray-100 drop-shadow-xl w-3/4 left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600">
              <CgTwilio className="mr-2 text-2xl text-red-600" />
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white font-archivo">Twilio Sandbox</span>
            </a>
            <p className="flex items-center text-base font-normal text-black dark:text-gray-400 font-roboto">You need to connect to our Twilio Sandbox for starting with our app. Get started now!</p>
          </div>
          <button data-modal-target="staticModal" onClick={() => setVisible(true)} data-modal-toggle="staticModal" className="block font-roboto text-white animate-pulse rounded-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
            Get Started!
          </button>
          {/* <button data-dismiss-target="#marketing-banner" type="button" className="absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            <span className="sr-only">Close banner</span>
          </button> */}
        </div>
      </div>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${visible ? '' : 'hidden'}`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
              <h3 className="text-xl font-archivo font-semibold text-gray-900 dark:text-white">
                Get started with Twilio Sandbox!
              </h3>
              <button onClick={() => setVisible(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
            <div className="p-6 space-y-6">

              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal font-roboto leading-none text-gray-400 dark:text-gray-500">Step 01</time>
                  <h3 className="text-lg flex font-archivo font-semibold text-gray-900 dark:text-white">
                    Connect to Twilio Sandbox
                    <FcSms className="ml-2 text-lg mt-1" />
                    {' '}
                  </h3>
                  <p className="mb-4 text-base font-roboto font-normal text-gray-500 dark:text-gray-400">
                    You need to connect to Twilio Sandbox first by sending
                    {' '}
                    <strong className="font-semibold text-gray-900 dark:text-white">join discover-series</strong>
                    {' '}
                    Sandbox membership lasts for 72 hours. You can rejoin a Sandbox as many times as you want.
                  </p>
                  <div className="flex items-center flex-shrink-0">
                    <a href="https://wa.me/+14155238886?text=join%20discover-series" className="px-5 font-roboto text-sm py-2 mr-2 rounded-full font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" target="_blank" rel="noreferrer">Connect now!</a>
                  </div>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none font-roboto text-gray-400 dark:text-gray-500">Step 02</time>
                  <h3 className="text-lg flex font-semibold text-gray-900 font-archivo dark:text-white">
                    Verify number in WhatsApp
                    <FcApproval className="ml-2 text-lg mt-1" />
                    {' '}
                  </h3>
                  <p className="text-base mb-4 font-normal text-gray-500 font-roboto dark:text-gray-400">Verify if you receive a welcome message from us in your given WhatsApp number by clicking the button below.</p>
                  <TwilioSendVerify />
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none font-roboto text-gray-400 dark:text-gray-500">Step 03</time>
                  <h3 className="text-lg flex font-semibold text-gray-900 font-roboto dark:text-white">
                    Start managing your finance
                    <FcMoneyTransfer className="ml-2 text-lg mt-1" />
                    {' '}
                  </h3>
                  <p className="text-base font-normal text-gray-500 font-roboto dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
              </ol>

            </div>
            <div className="items-center p-6 space-x-2 border-t hidden border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default TwilioBanner;
