// CompanyDashboard.js
import React from 'react';

const internships = [
  {
    title: 'UX Designer Internship',
    location: 'Remote',
    applicants: 10,
  },
  {
    title: 'Frontend Developer Internship',
    location: 'On-site',
    applicants: 5,
  },
];
function CompanyDashboard (){
  return (
    <div className="bg-gray-200  w-[20em] p-4">
      <h1 className="text-2xl font-bold text-center underline text-sky-800 mb-6">Company Dashboard</h1>
      <div className="space-y-4">
        {internships.map((internship, index) => (
          <div key={index} className="bg-white hover:cursor-pointer flex gap-6 rounded-3xl p-4 shadow-md">

<div className='w-[100px]'>
          <img  className='rounded-3xl' src="src/assets/images/Screenshot from 2024-06-10 19-02-59.png" alt="" />
        </div>
<div>
            <h3 className="text-lg text-green-600 font-bold">{internship.title}</h3>
            <p > Location: {internship.location}</p>
            <p>Applicants: {internship.applicants}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDashboard;
