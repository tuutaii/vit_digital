import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Featured Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-secondary border-secondary text-dark font-bold' 
                    : 'bg-transparent border-gray-600 text-gray-400 hover:border-secondary hover:text-secondary'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group relative rounded-xl overflow-hidden cursor-pointer"
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
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                  <span className="text-secondary text-sm font-bold tracking-wider mb-2 uppercase">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.description}</p>
                  <button className="p-3 bg-secondary rounded-full text-dark hover:bg-white transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <ExternalLink size={24} />
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
