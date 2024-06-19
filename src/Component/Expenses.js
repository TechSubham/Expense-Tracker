import React, { useState } from 'react';
import SummaryOverview from './SummaryOverview';


function ExpenseDepositTracker() {
  const [initialBudget, setInitialBudget] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositDescription, setDepositDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (amount, description, type) => {
    if (amount && description) {
      if (type === 'expense' && parseFloat(amount) > calculateRemainingBudget()) {
        alert("Expense exceeds remaining budget. Please enter a smaller amount.");
        return;
      }
      const newTransaction = { amount: parseFloat(amount), description, type };
      setTransactions([...transactions, newTransaction]);
      if (type === 'expense') {
        setExpenseAmount('');
        setExpenseDescription('');
      } else if (type === 'deposit') {
        setDepositAmount('');
        setDepositDescription('');
        setInitialBudget(initialBudget + parseFloat(amount));
      }
    }
  };

  const calculateRemainingBudget = () => {
    const totalExpenses = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((total, expense) => total + expense.amount, 0);
    return initialBudget - totalExpenses;
  };

  const totalDeposits = transactions
    .filter((transaction) => transaction.type === 'deposit')
    .reduce((total, deposit) => total + deposit.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container mx-auto p-4">
      <SummaryOverview
        totalDeposits={totalDeposits}
        totalExpenses={totalExpenses}
        currentBalance={calculateRemainingBudget()}
      />
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Budget: ₹{calculateRemainingBudget()}</h2>
        {calculateRemainingBudget() <= 0 && (
          <div className="text-red-500 font-bold">Budget is zero. Please add a deposit.</div>
        )}
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTransaction(depositAmount, depositDescription, 'deposit');
          }}>
          <h2 className="text-xl font-semibold mb-4">Add Deposit</h2>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Amount"
            className="w-full p-3 border rounded mb-4"
          />
          <input
            type="text"s
            value={depositDescription}
            onChange={(e) => setDepositDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-3 border rounded mb-4"
          />
           
          <button type="submit" className="w-full bg-green-500 text-white p-3 rounded">
            Add Deposit
          </button>
         
        </form>

        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTransaction(expenseAmount, expenseDescription, 'expense');
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Amount"
            className="w-full p-3 border rounded mb-4"
          />
          <input
            type="text"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-3 border rounded mb-4"
          />
         
          <button type="submit" className="w-full bg-red-500 text-white p-3 rounded">
            Add Expense
          </button>
        
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Transaction</h2>
        <ul className="space-y-4">
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg shadow-md ${
                transaction.type === 'expense' ? 'bg-red-100' : 'bg-green-100'
              }`}
            >
              <div className="flex justify-between">
                <span>{transaction.description}</span>
                <span>₹{transaction.amount}</span>
              </div>
              <div className="text-sm text-gray-500">{transaction.type.toUpperCase()}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseDepositTracker;


