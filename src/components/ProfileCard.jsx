/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { authActions, persistor } from '../store';
import apiEndpoints from '../utils/apiEndpoints';

axios.defaults.withCredentials = true;

const updateProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Field cannot be empty')
    .matches(/^[a-zA-Z ]+$/, 'Only alphabets are allowed'),
  email: Yup.string()
    .email('Invalid email')
    .required('Field cannot be empty'),
  phone: Yup.string()
    .min(10, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Field cannot be empty')
    .matches(/^[0-9]+$/, 'Only numbers are allowed'),
});

function ProfileCard(props) {
  const endpoints = apiEndpoints();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { userData } = props;

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const logoutRequest = async () => {
    const response = await axios.post(endpoints.logout, null, {
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

  const deleteUser = async () => {
    const response = await axios.get(endpoints.deleteUser, null, {
      withCredentials: true,
    });

    if (response.status === 201) {
      history('/signin');
      return response;
    }

    return new Error('Unable to delete user. Try again!');
  };

  const handleDeleteUser = () => {
    localStorage.clear();
    deleteUser().then(() => {
      persistor.purge();
      dispatch(authActions.setLoggedOut());
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 pt-4">
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full" src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${userData.fullName}&backgroundColor=b6e3f4`} alt={userData.fullName} />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white font-archivo">{userData.fullName}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-roboto">{userData.email}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            {/* <button type="button" className="text-emerald-700 hover:text-white border border-emerald-700 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-full font-archivo text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:drop-shadow-lg dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-600 dark:focus:ring-emerald-800">Edit profile</button> */}
            <button data-modal-target="authentication-modal" onClick={() => setVisible(true)} data-modal-toggle="authentication-modal" className="block text-emerald-700 hover:text-white border border-emerald-700 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-full font-archivo text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:drop-shadow-lg dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-600 dark:focus:ring-emerald-800" type="button">
              Edit profile
            </button>
            <button type="button" onClick={handleLogout} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 font-archivo hover:drop-shadow-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Log out</button>
          </div>
        </div>
      </div>
      <div
        tabIndex="-1"
        aria-hidden="true"
        id="authentication-modal"
        className={`fixed flex justify-center items-center bg-slate-300/50 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${visible ? '' : 'hidden'}`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" onClick={() => setVisible(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 font-archivo dark:text-white">Update your Profile</h3>
              <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${userData.fullName}&backgroundColor=b6e3f4`} alt={userData.fullName} />
              </div>
              <Formik
                initialValues={{
                  fullName: `${userData.fullName}`, email: `${userData.email}`, phone: `${userData.phone}`,
                }}
                validationSchema={updateProfileSchema}
                onSubmit={async (values) => {
                  setLoading(true);
                  try {
                    const response = await axios.post(endpoints.updateUser, values);
                    if (response.status === 201) {
                      setStatus('updated');
                      toast.success(response.data.success, {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: 'colored',
                      });
                      window.location.reload();
                      setVisible(false);
                    } else {
                      setStatus('failed');
                      toast.error(response.data.error, {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: 'colored',
                      });
                    }
                    setLoading(false);
                  } catch (error) {
                    setStatus('failed');
                    if (error.response) {
                      // Server error occurred.
                      toast.error(error.response.data.error, {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: 'colored',
                      });
                    } else {
                      toast.error(error, {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: 'colored',
                      });
                    }
                    setLoading(false);
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-6" action="#">
                    <div className="relative z-0 mb-7">
                      <Field type="text" id="floating_standard1" name="fullName" className="block py-2.5 px-0 w-full text-sm peer text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
                      {errors.fullName && touched.fullName ? (
                        <p className="peer-invalid:visible font-roboto text-red-600 text-sm">
                          {errors.fullName}
                        </p>
                      ) : null}
                      <label htmlFor="floating_standard" className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute font-roboto text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                    </div>
                    <div className="relative z-0 mb-7">
                      <Field type="email" id="floating_standard2" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
                      {errors.email && touched.email ? (
                        <p className="peer-invalid:visible font-roboto text-red-600 text-sm">
                          {errors.email}
                        </p>
                      ) : null}
                      <label htmlFor="floating_standard" className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute font-roboto text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 mb-7">
                      <Field type="tel" id="floating_standard3" name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
                      {errors.phone && touched.phone ? (
                        <p className="peer-invalid:visible font-roboto text-red-600 text-sm">
                          {errors.phone}
                        </p>
                      ) : null}
                      <label htmlFor="floating_standard" className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute font-roboto text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                    <div className="text-sm font-roboto font-medium text-gray-500 dark:text-gray-300">
                      We use
                      {' '}
                      <a href="https://www.dicebear.com/styles/open-peeps" className="text-blue-700 hover:underline dark:text-blue-500">Dicebear API</a>
                      {' '}
                      to generate avatars based on full name.
                      {' '}
                    </div>
                    <div className="mt-4 grid space-y-1 md:mt-6">
                      <button type="submit" className="block text-emerald-700 hover:text-white border border-emerald-700 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-full font-archivo text-sm px-5 py-2.5 text-center mb-2 hover:drop-shadow-lg dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-600 dark:focus:ring-emerald-800" disabled={loading || status === 'updated'} style={{ marginTop: '2rem' }}>
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
                        {loading ? 'Updating...' : status === 'updated' ? 'Updated!' : status === 'failed' ? 'Not update. Try again!' : 'Update profile'}
                      </button>
                      <button type="button" onClick={handleDeleteUser} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center mb-2 font-archivo hover:drop-shadow-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete profile</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ProfileCard.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
