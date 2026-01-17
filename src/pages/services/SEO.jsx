import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Search, Globe, Link, Settings } from 'lucide-react';

const SEO = () => {
  const painPoints = [
    { title: "Mất tích trên Google", desc: "Website không xuất hiện khi khách hàng tìm kiếm sản phẩm." },
    { title: "Phụ thuộc vào Ads", desc: "Hết tiền chạy quảng cáo là hết đơn hàng." },
    { title: "Website ít Traffic", desc: "Lượt truy cập tự nhiên thấp, không có người vào xem." },
    { title: "SEO mãi không lên", desc: "Đã làm SEO nhưng từ khóa vẫn dậm chân tại chỗ." }
  ];

  const solutions = [
    { 
      title: "Phủ Sóng Từ Khóa", 
      desc: "SEO hàng trăm từ khóa dài (Long-tail keywords) để bao vây thị trường ngách.",
      icon: <Search size={28} />
    },
    { 
      title: "Traffic Bền Vững", 
      desc: "Tăng lượng truy cập tự nhiên, ổn định, không tốn tiền cho mỗi nhấp chuột.",
      icon: <Globe size={28} />
    },
    { 
      title: "Audit Kỹ Thuật", 
      desc: "Tối ưu hóa cấu trúc website, tốc độ tải trang và trải nghiệm người dùng (UX).",
      icon: <Settings size={28} />
    }
  ];

  const processSteps = [
    "Nghiên cứu từ khóa",
    "Audit Website",
    "SEO On-page",
    "Content Marketing",
    "Link Building",
    "Duy trì thứ hạng"
  ];

  return (
    <ServicePageTemplate
      serviceName="Dịch vụ SEO Tổng Thể"
      heroHeadline="Thống lĩnh Top 1 Google - Bùng nổ traffic tự nhiên"
      heroSubheadline="Chiến lược SEO mũ trắng an toàn, bền vững, giúp thương hiệu của bạn dẫn đầu thị trường online."
      heroImage=""
      painPoints={painPoints}
      solutions={solutions}
      processSteps={processSteps}
    />
  );
};

export default SEO;
