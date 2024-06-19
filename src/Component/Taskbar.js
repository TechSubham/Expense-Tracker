import React from 'react';

import Navbar from './Navbar';

import Expenses from './Expenses'



function Taskbar() {
  return (
    <>
    <div className='bg-gray-100 !h-max'>
      <Navbar />
        <div className='flex ml-10'>
          <Expenses/>
        </div>
      </div>
    </>
  );
}

export default Taskbar;



