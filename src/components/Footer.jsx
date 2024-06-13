import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import React from 'react';
function Footer() {
  return (
    <footer className="bg-sky-950 h-[25vh] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-[30em] items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Internsharp</h1>
            <p> ©  Internsharp. All rights reserved.</p>
          </div>
<div>
<h2 className='text-xl  font-bold mb-8'>Contact </h2>
<div className="flex gap-[3em] mb-3">


<FaFacebookF />
<FaSquareXTwitter />
<FaInstagramSquare />
</div>
  
 <p>0101338772</p>
 <p>intersharp@gmail.com</p>


</div>




          <div className=" flex flex-col space-y-3">
            <a href="/" className="hover:underline">Home</a>
            <a href="/internships" className="hover:underline">Internships</a>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/register" className="hover:underline">Register</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
