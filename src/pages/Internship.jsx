import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaRegBookmark,
  FaRegCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import InternshipDetails from "../components/Internshipdetails";

// Function to fetch internships

const InternshipPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [internships, setInternships] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchInternships() {
      const response = await fetch(
        "https://internsharp.onrender.com/api/internships"
      );
      const data = await response.json();
      console.log(data);
      setInternships(data);
    }

    fetchInternships();
  }, []);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const filteredInternships =
    
    internships && internships.filter(
      (internship) =>
                internship.internshipTitle

          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex gap-[10em] items-center">
      <div className="bg-gray-200 w-[50em] min-h-screen rounded-3xl mt-4 mb-4 ml-7 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl text-sky-800 underline font-bold">
            Internship
          </h1>
          <FaArrowRight className="text-xl" />
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-4">
          <button className="p-2 bg-gray-100 rounded-full">
            <FaSearch className="text-xl" />
          </button>
          <input
            type="text"
            placeholder="Search for internships or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>

        {/* User Profile */}
        <div className="bg-white w-[10em] rounded-md p-4">
          <div className="flex items-center">
            <img
              src="src/assets/images/Screenshot from 2024-06-11 08-59-08.png"
              alt="profile"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-lg text-green-600 font-bold">
                Ivanov Daniil
              </h2>
              <p className="text-gray-500">KTmo 2-10</p>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-gray-100 rounded-full p-2">
              <FaRegCalendarAlt className="text-xl" />
            </button>
            <button className="bg-gray-100 rounded-full p-2">
              <FaRegBookmark className="text-xl" />
            </button>
          </div>
        </div>

        {/* Featured Vacancies */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg text-sky-800 underline font-bold">
              Featured Vacancies
            </h2>
            <button className="text-sky-800 hover:text-green-600">All</button>
          </div>
          <div className="flex space-x-4">
            {filteredInternships.map((internship, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md w-1/2"
              >
                <img
                  src="src/assets/images/Screenshot from 2024-06-10 21-30-02.png"
                  className="w-8 h-8 mb-2"
                  alt="internship"
                />
                <h3 className="text-green-600 font-bold">{internship.title}</h3>
                <p>{internship.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Most Active Companies */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg text-sky-800 underline font-bold">
              Most Active Companies
            </h2>
            <button className="text-sky-800 hover:text-green-600">All</button>
          </div>
          <div className="flex space-x-4">
            {filteredInternships.map((internship, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md w-1/2"
                onClick={() => handleCompanyClick(internship)}
              >
                <img
                  src="src/assets/images/Screenshot from 2024-06-10 21-27-50.png"
                  alt="company"
                  className="w-8 h-8 mb-2"
                />
                <h3 className="text-green-600 font-bold">{internship.title}</h3>
                <button
                  className={`bg-sky-800 text-white rounded-full px-4 py-1 mt-2`}
                >
                  Request
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {selectedCompany && <InternshipDetails company={selectedCompany} />}
      </div>
    </div>
  );
};

export default InternshipPage;
