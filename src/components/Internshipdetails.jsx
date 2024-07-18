import React from 'react';
import { MdCancel } from "react-icons/md";

function InternshipDetails({ company, onClose }) {
  const handleApply = () => {
    alert('Successfully applied for the UX Designer Internship');
  };

  return (
    <div className="bg-gray-200 w-[22em] mx-auto rounded-3xl mt-4 mb-4 h-[80vh] p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-xl">&#8592;</button>
        <h1 className="text-xl text-sky-800 underline font-bold">Internship details</h1>
        <MdCancel onClick={onClose} className="text-xl cursor-pointer" />
      </div>

      {/* Company Details */}
      <div className="bg-white rounded-xl p-4 shadow-md mb-4">
        <div className="flex items-center mb-4">
          <img src='src/assets/images/Screenshot from 2024-06-10 21-27-50.png' className="rounded-full w-12 h-12 mr-4" alt="Company Logo" />
          <div>
            <h2 className="text-lg text-green-600 font-bold">UX Designer Internship</h2>
            <p className="text-gray-500">Posted by {company.name}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mb-4">
        <button className="text-sky-800 font-bold underline">Internship details</button>
      </div>

      {/* Internship Details */}
      <div className="bg-white rounded-xl p-4 shadow-md mb-4">
        <p>
          In this internship, you will solve the entire range of UX designer tasks: developing concepts,
          creating the structure of sites and applications, drawing user interface layouts, and
          demonstrating to the client. Possibility to work remotely or in the office full-time.
        </p>
        <div className="flex flex-col mt-4">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Portfolio required</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Own equipment</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Full time</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Remote</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Paid</span>
        </div>
        <div className="bg-green-100 rounded-xl p-4 mt-4">
          <p>This internship matches your field of study.</p>
        </div>
      </div>

      {/* Apply Button */}
      <button 
        onClick={handleApply}
        className="bg-sky-800 text-white rounded-full px-6 py-2 mt-6 flex items-center justify-center w-full"
      >
        Apply
      </button>
    </div>
  );
};

export default InternshipDetails;





