import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-dark z-0 transition-colors duration-300">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-secondary/30 rounded-full text-secondary text-sm font-medium tracking-wider mb-6 bg-secondary/5">
              DIGITAL AGENCY
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white transition-colors duration-300">
              Nâng Tầm <br />
              <span className="text-gradient">Thương Hiệu Số</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed transition-colors duration-300">
              Chúng tôi kiến tạo trải nghiệm số ấn tượng. Từ chiến lược marketing tổng thể đến thiết kế website đẳng cấp, biến tầm nhìn của bạn thành hiện thực.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/lien-he" 
                className="group px-8 py-3 bg-secondary text-dark font-bold rounded-full hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
              >
                Nhận Tư Vấn
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#portfolio" 
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:border-secondary hover:bg-secondary/5 transition-all text-center"
              >
                Xem Dự Án
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract visual/Card mockup representation */}
            <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 shadow-2xl rotate-6 hover:rotate-2 transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-3xl pointer-events-none" />
               <div className="h-full w-full flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-8">
                     <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-40 bg-white/50 dark:bg-dark/50 rounded-xl overflow-hidden relative border border-gray-200 dark:border-transparent">
                        <div className="absolute top-2 right-2 px-2 py-1 bg-accent text-[10px] font-bold rounded text-white">GROWTH</div>
                        <div className="w-full h-full flex items-end p-4">
                           <div className="w-4 h-12 bg-secondary/50 rounded mx-1" />
                           <div className="w-4 h-20 bg-secondary/70 rounded mx-1" />
                           <div className="w-4 h-16 bg-secondary/50 rounded mx-1" />
                           <div className="w-4 h-28 bg-secondary rounded mx-1 shadow-[0_0_15px_rgba(100,255,218,0.5)]" />
                           <div className="w-4 h-24 bg-secondary/60 rounded mx-1" />
                        </div>
                     </div>
                     <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                     <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                  </div>
               </div>
            </div>
            {/* Floating elements */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute top-10 -left-10 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-xl"
            >
               <span className="text-secondary font-bold text-2xl">+150%</span>
               <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Tăng Trưởng ROI</p>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-20 -right-5 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-xl"
            >
               <div className="flex -space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-500 border-2 border-white dark:border-dark" />
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-400 border-2 border-white dark:border-dark" />
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-300 border-2 border-white dark:border-dark" />
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-xs">Khách Hàng Hài Lòng</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
