import Input from 'postcss/lib/input';
import React, { useState } from 'react';
import { FaArrowLeft, FaRegBookmark, FaRegCalendarAlt, FaSearch } from 'react-icons/fa';

const InternshipPage = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', phone: '', email: '', type: 'Intern' });
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleCalendarClick = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', phone: '', email: '', type: 'Intern' });
  };

  return (
    <div className='flex justify-between items-center'>
       




    <div className="bg-gray-200 w-[40em] rounded-3xl mt-4 mb-4 ml-7 min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-center mb-4">
        
        <h1 className="text-xl font-bold">Internship</h1>
        
      </div>

      {/* Profile Section */}


      <div className="bg-white w-full rounded-md p-4 mb-4">
        <div className="flex items-center">
          <input  type='file' className="rounded-full w-12 h-12 mr-4" />
          <div>
            <h2 className="text-lg font-bold">Ivanov Daniil</h2>
            <p className="text-gray-500">KTmo 2-10</p>
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <button className="bg-gray-100 rounded-full p-2" onClick={handleCalendarClick}>
            <FaRegCalendarAlt className="text-xl" />
          </button>
          <button className="bg-gray-100 rounded-full p-2" onClick={handleBookmarkClick}>
            <FaRegBookmark className="text-xl" />
          </button>
        </div>
        {calendarVisible && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p>Calendar is now visible</p>
            {/* Add your calendar component or functionality here */}
          </div>
        )}
        {bookmarked && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p>This item is bookmarked</p>
            {/* Add your bookmark functionality here */}
          </div>
        )}
      </div>

      {/* Phonebook Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Phonebook</h2>
        <form onSubmit={handleFormSubmit} className="mb-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newContact.name}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={newContact.phone}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={newContact.email}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              value={newContact.type}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
            >
              <option value="Intern">Intern</option>
              <option value="Company">Company</option>
            </select>
          </div>
          <button type="submit" className="bg-green-600 text-white rounded-full px-4 py-2 mt-2">
            Add Contact
          </button>
        </form>

        <div className="flex flex-col space-y-2">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-bold">{contact.name} ({contact.type})</h3>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className=' w-[70em] mr-5 '>
<img className='rounded-3xl' src='src/assets/images/pexels-kaboompics-6662.jpg'/>
        </div>
    </div>
    

  );
};

export default InternshipPage;
