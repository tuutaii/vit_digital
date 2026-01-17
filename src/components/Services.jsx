import React from 'react';
import { Megaphone, Globe, PenTool, BarChart, Smartphone, Code, Lightbulb, Video, Radio } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    icon: <Megaphone size={32} />,
    title: 'Marketing Tổng Thể',
    description: 'Chiến lược toàn diện, tối ưu hóa mọi điểm chạm để tăng trưởng doanh thu bền vững.',
    link: '/dich-vu/marketing-tong-the'
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Tư Vấn Chiến Lược',
    description: 'Định hướng rõ ràng, xây dựng kế hoạch hành động cụ thể cho từng giai đoạn phát triển.',
    link: '/dich-vu/tu-van-chien-luoc'
  },
  {
    icon: <Radio size={32} />,
    title: 'Dịch Vụ Quảng Cáo',
    description: 'Tối ưu ngân sách, tiếp cận đúng khách hàng mục tiêu trên Facebook, Google, TikTok.',
    link: '/dich-vu/quang-cao'
  },
  {
    icon: <BarChart size={32} />,
    title: 'SEO Tổng Thể',
    description: 'Lên top Google bền vững, gia tăng lưu lượng truy cập tự nhiên cho website.',
    link: '/dich-vu/seo-tong-the'
  },
  {
    icon: <Video size={32} />,
    title: 'TikTok Marketing',
    description: 'Xây kênh viral, chạy quảng cáo chuyển đổi, nắm bắt xu hướng video ngắn.',
    link: '/dich-vu/tiktok-marketing'
  },
  {
    icon: <Globe size={32} />,
    title: 'Thiết Kế Website',
    description: 'Website chuẩn SEO, giao diện hiện đại, tốc độ tải trang nhanh chóng.',
    link: '/dich-vu/thiet-ke-website'
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">Dịch Vụ Của Chúng Tôi</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white transition-colors">Giải Pháp Toàn Diện</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              onClick={() => navigate(service.link)}
              className="group p-8 rounded-2xl bg-white dark:bg-[#112240] border border-gray-100 dark:border-transparent hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm dark:shadow-none cursor-pointer"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
