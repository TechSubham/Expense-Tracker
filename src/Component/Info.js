import React, { useState } from 'react';
import QRCODE from './image/QR.jpg'

function App() {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [showMethods, setShowMethods] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    if (e.target.value < 1000) {
      setError('Minimum deposit amount is ₹1000');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount >= 1000) {
      setShowMethods(true);
    } else {
      setError('Minimum deposit amount is ₹1000');
    }
  };

  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    let message = `You have deposited ₹${amount} using ${selectedMethod}.`;
    if (selectedMethod === 'UPI') {
      message += ` UPI ID: ${upiId}`;
    } else if (selectedMethod === 'Debit Card' || selectedMethod === 'Credit Card') {
      message += ` Card Number: ${cardNumber}, CVV: ${cvv}, Expiry Date: ${expiryDate}`;
    } else if (selectedMethod === 'Net Banking') {
      message += ` Username: ${username}, Account Number: ${accountNumber}`;
    }
    alert(message);

    setAmount('');
    setShowMethods(false);
    setSelectedMethod('');
    setUpiId('');
    setCardNumber('');
    setCvv('');
    setExpiryDate('');
    setAccountNumber('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Deposit Money</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount (₹)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter amount"
              required
              min="1000"
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Deposit
          </button>
        </form>

        {showMethods && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4 text-center">Select Deposit Method</h3>
            <div className="flex flex-col space-y-2">
              {['UPI', 'Debit Card', 'Credit Card', 'Net Banking', 'QR Code'].map((method) => (
                <button
                  key={method}
                  onClick={() => handleMethodSelection(method)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedMethod && (
          <form onSubmit={handleFinalSubmit} className="mt-6">
            {selectedMethod === 'UPI' && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="upiId">
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upiId"
                  name="upiId"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter UPI ID"
                  required
                />
              </div>
            )}

            {(selectedMethod === 'Debit Card' || selectedMethod === 'Credit Card') && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Card Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter CVV"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="MM/YY"
                    required
                  />
                </div>
              </>
            )}

            {selectedMethod === 'Net Banking' && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Username"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountNumber">
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Account Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Password"
                    required
                  />
                </div>
              </>
            )}

            {selectedMethod === 'QR Code' && (
              <div className="flex justify-center">
                <img
                  src={QRCODE}
                  alt="QR Code"
                  className="w-40 h-40"
                />
              </div>
            )}

            {selectedMethod !== 'QR Code' && (
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              >
                Confirm Deposit
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
