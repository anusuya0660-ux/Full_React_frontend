import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/forgotpassword";
import About from "./components/About";
import Service from "./components/service";
import Contact from "./components/contact";
import Career from "./components/career";
import Blog from "./components/Blog";
import Feature from "./components/Feature";
import Price from "./components/price";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    
      <Navbar />

      {/* Page content */}
     <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/About" element={<About />} />
           <Route path="/service" element={<Service />} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/career" element={<Career/>}/>
           <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Feature" element={<Feature/>}/>
            <Route path="/price" element={<Price/>}/>

        </Routes>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
