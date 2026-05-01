import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
      <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
         
          <li>  <Link to="/About"  className="font-medium hover:text-white"> About</Link></li>
         <li>  <Link to="/career"  className="font-medium hover:text-white"> Careers</Link></li>
            <li><Link to="/Blog"  className="font-medium hover:text-white"> Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/Feature"  className="font-medium hover:text-white"> Features</Link></li>
            <li><Link to="/price"  className="font-medium hover:text-white"> Pricing</Link></li>
           
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact"  className="font-medium hover:text-white"> Help center</Link></li>
            <li><Link to="/Termsprivacy"  className="font-medium hover:text-white"> Terms and Privacy</Link></li>
           
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Get updates right in your inbox.
          </p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none"
          />
       
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm ">
        © {new Date().getFullYear()} MyCompany. All rights reserved.

          
      </div>
      <br/>
       <div className="flex justify-center gap-6 text-2xl mb-4 ">
          <a className="hover:text-white" href="#"><FaFacebook /></a>
          <a className="hover:text-white" href="#"><FaTwitter /></a>
          <a className="hover:text-white" href="#"><FaLinkedin /></a>
          <a className="hover:text-white" href="#"><FaGithub /></a>
        </div>
    </footer>
  )
}
