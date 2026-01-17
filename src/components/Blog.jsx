import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <section id="blog" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">Tin Tức Mới Nhất</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Góc Nhìn & Kiến Thức</h2>
          </div>
          <Link to="/tin-tuc" className="hidden md:flex items-center gap-2 text-secondary hover:text-white transition-colors font-medium">
            Xem Tất Cả Bài Viết <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-[#112240] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors line-clamp-2">
                  <Link to={`/tin-tuc/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/tin-tuc/${post.id}`} className="inline-flex items-center gap-1 text-secondary text-sm font-medium hover:gap-2 transition-all">
                  Đọc Thêm <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors font-medium">
            Xem Tất Cả Bài Viết <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
