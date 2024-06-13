// InternDashboard.js
import React from 'react';

const applications = [
  {
    title: 'UX Designer Internship',
    company: 'UI-Pro',
    status: 'Pending',
  },
  {
    title: 'Frontend Developer Internship',
    company: 'A-Norix',
    status: 'Accepted',
  },
];

function InternDashboard () {
  return (
    <div className="bg-gray-200 w-[20em]   p-4">
      <h1 className="text-2xl font-bold text-center underline text-sky-800 mb-6">Intern Dashboard</h1>
      <div className="space-y-4">
        
        {applications.map((application, index) => (
          <div key={index} className="bg-white rounded-3xl hover:cursor-pointer  p-4 flex gap-4 shadow-md">

            <div className='w-[90px]'>
          <img  className='rounded-3xl' src="src/assets/images/Screenshot from 2024-06-10 21-27-50.png" alt="" />
        </div>
        <div>
            <h3 className="text-lg text-green-600 font-bold">{application.title}</h3>
            <p>Company: {application.company}</p>
            <p>Status: {application.status}</p>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default InternDashboard;
