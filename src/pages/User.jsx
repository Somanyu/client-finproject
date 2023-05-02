/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Table from '../components/Table';

function User() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-12 grid-rows-5">
        <div className="col-span-6 col-start-4 lg:col-start-2 lg:col-span-4 row-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-7 lg:col-start-6 lg:col-end-12 row-span-3">
          <Table />
        </div>
      </div>

    </div>
  );
}

export default User;
