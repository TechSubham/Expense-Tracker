import React from 'react';

function SummaryOverview({ totalDeposits, totalExpenses, currentBalance }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md !w-[800px] !h-40 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Summary Overview</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-gray-600">Total Deposit</p>
          <p className="text-xl font-bold">₹{totalDeposits}</p>
        </div>
        <div>
          <p className="text-gray-600">Total Expenses</p>
          <p className="text-xl font-bold">₹{totalExpenses}</p>
        </div>
        <div>
          <p className="text-gray-600">Current Balance</p>
          <p className="text-xl font-bold">₹{currentBalance}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryOverview;
