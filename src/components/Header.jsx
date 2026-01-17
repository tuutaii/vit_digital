import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage, t } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { name: "Dịch vụ Marketing Tổng Thể", href: "/dich-vu/marketing-tong-the" },
    { name: "Tư vấn chiến lược marketing", href: "/dich-vu/tu-van-chien-luoc" },
    { name: "Dịch vụ quảng cáo", href: "/dich-vu/quang-cao" },
    { name: "Dịch vụ SEO", href: "/dich-vu/seo" },
    { name: "Dịch vụ Tiktok Marketing", href: "/dich-vu/tiktok" },
    { name: "Dịch vụ Livestream", href: "/dich-vu/livestream" },
    { name: "Dịch vụ Thiết kế Website", href: "/dich-vu/thiet-ke-website" }
  ];

  const navLinks = [
    { name: t('services'), href: '/#services', hasDropdown: true },
    { name: t('quote'), href: '/bao-gia' },
    { name: t('projects'), href: '/#portfolio' },
    { name: t('news'), href: '/#blog' },
    { name: t('contact'), href: '/lien-he' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300`}>
      {/* Top Bar - Hidden on Mobile, Visible on Desktop */}
      <div className={`hidden md:block py-2 text-xs md:text-sm border-b transition-colors duration-300 ${
        isScrolled 
          ? 'bg-gray-100/95 dark:bg-[#0a192f]/95 border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-300 backdrop-blur-md' 
          : 'bg-transparent border-white/10 text-gray-200'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-medium tracking-wide">
            {t('companyName')}
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:0966290789" className="flex items-center hover:text-accent transition-colors">
              <Phone size={14} className="mr-2" />
              0966290789
            </a>
            <div className="ml-4 pl-4 border-l border-white/20 flex items-center space-x-4">
               <button 
                onClick={toggleTheme} 
                className="hover:text-accent transition-colors p-1"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button 
                onClick={toggleLanguage} 
                className="hover:text-accent transition-colors font-bold text-xs"
                aria-label="Toggle Language"
              >
                {language === 'vi' ? 'EN' : 'VN'}
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-dark/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <HashLink smooth to="/#top" className="text-2xl font-bold font-sans flex items-center gap-1">
             <span className="text-gray-900 dark:text-white">VIT</span>
             <span className="text-secondary">DIGITAL</span>
          </HashLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <HashLink 
                  smooth
                  to={link.href} 
                  className={`flex items-center transition-colors font-medium text-sm uppercase tracking-wide py-4 ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-accent' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </HashLink>
                
                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                    {/* Small arrow pointing up */}
                    <div className="absolute -top-1 left-4 w-3 h-3 bg-white transform rotate-45"></div>
                    
                    <div className="py-2 relative z-10 bg-white">
                      {serviceItems.map((item, index) => (
                        <Link 
                          key={index} 
                          to={item.href} 
                          className="block px-4 py-3 text-sm text-gray-800 hover:text-[#64ffda] hover:bg-gray-50 transition-colors border-b last:border-0 border-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/lien-he" 
              className="px-6 py-2 bg-gradient-to-r from-secondary to-accent text-dark font-bold rounded-full hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              {t('getStarted')}
            </Link>
          </nav>

          {/* Mobile Menu Button & Toggles */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Mobile Toggles */}
            <button 
                onClick={toggleTheme} 
                className={`p-1 transition-colors ${isScrolled ? 'text-dark dark:text-white' : 'text-white'}`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
                onClick={toggleLanguage} 
                className={`font-bold text-sm transition-colors ${isScrolled ? 'text-dark dark:text-white' : 'text-white'}`}
              >
                {language === 'vi' ? 'EN' : 'VN'}
            </button>

            <button 
              className={`focus:outline-none ${isScrolled ? 'text-dark dark:text-white' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-4">
             {/* Mobile Company Info */}
             <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Company</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t('companyName')}
                </p>
                <a href="tel:0966290789" className="flex items-center text-accent font-medium">
                   <Phone size={16} className="mr-2" />
                   0966290789
                </a>
             </div>

            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  {link.hasDropdown ? (
                    <button
                      className="text-gray-800 dark:text-gray-300 hover:text-accent text-lg font-medium py-2 flex items-center"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <HashLink 
                      smooth
                      to={link.href}
                      className="text-gray-800 dark:text-gray-300 hover:text-accent text-lg font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </HashLink>
                  )}
                  
                  {link.hasDropdown && (
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="p-2 text-gray-500 hover:text-accent focus:outline-none"
                    >
                      {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown/Accordion */}
                {link.hasDropdown && isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 dark:border-gray-800 ml-2">
                    {serviceItems.map((item, index) => (
                      <Link 
                        key={index}
                        to={item.href}
                        className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/lien-he" 
              className="px-6 py-3 bg-gradient-to-r from-secondary to-accent text-dark text-center font-bold rounded-lg mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('getStarted')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
