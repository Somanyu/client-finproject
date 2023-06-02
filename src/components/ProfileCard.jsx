/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions, persistor } from '../store';

axios.defaults.withCredentials = true;

function ProfileCard(props) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { userData } = props;

  const logoutRequest = async () => {
    const response = await axios.post('http://localhost:3001/auth/logout', null, {
      withCredentials: true,
    });

    if (response.status === 200) {
      history('/signin');
      return response;
    }

    return new Error('Unable to logout. Try again!');
  };

  const handleLogout = () => {
    localStorage.clear();
    logoutRequest().then(() => {
      persistor.purge();
      dispatch(authActions.setLoggedOut());
    });
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 pt-4">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full" src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${userData.fullName}&backgroundColor=b6e3f4`} alt="Bonnie profile" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white font-archivo">{userData.fullName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-roboto">{userData.email}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <button type="button" className="text-emerald-700 hover:text-white border border-emerald-700 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-full font-archivo text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:drop-shadow-lg dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-600 dark:focus:ring-emerald-800">Edit profile</button>
          <button type="button" onClick={handleLogout} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 font-archivo hover:drop-shadow-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Log out</button>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
