import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    title: '5 Xu Hướng Marketing "Thống Trị" Năm 2024',
    excerpt: 'Khám phá những chiến lược Marketing mới đang làm mưa làm gió trên thị trường, từ AI Content đến Livestream tương tác.',
    date: '12/10/2025',
    author: 'Tuấn Tài',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Chiến Lược',
    content: 'Nội dung chi tiết bài viết 1...'
  },
  {
    id: 2,
    title: 'Bí Quyết SEO Lên Top 1 Google Trong 3 Tháng',
    excerpt: 'Hướng dẫn chi tiết quy trình SEO tổng thể "Mũ Trắng", an toàn và bền vững cho doanh nghiệp SMEs.',
    date: '28/09/2025',
    author: 'Minh Hạnh',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    category: 'SEO',
    content: 'Nội dung chi tiết bài viết 2...'
  },
  {
    id: 3,
    title: 'TikTok Shop: Mỏ Vàng Mới Cho Các Nhà Bán Lẻ',
    excerpt: 'Tại sao TikTok Shop lại có sức hút mãnh liệt đến vậy? Cách tối ưu vận hành để đạt doanh thu ngàn đơn.',
    date: '15/09/2025',
    author: 'Hoàng Nam',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    category: 'TikTok',
    content: 'Nội dung chi tiết bài viết 3...'
  },
  {
    id: 4,
    title: 'Tối Ưu Trải Nghiệm Người Dùng (UX) Trên Website',
    excerpt: 'Website đẹp là chưa đủ. Hãy làm cho nó dễ sử dụng để giữ chân khách hàng lâu hơn.',
    date: '10/09/2025',
    author: 'Thanh Hà',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Design',
    content: 'Nội dung chi tiết bài viết 4...'
  },
  {
    id: 5,
    title: 'Chạy Quảng Cáo Facebook: Đắt Nhưng Xắt Ra Miếng',
    excerpt: 'Làm sao để tối ưu chi phí quảng cáo (CPM) mà vẫn đảm bảo tỷ lệ chuyển đổi (CR) cao?',
    date: '05/09/2025',
    author: 'Quốc Bảo',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    category: 'Ads',
    content: 'Nội dung chi tiết bài viết 5...'
  },
    {
    id: 6,
    title: 'Branding: Xây Dựng Thương Hiệu Cảm Xúc',
    excerpt: 'Kết nối với khách hàng bằng câu chuyện thương hiệu chân thực và chạm đến trái tim.',
    date: '01/09/2025',
    author: 'Ngọc Lan',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    category: 'Branding',
    content: 'Nội dung chi tiết bài viết 6...'
  }
];

const News = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Breadcrumb / Header */}
        <div className="mb-12 text-center md:text-left">
           <HashLink to="/#" className="inline-flex items-center gap-2 text-gray-500 hover:text-secondary mb-4 transition-colors">
              <ArrowLeft size={16} /> Quay lại trang chủ
           </HashLink>
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tin Tức & Sự Kiện</h1>
           <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              Cập nhật những xu hướng Marketing mới nhất, kiến thức chuyên ngành và câu chuyện thành công từ VIT DIGITAL.
           </p>
        </div>

        {/* Featured Post (Optional layout variation) */}
        
        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((item) => (
                <article key={item.id} className="group flex flex-col h-full bg-white dark:bg-[#112240] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
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
                        />
                         {/* Overlay effect */}
                        <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
                            <span className="flex items-center gap-1.5 ">
                                <Calendar size={14} className="text-secondary" /> 
                                {item.date}
                            </span>
                             <span className="flex items-center gap-1.5">
                                <User size={14} className="text-secondary" /> 
                                {item.author}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                           <Link to={`/tin-tuc/${item.id}`}>{item.title}</Link>
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                            {item.excerpt}
                        </p>

                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <Link to={`/tin-tuc/${item.id}`} className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-wide group/btn hover:gap-3 transition-all">
                                Đọc Thêm <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>

        {/* Pagination (Visual only) */}
        <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-dark font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">3</button>
            <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"><ArrowRight size={16} /></button>
        </div>

      </div>
    </div>
  );
};

export default News;
