import React from 'react';
import ModernServiceLayout from '../../components/ModernServiceLayout';
import { Compass, Users, Map, BarChart, Target, Layers, FileText, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import heroImg from '../../assets/hero_team.png'; // Reusing consistency
import conceptImg from '../../assets/marketing_concept.png';

const ChienLuocMarketing = () => {
  // Data for the layout
  const heroData = {
    title: "Tư Vấn Chiến Lược: Bản Thiết Kế Cho Sự Tăng Trưởng Đột Phá",
    description: "Chúng tôi giúp doanh nghiệp nhìn ra bức tranh tổng thể, xác định đúng mục tiêu và xây dựng lộ trình thực thi hiệu quả nhất để chiếm lĩnh thị trường.",
    image: heroImg
  };

  const breadcrumbs = [
    { label: "Dịch vụ", link: "/#services" },
    { label: "Tư Vấn Chiến Lược", link: null }
  ];

  const conceptSection = {
    title: "Chiến Lược Marketing Là Gì?",
    content: (
      <>
        <p className="mb-4">
          Nhiều doanh nghiệp lầm tưởng "chạy quảng cáo" chính là làm Marketing. Tuy nhiên, quảng cáo chỉ là công cụ. <strong>Chiến lược</strong> mới là tư duy dẫn đường.
        </p>
        <p className="mb-4">
          Làm Marketing không có chiến lược giống như đi biển mà không có la bàn. Bạn có thể tiêu tốn rất nhiều ngân sách cho Facebook, Google nhưng không biết đích đến là đâu và tại sao khách hàng lại rời bỏ bạn.
        </p>
        <p>
          VIT DIGITAL giúp bạn thấu hiểu sâu sắc thị trường, đối thủ và chính nội tại doanh nghiệp để đưa ra những quyết định sắc bén, tránh lãng phí nguồn lực.
        </p>
      </>
    ),
    image: conceptImg // Reusing consistency
  };

  const serviceItems = [
    {
      title: "Nghiên Cứu Thị Trường",
      desc: "Phân tích quy mô thị trường (Market Size), xu hướng tiêu dùng (Trends) và phân tích đối thủ cạnh tranh (SWOT) để tìm ra 'khoảng trống' cơ hội.",
      icon: <Map />
    },
    {
      title: "Định Vị Thương Hiệu (Brand Positioning)",
      desc: "Xây dựng USP (Unique Selling Point) độc nhất. Định hình tính cách thương hiệu và thông điệp cốt lõi để khắc sâu vào tâm trí khách hàng.",
      icon: <Target />
    },
    {
      title: "Chân Dung Khách Hàng (Persona)",
      desc: "Vẽ ra chân dung khách hàng mục tiêu chi tiết: Họ là ai? Họ ở đâu? Nỗi đau (Pain point) của họ là gì? Hành vi mua hàng ra sao?",
      icon: <Users />
    },
    {
      title: "Chiến Lược Đa Kênh (Channel Strategy)",
      desc: "Lựa chọn kênh truyền thông phù hợp nhất (Facebook, TikTok, SEO, PR...) dựa trên hành vi khách hàng và ngân sách doanh nghiệp.",
      icon: <Layers />
    },
    {
      title: "Phễu Chuyển Đổi (Sales Funnel)",
      desc: "Thiết kế hành trình khách hàng (Customer Journey) từ lúc Nhận biết -> Quan tâm -> Cân nhắc -> Mua hàng -> Trung thành.",
      icon: <TrendingUp />
    },
    {
      title: "Hệ Thống KPI & Đo Lường",
      desc: "Thiết lập hệ thống chỉ số đo lường hiệu quả (Metrics) rõ ràng cho từng giai đoạn. Không nói cảm tính, chỉ nói chuyện bằng số liệu.",
      icon: <BarChart />
    }
  ];

  const processSteps = [
    { step: "01", title: "Khảo Sát", desc: "Tiếp nhận brief, phỏng vấn lãnh đạo và khảo sát hiện trạng doanh nghiệp." },
    { step: "02", title: "Phân Tích", desc: "Nghiên cứu thị trường, đối thủ và dữ liệu nội bộ để tìm ra Insight." },
    { step: "03", title: "Chiến Lược", desc: "Đề xuất bản chiến lược tổng thể (Master Plan) và kế hoạch hành động." },
    { step: "04", title: "Triển Khai", desc: "Hướng dẫn đội ngũ in-house execute hoặc VIT DIGITAL trực tiếp triển khai." },
    { step: "05", title: "Tối Ưu", desc: "Theo dõi, đánh giá hiệu quả định kỳ và tinh chỉnh chiến lược sát thực tế." }
  ];

  const usps = [
    { title: "Tính Thực Thi Cao", desc: "Chiến lược không nằm trên giấy. Chúng tôi đưa ra kế hoạch hành động cụ thể (Action Plan) có thể triển khai ngay lập tức.", icon: <CheckCircle size={32} /> },
    { title: "Bảo Mật Dữ Liệu", desc: "Cam kết bảo mật tuyệt đối mọi thông tin kinh doanh, dữ liệu khách hàng và chiến lược của đối tác.", icon: <Shield size={32} /> },
    { title: "Đồng Hành Dài Hạn", desc: "Không chỉ tư vấn một lần, chúng tôi đồng hành giám sát và điều chỉnh chiến lược theo biến động thị trường.", icon: <Compass size={32} /> }
  ];

  const cta = {
    title: "Bạn Cần Một Bản Đồ Tăng Trưởng?",
    desc: "Đừng để doanh nghiệp đi lạc hướng. Đặt lịch tư vấn 1:1 với chuyên gia chiến lược của chúng tôi ngay hôm nay.",
    buttonText: "Đăng Ký Tư Vấn Chuyên Gia",
    link: "/lien-he"
  };

  return (
    <ModernServiceLayout
      serviceName="Tư Vấn Chiến Lược"
      heroTitle={heroData.title}
      heroDescription={heroData.description}
      heroImage={heroData.image}
      breadcrumbs={breadcrumbs}
      conceptColors={{ main: "text-indigo-900", bg: "bg-indigo-100" }} // Navy accent
      conceptSection={conceptSection}
      serviceItems={serviceItems}
      processSteps={processSteps}
      usps={usps}
      cta={cta}
    />
  );
};

export default ChienLuocMarketing;
