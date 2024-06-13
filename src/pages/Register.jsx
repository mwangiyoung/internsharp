import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [userType, setUserType] = useState('intern');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('src/assets/images/pexels-mohammad-danish-290641-891059.jpg')] bg-no-repeat bg-center bg-cover">
      <h1 className="text-3xl text-white font-bold mb-8">Register</h1>
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

      {userType === 'intern' ? <InternForm /> : <CompanyForm />}
    </div>
  );
}

function InternForm() {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fullname) newErrors.fullname = 'Full name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch('https://internsharp.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password, userType: 'intern' }),
      });

      const result = await response.json();

      if (response.ok) {
        // Registration successful
        console.log('Registration successful:', result);
        navigate('/login'); // Navigate to login page
      } else {
        // Handle errors
        console.error('Registration failed:', result);
      }
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Intern Registration</h2>
      <div className="mb-4">
        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
        />
        {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <button type="submit" className="w-[15em] bg-green-600 text-white py-2 rounded">Register as Intern</button>
    </form>
  );
}

function CompanyForm() {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setPassword] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!companyName) newErrors.companyName = 'Company name is required';
    if (!companyEmail) newErrors.companyEmail = 'Company email is required';
    if (!companyPassword) newErrors.companyPassword= 'companyPassword is required';
    if (!companyWebsite) newErrors.companyWebsite = 'Company website is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch('https://internsharp.onrender.com/api/auth/company/signup  ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName, companyEmail, companyPassword, companyWebsite, userType: 'company' }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Registration successful:', result);
        navigate('/login'); // Navigate to login page
      } else {
        console.error('Registration failed:', result);
      }
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Company Registration</h2>
      <div className="mb-4">
        <label className="block mb-2">Company Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          autoComplete="organization"
        />
        {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Company Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          autoComplete="email"
        />
        {errors.companyEmail && <p className="text-red-500">{errors.companyEmail}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">companyPassword</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={companyPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.companyPassword && <p className="text-red-500">{errors.companyPassword}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Company Website</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
          autoComplete="text"

        />
        {errors.companyWebsite && <p className="text-red-500">{errors.companyWebsite}</p>}
      </div>
      <button type="submit" className="w-[15em] bg-green-600 text-white py-2 rounded-full">Register as Company</button>
    </form>
  );
}

export default Register;



