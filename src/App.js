import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./styles/app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import JobPortal from "./pages/JobPortal";
import MobileNav from "./components/MobileNav";
import Signup from "./pages/signup/Signup";

function App() {
  // const location = useLocation();

  // Check if the current route is '/signup'
  // const isSignupRoute = location.pathname === '/signup';

  return (
    <>
    <Router>
       <Navbar />
      <Routes>
        
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/practice"
          element={<Practice />}
        />
        <Route
          path="/job-portal"
          element={<JobPortal />}
        />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      <MobileNav />
      
      <Footer /> 
    </Router>
    </>
  );
}

export default App;
