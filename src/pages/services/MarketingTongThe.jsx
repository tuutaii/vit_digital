import React from 'react';
import ModernServiceLayout from '../../components/ModernServiceLayout';
import { Target, TrendingUp, DollarSign, Layout, Users, Smartphone, BarChart, CheckCircle, Zap, Shield, Search, Megaphone, Monitor, PenTool } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import conceptImg from '../../assets/marketing_concept.png';

const MarketingTongThe = () => {
  const { t } = useApp();

  // Data for the layout
  const heroData = {
    title: "Marketing Tổng Thể",
    description: "Giải pháp tăng trưởng doanh thu bền vững, tối ưu chi phí và nâng tầm thương hiệu đa kênh.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" // Meeting/Strategy vibe
  };

  const breadcrumbs = [
    { label: "Dịch vụ", link: "/#services" },
    { label: "Marketing Tổng Thể", link: null }
  ];

  const conceptSection = {
    title: "Marketing Tổng Thể Là Gì?",
    content: (
      <>
        <p className="mb-4">
          Marketing Tổng Thể (IMC - Integrated Marketing Communications) không chỉ là chạy quảng cáo hay đăng bài Facebook. Đó là một chiến lược toàn diện, phối hợp nhịp nhàng giữa các kênh truyền thông (Paid, Owned, Earned Media) để đạt được mục tiêu kinh doanh cụ thể.
        </p>
        <p>
          Thay vì triển khai rời rạc, Marketing Tổng Thể tạo ra sức mạnh cộng hưởng, giúp thương hiệu hiện diện đồng nhất, chuyên nghiệp và "vây quanh" khách hàng tiềm năng ở mọi điểm chạm.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white font-serif">Tại sao doanh nghiệp CẦN Marketing Tổng Thể?</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-accent mt-0.5 shrink-0" />
            <span className="text-gray-700 dark:text-gray-300"><strong>Đồng bộ thông điệp:</strong> Khách hàng nhìn thấy thương hiệu nhất quán từ Google, Facebook đến Website, giúp xây dựng niềm tin nhanh chóng.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-accent mt-0.5 shrink-0" />
            <span className="text-gray-700 dark:text-gray-300"><strong>Tối ưu hóa ngân sách (ROI):</strong> Không "bỏ trứng vào một giỏ". Phân bổ nguồn lực hợp lý để kênh này hỗ trợ kênh kia, giảm chi phí chuyển đổi khách hàng.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-accent mt-0.5 shrink-0" />
            <span className="text-gray-700 dark:text-gray-300"><strong>Tăng trưởng bền vững:</strong> Sở hữu hệ thống đa kênh giúp doanh nghiệp không bị phụ thuộc vào sự thay đổi thuật toán của một nền tảng duy nhất.</span>
          </li>
        </ul>
      </>
    ),
    image: conceptImg
  };

  const serviceItems = [
    {
      title: "Tư Vấn & Lập Chiến Lược",
      desc: "Nghiên cứu thị trường sâu sắc, phân tích đối thủ và xây dựng bản kế hoạch Marketing (Master Plan) chi tiết theo từng giai đoạn.",
      icon: <TrendingUp />
    },
    {
      title: "Performance Digital Ads",
      desc: "Triển khai quảng cáo đa kênh (Facebook, Google, TikTok, Zalo) với cam kết KPI rõ ràng về số lượng Lead/Doanh thu.",
      icon: <Megaphone />
    },
    {
      title: "SEO Tổng Thể",
      desc: "Đưa website lên Top Google bền vững với hàng ngàn từ khóa, phủ sóng thương hiệu và thu hút khách hàng tự nhiên.",
      icon: <Search />
    },
    {
      title: "Content Marketing",
      desc: "Sáng tạo nội dung 'chạm' đúng insight khách hàng. Kịch bản Video, bài viết PR, Blog website chuẩn SEO.",
      icon: <PenTool />
    },
    {
      title: "Xây Dựng Thương Hiệu",
      desc: "Thiết kế bộ nhận diện thương hiệu (Logo, Brand Identity), định vị slogan và câu chuyện truyền thông ấn tượng.",
      icon: <Shield />
    },
    {
      title: "Thiết Kế Web & Landing Page",
      desc: "Xây dựng 'cửa hàng online' chuẩn UI/UX, tối ưu tỷ lệ chuyển đổi và tốc độ tải trang cực nhanh.",
      icon: <Monitor />
    }
  ];

  const processSteps = [
    { step: "01", title: "Nghiên Cứu", desc: "Phân tích sản phẩm, khách hàng mục tiêu và đối thủ cạnh tranh." },
    { step: "02", title: "Lập Kế Hoạch", desc: "Xây dựng Master Plan chi tiết ngân sách, kênh triển khai và KPI." },
    { step: "03", title: "Thực Thi", desc: "Triển khai đồng bộ các hạng mục Content, Ads, Design theo timeline." },
    { step: "04", title: "Tối Ưu & Báo Cáo", desc: "Theo dõi chỉ số Realtime, tối ưu hiệu quả và báo cáo minh bạch." }
  ];

  const usps = [
    { title: "Phòng Marketing Thuê Ngoài", desc: "Thay thế hoàn toàn nhân sự in-house với chuyên môn cao hơn và chi phí tối ưu hơn.", icon: <Users size={32} /> },
    { title: "Cam Kết KPI Rõ Ràng", desc: "Làm việc dựa trên con số. Cam kết doanh số, traffic, data khách hàng cụ thể trong hợp đồng.", icon: <BarChart size={32} /> },
    { title: "Báo Cáo Minh Bạch", desc: "Hệ thống báo cáo Realtime giúp khách hàng nắm bắt hiệu quả từng đồng chi phí bỏ ra.", icon: <Zap size={32} /> }
  ];

  const cta = {
    title: "Sẵn Sàng Bùng Nổ Doanh Số?",
    desc: "Đừng để đối thủ vượt mặt. Nhận tư vấn chiến lược Marketing Tổng Thể miễn phí ngay hôm nay.",
    buttonText: "Nhận Tư Vấn Ngay",
    link: "/lien-he"
  };

  return (
    <ModernServiceLayout
      serviceName="Marketing Tổng Thể"
      heroTitle={heroData.title}
      heroDescription={heroData.description}
      heroImage={heroData.image}
      breadcrumbs={breadcrumbs}
      conceptColors={{ main: "text-blue-600", bg: "bg-blue-100" }}
      conceptSection={conceptSection}
      serviceItems={serviceItems}
      processSteps={processSteps}
      usps={usps}
      cta={cta}
    />
  );
};

export default MarketingTongThe;
