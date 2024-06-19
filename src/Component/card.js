import React from 'react';
import wallet from './image/wallet-buyer.svg';
import USD from './image/usd-circle.svg';
import Deposit from './image/deposit-alt.svg';

export default function Card() {
  return (
    <div className='flex space-x-10'>
      <div className='group'>
        <div className='mt-11 bg-white h-28 rounded-2xl flex justify-center w-64 border border-gray-200 hover:border-green-500 transition duration-300'>
          <img src={wallet} alt="" className='ml-56 mb-8'></img>
        </div>
        <div className='ml-20 relative bottom-10'>
          <h1>Current balance</h1>
        </div>
      </div>
      <div className='group'>
        <div className='mt-11 bg-white h-28 rounded-2xl flex justify-center w-64 border border-gray-200 hover:border-green-500 transition duration-300'>
          <img src={USD} alt="" className='ml-56 mb-8 relative right-28 top-2'></img>
        </div>
        <div className='ml-20 relative bottom-10'>
          <h1>Total Expenses</h1>
        </div>
      </div>
      <div className='group'>
        <div className='mt-11 bg-white h-28 rounded-2xl flex justify-center w-64 border border-gray-200 hover:border-green-500 transition duration-300'>
          <img src={Deposit} alt="" className='ml-56 mb-8'></img>
        </div>
        <div className='ml-20 relative bottom-10'>
          <h1>Total Deposit</h1>
        </div>
      </div>
    </div>
  );
}

