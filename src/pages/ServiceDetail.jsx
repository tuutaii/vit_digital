import React from 'react';

const ServiceDetail = ({ title, content }) => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-dark text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">{title}</h1>
        <div className="bg-white dark:bg-[#112240] rounded-lg shadow-xl p-8 md:p-12">
            <p className="text-lg leading-relaxed mb-6">
                {content || `Chào mừng bạn đến với trang ${title}. Chúng tôi cung cấp các giải pháp chuyên nghiệp để giúp doanh nghiệp của bạn phát triển.`}
            </p>
            <p className="text-lg leading-relaxed">
                Nội dung chi tiết cho dịch vụ này đang được cập nhật. Vui lòng liên hệ với chúng tôi để được tư vấn trực tiếp.
            </p>
            
            <div className="mt-8 text-center">
                 <a 
                  href="/#contact" 
                  className="inline-block px-8 py-3 bg-gradient-to-r from-secondary to-accent text-dark font-bold rounded-lg hover:shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  Liên hệ ngay
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
