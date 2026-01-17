import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Video, ShoppingBag, Radio } from 'lucide-react';

const TiktokMarketing = () => {
  const painPoints = [
    { title: "Kênh mới, khó làm", desc: "Chưa hiểu rõ thuật toán và cách vận hành của TikTok." },
    { title: "Video ít view", desc: "Nội dung không lên xu hướng, lượt tương tác lẹt đẹt." },
    { title: "Chuyển đổi thấp", desc: "Có view nhưng không ra đơn hàng." },
    { title: "Xây kênh tốn kém", desc: "Tốn quá nhiều chi phí cho việc quay chụp, dựng video." }
  ];

  const solutions = [
    { 
      title: "Xây Dựng Kênh", 
      desc: "Kịch bản viral, quay dựng chuyên nghiệp, định hình phong cách kênh.",
      icon: <Video size={28} />
    },
    { 
      title: "TikTok Ads", 
      desc: "Chạy quảng cáo chuyển đổi, tiếp cận hàng triệu khách hàng trẻ tiềm năng.",
      icon: <Radio size={28} />
    },
    { 
      title: "TikTok Shop", 
      desc: "Vận hành gian hàng, tối ưu SEO sản phẩm, bùng nổ đơn hàng.",
      icon: <ShoppingBag size={28} />
    }
  ];

  const processSteps = [
    "Định hướng concept",
    "Viết kịch bản",
    "Booking KOL/KOC",
    "Quay dựng video",
    "Đăng tải & Seeding",
    "Tối ưu chuyển đổi"
  ];

  return (
    <ServicePageTemplate
      serviceName="Dịch vụ TikTok Marketing"
      heroHeadline="Chinh phục Gen Z - Bùng nổ doanh số trên TikTok"
      heroSubheadline="Giải pháp xây dựng kênh và chạy quảng cáo TikTok toàn diện để bắt kịp xu hướng Short Video."
      heroImage=""
      painPoints={painPoints}
      solutions={solutions}
      processSteps={processSteps}
    />
  );
};

export default TiktokMarketing;
