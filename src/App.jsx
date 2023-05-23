/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import 'animate.css';
import { useSelector } from 'react-redux';

import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        {/* {isLoggedIn ? (
          <Route path="/user" element={<User />} />
        ) : (
          <Route path="/user" element={<Navigate replace to="/signin" />} />
        )} */}

        {isLoggedIn && <Route path="/user" element={<User />} />}
        <Route path="/user" element={<Navigate replace to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
