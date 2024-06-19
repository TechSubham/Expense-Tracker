import React from 'react';
import { Link } from 'react-router-dom';
import money from './image/money.jpeg';
import wave from './image/wave.svg';

function First() {
  return (
    <div>
      <div className='!mt-60 !mx-72 flex'>
        <div className='flex flex-col'>
          <h1 className='text-black text-6xl font-semibold'>Take Control Of</h1>
          <h1 className='text-green-600 text-6xl font-semibold'>Your Money</h1>
          <p className='text-lg'>Personal budgeting is the secret to Finance Freedom</p>
          <p className='text-lg'>Start your journey today.</p>
          <Link to="/second">
            <button
              type="button"
              className="items-center rounded-md bg-gray-700 px-3 font-semibold text-white hover:bg-green-600 border-2 !w-32 !m-1 !py-1">
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img src={money} alt="money" className='!w-96' />
        </div>
      </div>
      <img src={wave} alt="wave" />
    </div>
  );
}

export default First;

