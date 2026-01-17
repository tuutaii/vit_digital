import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { MousePointerClick, BarChart2, Search, Target } from 'lucide-react';

const QuangCao = () => {
  const painPoints = [
    { title: "Giá thầu ngày càng cao", desc: "Chi phí quảng cáo tăng nhưng đơn hàng không tăng." },
    { title: "Target không chuẩn", desc: "Quảng cáo hiển thị sai đối tượng, lãng phí ngân sách." },
    { title: "Nội dung kém thu hút", desc: "Khách hàng lướt qua quảng cáo mà không dừng lại tương tác." },
    { title: "TKQC hay bị khóa", desc: "Tài khoản quảng cáo thường xuyên bị vô hiệu hóa, gián đoạn kinh doanh." }
  ];

  const solutions = [
    { 
      title: "Target Chuyên Sâu", 
      desc: "Phân tích Big Data để target chính xác nhân khẩu học và hành vi khách hàng tiềm năng.",
      icon: <Target size={28} />
    },
    { 
      title: "Sáng Tạo Nội Dung", 
      desc: "Thiết kế Banner/Video Viral, viết Content đánh trúng tử huyệt cảm xúc.",
      icon: <MousePointerClick size={28} />
    },
    { 
      title: "Tối Ưu Realtime", 
      desc: "Theo dõi chỉ số liên tục, tắt camp đắt, vít camp rẻ để tối đa hóa ROAS.",
      icon: <BarChart2 size={28} />
    }
  ];

  const processSteps = [
    "Audit tài khoản",
    "Nghiên cứu Insight",
    "Lên Plan Ads",
    "A/B Testing",
    "Scale ngân sách",
    "Báo cáo hiệu quả"
  ];

  return (
    <ServicePageTemplate
      serviceName="Dịch vụ Quảng Cáo"
      heroHeadline="Tăng tỷ lệ chuyển đổi với chiến lược Ads thông minh"
      heroSubheadline="Facebook - Google - TikTok Ads: Tiếp cận đúng người, đúng thời điểm với chi phí tối ưu nhất."
      heroImage=""
      painPoints={painPoints}
      solutions={solutions}
      processSteps={processSteps}
    />
  );
};

export default QuangCao;
