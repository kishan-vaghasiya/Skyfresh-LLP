import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Products from '../components/Products';
import Shipping from '../components/Shipping';
import Stats from '../components/Stats';  
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />     
      <Certifications />
      <Products />
      <Shipping />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
