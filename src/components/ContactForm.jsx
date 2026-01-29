import React, { useState } from 'react';
import { Send, ChevronDown, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../utils/emailConfig';
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
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('Vui lòng nhập họ tên');
    if (!formData.email.trim()) {
      newErrors.email = t('Vui lòng nhập email');
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t('Email không hợp lệ');
    }
    if (!formData.subject) newErrors.subject = t('Vui lòng chọn chủ đề');
    if (!formData.message.trim()) newErrors.message = t('Vui lòng nhập nội dung');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;
    setIsSubmitting(true);

    // Map internal values to readable text
    const subjectMapping = {
      'marketing_tong_the': t('subjMarketing'),
      'tu_van_chien_luoc': t('subjStrategy'),
      'quang_cao': t('subjAds'),
      'seo': t('subjSEO'),
      'tiktok': t('subjTikTok'),
      'website': t('subjWeb'),
      'khac': t('subjOther')
    };

    const jobTitleMapping = {
      'owner': t('jobOwner'),
      'manager': t('jobManager'),
      'marketer': t('jobMarketer'),
      'freelancer': t('jobFreelancer'),
      'other': t('jobOther')
    };

    const now = new Date();
    // Format: HH:mm - DD/MM/YYYY
    const timeString = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} - ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    console.log("Sending EmailJS Payload with time:", timeString);

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          // Send both formats to ensure compatibility with your EmailJS Template
          from_name: formData.name,
          name: formData.name, // Fallback

          from_email: formData.email,
          email: formData.email, // Fallback
          reply_to: formData.email,

          phone: formData.phone,

          jobtitle: jobTitleMapping[formData.jobTitle] || formData.jobTitle,

          subject: subjectMapping[formData.subject] || formData.subject, // Readable subject

          message: `${formData.message}\n\n(Thời gian gửi: ${timeString})`, // Embed time in message to ensure visibility

          senttime: timeString,
          sent_time: timeString,
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      alert(t('messageSent'));
      setFormData({ name: '', email: '', phone: '', jobTitle: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitError('Gửi tin nhắn thất bại. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-5 py-4 rounded-xl border ${lightModeOnly ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white'} focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder-gray-400 shadow-inner`;
  const errorInputClasses = `border-red-500 ring-1 ring-red-500`;
  const labelClasses = `text-sm font-bold ${lightModeOnly ? 'text-gray-700' : 'text-gray-700 dark:text-gray-300'} uppercase tracking-wider`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClasses}>{t('fullName')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} ${errors.name ? errorInputClasses : ''}`}
            placeholder={t('phName')}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={labelClasses}>{t('emailAddress')} <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} ${errors.email ? errorInputClasses : ''}`}
            placeholder={t('phEmail')}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
            disabled={isSubmitting}
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
              disabled={isSubmitting}
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
        <label htmlFor="subject" className={labelClasses}>{t('subject')} <span className="text-red-500">*</span></label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClasses} appearance-none cursor-pointer pr-10 ${errors.subject ? errorInputClasses : ''}`}
            disabled={isSubmitting}
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
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClasses}>{t('message')} <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`${inputClasses} resize-none ${errors.message ? errorInputClasses : ''}`}
          placeholder={t('phMessage')}
          disabled={isSubmitting}
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {submitError && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover shadow-lg hover:shadow-accent/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Đang gửi...' : t('sendMessage')} <Send size={24} />
      </button>
    </form>
  );
};

export default ContactForm;
