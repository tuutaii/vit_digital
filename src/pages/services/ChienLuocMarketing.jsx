import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Lightbulb, Compass, TrendingUp } from 'lucide-react';

const ChienLuocMarketing = () => {
  const painPoints = [
    { title: "Mơ hồ về định hướng", desc: "Không biết bắt đầu từ đâu, triển khai kênh nào hiệu quả." },
    { title: "Lãng phí ngân sách", desc: "Chi tiền sai chỗ, đầu tư vào những hoạt động không sinh lời." },
    { title: "Đối thủ cạnh tranh", desc: "Bị đối thủ vượt mặt, mất dần thị phần." },
    { title: "Thương hiệu mờ nhạt", desc: "Khách hàng không nhớ đến thương hiệu của bạn." }
  ];

  const solutions = [
    { 
      title: "Định Vị Thương Hiệu", 
      desc: "Xác định rõ USP (Lợi điểm bán hàng độc nhất) để khác biệt hóa so với đối thủ.",
      icon: <Compass size={28} />
    },
    { 
      title: "Kế Hoạch Tổng Thể", 
      desc: "Xây dựng roadmap ngắn hạn và dài hạn, rõ ràng từng bước đi.",
      icon: <Lightbulb size={28} />
    },
    { 
      title: "Tối Ưu Trải Nghiệm", 
      desc: "Nâng cao Customer Journey để tăng tỷ lệ giữ chân khách hàng.",
      icon: <TrendingUp size={28} />
    }
  ];

  const processSteps = [
    "Audit hiện trạng",
    "Nghiên cứu thị trường",
    "Phân tích đối thủ",
    "Xây dựng chiến lược",
    "Lập kế hoạch hành động",
    "Đồng hành triển khai"
  ];

  return (
    <ServicePageTemplate
      serviceName="Tư vấn Chiến lược Marketing"
      heroHeadline="Định hướng đúng - Vững bước thành công"
      heroSubheadline="Xây dựng chiến lược Marketing bài bản, giúp doanh nghiệp đi đường dài và phát triển bền vững."
      heroImage=""
      painPoints={painPoints}
      solutions={solutions}
      processSteps={processSteps}
    />
  );
};

export default ChienLuocMarketing;
