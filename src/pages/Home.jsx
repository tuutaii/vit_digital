import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import WhyChooseUs from '../components/WhyChooseUs';
import SectionDivider from '../components/SectionDivider';
import { useSeoMetadata, getOrganizationSchema, JsonLd } from '../utils/seoUtils';

const Home = () => {
  useSeoMetadata('Trang Chủ', 'VIT DIGITAL - Giải pháp Marketing tổng thể cho doanh nghiệp SMEs. Tăng trưởng doanh thu đột phá với chiến lược SEO, Ads, Content chuyên nghiệp.');

  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <JsonLd schema={organizationSchema} />
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
