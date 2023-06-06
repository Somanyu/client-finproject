/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import axios from 'axios';
import apiEndpoints from '../utils/apiEndpoints';

function TwilioSendVerify() {
  const endpoints = apiEndpoints();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleClick = () => {
    setLoading(true);

    // axios.get('https://server-finproject.onrender.com/verify')
    axios.get(endpoints.twilioVerify)
      .then((response) => {
        if (response.status === 201) {
          setStatus('sent');
        } else if (response.status === 400) {
          setStatus('failed');
        }
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        setStatus('failed');
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="flex items-center flex-shrink-0">
        <button
          onClick={handleClick}
          type="button"
          className={`text-white font-roboto ${status === 'sent' ? 'bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-300' : 'bg-red-700 hover:bg-red-800 focus:ring-red-300'} focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 inline-flex items-center ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={loading || status === 'sent'}
        >
          {loading && (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          )}
          {loading ? 'Loading...' : status === 'sent' ? 'You\'re verified!' : status === 'failed' ? 'Not verified. Check number!' : 'Verify number'}
        </button>
        {/* <button onClick={handleClick} type="button" className="px-5 font-roboto text-sm py-2 mr-2 font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Test Sandbox</button> */}
      </div>
    </div>
  );
}

export default TwilioSendVerify;
