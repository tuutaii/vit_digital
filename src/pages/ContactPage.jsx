import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext'; // Adjust path if needed
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const { t } = useApp();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('messageSent'));
    setFormData({ name: '', email: '', phone: '', jobTitle: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t('getInTouch')}</span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mt-2 mb-6 text-gray-900 dark:text-white transition-colors">
              {t('startProject')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors text-lg font-light">
              {t('contactDesc')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl text-gray-900 dark:text-white font-bold mb-1 transition-colors">{t('ourOffice')}</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">123 Business Avenue, Tech District, HCM City, Vietnam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl text-gray-900 dark:text-white font-bold mb-1 transition-colors">{t('phone')}</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors text-lg font-medium">0966290789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl text-gray-900 dark:text-white font-bold mb-1 transition-colors">{t('email')}</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">hello@zmarketing.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-white dark:bg-[#112240] p-8 md:p-12 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider">{t('fullName')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 shadow-inner"
                    placeholder={t('phName')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider">{t('emailAddress')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 shadow-inner"
                    placeholder={t('phEmail')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider">{t('phoneNumber')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 shadow-inner"
                    placeholder={t('phPhone')}
                    required
                  />
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="jobTitle" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider">{t('jobTitle')}</label>
                  <div className="relative">
                    <select
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none cursor-pointer shadow-inner font-medium text-base hover:border-gray-300 dark:hover:border-gray-500"
                    >
                      <option value="">{t('selectJobTitle')}</option>
                      <option value="owner">{t('jobOwner')}</option>
                      <option value="manager">{t('jobManager')}</option>
                      <option value="marketer">{t('jobMarketer')}</option>
                      <option value="freelancer">{t('jobFreelancer')}</option>
                      <option value="other">{t('jobOther')}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="subject" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider">{t('subject')}</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 pr-10 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none cursor-pointer shadow-inner"
                  >
                    <option value="">{t('selectSubject')}</option>
                    <option value="marketing_tong_the">{t('subjMarketing')}</option>
                    <option value="tu_van_chien_luoc">{t('subjStrategy')}</option>
                    <option value="quang_cao">{t('subjAds')}</option>
                    <option value="seo">{t('subjSEO')}</option>
                    <option value="tiktok">{t('subjTikTok')}</option>
                    <option value="website">{t('subjWeb')}</option>
                    <option value="khac">{t('subjOther')}</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider">{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 resize-none shadow-inner"
                  placeholder={t('phMessage')}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover shadow-lg hover:shadow-accent/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg uppercase tracking-wide"
              >
                {t('sendMessage')} <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
