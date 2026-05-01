import React from 'react'
import { Link } from "react-router-dom";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // optional icons
export default function Login() {
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
   const [showPassword, setShowPassword] = useState(false);
  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful ✅");
    }
  };

  return (
<div className="w-full h-full
    min-h-screen bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
        <div className=" bg-white rounded-xl shadow-lg w-full max-w-md p-8">
            
        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
             {/* EMAIL */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type='email'className="w-full px-4 py-2 border border-gray-300 rounded-lg 
bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
 name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            {errors.email&&( <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>)}
            </div>
       

      {/* PASSWORD */}
<div>
  <label className="block font-medium mb-1">Password</label>

  <div className="relative">
    <input
    type={showPassword? "text":"password"}
    name='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Eye Icon */}
    {/* <span
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 
      text-gray-500 hover:text-blue-600 cursor-pointer"
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </span> */}
    {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
  </div>
</div>


            
            {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
           {/* Forgot Password */}
        <div className="text-center mb-6">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        </form>
         {/* EXTRA LINKS */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 font-semibold">
            Register
          </a>
        </p>
        </div>
    </div>
  )
}
