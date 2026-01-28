import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import SubHero from '../components/SubHero';
import { newsData } from '../data/newsData';
import { useSeoMetadata, getOrganizationSchema, JsonLd } from '../utils/seoUtils';

const News = () => {
  useSeoMetadata('Tin Tức & Kiến Thức', 'Cập nhật những xu hướng Marketing mới nhất, kiến thức chuyên ngành và câu chuyện thành công từ VIT DIGITAL.');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const organizationSchema = getOrganizationSchema();

  return (
    <main className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
      <JsonLd schema={organizationSchema} />

      <div className="container mx-auto px-4">
        <SubHero
          tag="Blog"
          title="Tin Tức & Kiến Thức"
          subtitle="Cập nhật những xu hướng Marketing mới nhất, kiến thức chuyên ngành và câu chuyện thành công từ VIT DIGITAL."
        />

        {/* Post Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-white dark:bg-[#112240] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1" itemScope itemType="https://schema.org/Article">
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 bg-secondary text-dark text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                    {item.category}
                  </span>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  itemProp="image"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  <time className="flex items-center gap-1.5" dateTime={item.date.split('/').reverse().join('-')}>
                    <Calendar size={14} className="text-accent" aria-hidden="true" />
                    {item.date}
                  </time>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-accent" aria-hidden="true" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-snug group-hover:text-accent transition-colors line-clamp-2" itemProp="headline">
                  <Link to={`/tin-tuc/${item.id}`} itemProp="url">{item.title}</Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed" itemProp="description">
                  {item.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                      <Tag size={10} aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <User size={16} className="text-gray-500 dark:text-gray-400" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400" itemProp="author">{item.author}</span>
                </div>

                <div className="mt-auto">
                  <Link to={`/tin-tuc/${item.id}`} className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide group/btn hover:gap-3 transition-all" aria-label={`Read more about ${item.title}`}>
                    Đọc Thêm <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5 rounded-2xl p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Muốn nhận thêm kiến thức Marketing?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Đăng ký nhận bản tin hàng tuần từ VIT DIGITAL để cập nhật những xu hướng mới nhất và tips hữu ích.
          </p>
          <Link
            to="/lien-he"
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-hover shadow-lg hover:shadow-accent/40 transition-all transform hover:-translate-y-1"
          >
            Đăng Ký Ngay
          </Link>
        </section>

      </div>
    </main>
  );
};

export default News;
