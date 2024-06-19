import React from 'react';
import Logo from './image/money-coin-transfer.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">

      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-white text-lg font-semibold">Budget</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link to='/settings'>
        <p className="text-white hover:text-green-600 cursor-pointer">Settings</p>
        </Link>
        <Link to='/Contact'>
          <p className="text-white hover:text-green-600 cursor-pointer">Contact</p>
        </Link>
        <Link to='/Second'>
          <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center ">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
