import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, ChevronDown, CheckCircle, Loader2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import marketingConcept from '../assets/marketing_concept.png';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', jobTitle: '', subject: '', message: '' });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-24 pt-32 lg:pt-40 bg-gray-50 dark:bg-[#0a192f] relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #ff6b35 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
        >
          {/* Contact Info & Image */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">{t('getInTouch')}</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-gray-900 dark:text-white transition-colors leading-tight">
                {t('startProject')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors text-lg font-normal">
                {t('contactDesc') || "Đừng để ý tưởng của bạn chỉ nằm trên giấy. Hãy chia sẻ với chúng tôi, và cùng nhau biến nó thành hiện thực rực rỡ."}
              </p>

              <div className="p-6 bg-white dark:bg-[#112240] rounded-2xl shadow-lg border-l-4 border-accent mb-8">
                <p className="text-gray-800 dark:text-gray-200 italic font-medium">
                  "Sự thành công của bạn là niềm tự hào của chúng tôi. Hãy để chúng tôi đồng hành cùng bạn trên con đường chinh phục thị trường số."
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={marketingConcept}
                alt="Working together"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <p className="font-bold text-lg">Hỗ trợ 24/7</p>
                <p className="text-white/80 text-sm">Luôn sẵn sàng giải đáp mọi thắc mắc</p>
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-accent/30">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">{t('ourOffice')}</p>
                  <p className="text-gray-900 dark:text-white font-bold leading-tight">{t('companyAddress')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-accent/30">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">{t('phone')}</p>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">{t('companyPhone')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-accent/30">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">{t('email')}</p>
                  <p className="text-gray-900 dark:text-white font-bold">{t('companyEmail')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-7/12 bg-white dark:bg-[#112240] p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent to-secondary"></div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('sendMessage')}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Điền thông tin bên dưới và chúng tôi sẽ phản hồi trong vòng 24h.</p>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                <p className="text-green-800 dark:text-green-200 font-medium">{t('messageSent')}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors uppercase tracking-widest ml-1">{t('fullName')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:bg-white dark:focus:bg-[#0a192f] focus:ring-4 focus:ring-accent/10 outline-none transition-all placeholder-gray-400 font-medium shadow-sm hover:border-gray-300 dark:hover:border-gray-500"
                    placeholder={t('phName')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors uppercase tracking-widest ml-1">{t('emailAddress')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:bg-white dark:focus:bg-[#0a192f] focus:ring-4 focus:ring-accent/10 outline-none transition-all placeholder-gray-400 font-medium shadow-sm hover:border-gray-300 dark:hover:border-gray-500"
                    placeholder={t('phEmail')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors uppercase tracking-widest ml-1">{t('phoneNumber')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:bg-white dark:focus:bg-[#0a192f] focus:ring-4 focus:ring-accent/10 outline-none transition-all placeholder-gray-400 font-medium shadow-sm hover:border-gray-300 dark:hover:border-gray-500"
                    placeholder={t('phPhone')}
                    required
                  />
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="jobTitle" className="text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors uppercase tracking-widest ml-1">{t('jobTitle')}</label>
                  <div className="relative">
                    <select
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:bg-white dark:focus:bg-[#0a192f] focus:ring-4 focus:ring-accent/10 outline-none transition-all appearance-none cursor-pointer shadow-sm font-medium hover:border-gray-300 dark:hover:border-gray-500"
                    >
                      <option value="">{t('selectJobTitle')}</option>
                      <option value="owner">{t('jobOwner')}</option>
                      <option value="manager">{t('jobManager')}</option>
                      <option value="marketer">{t('jobMarketer')}</option>
                      <option value="freelancer">{t('jobFreelancer')}</option>
                      <option value="other">{t('jobOther')}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/6 text-gray-500 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="subject" className="text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors uppercase tracking-widest ml-1">{t('subject')}</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 pr-10 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:bg-white dark:focus:bg-[#0a192f] focus:ring-4 focus:ring-accent/10 outline-none transition-all appearance-none cursor-pointer shadow-sm font-medium hover:border-gray-300 dark:hover:border-gray-500"
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
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/6 text-gray-500 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-900 dark:text-gray-200 transition-colors uppercase tracking-widest ml-1">{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:bg-white dark:focus:bg-[#0a192f] focus:ring-4 focus:ring-accent/10 outline-none transition-all placeholder-gray-400 resize-none shadow-sm font-medium hover:border-gray-300 dark:hover:border-gray-500"
                  placeholder={t('phMessage')}
                  required
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent accent-accent"
                  />
                </div>
                <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                  Tôi đồng ý với <Link to="/privacy-policy" className="text-accent hover:underline">Chính sách bảo mật</Link> và cho phép VIT DIGITAL liên hệ tư vấn.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accent to-accent/90 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-accent/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg uppercase tracking-wider relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} aria-hidden="true" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      {t('sendMessage')} <Send size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
