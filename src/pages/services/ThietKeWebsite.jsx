import React from 'react';
import ModernServiceLayout from '../../components/ModernServiceLayout';
import { Layout, Monitor, Smartphone, Code, Search, Shield, Zap, ShoppingCart, Globe, Server, Database, Cloud, Layers, CheckCircle, PenTool, Coffee, Rocket } from 'lucide-react';
import { useApp } from '../../context/AppContext';

// Local Assets Imports
import heroBg from '../../assets/web_ds_1.jpg';
import conceptImg from '../../assets/web_ds_1.jpg'; // Reusing web_ds_1 for Concept as requested "mockup website đẹp"
import processImg from '../../assets/web_ds_2.jpeg'; // For Process Interruption
import showcaseImg from '../../assets/web_ds_3.jpg'; // For Showcase
import reactIcon from '../../assets/react.svg';

const ThietKeWebsite = () => {
  const { t } = useApp();

  const heroData = {
    title: "Thiết Kế Website Đỉnh Cao: Kiến Tạo Nền Tảng Số Cho Tương Lai",
    description: "Biến ý tưởng thành sản phẩm số ấn tượng, tối ưu trải nghiệm và hiệu quả kinh doanh. Chúng tôi không chỉ thiết kế web, chúng tôi xây dựng cỗ máy bán hàng online.",
    image: heroBg
  };

  const breadcrumbs = [
    { label: "Dịch vụ", link: "/#services" },
    { label: "Thiết Kế Website", link: null }
  ];

  const conceptSection = {
    title: "Tầm Quan Trọng Của Website Chuyên Nghiệp",
    content: (
      <>
        <p className="mb-4">
          Trong kỷ nguyên số, Website chính là trụ sở Digital của doanh nghiệp. 80% khách hàng sẽ tìm kiếm thông tin về bạn trên Internet trước khi quyết định mua hàng.
        </p>
        <p className="mb-4">
          Một website chuyên nghiệp không chỉ nâng tầm Branding mà còn là công cụ SEO, Marketing và Sales tự động hiệu quả nhất. Đừng để đối thủ vượt mặt chỉ vì Website của bạn tải chậm hay giao diện lỗi thời.
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-cyan-600" /> <strong>Branding:</strong> Khẳng định vị thế thương hiệu.</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-cyan-600" /> <strong>SEO Traffic:</strong> Thu hút khách hàng tiềm năng 0đ.</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-cyan-600" /> <strong>Sales 24/7:</strong> Bán hàng ngay cả khi bạn ngủ.</li>
        </ul>
      </>
    ),
    image: conceptImg
  };

  const serviceItems = [
    {
      title: "Web Doanh Nghiệp (Corporate)",
      desc: "Thiết kế trang giới thiệu công ty chuyên nghiệp, thể hiện tầm vóc và văn hóa doanh nghiệp.",
      icon: <Layout />
    },
    {
      title: "Web Bán Hàng (E-commerce)",
      desc: "Hệ thống thương mại điện tử trọn gói: Quản lý sản phẩm, giỏ hàng, thanh toán online, vận chuyển.",
      icon: <ShoppingCart />
    },
    {
      title: "Landing Page Chuyển Đổi",
      desc: "Trang đích (Landing Page) được thiết kế đặc biệt để chạy quảng cáo, tối ưu UI/UX để kích thích mua hàng.",
      icon: <Monitor />
    },
    {
      title: "Web Tin Tức / Blog",
      desc: "Tòa soạn báo điện tử hoặc Blog cá nhân với CMS mạnh mẽ, hỗ trợ hàng triệu traffic.",
      icon: <Globe />
    },
    {
      title: "Web App / SaaS",
      desc: "Xây dựng ứng dụng web phức tạp, quản lý dữ liệu, CRM, Dashboard quản trị.",
      icon: <Database />
    },
    {
      title: "Bảo Trì & Nâng Cấp",
      desc: "Dịch vụ chăm sóc website định kỳ: Backup dữ liệu, quét mã độc, fix lỗi và update tính năng.",
      icon: <Server />
    }
  ];

  const usps = [
    { title: "Tốc Độ Tải < 3s", desc: "Tối ưu Code, Caching, CDN và nén ảnh để Website đạt tốc độ bàn thờ, giữ chân khách hàng.", icon: <Zap size={32} /> },
    { title: "Chuẩn SEO 100%", desc: "Cấu trúc HTML Semantic, Schema Markup, Sitemap tự động giúp Google yêu thích Website của bạn.", icon: <Search size={32} /> },
    { title: "Bảo Mật Cao Cấp", desc: "Chống DDoS, SQL Injection, XSS. Backup dữ liệu hàng ngày an toàn tuyệt đối.", icon: <Shield size={32} /> }
  ];

  const cta = {
    title: "Bạn Đã Sẵn Sàng Sở Hữu Website Trong Mơ?",
    desc: "Đội ngũ chuyên gia của VIT DIGITAL đang chờ để hiện thực hóa ý tưởng của bạn.",
    buttonText: "Yêu Cầu Tư Vấn Thiết Kế",
    link: "/lien-he"
  };

  const technologies = [
    { name: "ReactJS", icon: reactIcon },
    { name: "NextJS", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "NodeJS", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "TailwindCSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "WordPress", icon: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }
  ];

  return (
    <ModernServiceLayout
      serviceName="Thiết Kế Website"
      heroTitle={heroData.title}
      heroDescription={heroData.description}
      heroImage={heroData.image}
      breadcrumbs={breadcrumbs}
      conceptColors={{ main: "text-cyan-600", bg: "bg-cyan-100" }}
      conceptSection={conceptSection}
      serviceItems={serviceItems}
      processSteps={[]} // Disable standard process to use custom one
      usps={usps}
      cta={cta}
    >
      {/* === CUSTOM PROCESS SECTION === */}
      <section className="py-20 bg-white dark:bg-[#020c1b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Quy Trình Thiết Kế Toàn Diện</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              6 Bước chuyên nghiệp để tạo ra một siêu phẩm số.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 dark:bg-[#112240] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-600"><Coffee size={64} /></div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><span className="text-cyan-600">01.</span> Thấu Hiểu</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gặp gỡ, lắng nghe ý tưởng, phân tích nhu cầu và tư vấn giải pháp phù hợp nhất.</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#112240] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-600"><PenTool size={64} /></div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><span className="text-cyan-600">02.</span> Wireframe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phác thảo bố cục (Layout), luồng người dùng (User Flow) để thống nhất cấu trúc.</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#112240] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-600"><Layout size={64} /></div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><span className="text-cyan-600">03.</span> UI Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Thiết kế giao diện chi tiết (Visual Design), phối màu, typography theo Brand Guideline.</p>
            </div>
          </div>

          {/* BREAKING CONTENT WITH IMAGE */}
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-16 relative group">
            <img src={processImg} alt="Coding Process" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white uppercase tracking-widest text-center">Chuyển Giao Từ <br />Thiết Kế Sang Lập Trình</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-[#112240] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-600"><Code size={64} /></div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><span className="text-cyan-600">04.</span> Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Lập trình Frontend & Backend. Tối ưu hiệu suất, bảo mật và Responsive.</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#112240] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-600"><CheckCircle size={64} /></div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><span className="text-cyan-600">05.</span> Testing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kiểm thử toàn diện tính năng, tốc độ, bảo mật trên đa thiết bị và trình duyệt.</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#112240] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-cyan-600"><Rocket size={64} /></div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><span className="text-cyan-600">06.</span> Go Live</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Bàn giao mã nguồn, tài liệu hướng dẫn và deploy website chính thức.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === SHOWCASE SECTION === */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a192f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-cyan-600 font-bold uppercase tracking-wider mb-2 block">Portfolio Highlight</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Năng Lực Thiết Kế & Công Nghệ</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                Chúng tôi tự hào đã kiến tạo nên những sản phẩm số chất lượng, giúp khách hàng bứt phá doanh thu. Dù bạn cần một Landing Page đơn giản hay một hệ thống E-commerce phức tạp, VIT DIGITAL đều có giải pháp.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Công Nghệ Sử Dụng:</h4>
                <div className="flex flex-wrap gap-4">
                  {technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white dark:bg-[#112240] px-4 py-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] border-4 border-white dark:border-[#112240] transform hover:rotate-1 transition-transform duration-500">
                <img src={showcaseImg} alt="Website Showcase" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModernServiceLayout>
  );
};

export default ThietKeWebsite;
