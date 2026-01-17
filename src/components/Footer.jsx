import React from 'react';
import { Facebook, MessageCircle, Phone, ArrowRight, MapPin, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useApp();
  
  return (
    <footer className="bg-dark border-t border-gray-800 pt-16 pb-8 relative">
       <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
             {/* Brand & Info */}
             <div>
                <a href="#" className="text-2xl font-bold font-sans mb-6 block">
                  <span className="text-white">VIT </span>
                  <span className="text-secondary">DIGITAL</span>
                </a>
                <div className="mb-6 space-y-3 text-sm text-gray-400">
                   <p className="flex items-start gap-3">
                      <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                      <span>123 Business Avenue, Tech District, Ho Chi Minh City, Vietnam</span>
                   </p>
                   <p className="flex items-center gap-3">
                      <Phone size={18} className="text-secondary shrink-0" />
                      <span>0966 290 789</span>
                   </p>
                   <p className="flex items-center gap-3">
                      <Mail size={18} className="text-secondary shrink-0" />
                      <span>hello@vitdigital.vn</span>
                   </p>
                </div>

                <div className="flex space-x-4">
                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                      <Facebook size={20} />
                   </a>
                   <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                       {/* Lucide doesn't have TikTok icon yet, using a placeholder or similar. Using Video as proxy or standard svg if needed. For now assume user accepts similar or text/custom svg. Let's use generic Video or just 'TikTok' text? No, user wants icon. Let's use a custom SVG for Tiktok */}
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.373 6.373 0 0 0-5.394 10.61 6.36 6.36 0 0 0 6.528-6.354V8.354c1.237.64 2.573.96 4.1.954v-3.62a4.796 4.796 0 0 1 .002.001z"/>
                      </svg>
                   </a>
                </div>
             </div>

             {/* Links */}
             <div>
                <h4 className="font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent inline-block">{t('quickLinks')}</h4>
                <ul className="space-y-4">
                   <li><HashLink smooth to="/#services" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('services')}</HashLink></li>
                   <li><HashLink smooth to="/#portfolio" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('projects')}</HashLink></li>
                   <li><HashLink smooth to="/#blog" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('news')}</HashLink></li>
                   <li><Link to="/lien-he" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight size={14} /> {t('contact')}</Link></li>
                </ul>
             </div>

             {/* Services (Short) */}
             {/* Services (Full List) */}
             <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <h4 className="text-white font-bold mb-6 border-b-2 border-secondary/30 inline-block pb-1">{t('premiumServices')}</h4>
                <ul className="space-y-3">
                   <li><Link to="/dich-vu/marketing-tong-the" className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-secondary"></div> Marketing Tổng Thể</Link></li>
                   <li><Link to="/dich-vu/tu-van-chien-luoc" className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-secondary"></div> Tư Vấn Chiến Lược</Link></li>
                   <li><Link to="/dich-vu/quang-cao" className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-secondary"></div> Dịch Vụ Quảng Cáo</Link></li>
                   <li><Link to="/dich-vu/seo" className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-secondary"></div> SEO Tổng Thể</Link></li>
                   <li><Link to="/dich-vu/tiktok" className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-secondary"></div> Tiktok Marketing</Link></li>
                   <li><Link to="/dich-vu/thiet-ke-website" className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-secondary"></div> Thiết Kế Website</Link></li>
                </ul>
             </div>

             {/* Newsletter */}
             <div>
                <h4 className="text-white font-bold mb-6">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">{t('subscribeNewsletter')}</p>
                <form className="flex">
                   <input 
                      type="email" 
                      placeholder="Email address" 
                      className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full border border-gray-700 focus:border-secondary"
                   />
                   <button className="bg-secondary text-dark px-4 py-2 rounded-r-lg font-bold hover:bg-accent transition-colors">
                      OK
                   </button>
                </form>
             </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
             <p>&copy; 2024 VIT DIGITAL Agency. All rights reserved.</p>
             <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a>
                <a href="#" className="hover:text-white transition-colors">{t('termsOfService')}</a>
             </div>
          </div>
       </div>

       {/* Floating Actions */}
       <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <a 
            href="https://zalo.me" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer relative group"
          >
             <span className="absolute right-full mr-3 bg-white text-dark text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat Zalo</span>
             <MessageCircle size={28} />
             <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-dark" />
          </a>
          <a 
            href="tel:+84901234567" 
            className="w-14 h-14 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-dark shadow-[0_0_20px_rgba(100,255,218,0.5)] hover:scale-110 transition-transform cursor-pointer animate-bounce group"
          >
             <span className="absolute right-full mr-3 bg-white text-dark text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call Now</span>
             <Phone size={28} />
          </a>
       </div>
    </footer>
  );
};

export default Footer;
