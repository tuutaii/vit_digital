import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import FloatingIcons from './FloatingIcons';
import { useApp } from '../context/AppContext';

const categories = ['All', 'Website', 'Marketing', 'Branding'];

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive financial dashboard for a leading tech firm.'
  },
  {
    id: 2,
    title: 'Neon Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    description: 'Complete brand overhaul featuring cyberpunk aesthetics.'
  },
  {
    id: 3,
    title: 'Social Growth Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    description: 'Viral marketing campaign reaching 1M+ users.'
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'High-conversion online store for fashion retail.'
  },
  {
    id: 5,
    title: 'Eco-Friendly Packaging',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    description: 'Sustainable packaging design for organic products.'
  },
  {
    id: 6,
    title: 'SEO Domination',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1572044162444-ad6021194273?auto=format&fit=crop&q=80&w=800',
    description: 'Ranking #1 for high-volume keywords in 3 months.'
  }
];

const Portfolio = () => {
  const { t } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white dark:bg-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-orange-100/20 to-pink-100/20 rounded-full blur-[120px] pointer-events-none" />

      <FloatingIcons section="portfolio" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm bg-accent/10 py-1 px-3 rounded-full">{t('ourWork')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-gray-900 dark:text-white font-serif">{t('featuredProjects')}</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full border-2 transition-all duration-300 font-medium ${activeCategory === cat
                  ? 'bg-accent border-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-transparent border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-accent hover:text-accent'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-left backdrop-blur-[2px]">
                  <span className="text-accent text-sm font-bold tracking-wider mb-2 uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 line-clamp-2">{project.description}</p>
                  <button className="self-start p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-accent hover:border-accent transition-all translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 backdrop-blur-md">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
