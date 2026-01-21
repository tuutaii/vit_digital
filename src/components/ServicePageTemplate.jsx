import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle, AlertTriangle, ArrowRight, BarChart, Users, Zap, Award, Phone } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import SubHero from './SubHero';

const ServicePageTemplate = ({
  serviceName,
  heroHeadline,
  heroSubheadline,
  heroImage,
  painPoints = [],
  solutions = [],
  processSteps = [],
  trustIndicators = [],
  ctaText
}) => {
  const { scrollYProgress } = useScroll();
  const { t } = useApp();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-white dark:bg-[#020c1b] min-h-screen text-gray-800 dark:text-gray-200 overflow-hidden font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <SubHero
        title={heroHeadline}
        subtitle={heroSubheadline}
        tag={serviceName}
        ctaText={ctaText || t('getStarted')}
      />

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a192f]/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('painPointsTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t('painPointsDesc')}</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#112240] p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">{point.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solutionsTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t('solutionsDesc')}</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((sol, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#112240] p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 hover:border-secondary/50 dark:hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group"
                variants={itemVariants}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:rotate-6 transition-transform">
                  {sol.icon || <CheckCircle size={28} />}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white capitalize">{sol.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('processTitle')}</h2>
            <p className="text-gray-400">{t('processDesc')}</p>
          </div>

          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:bg-gray-750 transition-colors h-full flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center font-bold text-dark mb-4 shadow-[0_0_15px_rgba(100,255,218,0.4)]">
                      {index + 1}
                    </div>
                    <h4 className="font-bold mb-2 text-sm uppercase tracking-wider">{step}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Testimonials Section */}
      <section className="py-20 bg-white dark:bg-[#020c1b]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('whyChooseUs')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('realResults')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{t('realResultsDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('expertTeam')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{t('expertTeamDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('speedFlexibility')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{t('speedFlexibilityDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-[#112240] p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6 text-yellow-500">
                {[1, 2, 3, 4, 5].map(i => <Award key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                "VIT DIGITAL đã giúp chúng tôi tăng trưởng 300% doanh thu chỉ sau 6 tháng. Đội ngũ làm việc cực kỳ chuyên nghiệp và tận tâm."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white">Nguyễn Văn A</h5>
                  <p className="text-sm text-gray-500">CEO, TechStartupcom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white dark:bg-[#112240] border-t border-gray-200 dark:border-gray-700 md:hidden z-50 flex justify-between items-center shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 dark:text-gray-400">{t('supportHotline')}</span>
          <a href="tel:0966290789" className="font-bold text-gray-900 dark:text-white text-lg">0966 290 789</a>
        </div>
        <Link to="/lien-he" className="px-6 py-3 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-accent-hover transition-all">
          {t('getStarted')}
        </Link>
      </div>

    </div>
  );
};

export default ServicePageTemplate;
