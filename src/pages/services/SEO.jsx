import React from 'react';
import ModernServiceLayout from '../../components/ModernServiceLayout';
import { Search, BarChart, Globe, FileText, Link, Shield, MapPin, Settings, TrendingUp, Anchor, Layout } from 'lucide-react';
import heroImg from '../../assets/hero_team.png';
import conceptImg from '../../assets/marketing_concept.png';



const SEO = () => {
  const heroData = {
    title: "Dịch Vụ SEO Tổng Thể: Thống Trị Top Google Bền Vững",
    description: "Đưa website của bạn lên trang nhất Google với hàng nghìn từ khóa. Tăng trưởng Traffic tự nhiên (Organic), tiếp cận đúng khách hàng đang có nhu cầu.",
    image: heroImg
  };

  const breadcrumbs = [
    { label: "Dịch vụ", link: "/#services" },
    { label: "SEO Tổng Thể", link: null }
  ];

  const conceptSection = {
    title: "SEO Tổng Thể: Đầu Tư Dài Hạn - Lợi Ích Trọn Đời",
    content: (
      <>
        <p className="mb-4">
          Khác với quảng cáo (Ads) là "thuê nhà", SEO là "mua nhà". Bạn đầu tư xây dựng website mạnh mẽ một lần, và nó sẽ mang lại dòng khách hàng miễn phí mãi mãi.
        </p>
        <p className="mb-4">
          SEO Tổng Thể (Holistic SEO) không chỉ chăm chăm vào vài từ khóa chính. Chúng tôi phủ sóng toàn bộ từ khóa ngách liên quan đến nhu cầu khách hàng, giúp bạn chiếm lĩnh thị phần tìm kiếm toàn diện.
        </p>
      </>
    ),
    image: conceptImg
  };

  const serviceItems = [
    {
      title: "SEO Audit (Khám Bệnh)",
      desc: "Rà soát toàn bộ website hiện tại, phát hiện lỗi kỹ thuật (Technical), nội dung (Content) và đưa ra phương án xử lý.",
      icon: <Settings />
    },
    {
      title: "SEO Onpage",
      desc: "Tối ưu hóa từng trang đích: Tiêu đề, Meta description, Heading, tốc độ tải trang, Mobile friendly.",
      icon: <Layout />
    },
    {
      title: "Content SEO",
      desc: "Sáng tạo nội dung hữu ích, chuyên sâu, thỏa mãn ý định tìm kiếm (Search Intent) của người dùng và giữ chân họ lâu hơn.",
      icon: <FileText />
    },
    {
      title: "SEO Offpage (Backlink)",
      desc: "Xây dựng hệ thống liên kết (Backlink) chất lượng cao từ các báo lớn, site vệ tinh uy tín để tăng độ Trust cho website.",
      icon: <Link />
    },
    {
      title: "SEO Google Maps",
      desc: "Tối ưu hiển thị doanh nghiệp trên Google Maps (Local SEO), thu hút khách hàng ở gần địa điểm kinh doanh của bạn.",
      icon: <MapPin />
    },
    {
      title: "Entity Building",
      desc: "Xác thực thực thể doanh nghiệp trên Internet (Social, Wiki...) giúp Google hiểu rõ: Bạn là ai? Uy tín thế nào?",
      icon: <Shield />
    }
  ];

  const processSteps = [
    { step: "01", title: "Nghiên Cứu", desc: "Phân tích từ khóa (Keyword Research) và đối thủ để lập bộ từ khóa mục tiêu." },
    { step: "02", title: "Lập Kế Hoạch", desc: "Xây dựng lộ trình SEO chi tiết theo tháng (Timeline) và cam kết KPI." },
    { step: "03", title: "Tối Ưu Onpage", desc: "Chỉnh sửa cấu trúc web, tối ưu mã nguồn và sản xuất nội dung nền tảng." },
    { step: "04", title: "Content & Link", desc: "Triển khai viết bài đều đặn và đi backlink an toàn theo mô hình Link Wheel." },
    { step: "05", title: "Duy Trì", desc: "Theo dõi thứ hạng, update theo thuật toán mới của Google để giữ Top bền vững." }
  ];

  const usps = [
    { title: "SEO Mũ Trắng (White Hat)", desc: "Tuân thủ tuyệt đối luật chơi của Google. Nói không với chiêu trò Spam, đảm bảo web an toàn 100%.", icon: <Shield size={32} /> },
    { title: "Bền Vững", desc: "Từ khóa lên Top ổn định, không bị rớt hạng đột ngột khi Google cập nhật thuật toán.", icon: <Anchor size={32} /> },
    { title: "Chuyển Đổi Cao", desc: "Chúng tôi SEO từ khóa chốt sale, mang lại khách hàng thực sự chứ không chỉ là con số Traffic ảo.", icon: <TrendingUp size={32} /> }
  ];

  const cta = {
    title: "Đưa Website Lên Top 1 Google Ngay",
    desc: "Khách hàng đang tìm kiếm bạn. Đừng để họ rơi vào tay đối thủ chỉ vì bạn chưa làm SEO.",
    buttonText: "Nhận Kế Hoạch SEO Miễn Phí",
    link: "/bao-gia"
  };

  return (
    <ModernServiceLayout
      serviceName="Dịch Vụ SEO Tổng Thể"
      heroTitle={heroData.title}
      heroDescription={heroData.description}
      heroImage={heroData.image}
      breadcrumbs={breadcrumbs}
      conceptColors={{ main: "text-green-600", bg: "bg-green-100" }} // Growth/Green vibe
      conceptSection={conceptSection}
      serviceItems={serviceItems}
      processSteps={processSteps}
      usps={usps}
      cta={cta}
    />
  );
};

export default SEO;
