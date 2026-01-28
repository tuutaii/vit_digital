import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import FloatingIcons from './FloatingIcons';
import { getServicesData } from '../data/servicesData';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useApp();
  const servicesData = getServicesData(t);

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 dark:bg-primary/50 relative transition-colors duration-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.01]" style={{
        backgroundImage: 'linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000)',
        backgroundSize: '60px 60px'
      }} />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-cyan-200/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-orange-200/20 to-pink-200/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-100/10 to-blue-100/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Floating Icons */}
      <FloatingIcons section="services" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm bg-accent/10 py-1 px-3 rounded-full">{t('ourServices')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white transition-colors font-serif">{t('compSolutions')}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            {t('servicesSub')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <article
              key={service.id}
              onClick={() => navigate(service.link)}
              className="group p-8 lg:p-10 rounded-3xl bg-white/80 dark:bg-[#172A45]/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-accent/10 cursor-pointer relative overflow-hidden flex flex-col"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(service.link);
                }
              }}
              aria-label={`View details for ${service.title}`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-accent/10"></div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:border-accent transition-all duration-300 shadow-md group-hover:shadow-lg relative z-10 shrink-0">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-accent transition-colors font-serif">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors mb-6 text-base grow">
                {service.description}
              </p>
              <span className="text-accent text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform inline-flex items-center mt-auto">
                {t('viewDetails')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
