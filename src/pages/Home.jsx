import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
