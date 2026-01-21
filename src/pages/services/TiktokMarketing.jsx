import React from 'react';
import ModernServiceLayout from '../../components/ModernServiceLayout';
import { Smartphone, Video, ShoppingBag, Music, TrendingUp, Users, Heart, Zap, Award } from 'lucide-react';
import heroImg from '../../assets/hero_team.png';
import conceptImg from '../../assets/marketing_concept.png';

const TiktokMarketing = () => {
  const heroData = {
    title: "TikTok Marketing: Bắt Trọn Xu Hướng - Bùng Nổ Doanh Số",
    description: "Đưa thương hiệu của bạn tiếp cận hàng triệu khách hàng Gen Z và Millennial. Xây dựng kênh viral và tối ưu doanh thu trên TikTok Shop.",
    image: heroImg
  };

  const breadcrumbs = [
    { label: "Dịch vụ", link: "/#services" },
    { label: "TikTok Marketing", link: null }
  ];

  const conceptSection = {
    title: "Mỏ Vàng TikTok Đang Chờ Bạn Khai Thác",
    content: (
      <>
        <p className="mb-4">
          TikTok không chỉ là mạng xã hội giải trí, nó đã trở thành một nền tảng thương mại khổng lồ (Shoppertainment). Khách hàng không còn "đi mua sắm", họ được "truyền cảm hứng" để mua sắm ngay khi xem video.
        </p>
        <p className="mb-4">
          Video ngắn (Short-form video) là ngôn ngữ của thời đại mới. Nếu thương hiệu của bạn chưa xuất hiện trên TikTok với những nội dung sáng tạo, bạn đang bỏ lỡ một lượng traffic khổng lồ với chi phí tiếp cận rẻ nhất hiện nay.
        </p>
      </>
    ),
    image: conceptImg
  };

  const serviceItems = [
    {
      title: "Xây Dựng Kênh TikTok",
      desc: "Xây dựng Concept kênh, kịch bản nội dung xuyên suốt và sản xuất video chuẩn viral để thu hút Follower tự nhiên.",
      icon: <Smartphone />
    },
    {
      title: "TikTok Shop Full-stack",
      desc: "Setup gian hàng (Shop), đăng sản phẩm chuẩn SEO, vận hành đơn hàng và tối ưu chỉ số vận hành để đạt 'Shop Yêu Thích'.",
      icon: <ShoppingBag />
    },
    {
      title: "Booking KOC/KOLs",
      desc: "Kết nối với mạng lưới hàng trăm KOC/Reviewer uy tín. Triển khai chiến dịch Affiliate Marketing lan tỏa thương hiệu nhanh chóng.",
      icon: <Users />
    },
    {
      title: "TikTok Ads Chuyển Đổi",
      desc: "Chạy quảng cáo Video Shopping Ads, Livestream Ads nhắm đúng đối tượng mua hàng với ROAS (Lợi nhuận/Chi phí) tối ưu.",
      icon: <TrendingUp />
    },
    {
      title: "Quản Trị Livestream",
      desc: "Cung cấp giải pháp Livestream bán hàng chuyên nghiệp: Phòng Live, thiết bị, mẫu, kịch bản và kỹ thuật chốt đơn.",
      icon: <Video />
    },
    {
      title: "Tư Vấn Thương Hiệu Cá Nhân",
      desc: "Định hình phong cách cá nhân cho chủ doanh nghiệp/chuyên gia để trở thành Key Opinion Leader (KOL) trong ngành.",
      icon: <Award />
    }
  ];

  const processSteps = [
    { step: "01", title: "Concept", desc: "Nghiên cứu khách hàng và định hình phong cách kênh (Vui nhộn, Chuyên gia, Drama...)." },
    { step: "02", title: "Script", desc: "Lên kế hoạch nội dung chi tiết và viết kịch bản quay video hàng tuần." },
    { step: "03", title: "Production", desc: "Tổ chức quay dựng chuyên nghiệp với thiết bị hiện đại (Camera 4K, Lighting, Studio)." },
    { step: "04", title: "Publish", desc: "Đăng tải video chuẩn khung giờ vàng, tối ưu Hashtag và nhạc xu hướng (Trending Sound)." },
    { step: "05", title: "Ads & Shop", desc: "Vít quảng cáo và đẩy mạnh livestream để chuyển hóa view thành đơn hàng." }
  ];

  const usps = [
    { title: "Bắt Trend Thần Tốc", desc: "Đội ngũ Content Gen Z luôn cập nhật những xu hướng, âm nhạc và filter mới nhất để áp dụng vào kênh.", icon: <Music size={32} /> },
    { title: "Sản Xuất Chuyên Nghiệp", desc: "Không quay bằng điện thoại rung lắc. Chúng tôi có ekip quay dựng tiêu chuẩn TVC.", icon: <Video size={32} /> },
    { title: "Cam Kết View Thật", desc: "Nói không với tool buff ảo. Chúng tôi cam kết tăng trưởng Follow và View từ người dùng thật 100%.", icon: <Heart size={32} /> }
  ];

  const cta = {
    title: "Bạn Muốn Thương Hiệu Viral Trên TikTok?",
    desc: "Đừng đứng ngoài cuộc chơi Video ngắn. Hãy để chúng tôi biến thương hiệu của bạn thành 'Idol Tóp Tóp' ngay hôm nay.",
    buttonText: "Xây Kênh TikTok Ngay",
    link: "/lien-he"
  };

  return (
    <ModernServiceLayout
      serviceName="TikTok Marketing"
      heroTitle={heroData.title}
      heroDescription={heroData.description}
      heroImage={heroData.image}
      breadcrumbs={breadcrumbs}
      conceptColors={{ main: "text-pink-600", bg: "bg-pink-100" }} // TikTok vibe (Pink/Black/Cyan)
      conceptSection={conceptSection}
      serviceItems={serviceItems}
      processSteps={processSteps}
      usps={usps}
      cta={cta}
    />
  );
};

export default TiktokMarketing;
