import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Default_Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
  bg-[linear-gradient(90deg,#00d2ff_0%,#3a47d5_100%)]
      text-white shadow-lg">
      
      {/* CENTERED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">

          {/* LEFT - LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-9 rounded-full"
          />
          <span className="text-xl font-bold tracking-wide">
           Cool
          </span>
        </div>

        {/* CENTER - MENU */}
        <div className="hidden md:flex justify-center gap-8">
          <Link to="/" className="font-medium hover:text-black"><span className="text-white">Home</span></Link>
          <Link to="/About" className="font-medium hover:text-black"><span className="text-white">About</span></Link>
          <Link to="/service" className="font-medium hover:text-black"><span className="text-white">Services</span></Link>
          <Link to="/contact" className="font-medium hover:text-black"><span className="text-white">Contact</span></Link>
        </div>

        {/* RIGHT - LOGIN */}
        <div className="hidden md:flex justify-end">
          <Link
            to="/Register"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden col-span-2 flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-black"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-blue shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6">
            <Link to="/" onClick={() => setOpen(false)}><span className="text-white">Home</span></Link>
            <Link to="/About" onClick={() => setOpen(false)}><span className="text-white">About</span></Link>
            <Link to="/service" onClick={() => setOpen(false)}><span className="text-white">Services</span></Link>
            <Link to="/contact" onClick={() => setOpen(false)}><span className="text-white">Contact</span></Link>
            <Link
              to="/Register"
              onClick={() => navigate("/Register")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Register
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
