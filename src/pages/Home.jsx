import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import WhyChooseUs from '../components/WhyChooseUs';
import SectionDivider from '../components/SectionDivider';

const Home = () => {
  return (
    <>
      <Hero />
      <SectionDivider variant="gradient" />
      <Services />
      <SectionDivider variant="dots" />
      <WhyChooseUs />
      <SectionDivider variant="gradient" />
      <Portfolio />
      <SectionDivider variant="dots" />
      <Blog />
      <SectionDivider variant="gradient" />
      <Contact />
    </>
  );
};

export default Home;
