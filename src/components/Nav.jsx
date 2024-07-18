import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    // Perform logout logic here (clear local storage, etc.)
    setCurrentUser(null);
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-white shadow-2xl py-3">
      <div className="container mx-auto z-[-4]">
        <div className="flex justify-between mt-4 items-center h-[5em]">
          <div>
            <img
              src="src/assets/images/2.png"
              className="w-[150px]"
              alt="Vet Clinic Logo"
            />
          </div>
          <div>
            <ul className="flex gap-8 cursor-pointer">
              <Link to="/">
                <li>Home</li>
              </Link>
              
              
                  <Link to="/internship">
                    <li>Internship</li>
                  </Link>
                  <Link to="/profile">
                    <li>Userprofile</li>
                  </Link>
                  <Link to="/dashboard">
                    <li>Dashbard</li>
                  </Link>
                  <Link to="/phonebook">
                    <li>Phonebook</li>
                  </Link>
                  <Link to="/" onClick={handleLogout} className="text-gray-800 hover:underline">
                    Logout
                  </Link>
              
            
                  <Link to="/register">
                    <li>Register</li>
                  </Link>
                  <Link to="/login">
                    <li>Login</li>
                  </Link>
               
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
