import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const posts = [
  {
    id: 1,
    title: '5 Xu Hướng Marketing "Thống Trị" Năm 2024',
    excerpt: 'Khám phá những chiến lược Marketing mới đang làm mưa làm gió trên thị trường, từ AI Content đến Livestream tương tác.',
    date: '12/10/2025',
    author: 'Tuấn Tài',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    category: 'Chiến Lược'
  },
  {
    id: 2,
    title: 'Bí Quyết SEO Lên Top 1 Google Trong 3 Tháng',
    excerpt: 'Hướng dẫn chi tiết quy trình SEO tổng thể "Mũ Trắng", an toàn và bền vững cho doanh nghiệp SMEs.',
    date: '28/09/2025',
    author: 'Minh Hạnh',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
    category: 'SEO'
  },
  {
    id: 3,
    title: 'TikTok Shop: Mỏ Vàng Mới Cho Các Nhà Bán Lẻ',
    excerpt: 'Tại sao TikTok Shop lại có sức hút mãnh liệt đến vậy? Cách tối ưu vận hành để đạt doanh thu ngàn đơn.',
    date: '15/09/2025',
    author: 'Hoàng Nam',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
    category: 'TikTok'
  }
];

const Blog = () => {
  const { t } = useApp();

  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-[#0a192f] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm bg-accent/10 py-1 px-3 rounded-full">{t('latestNews')}</span>
            <h2 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white font-serif">{t('insights')}</h2>
          </div>
          <Link to="/tin-tuc" className="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors font-medium">
            {t('viewAllPosts')} <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white dark:bg-[#112240] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-accent" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} className="text-accent" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-accent transition-colors line-clamp-2 font-serif leading-tight">
                  <Link to={`/tin-tuc/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/tin-tuc/${post.id}`} className="inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wide hover:gap-3 transition-all">
                  {t('readMore')} <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover dark:hover:text-accent transition-colors font-medium">
            {t('viewAllPosts')} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
