import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('intern'); // Adding userType state
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      let response;
      if (userType === 'intern') {
        response = await fetch('https://internsharp.onrender.com/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
      } else {
        response = await fetch('https://internsharp.onrender.com/api/auth/company/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
      }

      const result = await response.json();

      if (response.ok) {
        if (userType === 'intern') {
          navigate('/internship');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError(result.message || 'Failed to log in. Please check your email and password.');
      }
    } catch (error) {
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('src/assets/images/pexels-quang-nguyen-vinh-222549-2176593.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10">
        <h1 className="text-3xl text-sky-900 font-bold mb-8">Login</h1>
        <div className="mb-4">
          <button
            onClick={() => setUserType('intern')}
            className={`px-4 py-2 mr-2 rounded ${userType === 'intern' ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            Intern
          </button>
          <button
            onClick={() => setUserType('company')}
            className={`px-4 py-2 rounded ${userType === 'company' ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            Company
          </button>
        </div>
        <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-[4em] bg-green-600 text-white py-2 rounded">Login</button>
          <p className="mt-4">
            Don't have an account? <a href="/register" className="text-sky-900 hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;





