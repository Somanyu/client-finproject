/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Outlet } from 'react-router-dom';

import RightBrand from './RightBrand';

function AuthLayout() {
  return (
    <div>
      AuthLayout
      <RightBrand />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
