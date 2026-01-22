import React from 'react';
import { Megaphone, Globe, PenTool, BarChart, Smartphone, Code, Lightbulb, Video, Radio } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useApp();

  const servicesData = [
    {
      icon: <Megaphone size={32} />,
      title: t('svcMarketing'),
      description: t('svcMarketingDesc'),
      link: '/dich-vu/marketing-tong-the'
    },
    {
      icon: <Lightbulb size={32} />,
      title: t('svcStrategy'),
      description: t('svcStrategyDesc'),
      link: '/dich-vu/tu-van-chien-luoc'
    },
    {
      icon: <Radio size={32} />,
      title: t('svcAds'),
      description: t('svcAdsDesc'),
      link: '/dich-vu/quang-cao'
    },
    {
      icon: <BarChart size={32} />,
      title: t('svcSEO'),
      description: t('svcSEODesc'),
      link: '/dich-vu/seo'
    },
    {
      icon: <Video size={32} />,
      title: t('svcTikTok'),
      description: t('svcTikTokDesc'),
      link: '/dich-vu/tiktok'
    },
    {
      icon: <Globe size={32} />,
      title: t('svcWeb'),
      description: t('svcWebDesc'),
      link: '/dich-vu/thiet-ke-website'
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-primary/50 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm bg-accent/10 py-1 px-3 rounded-full">{t('ourServices')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white transition-colors font-serif">{t('compSolutions')}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            {t('servicesSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.link)}
              className="group p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#172A45] border border-gray-100 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-2xl cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-accent/10"></div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="w-16 h-16 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm relative z-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-accent transition-colors font-serif">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors mb-6 text-base">
                {service.description}
              </p>
              <span className="text-accent text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform inline-flex items-center">
                {t('viewDetails')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
