import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Monitor, Smartphone, PenTool } from 'lucide-react';

const ThietKeWebsite = () => {
  const painPoints = [
    { title: "Web cũ kỹ, lỗi thời", desc: "Giao diện xấu, không tương thích với điện thoại di động." },
    { title: "Tốc độ tải chậm", desc: "Khách hàng thoát trang vì chờ đợi quá lâu." },
    { title: "Khó quản trị", desc: "Hệ thống phức tạp, khó chỉnh sửa nội dung." },
    { title: "Không chuẩn SEO", desc: "Website không thân thiện với Google, khó lên top." }
  ];

  const solutions = [
    { 
      title: "Giao Diện UX/UI", 
      desc: "Thiết kế hiện đại, độc quyền, trải nghiệm người dùng mượt mà trên mọi thiết bị.",
      icon: <Monitor size={28} />
    },
    { 
      title: "Chuẩn SEO & Mobile", 
      desc: "Tối ưu hóa mã nguồn, tốc độ tải trang nhanh, tương thích 100% với Mobile.",
      icon: <Smartphone size={28} />
    },
    { 
      title: "Dễ Dàng Quản Trị", 
      desc: "Hệ thống quản trị (CMS) trực quan, ai cũng có thể sử dụng.",
      icon: <PenTool size={28} />
    }
  ];

  const processSteps = [
    "Lấy yêu cầu",
    "Thiết kế Wireframe",
    "Thiết kế UI/UX",
    "Lập trình Frontend",
    "Lập trình Backend",
    "Bàn giao & HDSD"
  ];

  return (
    <ServicePageTemplate
      serviceName="Dịch vụ Thiết Kế Website"
      heroHeadline="Website Đẳng Cấp - Nâng Tầm Thương Hiệu"
      heroSubheadline="Sở hữu website chuyên nghiệp, chuẩn SEO, giúp bạn kinh doanh hiệu quả 24/7 trên môi trường số."
      heroImage=""
      painPoints={painPoints}
      solutions={solutions}
      processSteps={processSteps}
    />
  );
};

export default ThietKeWebsite;
