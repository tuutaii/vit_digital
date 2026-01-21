import React, { useState } from 'react';
import { Send, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ContactForm = ({ lightModeOnly = false }) => {
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
    setFormData({ name: '', email: '', phone: '', jobTitle: '', subject: '', message: '' });
  };

  const inputClasses = `w-full px-5 py-4 rounded-xl border ${lightModeOnly ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white'} focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-gray-400 shadow-inner`;
  const labelClasses = `text-sm font-bold ${lightModeOnly ? 'text-gray-700' : 'text-gray-700 dark:text-gray-300'} uppercase tracking-wider`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClasses}>{t('fullName')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder={t('phName')}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={labelClasses}>{t('emailAddress')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder={t('phEmail')}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClasses}>{t('phoneNumber')}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder={t('phPhone')}
            required
          />
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="jobTitle" className={labelClasses}>{t('jobTitle')}</label>
          <div className="relative">
            <select
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer pr-12`}
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
        <label htmlFor="subject" className={labelClasses}>{t('subject')}</label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClasses} appearance-none cursor-pointer pr-10`}
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
        <label htmlFor="message" className={labelClasses}>{t('message')}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`${inputClasses} resize-none`}
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
  );
};

export default ContactForm;
