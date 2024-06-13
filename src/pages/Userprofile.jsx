import React, { useState } from 'react';

const InternProfile = () => {
  const [profile, setProfile] = useState({
    name: 'stevo mwas',
    email: 'stevomwa@gmail.com',
    phone: '+0101338793',
    address: 'kibera, city, Nairobi',
    university: 'University of Example',
    program: 'Computer Science',
    graduationYear: '2023',
    skills: ['JavaScript', 'HTML', 'CSS', 'React'],
    experience: {
      company: 'projects Inc.',
      position: 'Intern',
      duration: '2 years',
    },
    projects: [
      { name: 'Project A', description: 'Description' },
      { name: 'Project B', description: 'Description' },
    ],
    linkedin: 'https://www.linkedin.com/in/stevomwas',
    github: 'https://github.com/stevomwas',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://internsharp.onrender.com/api/auth/update/66682516f51ad08709603648', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Profile updated successfully', result);
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="w-[40em] mx-auto bg-white p-8 my-3 rounded-lg shadow-lg">
      <h1 className="text-2xl text-sky-800 underline font-bold mb-6">Intern Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-[4em] items-center mb-6'>
          <div className='w-[300px]'>
            <img className='rounded-full' src="src/assets/images/pexels-olly-1024403.jpg" alt="profile" />
          </div>
          <div>
            <h2 className="text-lg text-sky-800 underline font-bold mb-2">Personal Information</h2>
            <p>
              <strong className='text-green-600'>Name:</strong>
              <input type="text" name="name" value={profile.name} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
            </p>
            <p>
              <strong className='text-green-600'>Email:</strong>
              <input type="email" name="email" value={profile.email} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
            </p>
            <p>
              <strong className='text-green-600'>Phone:</strong>
              <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
            </p>
            <p>
              <strong className='text-green-600'>Address:</strong>
              <input type="text" name="address" value={profile.address} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg text-sky-800 underline font-bold mb-2">Education</h2>
          <p>
            <strong className='text-green-600'>University:</strong>
            <input type="text" name="university" value={profile.university} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
          </p>
          <p>
            <strong className='text-green-600'>Program:</strong>
            <input type="text" name="program" value={profile.program} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
          </p>
          <p>
            <strong className='text-green-600'>Graduation Year:</strong>
            <input type="text" name="graduationYear" value={profile.graduationYear} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg text-sky-800 underline font-bold mb-2">Skills</h2>
          <ul>
            {profile.skills.map((skill, index) => (
              <li key={index}>
                <input type="text" name={`skills-${index}`} value={skill} onChange={(e) => {
                  const skills = [...profile.skills];
                  skills[index] = e.target.value;
                  setProfile({ ...profile, skills });
                }} className="p-2 border rounded mb-2" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg text-sky-800 underline font-bold mb-2">Experience</h2>
          <p>
            <strong className='text-green-600'>Company:</strong>
            <input type="text" name="experience.company" value={profile.experience.company} onChange={(e) => setProfile({ ...profile, experience: { ...profile.experience, company: e.target.value } })} className="ml-2 p-2 border rounded" />
          </p>
          <p>
            <strong className='text-green-600'>Position:</strong>
            <input type="text" name="experience.position" value={profile.experience.position} onChange={(e) => setProfile({ ...profile, experience: { ...profile.experience, position: e.target.value } })} className="ml-2 p-2 border rounded" />
          </p>
          <p>
            <strong className='text-green-600'>Duration:</strong>
            <input type="text" name="experience.duration" value={profile.experience.duration} onChange={(e) => setProfile({ ...profile, experience: { ...profile.experience, duration: e.target.value } })} className="ml-2 p-2 border rounded" />
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg text-sky-800 underline font-bold mb-2">Projects</h2>
          <ul>
            {profile.projects.map((project, index) => (
              <li key={index}>
                <input type="text" name={`projects-${index}-name`} value={project.name} onChange={(e) => {
                  const projects = [...profile.projects];
                  projects[index] = { ...projects[index], name: e.target.value };
                  setProfile({ ...profile, projects });
                }} className="p-2 border rounded mb-2" />
                <input type="text" name={`projects-${index}-description`} value={project.description} onChange={(e) => {
                  const projects = [...profile.projects];
                  projects[index] = { ...projects[index], description: e.target.value };
                  setProfile({ ...profile, projects });
                }} className="p-2 border rounded mb-2" />
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg text-sky-800 underline font-bold mb-2">Contact</h2>
          <p>
            <strong className='text-green-600'>LinkedIn:</strong>
            <input type="text" name="linkedin" value={profile.linkedin} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
          </p>
          <p>
            <strong className='text-green-600'>GitHub:</strong>
            <input type="text" name="github" value={profile.github} onChange={handleInputChange} className="ml-2 p-2 border rounded" />
          </p>
        </div>
        
        <div className="mt-4">
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default InternProfile;

