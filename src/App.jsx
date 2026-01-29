import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import MarketingTongThe from './pages/services/MarketingTongThe';
import ChienLuocMarketing from './pages/services/ChienLuocMarketing';
import QuangCao from './pages/services/QuangCao';
import SEO from './pages/services/SEO';
import TiktokMarketing from './pages/services/TiktokMarketing';
import Livestream from './pages/services/Livestream';
import ThietKeWebsite from './pages/services/ThietKeWebsite';

import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

import ContactPage from './pages/ContactPage';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/bao-gia" element={<Pricing />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/tin-tuc/:id" element={<NewsDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/dich-vu/marketing-tong-the" element={<MarketingTongThe />} />
            <Route path="/dich-vu/tu-van-chien-luoc" element={<ChienLuocMarketing />} />
            <Route path="/dich-vu/quang-cao" element={<QuangCao />} />
            <Route path="/dich-vu/seo" element={<SEO />} />
            <Route path="/dich-vu/tiktok" element={<TiktokMarketing />} />
            <Route path="/dich-vu/livestream" element={<Livestream />} />
            <Route path="/dich-vu/thiet-ke-website" element={<ThietKeWebsite />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
