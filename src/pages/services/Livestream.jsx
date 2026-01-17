import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Mic, Video, Users } from 'lucide-react';

const Livestream = () => {
  const painPoints = [
    { title: "Live không ai xem", desc: "Mắt xem thấp, tương tác kém, không giữ chân được người xem." },
    { title: "Thiếu kịch bản", desc: "Nói lan man, không biết chốt sale, tỷ lệ chuyển đổi thấp." },
    { title: "Thiết bị sơ sài", desc: "Hình ảnh mờ, âm thanh nhỏ, thiếu chuyên nghiệp." },
    { title: "Ngại lên hình", desc: "Không có nhân sự tự tin livestream bán hàng." }
  ];

  const solutions = [
    { 
      title: "Setup Phòng Live", 
      desc: "Hỗ trợ thiết bị ánh sáng, âm thanh, background chuyên nghiệp chuẩn studio.",
      icon: <Video size={28} />
    },
    { 
      title: "Kịch Bản Chốt Sale", 
      desc: "Xây dựng kịch bản livestream thu hút, minigame giữ chân người xem.",
      icon: <Mic size={28} />
    },
    { 
      title: "Cung Cấp Host/KOL", 
      desc: "Booking mẫu livestream chuyên nghiệp, có duyên, chốt đơn thần tốc.",
      icon: <Users size={28} />
    }
  ];

  const processSteps = [
    "Nhận brief sản phẩm",
    "Lên kịch bản Live",
    "Setup thiết bị",
    "Test kỹ thuật",
    "Thực hiện Livestream",
    "Tổng kết đơn hàng"
  ];

  return (
    <ServicePageTemplate
      serviceName="Dịch vụ Livestream"
      heroHeadline="Livestream Triệu Đô - Chốt Đơn Mỏi Tay"
      heroSubheadline="Giải pháp Livestream bán hàng chuyên nghiệp, giúp bạn tiếp cận khách hàng trực quan và sinh động nhất."
      heroImage=""
      painPoints={painPoints}
      solutions={solutions}
      processSteps={processSteps}
    />
  );
};

export default Livestream;
