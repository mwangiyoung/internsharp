import React, { useState, useEffect } from 'react';
 import CompanyDashboard from '../components/Campanydashboard'
import InternDashboard from '../components/Interdashboard'
const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Mock function to get the user's role from local storage or an API
    const fetchUserRole = async () => {
      // Example: Fetching user role from local storage
      const role = localStorage.getItem('userRole');
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  if (!userRole) {
    return <div>Loading...</div>; // or a spinner/loading component
  }

  return (
    <div className='flex justify-evenly mt-3'>
      {userRole === 'intern' ? <InternDashboard /> : <CompanyDashboard />}
    </div>
  );
};

export default Dashboard;

