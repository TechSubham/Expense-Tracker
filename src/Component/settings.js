import React, { useState } from 'react';

function Settings() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [theme, setTheme] = useState('light');
  const [currency, setCurrency] = useState('USD');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = () => {
    // Save profile changes
    console.log('Profile saved', profile);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  return (
    <div className='bg-gray-100 !h-max'>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* User Profile Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            className="w-full p-3 border rounded"
          />
        </div>
        <button
          onClick={handleSaveProfile}
          className="bg-blue-500 text-white p-3 rounded"
        >
          Save Profile
        </button>
      </div>

      {/* Theme Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Theme</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Select Theme</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="w-full p-3 border rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>

      {/* Currency Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Currency</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Select Currency</label>
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="w-full p-3 border rounded"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email Notifications</label>
          <input
            type="checkbox"
            name="email"
            checked={notifications.email}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          <label className="text-gray-700">Enable Email Notifications</label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Push Notifications</label>
          <input
            type="checkbox"
            name="push"
            checked={notifications.push}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          <label className="text-gray-700">Enable Push Notifications</label>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Settings;
