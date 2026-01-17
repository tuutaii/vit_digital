import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Contact = () => {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('messageSent'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0a192f] relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent dark:from-[#112240] dark:to-transparent pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">{t('getInTouch')}</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900 dark:text-white transition-colors">{t('startProject')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
               {t('contactDesc')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold mb-1 transition-colors">{t('ourOffice')}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">123 Business Avenue, Tech District, HCM City, Vietnam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold mb-1 transition-colors">{t('phone')}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">0966290789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold mb-1 transition-colors">{t('email')}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">hello@zmarketing.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-gray-50 dark:bg-[#112240] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{t('fullName')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 [&:-webkit-autofill]:shadow-[0_0_0_1000px_#f9fafb_inset] dark:[&:-webkit-autofill]:shadow-[0_0_0_1000px_#112240_inset] [&:-webkit-autofill]:-webkit-text-fill-color-[#111827] dark:[&:-webkit-autofill]:-webkit-text-fill-color-[#ffffff]"
                    placeholder={t('phName')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{t('emailAddress')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 [&:-webkit-autofill]:shadow-[0_0_0_1000px_#f9fafb_inset] dark:[&:-webkit-autofill]:shadow-[0_0_0_1000px_#112240_inset] [&:-webkit-autofill]:-webkit-text-fill-color-[#111827] dark:[&:-webkit-autofill]:-webkit-text-fill-color-[#ffffff]"
                    placeholder={t('phEmail')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{t('phoneNumber')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 [&:-webkit-autofill]:shadow-[0_0_0_1000px_#f9fafb_inset] dark:[&:-webkit-autofill]:shadow-[0_0_0_1000px_#112240_inset] [&:-webkit-autofill]:-webkit-text-fill-color-[#111827] dark:[&:-webkit-autofill]:-webkit-text-fill-color-[#ffffff]"
                    placeholder={t('phPhone')}
                    required
                  />
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{t('jobTitle')}</label>
                  <div className="relative">
                    <select 
                      id="jobTitle" 
                      name="jobTitle" 
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-4 pr-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">{t('selectJobTitle')}</option>
                      <option value="owner">Chủ doanh nghiệp / CEO</option>
                      <option value="manager">Quản lý / Trưởng phòng</option>
                      <option value="marketer">Nhân viên Marketing</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="other">Khác</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{t('subject')}</label>
                <div className="relative">
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 pr-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">{t('selectSubject')}</option>
                    <option value="marketing_tong_the">Marketing Tổng Thể</option>
                    <option value="tu_van_chien_luoc">Tư Vấn Chiến Lược</option>
                    <option value="quang_cao">Dịch Vụ Quảng Cáo (Facebook/Google/TikTok)</option>
                    <option value="seo">SEO Tổng Thể</option>
                    <option value="tiktok">TikTok Marketing / Livestream</option>
                    <option value="website">Thiết Kế Website</option>
                    <option value="khac">Khác</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{t('message')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 resize-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_#f9fafb_inset] dark:[&:-webkit-autofill]:shadow-[0_0_0_1000px_#112240_inset] [&:-webkit-autofill]:-webkit-text-fill-color-[#111827] dark:[&:-webkit-autofill]:-webkit-text-fill-color-[#ffffff]"
                  placeholder={t('phMessage')}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-secondary to-accent text-dark font-bold rounded-lg hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {t('sendMessage')} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
