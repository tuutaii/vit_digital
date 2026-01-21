import React from 'react';
import ModernServiceLayout from '../../components/ModernServiceLayout';
import { Facebook, Search, Video, Youtube, Target, BarChart, Smartphone, Globe, Zap, Shield, MousePointer, Layers } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import heroImg from '../../assets/hero_team.png'; // Reusing Home Hero image for consistency
import conceptImg from '../../assets/marketing_concept.png';

const QuangCao = () => {
  const { t } = useApp();

  // Data for the layout
  const heroData = {
    title: "Quảng Cáo Đa Kênh: Tối Ưu Chuyển Đổi - Bùng Nổ Doanh Số",
    description: "Tiếp cận đúng khách hàng, đúng thời điểm, trên đúng nền tảng để tối đa hóa lợi nhuận (ROAS). Biến chi phí quảng cáo thành khoản đầu tư sinh lời.",
    image: heroImg // Reusing Home image as requested
  };

  const breadcrumbs = [
    { label: "Dịch vụ", link: "/#services" },
    { label: "Quảng Cáo Đa Kênh", link: null }
  ];

  const conceptSection = {
    title: "Tại Sao Cần Quảng Cáo Đa Kênh Chuyên Nghiệp?",
    content: (
      <>
        <p className="mb-4">
          Trong kỷ nguyên số, khách hàng không chỉ xuất hiện ở một nơi. Họ tìm kiếm trên Google, lướt Facebook khi giải trí, xem review trên TikTok và xem video dài trên Youtube.
        </p>
        <p className="mb-4">
          Các thuật toán quảng cáo ngày càng phức tạp và đắt đỏ. Nếu chỉ "đốt tiền" vào một kênh mà không có chiến lược tối ưu, doanh nghiệp sẽ lãng phí ngân sách khổng lồ mà không thu lại hiệu quả.
        </p>
        <p>
          Chúng tôi giúp bạn kiểm soát từng đồng chi phí, bám đuổi khách hàng tiềm năng qua đa điểm chạm và tối ưu hóa tỷ lệ chuyển đổi (CR) trên toàn bộ hành trình mua hàng.
        </p>
      </>
    ),
    image: conceptImg // Reusing the high-quality concept image generated previously
  };

  const serviceItems = [
    {
      title: "Facebook & Instagram Ads",
      desc: "Tối ưu hóa phễu khách hàng (Funnel), A/B Testing liên tục các mẫu quảng cáo (Creative) để tìm ra công thức 'Winning Campaign'.",
      icon: <Facebook />
    },
    {
      title: "Google Search & Display",
      desc: "Tiếp cận khách hàng ngay khi họ phát sinh nhu cầu tìm kiếm (Intent). Bám đuổi (Re-marketing) với mạng hiển thị GDN rộng lớn.",
      icon: <Search />
    },
    {
      title: "TikTok Ads & Shop",
      desc: "Đón đầu xu hướng video ngắn. Chạy quảng cáo chuyển đổi trực tiếp ra đơn hàng trên TikTok Shop với chi phí CPM rẻ.",
      icon: <Smartphone />
    },
    {
      title: "Youtube Ads",
      desc: "Xây dựng độ phủ thương hiệu (Brand Awareness) mạnh mẽ qua các định dạng video: Skippable, Bumper Ads, Discovery.",
      icon: <Youtube />
    },
    {
      title: "Zalo Ads",
      desc: "Tiếp cận hơn 70 triệu người dùng Việt Nam. Kênh chăm sóc khách hàng (CSKH) và duy trì lòng trung thành cực tốt.",
      icon: <Zap />
    },
    {
      title: "Tracking & Analytics",
      desc: "Cài đặt Pixel, Conversion API chuẩn chỉnh. Đo lường chính xác nguồn doanh thu đến từ đâu để scale ngân sách hiệu quả.",
      icon: <BarChart />
    }
  ];

  const processSteps = [
    { step: "01", title: "Nghiên Cứu", desc: "Phân tích USP sản phẩm, chân dung khách hàng (Persona) và Spy Ads đối thủ." },
    { step: "02", title: "Đặt KPI", desc: "Thống nhất mục tiêu chiến dịch: Ngân sách, CPA (Cost Per Action), ROAS (Return On Ad Spend)." },
    { step: "03", title: "Sáng Tạo", desc: "Sản xuất Content, Hình ảnh, Video quảng cáo đánh trúng Insight khách hàng." },
    { step: "04", title: "Setup", desc: "Cấu hình chiến dịch, Target đối tượng chuyên sâu và thiết lập Tracking đo lường." },
    { step: "05", title: "Tối Ưu", desc: "Theo dõi Realtime, tắt nhóm kém hiệu quả, vít ngân sách (Scale) nhóm hiệu quả." },
    { step: "06", title: "Báo Cáo", desc: "Gửi báo cáo minh bạch hàng tuần/tháng và đề xuất kế hoạch cho giai đoạn tiếp theo." }
  ];

  const usps = [
    { title: "Minh Bạch Ngân Sách", desc: "Khách hàng nắm quyền truy cập tài khoản quảng cáo. Mọi chi phí đều có hóa đơn rõ ràng từ nền tảng.", icon: <Shield size={32} /> },
    { title: "Tối Ưu Chuyển Đổi", desc: "Không chỉ chạy ra traffic, chúng tôi tập trung tối ưu hành động mua hàng/đăng ký của người dùng.", icon: <MousePointer size={32} /> },
    { title: "Đa Kênh Tích Hợp", desc: "Kết hợp sức mạnh của các nền tảng để tạo ra ma trận quảng cáo bao vây khách hàng.", icon: <Layers size={32} /> }
  ];

  const cta = {
    title: "Đừng Lãng Phí Ngân Sách Marketing Nữa!",
    desc: "Để chúng tôi giúp bạn tối ưu từng đồng quảng cáo và bùng nổ doanh số ngay hôm nay.",
    buttonText: "Nhận Báo Giá Quảng Cáo",
    link: "/bao-gia"
  };

  return (
    <ModernServiceLayout
      serviceName="Quảng Cáo Đa Kênh"
      heroTitle={heroData.title}
      heroDescription={heroData.description}
      heroImage={heroData.image}
      breadcrumbs={breadcrumbs}
      conceptColors={{ main: "text-orange-600", bg: "bg-orange-100" }} // Orange accent for Ads/Performance vibe
      conceptSection={conceptSection}
      serviceItems={serviceItems}
      processSteps={processSteps}
      usps={usps}
      cta={cta}
    />
  );
};

export default QuangCao;
