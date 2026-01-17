import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Target, TrendingUp, DollarSign, Layout, Users, Smartphone } from 'lucide-react';

const MarketingTongThe = () => {
  const painPoints = [
    { title: "Chi phí nhân sự cao", desc: "Tốn kém để duy trì một phòng Marketing in-house đầy đủ." },
    { title: "Thiếu tính đồng bộ", desc: "Các kênh chạy rời rạc, không cộng hưởng được sức mạnh thương hiệu." },
    { title: "Không cam kết KPI", desc: "Khó đo lường hiệu quả, tiền quảng cáo không rõ đi về đâu." },
    { title: "Cạn ý tưởng", desc: "Nội dung quảng cáo nhàm chán, không theo kịp trend thị trường." }
  ];

  const solutions = [
    { 
      title: "Phòng Marketing Thuê Ngoài", 
      desc: "Thay thế hoàn toàn team in-house với đầy đủ vị trí: Plan, Content, Design, Ads, SEO.",
      icon: <Users size={28} />
    },
    { 
      title: "Đa Kênh Tích Hợp", 
      desc: "Triển khai đồng bộ trên Facebook, Google, TikTok, Zalo để 'vây bắt' khách hàng.",
      icon: <Layout size={28} />
    },
    { 
      title: "Tối Ưu Ngân Sách", 
      desc: "Cam kết KPI rõ ràng, báo cáo realtime, tối đa hóa tỷ lệ chuyển đổi (CR).",
      icon: <DollarSign size={28} />
    }
  ];

  const processSteps = [
    "Nghiên cứu thị trường",
    "Lập chiến lược",
    "Sản xuất nội dung",
    "Setup quảng cáo",
    "Tối ưu & Vít camp",
    "Báo cáo định kỳ"
  ];

  return (
    <ServicePageTemplate
      serviceName="Marketing Tổng Thể"
      heroHeadline="Bùng nổ doanh số với giải pháp Marketing Đa Kênh"
      heroSubheadline="Giải pháp Marketing tổng thể thay thế phòng in-house: Hiệu quả hơn - Tiết kiệm hơn - Chuyên nghiệp hơn."
      heroImage="" 
      painPoints={painPoints}
      solutions={solutions}
      processSteps={processSteps}
    />
  );
};

export default MarketingTongThe;
