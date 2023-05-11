/* eslint-disable linebreak-style */
/* eslint-disable no-inner-declarations */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/auth/register', formData)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  };

  return (
    <div>
      <div className="flex relative p-8">
        <img className="h-auto w-20 lg:w-8" src="/assets/logoipsum-247.svg" alt="website logo" />
        <h2 className="text-xl hidden lg:block xl:block font-archivo pl-3 font-bold text-black">Finance WP</h2>
      </div>
      <div className="h-96 flex mt-0">
        <div className="w-4/5 m-auto grid grid-cols-8 gap-4 p-2 rounded-2xl">

          {/* First Content */}
          <div className="col-span-12 lg:col-span-4 md:col-span-4 py-12 px- md:px-5 lg:px-10 xl:px-28 text-sm rounded-lg bg-transparent dark:bg-gray-800 dark:text-blue-400" role="alert">
            <form onSubmit={handleSignUpSubmit} className="animate__animated animate__slideInLeft animate__faster">
              <h1 className="font-bold text-gray-900 dark:text-white text-left font-archivo text-3xl">Create an account</h1>
              <p className="text-left mb-14 mt-2 font-light text-gray-500 dark:text-gray-400 font-roboto">Let&#39;s get you started with expenses with a free account.</p>

              <div className="relative z-0 mb-7">
                <input type="text" id="floating_standard1" name="fullName" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
                <label htmlFor="floating_standard" className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute font-roboto text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
              </div>

              <div className="relative z-0 mb-7">
                <input type="email" id="floating_standard2" name="email" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
                <label htmlFor="floating_standard" className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute font-roboto text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
              </div>

              <div className="relative z-0 mb-7">
                <input type="tel" id="floating_standard3" name="phone" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
                <label htmlFor="floating_standard" className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute font-roboto text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
              </div>

              <div className="relative z-0 mb-7">
                <input type="password" id="floating_standard4" name="password" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
                <label htmlFor="floating_standard" className="after:content-['*'] after:ml-0.5 after:text-red-500 absolute font-roboto text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>

              <div className="flex flex-col mt-12">
                <button type="submit" className="text-white mb-3 hover:drop-shadow-lg bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 dark:bg-blue-600 font-archivo">Create account</button>
                <button type="button" className="text-black flex justify-center bg-transparent border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 font-archivo">
                  <FcGoogle className="text-2xl mr-2" />
                  Sign up with Google
                </button>
              </div>
            </form>
            <p className="mb-3 mt-4 md:block lg:hidden xl:hidden font-light text-gray-500 dark:text-gray-400 font-roboto text-center">
              Already have a account.
              <Link to="/signin" className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline pl-1">Log in</Link>
            </p>
          </div>

          {/* Second Content */}
          <div className="animate__animated animate__fadeIn col-span-4 hidden lg:flex md:flex px-4 py-4 text-sm m-1 rounded-2xl dark:bg-gray-800 dark:text-red-400" style={{ backgroundColor: 'rgb(254, 226, 226)', backgroundImage: 'radial-gradient(at 5% 65%, rgb(187, 247, 208) 0, transparent 7%), radial-gradient(at 98% 57%, rgb(209, 250, 229) 0, transparent 86%), radial-gradient(at 93% 28%, rgb(110, 231, 183) 0, transparent 39%), radial-gradient(at 68% 42%, rgb(6, 182, 212) 0, transparent 81%), radial-gradient(at 59% 8%, rgb(91, 33, 182) 0, transparent 72%)' }}>

            <div className="absolute">
              <Link to="/signin" type="button" className="text-white font-archivo bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Log in</Link>
            </div>
            <div className="flex justify-center flex-col">
              <img className="mx-auto" src="/assets/signupsvg.svg" width="450" alt="svg_logo" />
              <h3 className="lg:text-4xl md:text-4xl text-gray-900 dark:text-white text-center font-archivo font-bold flex justify-center items-center px-5 py-2 pb-5">
                <span className="text-neutral-900">Transforming finances for a better tomorrow.</span>
              </h3>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
