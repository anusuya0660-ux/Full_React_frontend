import React from 'react'
import Logo1 from "../assets/Logo.png"
import { Link,useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  return (
 
    <div>
        {/* HERO SECTION */}
<section className=" min-h-[90vh] 
bg-[linear-gradient(90deg,#00d2ff_0%,#3a47d5_100%)] flex items-center">
  
  <div className="w-full px-6">
    <div className="grid md:grid-cols-2 gap-10 items-center">

  {/* LEFT CONTENT */}
          <div className="text-white">
               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build Modern <br />
              Websites Faster
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              Create beautiful, responsive landing pages using React and Tailwind CSS.
            </p>
             <div className="mt-8 flex flex-col sm:flex-row gap-4">
               
              <Link
              to="/Login"
              onClick={() => navigate("/Login")}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Login
            </Link>
              <Link 
               to="/service"
              onClick={() => navigate("/service")}
              className="borde to-black text-black border-white px-8 py-3 rounded-full bg-white hover:bg-white hover:text-blue-600 transition">
                Learn More
              </Link>
             </div>
          </div>
           {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-center">
            <img
              src={Logo1}          
                  alt="Hero"
              className="w-[420px] animate-float"
            />
          
          </div>
             </div>
            </div> 
         
        </section>
            {/* FEATURES SECTION */}
      <section className="bg-gray-100 py-20">
         <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
             <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Fast Development</h3>
              <p className="text-gray-600">
                Build UI faster using Tailwind utility classes.
              </p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                Looks great on mobile, tablet, and desktop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Modern UI</h3>
              <p className="text-gray-600">
                Clean and modern design for real projects.
              </p>
            </div>
          </div>
         </div>
      </section>
       {/* CTA SECTION */}
      <section className="py-20 
        bg-[linear-gradient(90deg,#00d2ff_0%,#3a47d5_100%)] text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>

          <p className="text-blue-100 mb-8">
            Start your journey with React and Tailwind today.
          </p>

          <button className="bg-yellow-400 text-black px-10 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Join Now
          </button>
            </div>
        </section>
   </div>  )
}
