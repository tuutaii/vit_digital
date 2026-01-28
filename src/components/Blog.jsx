import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import FloatingIcons from './FloatingIcons';
import { newsData } from '../data/newsData';

const Blog = () => {
  const { t } = useApp();
  const recentPosts = newsData.slice(0, 3); // Get first 3 posts

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/30 dark:bg-[#0a192f] transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
        backgroundSize: '40px 40px'
      }} />

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-20 w-[450px] h-[450px] bg-gradient-to-br from-purple-200/20 to-blue-200/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-pink-200/15 to-orange-200/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />

      <FloatingIcons section="growth" />
      <div className="container mx-auto px-6 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm bg-accent/10 py-1 px-3 rounded-full">{t('latestNews')}</span>
            <h2 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white font-serif">{t('insights')}</h2>
          </div>
          <Link to="/tin-tuc" className="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors font-medium">
            {t('viewAllPosts')} <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="group bg-white/90 dark:bg-[#112240]/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 border border-gray-200/50 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full" itemScope itemType="https://schema.org/BlogPosting">
              {/* Image */}
              <div className="h-60 overflow-hidden relative shrink-0">
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 uppercase tracking-wider backdrop-blur-md bg-accent/90">
                  {post.category}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                  <time className="flex items-center gap-1" dateTime={post.date.split('/').reverse().join('-')}><Calendar size={14} className="text-accent" aria-hidden="true" /> {post.date}</time>
                  <span className="flex items-center gap-1" itemProp="author"><User size={14} className="text-accent" aria-hidden="true" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-accent transition-colors line-clamp-2 font-serif leading-tight" itemProp="headline">
                  <Link to={`/tin-tuc/${post.id}`} itemProp="url">{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed" itemProp="description">
                  {post.excerpt}
                </p>
                <Link to={`/tin-tuc/${post.id}`} className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wide hover:gap-3 transition-all" aria-label={`Read more about ${post.title}`}>
                  {t('readMore')} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover dark:hover:text-accent transition-colors font-medium">
            {t('viewAllPosts')} <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
