import React from 'react';
import { Facebook, MessageCircle, Phone, ArrowRight, MapPin, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {
   const { t } = useApp();

   return (
      <footer className="bg-primary/5 dark:bg-[#020c1b] border-t border-gray-200 dark:border-gray-800 pt-20 pb-10 relative text-gray-700 dark:text-gray-300">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
               {/* Brand & Info */}
               <div>
                  <Link to="/#top" className="text-3xl font-bold font-serif mb-8 block group">
                     <span className="text-gray-900 dark:text-white">VIT </span>
                     <span className="text-accent group-hover:text-accent-hover transition-colors">DIGITAL</span>
                  </Link>
                  <div className="mb-8 space-y-4 text-sm leading-relaxed">
                     <p className="flex items-start gap-3 group">
                        <MapPin size={20} className="text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{t('companyAddress')}</span>
                     </p>
                     <p className="flex items-center gap-3 group">
                        <Phone size={20} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{t('companyPhone')}</span>
                     </p>
                     <p className="flex items-center gap-3 group">
                        <Mail size={20} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{t('companyEmail')}</span>
                     </p>
                  </div>

                  <div className="flex space-x-4">
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all transform hover:-translate-y-1 shadow-sm">
                        <Facebook size={20} />
                     </a>
                     <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all transform hover:-translate-y-1 shadow-sm">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                           <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.373 6.373 0 0 0-5.394 10.61 6.36 6.36 0 0 0 6.528-6.354V8.354c1.237.64 2.573.96 4.1.954v-3.62a4.796 4.796 0 0 1 .002.001z" />
                        </svg>
                     </a>
                  </div>
               </div>

               {/* Links */}
               <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-8 relative inline-block">
                     {t('quickLinks')}
                     <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
                  </h4>
                  <ul className="space-y-4">
                     <li><HashLink smooth to="/#services" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={16} className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" /> {t('services')}</HashLink></li>
                     <li><HashLink smooth to="/#portfolio" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={16} className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" /> {t('projects')}</HashLink></li>
                     <li><HashLink smooth to="/#blog" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={16} className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" /> {t('news')}</HashLink></li>
                     <li><Link to="/lien-he" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={16} className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all" /> {t('contact')}</Link></li>
                  </ul>
               </div>

               {/* Services (Full List) */}
               <div className="lg:col-span-1">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-8 relative inline-block">
                     {t('premiumServices')}
                     <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
                  </h4>
                  <ul className="space-y-3">
                     <li><Link to="/dich-vu/marketing-tong-the" className="hover:text-accent transition-colors text-sm flex items-center gap-3 py-1 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-accent transition-colors"></span> {t('svcMarketing')}</Link></li>
                     <li><Link to="/dich-vu/tu-van-chien-luoc" className="hover:text-accent transition-colors text-sm flex items-center gap-3 py-1 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-accent transition-colors"></span> {t('svcStrategy')}</Link></li>
                     <li><Link to="/dich-vu/quang-cao" className="hover:text-accent transition-colors text-sm flex items-center gap-3 py-1 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-accent transition-colors"></span> {t('svcAds')}</Link></li>
                     <li><Link to="/dich-vu/seo" className="hover:text-accent transition-colors text-sm flex items-center gap-3 py-1 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-accent transition-colors"></span> {t('svcSEO')}</Link></li>
                     <li><Link to="/dich-vu/tiktok" className="hover:text-accent transition-colors text-sm flex items-center gap-3 py-1 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-accent transition-colors"></span> {t('svcTikTok')}</Link></li>
                     <li><Link to="/dich-vu/thiet-ke-website" className="hover:text-accent transition-colors text-sm flex items-center gap-3 py-1 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-accent transition-colors"></span> {t('svcWeb')}</Link></li>
                  </ul>
               </div>

               {/* Newsletter */}
               <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-8 relative inline-block">
                     {t('newsletterTitle')}
                     <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
                  </h4>
                  <p className="text-sm mb-6 leading-relaxed">{t('subscribeNewsletter')}</p>
                  <form className="flex flex-col gap-3">
                     <input
                        type="email"
                        placeholder={t('emailPlaceholder')}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-5 py-3 rounded-lg focus:outline-none w-full border border-gray-200 dark:border-gray-700 focus:border-accent dark:focus:border-accent transition-colors shadow-sm"
                     />
                     <button className="bg-accent text-white px-5 py-3 rounded-lg font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                        {t('subscribeBtn')}
                     </button>
                  </form>
               </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
               <p>&copy; 2024 VIT DIGITAL Agency. All rights reserved.</p>
               <div className="flex space-x-8 mt-4 md:mt-0">
                  <a href="#" className="hover:text-accent transition-colors">{t('privacyPolicy')}</a>
                  <a href="#" className="hover:text-accent transition-colors">{t('termsOfService')}</a>
               </div>
            </div>
         </div>

         {/* Floating Actions */}
         <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-5">
            <a
               href="https://zalo.me"
               target="_blank"
               rel="noopener noreferrer"
               className="w-14 h-14 bg-[#0068FF] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform cursor-pointer relative group border-2 border-white dark:border-gray-900"
            >
               <span className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md font-bold">{t('chatZalo')}</span>
               <MessageCircle size={26} fill="currentColor" />
               <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white dark:border-gray-900" />
            </a>
            <a
               href="tel:+84901234567"
               className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:scale-110 transition-transform cursor-pointer animate-bounce group border-2 border-white dark:border-gray-900"
            >
               <span className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md font-bold">{t('callNow')}</span>
               <Phone size={26} fill="currentColor" />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
