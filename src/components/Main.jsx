import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    testimonial: 'This internship program has been life-changing. I gained so much real-world experience.',
    image: 'src/assets/images/Screenshot from 2024-06-10 19-02-17.png',
  },
  {
    name: 'Jane Smith',
    testimonial: 'The skills I learned here helped me secure my dream job. Highly recommend!',
    image: 'src/assets/images/Screenshot from 2024-06-10 19-01-51.png',
  },
];

const HomePage = () => {
  return (
    <div className="  bg-gray-100 container mx-auto mt-8 min-h-screen">
      {/* Hero Section */}
      <section className="  p-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-sky-800 font-bold mb-4">Welcome to Our <span className='text-green-600'>Internship Program</span></h1>
          <p className="text-2xl">Kickstart your career with hands-on experience in top companies.</p>
          <div className="flex mt-8 justify-evenly items-center">
            <img src="src/assets/images/Screenshot_from_2024-06-10_15-13-01-removebg-preview.png" alt="Internship" />
            <div className="text-sky-800 text-4xl">
              <p>Challenge yourself toward your <br />dream job and get a bunch of benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 mt-[4em] p-8">
        
        <div className="container mx-auto text-center">
            <div className=' flex justify-between items-center'>
            <div>
          <h2 className="text-3xl  text-green-600 font-bold mb-4 underline">About Us</h2>
          <p className=" text-2xl  mb-4">
            We are dedicated to connecting talented interns with companies that can<br/> help them grow and succeed. Our program offers a unique<br/> opportunity to gain valuable experience and build a professional network.
          </p>
        </div>

        <div className=' w-[50em]'>
            <img   className=' rounded-l-full' src="src/assets/images/pexels-pixabay-327540.jpg" alt="" />
        </div>
        </div>
        </div>
              </section>

      {/* Testimonials Section */}
      <section className="bg-gray-300 p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-sky-800 underline font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 shadow-lg w-full rounded-lg">
                <img className="w-54 h-24 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.name} />
                <p className="text-lg italic mb-4">"{testimonial.testimonial}"</p>
                <h3 className="text-2xl text-green-600 font-bold">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    




    </div>
  );
};

export default HomePage;

