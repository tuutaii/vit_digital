import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, HelpCircle, ArrowRight, Layout, BarChart, ShoppingBag, Video, Smartphone, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const packages = [
        {
            name: "Gói Startup",
            price: "15.000.000đ",
            period: "/tháng",
            description: "Dành cho doanh nghiệp mới, tập trung vào xây dựng hiện diện thương hiệu cơ bản chuyên nghiệp.",
            features: [
                "Quản trị Fanpage: 8 bài viết/tháng",
                "Thiết kế hình ảnh cơ bản",
                "Setup quảng cáo Facebook cơ bản",
                "Báo cáo hiệu quả hằng tháng",
                "Hỗ trợ qua Zalo Group"
            ],
            recommended: false,
            color: "blue"
        },
        {
            name: "Gói Growth",
            price: "35.000.000đ",
            period: "/tháng",
            description: "Gói phổ biến nhất. Tập trung tăng trưởng doanh số và mở rộng thị phần nhanh chóng.",
            features: [
                "Quản trị Fanpage & Website: 15 bài/tháng",
                "Thiết kế hình ảnh & Video ngắn cơ bản",
                "Quảng cáo đa kênh (FB, Google) nâng cao",
                "Tối ưu SEO cơ bản",
                "Seeding hội nhóm & Forum",
                "Báo cáo tuần & tháng chi tiết"
            ],
            recommended: true,
            color: "secondary"
        },
        {
            name: "Gói Enterprise",
            price: "Liên hệ",
            period: "",
            description: "Giải pháp toàn diện, may đo riêng cho các tập đoàn và doanh nghiệp lớn.",
            features: [
                "Chiến lược Marketing tổng thể đa kênh",
                "Sản xuất TVC, Video Viral chuyên nghiệp",
                "Booking KOLs/Influencers",
                "Tổ chức sự kiện & Kích hoạt thương hiệu",
                "Quản trị khủng hoảng truyền thông",
                "Đội ngũ in-house dedicated riêng"
            ],
            recommended: false,
            color: "purple"
        }
    ];

    const otherServices = [
        { name: "Quảng cáo FB/Google/TikTok", icon: <MegaphoneIcon />, desc: "Tối ưu chi phí chuyển đổi, target đúng đối tượng tiềm năng." },
        { name: "SEO Tổng Thể", icon: <SearchIcon />, desc: "Lên top bền vững, phủ sóng hàng ngàn từ khóa ngành." },
        { name: "Vận hành sàn TMĐT", icon: <ShoppingBag />, desc: "Shopee, Lazada, TikTok Shop. Tối ưu gian hàng & doanh số." },
        { name: "Livestream & TikTok Studio", icon: <Video />, desc: "Kịch bản, MC, setup phòng live chuyên nghiệp." },
        { name: "Thiết kế Website & App", icon: <Layout />, desc: "UI/UX hiện đại, chuẩn SEO, tốc độ cao." },
        { name: "Content Marketing", icon: <FileTextIcon />, desc: "Sáng tạo nội dung viral, chăm sóc fanpage/website." }
    ];

    const processSteps = [
        { step: "01", title: "Tiếp nhận yêu cầu", desc: "Lắng nghe nhu cầu và mục tiêu của doanh nghiệp." },
        { step: "02", title: "Khảo sát & Phân tích", desc: "Nghiên cứu thị trường, đối thủ và nội tại doanh nghiệp." },
        { step: "03", title: "Đề xuất giải pháp", desc: "Lên kế hoạch chi tiết và tối ưu ngân sách." },
        { step: "04", title: "Ký kết & Triển khai", desc: "Cam kết KPI và báo cáo minh bạch theo tiến độ." }
    ];

    const contextFAQs = [
        { question: "Chi phí có phát sinh trong quá trình triển khai không?", answer: "Chúng tôi cam kết chi phí trọn gói theo hợp đồng. Mọi chi phí phát sinh (nếu có, ví dụ tăng ngân sách quảng cáo theo yêu cầu) đều được thông báo và thống nhất bằng văn bản trước khi thực hiện." },
        { question: "ZMarketing có cam kết KPI không?", answer: "Có. Chúng tôi làm việc dựa trên số liệu thực tế. Các chỉ số KPI (Lượt tiếp cận, tương tác, chuyển đổi, doanh thu...) sẽ được cam kết rõ ràng trong hợp đồng dựa trên ngân sách và hiện trạng của doanh nghiệp." },
        { question: "Thời gian hợp đồng tối thiểu là bao lâu?", answer: "Để đảm bảo hiệu quả của các chiến dịch Marketing (đặc biệt là SEO hay Branding), chúng tôi khuyến nghị thời gian hợp đồng tối thiểu từ 3 - 6 tháng. Tuy nhiên, chúng tôi cũng có các gói dùng thử hoặc ngắn hạn tùy nhu cầu." },
        { question: "Tôi có thể thay đổi gói dịch vụ giữa chừng không?", answer: "Hoàn toàn có thể. Chúng tôi luôn linh hoạt điều chỉnh kế hoạch để phù hợp nhất với tình hình kinh doanh thực tế của khách hàng tại mỗi thời điểm." }
    ];

    return (
        <div className="bg-white dark:bg-[#020c1b] min-h-screen font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-[#0a192f] dark:to-[#020c1b]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-40"></div>
                     <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-40"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
                    >
                        Giải Pháp Tối Ưu – <span className="text-secondary">Chi Phí Hiệu Quả</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
                    >
                        Chúng tôi cung cấp các gói dịch vụ linh hoạt, được thiết kế riêng để phù hợp với ngân sách và mục tiêu tăng trưởng của từng doanh nghiệp.
                    </motion.p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {packages.map((pkg, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col p-8 rounded-2xl border ${pkg.recommended ? 'border-secondary shadow-[0_0_30px_rgba(100,255,218,0.15)] bg-white dark:bg-[#112240] scale-105 z-10' : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a192f]'} hover:shadow-2xl transition-all duration-300`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                        <span className="bg-gradient-to-r from-secondary to-accent text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Phổ biến nhất</span>
                                    </div>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 ${pkg.recommended ? 'text-secondary' : 'text-gray-900 dark:text-white'}`}>{pkg.name}</h3>
                                <div className="mb-4">
                                     <span className="text-4xl font-bold text-gray-900 dark:text-white">{pkg.price}</span>
                                     <span className="text-gray-500 dark:text-gray-400 text-sm">{pkg.period}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 min-h-[40px]">{pkg.description}</p>
                                
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                            <Check size={18} className="text-secondary shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    to="/lien-he" 
                                    className={`w-full py-3 rounded-lg font-bold text-center transition-all ${pkg.recommended ? 'bg-secondary text-dark hover:shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                                >
                                    Đăng ký ngay
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services Grid */}
            <section className="py-20 bg-gray-50 dark:bg-[#0a192f]/50">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Dịch Vụ Chi Tiết</h2>
                        <p className="text-gray-600 dark:text-gray-400">Các giải pháp đơn lẻ phục vụ nhu cầu chuyên biệt</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {otherServices.map((service, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-[#112240] p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all flex items-start gap-4"
                            >
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{service.name}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Quy Trình Làm Việc</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28%] left-[12%] right-[12%] h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>

                        {processSteps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center bg-white dark:bg-[#020c1b] p-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-dark font-bold text-2xl mb-6 shadow-lg">
                                    {step.step}
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{step.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-gray-900 to-[#112240] rounded-3xl p-8 md:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
                         
                         <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                            <div className="lg:w-1/3 text-white">
                                <h2 className="text-3xl font-bold mb-6">Liên Hệ Nhận Báo Giá</h2>
                                <p className="text-gray-300 mb-8">Điền thông tin vào form bên cạnh, chuyên gia của chúng tôi sẽ phân tích và gửi báo giá chi tiết phù hợp nhất cho bạn trong vòng 24h.</p>
                                <div className="space-y-4">
                                     <div className="flex items-center gap-3 text-gray-300">
                                         <Shield className="text-secondary" size={20} />
                                         <span>Bảo mật thông tin 100%</span>
                                     </div>
                                     <div className="flex items-center gap-3 text-gray-300">
                                         <Zap className="text-secondary" size={20} />
                                         <span>Phản hồi nhanh chóng</span>
                                     </div>
                                     <div className="flex items-center gap-3 text-gray-300">
                                         <Star className="text-secondary" size={20} />
                                         <span>Tư vấn miễn phí</span>
                                     </div>
                                </div>
                            </div>
                            
                            <div className="lg:w-2/3 bg-white dark:bg-[#0a192f] p-8 rounded-2xl shadow-lg">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Họ và tên</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary outline-none" placeholder="Nguyen Van A" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Số điện thoại</label>
                                            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary outline-none" placeholder="0909xxxxxx" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary outline-none" placeholder="email@company.com" />
                                        </div>
                                         <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Website/Fanpage</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary outline-none" placeholder="https://..." />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ngân sách dự kiến</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary outline-none">
                                            <option>Dưới 20 triệu</option>
                                            <option>20 - 50 triệu</option>
                                            <option>50 - 100 triệu</option>
                                            <option>Trên 100 triệu</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Dịch vụ quan tâm</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112240] text-gray-900 dark:text-white focus:border-secondary outline-none">
                                            <option>Marketing Tổng Thể</option>
                                            <option>SEO Tổng Thể</option>
                                            <option>Quảng cáo (Ads)</option>
                                            <option>Thiết kế Website</option>
                                            <option>Khác</option>
                                        </select>
                                    </div>
                                    <button className="w-full py-4 bg-secondary text-dark font-bold rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg mt-2">
                                        Gửi yêu cầu nhận báo giá (Miễn phí)
                                    </button>
                                </form>
                            </div>
                         </div>
                    </div>
                </div>
            </section>

             {/* FAQ */}
             <section className="py-20 bg-gray-50 dark:bg-[#0a192f]/50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Câu Hỏi Thường Gặp</h2>
                    </div>
                    <div className="space-y-4">
                        {contextFAQs.map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-[#112240] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                <button 
                                    className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    {openFaq === index ? <ChevronUp size={20} className="text-secondary" /> : <ChevronDown size={20} className="text-gray-500" />}
                                </button>
                                <motion.div 
                                    initial={false}
                                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper Icons
const MegaphoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const FileTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>;


export default Pricing;
