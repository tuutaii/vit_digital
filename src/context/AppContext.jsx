import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState('dark'); // Default to dark as per original design
  
  // Language state (default 'vi')
  const [language, setLanguage] = useState('vi');

  // Translations
  const translations = {
    en: {
      services: 'Services',
      projects: 'Projects',
      news: 'News',
      contact: 'Contact',
      quote: 'Quote',
      getStarted: 'Consult Now',
      companyName: 'VIT DIGITAL TRADING SERVICE CO., LTD',
      // Contact Section
      getInTouch: 'Get in Touch',
      startProject: "Let's Start a Project Together",
      contactDesc: 'Ready to take your digital presence to the next level? Contact us today for a free consultation.',
      ourOffice: 'Our Office',
      phone: 'Phone',
      email: 'Email',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      subject: 'Service',
      selectSubject: 'Select a service',
      phoneNumber: 'Phone Number',
      jobTitle: 'Job Title',
      selectJobTitle: 'Select your role',
      message: 'Message',
      sendMessage: 'Send Message',

      messageSent: 'Thank you! Your message has been sent.',
      phName: 'John Doe',
      phEmail: 'john@example.com',
      phPhone: '0912 345 678',
      phMessage: 'Tell us about your project...',
      // Footer
      quickLinks: 'Quick Links',
      aboutUs: 'About Us',
      careers: 'Careers',
      // Services Section Summary
      whatWeDo: 'What We Do',
      premiumServices: 'Our Premium Services',
      // Service Page Template
      heroBtnProcess: 'View Process',
      painPointsTitle: 'Are you facing these issues?',
      painPointsDesc: "Don't let these barriers hold your business back.",
      solutionsTitle: 'Our Solutions',
      solutionsDesc: 'Comprehensive optimization strategies to help you break through.',
      processTitle: 'Working Process',
      processDesc: 'Transparent, clear, and effective.',
      whyChooseUs: 'Why Choose VIT DIGITAL?',
      realResults: 'Real Results',
      realResultsDesc: 'Clear KPI commitment, transparent 24/7 reporting.',
      expertTeam: 'Expert Team',
      expertTeamDesc: 'Personnel with >5 years of practical multi-industry experience.',
      speedFlexibility: 'Speed & Flexibility',
      speedFlexibilityDesc: 'Rapid deployment, continuous optimization according to the market.',
      supportHotline: 'Support Hotline 24/7',
      // Footer/General
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      subscribeNewsletter: 'Subscribe to our newsletter for the latest updates.',
    },
    vi: {
      services: 'Dịch vụ',
      projects: 'Dự án',
      news: 'Tin tức',
      contact: 'Liên hệ',
      quote: 'Báo giá',
      getStarted: 'Tư vấn ngay',
      companyName: 'CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VIT DIGITAL',
      // Contact Section
      getInTouch: 'Liên hệ',
      startProject: 'Bắt đầu dự án cùng chúng tôi',
      contactDesc: 'Sẵn sàng nâng tầm sự hiện diện số của bạn? Liên hệ ngay hôm nay để được tư vấn miễn phí.',
      ourOffice: 'Văn phòng',
      phone: 'Điện thoại',
      email: 'Email',
      fullName: 'Họ và tên',
      emailAddress: 'Địa chỉ Email',
      subject: 'Dịch vụ cần tư vấn',
      selectSubject: 'Chọn dịch vụ',
      phoneNumber: 'Số điện thoại',
      jobTitle: 'Nghề nghiệp/Chức vụ',
      selectJobTitle: 'Chọn chức vụ của bạn',
      message: 'Nội dung',
      sendMessage: 'Gửi tin nhắn',

      messageSent: 'Cảm ơn! Tin nhắn của bạn đã được gửi.',
      phName: 'Nguyễn Văn A',
      phEmail: 'email@example.com',
      phPhone: '0912 345 678',
      phMessage: 'Hãy chia sẻ về dự án của bạn...',
      // Footer
      quickLinks: 'Liên kết nhanh',
      aboutUs: 'Về chúng tôi',
      careers: 'Tuyển dụng',
      // Services Section Summary
      whatWeDo: 'Chúng tôi làm gì',
      premiumServices: 'Dịch vụ cao cấp',
      // Service Page Template
      heroBtnProcess: 'Xem quy trình',
      painPointsTitle: 'Bạn đang gặp vấn đề?',
      painPointsDesc: 'Đừng để những rào cản này kìm hãm sự phát triển của doanh nghiệp bạn.',
      solutionsTitle: 'Giải pháp của chúng tôi',
      solutionsDesc: 'Chiến lược tối ưu hóa toàn diện giúp bạn bứt phá.',
      processTitle: 'Quy trình làm việc',
      processDesc: 'Minh bạch, rõ ràng và hiệu quả.',
      whyChooseUs: 'Tại sao chọn VIT DIGITAL?',
      realResults: 'Hiệu quả thực tế',
      realResultsDesc: 'Cam kết KPI rõ ràng, báo cáo minh bạch 24/7.',
      expertTeam: 'Đội ngũ chuyên gia',
      expertTeamDesc: 'Nhân sự hơn 5 năm kinh nghiệm thực chiến đa ngành.',
      speedFlexibility: 'Tốc độ & Linh hoạt',
      speedFlexibilityDesc: 'Triển khai nhanh chóng, tối ưu liên tục theo thị trường.',
      supportHotline: 'Hotline hỗ trợ 24/7',
      // Footer/General
      privacyPolicy: 'Chính sách bảo mật',
      termsOfService: 'Điều khoản dịch vụ',
      subscribeNewsletter: 'Đăng ký nhận bản tin để cập nhật những tin tức mới nhất.',
    }
  };

  const t = (key) => translations[language][key] || key;

  // Handle Theme Change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, toggleLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
