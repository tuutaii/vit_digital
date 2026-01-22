import React from 'react';
import ModernServiceLayout from '../../components/ModernServiceLayout';
import { Video, Mic, Radio, Cast, Calendar, MessageSquare, Users, Tv, Settings, FileText, ShoppingCart } from 'lucide-react';
import heroImg from '../../assets/hero_team.png';
import conceptImg from '../../assets/marketing_concept.png';



const Livestream = () => {
  const heroData = {
    title: "Dịch Vụ Livestream Chuyên Nghiệp: Tương Tác Thật - Đơn Hàng Thật",
    description: "Giải pháp Livestream bán hàng (Live Com) và Livestream sự kiện trọn gói. Hình ảnh sắc nét, âm thanh sống động, kịch bản chốt đơn đỉnh cao.",
    image: heroImg
  };

  const breadcrumbs = [
    { label: "Dịch vụ", link: "/#services" },
    { label: "Livestream", link: null }
  ];

  const conceptSection = {
    title: "Livestream: Vũ Khí Chốt Đơn Thời Gian Thực",
    content: (
      <>
        <p className="mb-4">
          Khách hàng ngày nay muốn "thấy tận mắt, hỏi tận nơi" trước khi mua hàng. Livestream giải quyết điều đó bằng cách mang trải nghiệm mua sắm tại cửa hàng lên môi trường online.
        </p>
        <p>
          Không chỉ là bán hàng, Livestream còn là kênh tương tác trực tiếp mạnh mẽ nhất để xây dựng lòng tin, sự yêu mến và cộng đồng khách hàng trung thành cho thương hiệu.
        </p>
      </>
    ),
    image: conceptImg
  };

  const serviceItems = [
    {
      title: "Livestream Bán Hàng",
      desc: "Live Shopee, TikTok, Facebook. Setup bối cảnh phòng Live đẹp, ánh sáng chuyên nghiệp và hỗ trợ phần mềm chốt đơn tự động.",
      icon: <ShoppingCart />
    },
    {
      title: "Livestream Sự Kiện (Event)",
      desc: "Cầu truyền hình trực tiếp hội thảo, lễ ra mắt sản phẩm, Talkshow với hệ thống 4-5 Camera quay phim điện ảnh.",
      icon: <Calendar />
    },
    {
      title: "Cho Thuê Phòng Live Studio",
      desc: "Hệ thống Studio có sẵn phông nền (Green key hoặc Decor thật), cách âm tiêu chuẩn, dàn đèn và PC cấu hình cao.",
      icon: <Mic />
    },
    {
      title: "Cung Cấp KOC/Host Live",
      desc: "Booking MC, Mẫu Livestream (Streamer) ngoại hình sáng, hoạt ngôn, có kinh nghiệm chốt đơn ngành hàng của bạn.",
      icon: <Users />
    },
    {
      title: "Kịch Bản Livestream",
      desc: "Biên tập kịch bản chi tiết: Timeline lên deal, minigame giữ chân mắt xem và các câu thoại 'key' để kích cầu.",
      icon: <FileText />
    },
    {
      title: "Setup Hệ Thống Live Tại Chỗ",
      desc: "Tư vấn thiết kế, lắp đặt trọn gói phòng Livestream tại văn phòng/kho hàng của doanh nghiệp.",
      icon: <Settings />
    }
  ];

  const processSteps = [
    { step: "01", title: "Nhận Brief", desc: "Xác định mục tiêu buổi Live (Bán hàng hay Branding), đối tượng xem và nền tảng." },
    { step: "02", title: "Lên Kịch Bản", desc: "Xây dựng kịch bản chương trình, chuẩn bị Deal sốc, Minigame và đạo cụ." },
    { step: "03", title: "Setup", desc: "Test thiết bị, âm thanh, ánh sáng, đường truyền mạng và tổng duyệt (Rehearsal)." },
    { step: "04", title: "On Air", desc: "Tiến hành Livestream chính thức. Đội ngũ kỹ thuật trực chiến xử lý mọi tình huống." },
    { step: "05", title: "Báo Cáo", desc: "Thống kê mắt xem (CCU), tương tác, đơn hàng và rút kinh nghiệm cho số sau." }
  ];

  const usps = [
    { title: "Thiết Bị 4K", desc: "Sử dụng Camera Sony/Blackmagic chuẩn điện ảnh, cho hình ảnh sắc nét, mịn màng, tôn sản phẩm.", icon: <Tv size={32} /> },
    { title: "Đường Truyền Ổn Định", desc: "Sử dụng thiết bị mạng chuyên dụng và đường truyền Backup 4G/5G, đảm bảo không giật lag.", icon: <Cast size={32} /> },
    { title: "Vận Hành Trơn Tru", desc: "Đội ngũ kỹ thuật, trợ lý, MC phối hợp nhịp nhàng, xử lý sự cố phát sinh trong tích tắc.", icon: <Radio size={32} /> }
  ];

  const cta = {
    title: "Sẵn Sàng Lên Sóng, Bão Đơn Về?",
    desc: "Đừng Livestream bằng điện thoại mờ nhòe nữa. Nâng cấp chất lượng Live ngay hôm nay.",
    buttonText: "Đặt Lịch Livestream",
    link: "/lien-he"
  };

  return (
    <ModernServiceLayout
      serviceName="Dịch Vụ Livestream"
      heroTitle={heroData.title}
      heroDescription={heroData.description}
      heroImage={heroData.image}
      breadcrumbs={breadcrumbs}
      conceptColors={{ main: "text-red-600", bg: "bg-red-100" }} // Live/Red vibe
      conceptSection={conceptSection}
      serviceItems={serviceItems}
      processSteps={processSteps}
      usps={usps}
      cta={cta}
    />
  );
};

export default Livestream;
