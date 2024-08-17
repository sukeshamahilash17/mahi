import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProductDetails from './ProductDetails'; // Ensure ProductDetails is correctly imported
import Collection from './Collection';
import Aboutus from './Aboutus';
import Contact from './footer';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage'; // Import SignupPage component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/collection/:category" element={<Collection />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
