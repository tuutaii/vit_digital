import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_team.png';
import { useApp } from '../context/AppContext';

const Hero = () => {
  const { t } = useApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-primary z-0 transition-colors duration-300">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-accent/10 rounded-full blur-[140px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 border border-accent/20 rounded-full text-accent text-sm font-semibold tracking-widest mb-6 bg-accent/5 backdrop-blur-sm">
              {t('heroTag')}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900 dark:text-white transition-colors duration-300">
              {t('heroTitle1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">{t('heroTitle2')}</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              {t('heroDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link
                to="/lien-he"
                className="group relative px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-hover shadow-lg hover:shadow-accent/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 overflow-hidden animate-pulse hover:animate-none"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                {/* Glow rings */}
                <span className="absolute inset-0 rounded-full bg-accent opacity-75 blur-md animate-ping"></span>
                <span className="absolute inset-0 rounded-full bg-accent opacity-50 blur-lg"></span>

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  {t('heroConsult')}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="#portfolio"
                className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-all text-center transform hover:-translate-y-1"
              >
                {t('heroViewProjects')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[600px]"
          >
            {/* Main Image Card */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-white/10 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              <img src={heroImg} alt="Digital Marketing Team" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-12 bg-accent rounded-full"></div>
                  <span className="text-sm font-light tracking-wider">{t('heroPremium')}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold">{t('heroStrategy')}</h3>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-4 md:-left-12 bg-white dark:bg-primary border border-gray-100 dark:border-gray-700 p-5 rounded-2xl shadow-xl z-20"
            >
              <span className="text-accent font-bold text-3xl font-serif">+150%</span>
              <p className="text-gray-600 dark:text-gray-400 text-xs font-medium uppercase tracking-wide mt-1">{t('heroROI')}</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white dark:bg-primary border border-gray-100 dark:border-gray-700 p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex -space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white dark:border-primary shrink-0" />
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white dark:border-primary shrink-0" />
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-primary shrink-0">99+</div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs font-bold text-center">{t('heroSatisfaction')}</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
