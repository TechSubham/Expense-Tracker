import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Google from './image/google.svg';
import facebook from './image/facebook.svg';
import linkedin from './image/linkedin.svg';

export default function Second() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSignIn = () => {
    if (email && password) {
      history.push('/taskbar');
    } else {
      alert('Please fill in both email and password.');
    }
  };

  const handleSignUp = () => {
    history.push('/signup');
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex ml-48">
        <div className="ml-72 mt-40 flex flex-col">
          <h1 className="font-extrabold text-5xl my-1">Login to your Account</h1>
          <p className="text-xl my-2 ml-28 mt-4">Login using social media Network</p>
          <div className="flex ml-40 space-x-5 mt-4">
            <img src={Google} alt="Google" />
            <img src={facebook} alt="Facebook" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
          <div className="ml-56 mt-8">OR</div>
          <div className="flex flex-col">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border-2 border-y-2 rounded-md border-slate-400 py-2 px-1 w-80 my-2 hover:border-green-600 active:border-green-600 mt-10 ml-16"
              placeholder="Email ID"
              required
            />
            {emailError && <p className="text-red-600 ml-16">{emailError}</p>}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-y-2 rounded-md border-slate-400 py-2 px-1 w-80 hover:border-green-600 active:border-green-600 mt-3 ml-16"
              placeholder="Password"
              required
            />
          </div>
          <button
            onClick={handleSignIn}
            type="submit"
            disabled={!email || !password || emailError}
            className={`items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 font-semibold text-white hover:bg-green-600 ml-40 mt-6 w-32 ${!email || !password || emailError ? 'opacity-50 cursor-not-allowed' : ''}`}>
            Sign In
          </button>
          <div className="flex ml-28 mt-10">
            <p>Don't have an account?</p>
            <p className="ml-2 text-green-600 hover:cursor-pointer" onClick={handleSignUp}>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
