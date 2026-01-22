import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import SubHero from '../components/SubHero';

const newsData = [
  {
    id: 1,
    title: '5 Xu Hướng Marketing "Thống Trị" Năm 2024',
    excerpt: 'Khám phá những chiến lược Marketing mới đang làm mưa làm gió trên thị trường, từ AI Content đến Livestream tương tác.',
    date: '12/10/2025',
    author: 'Tuấn Tài',
    readTime: '8 phút đọc',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Chiến Lược',
    tags: ['AI', 'Video Marketing', 'Livestream', 'Trends 2024'],
    content: `
      <p>Năm 2024 đánh dấu sự chuyển mình mạnh mẽ của Digital Marketing với sự trỗi dậy của trí tuệ nhân tạo (AI) và các nền tảng video ngắn. Dưới đây là 5 xu hướng không thể bỏ qua nếu bạn muốn dẫn đầu thị trường.</p>
      
      <h2>1. AI Content - Trợ thủ đắc lực</h2>
      <p>Không thể phủ nhận sức mạnh của AI trong việc sản xuất nội dung. Từ ChatGPT đến Midjourney, các công cụ này giúp marketers tiết kiệm hàng ngàn giờ làm việc mỗi năm. Tuy nhiên, AI chỉ là công cụ hỗ trợ - yếu tố con người và sáng tạo vẫn là then chốt.</p>
      
      <h2>2. Short-form Video vẫn là vua</h2>
      <p>TikTok, Reels, và YouTube Shorts tiếp tục thống trị thời gian on-screen của người dùng. Các thương hiệu cần tập trung vào nội dung ngắn, súc tích và giải trí. Video dưới 60 giây có tỷ lệ tương tác cao gấp 3 lần so với video dài.</p>
      
      <h2>3. Livestream mua sắm (Shoppertainment)</h2>
      <p>Sự kết hợp giữa mua sắm và giải trí đang bùng nổ. Người xem không chỉ muốn mua hàng, họ muốn được giải trí trong quá trình đó. TikTok Shop và Facebook Live Shopping đang tạo ra doanh thu khổng lồ cho các thương hiệu.</p>
      
      <h2>4. Personalization ở mức độ cao</h2>
      <p>Khách hàng mong đợi trải nghiệm được cá nhân hóa. Từ email marketing đến quảng cáo, mọi thứ đều cần được tùy chỉnh dựa trên hành vi và sở thích của từng người dùng.</p>
      
      <h2>5. Sustainability Marketing</h2>
      <p>Người tiêu dùng ngày càng quan tâm đến trách nhiệm xã hội và môi trường của thương hiệu. Các chiến dịch marketing xanh, bền vững không chỉ là trend mà đã trở thành yêu cầu bắt buộc.</p>
    `
  },
  {
    id: 2,
    title: 'Bí Quyết SEO Lên Top 1 Google Trong 3 Tháng',
    excerpt: 'Hướng dẫn chi tiết quy trình SEO tổng thể "Mũ Trắng", an toàn và bền vững cho doanh nghiệp SMEs.',
    date: '28/09/2025',
    author: 'Minh Hạnh',
    readTime: '10 phút đọc',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    category: 'SEO',
    tags: ['SEO', 'Google', 'Organic Traffic', 'White Hat'],
    content: `
       <p>SEO không còn là cuộc chơi của spam link. Google ngày càng thông minh hơn và ưu tiên trải nghiệm người dùng. Dưới đây là quy trình SEO "Mũ Trắng" đã được kiểm chứng giúp hàng trăm website lên top Google.</p>
       
       <h2>Bước 1: Nghiên cứu từ khóa (Keyword Research)</h2>
       <p>Đừng chỉ target từ khóa có volume cao. Hãy tìm những từ khóa "long-tail" có ý định mua hàng cao (high buying intent). Sử dụng công cụ như Ahrefs, SEMrush hoặc Google Keyword Planner để phân tích độ khó và cơ hội.</p>
       
       <h2>Bước 2: Tối ưu E-E-A-T</h2>
       <p>Experience, Expertise, Authoritativeness, Trustworthiness - 4 yếu tố then chốt để Google đánh giá chất lượng website của bạn. Hãy đảm bảo nội dung được viết bởi chuyên gia, có nguồn trích dẫn uy tín và thông tin liên hệ rõ ràng.</p>
       
       <h2>Bước 3: Technical SEO</h2>
       <p>Đảm bảo website của bạn tải nhanh (dưới 3 giây), thân thiện với di động (mobile-friendly), có cấu trúc URL rõ ràng, sitemap.xml và robots.txt chuẩn. Sử dụng Google Search Console để phát hiện và sửa lỗi kỹ thuật.</p>
       
       <h2>Bước 4: Content is King</h2>
       <p>Viết nội dung chất lượng, giải quyết đúng vấn đề của người dùng. Độ dài tối thiểu 1500 từ cho bài viết blog, có hình ảnh minh họa, video nhúng và infographic. Cập nhật nội dung cũ định kỳ để giữ độ "tươi" của website.</p>
       
       <h2>Bước 5: Link Building tự nhiên</h2>
       <p>Xây dựng backlink chất lượng từ các website uy tín trong ngành. Tránh mua link spam hoặc tham gia các mạng lưới link farm. Guest posting, PR và tạo nội dung viral là cách tốt nhất để có backlink tự nhiên.</p>
    `
  },
  {
    id: 3,
    title: 'TikTok Shop: Mỏ Vàng Mới Cho Các Nhà Bán Lẻ',
    excerpt: 'Tại sao TikTok Shop lại có sức hút mãnh liệt đến vậy? Cách tối ưu vận hành để đạt doanh thu ngàn đơn.',
    date: '15/09/2025',
    author: 'Hoàng Nam',
    readTime: '7 phút đọc',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    category: 'TikTok',
    tags: ['TikTok Shop', 'E-commerce', 'Social Commerce', 'Livestream'],
    content: `
       <p>TikTok Shop đang thay đổi hành vi mua sắm của người dùng tại Việt Nam. Với hơn 50 triệu người dùng hoạt động hàng tháng, đây là cơ hội vàng cho các nhà bán lẻ.</p>
       
       <h2>Tại sao TikTok Shop lại "hot" đến vậy?</h2>
       <p>Khác với các sàn TMĐT truyền thống, TikTok Shop tích hợp mua sắm ngay trong trải nghiệm giải trí. Người dùng xem video → thích sản phẩm → mua ngay không cần rời app. Tỷ lệ chuyển đổi cao gấp 5 lần so với Facebook Shop.</p>
       
       <h2>Mô hình Affiliate Marketing</h2>
       <p>Tận dụng mạng lưới KOC/KSOL khổng lồ để bán hàng mà không cần bỏ chi phí quảng cáo cố định. Bạn chỉ trả hoa hồng khi có đơn hàng thành công. Một số shop đã đạt doanh thu 1 tỷ/tháng chỉ nhờ affiliate.</p>
       
       <h2>Livestream bán hàng hiệu quả</h2>
       <p>Đầu tư vào kịch bản livestream chuyên nghiệp, MC có kỹ năng chốt đơn và deal sốc để kích thích mua hàng. Thời gian vàng để live là 19h-22h hàng ngày, khi người dùng thư giãn sau giờ làm việc.</p>
       
       <h2>Tối ưu sản phẩm và giá</h2>
       <p>Sản phẩm bán chạy trên TikTok Shop thường là hàng tiêu dùng nhanh, giá dưới 500k, có tính viral cao. Hãy tạo combo deal hấp dẫn và flash sale để tăng độ khan hiếm.</p>
    `
  },
  {
    id: 4,
    title: 'Tối Ưu Trải Nghiệm Người Dùng (UX) Trên Website',
    excerpt: 'Website đẹp là chưa đủ. Hãy làm cho nó dễ sử dụng để giữ chân khách hàng lâu hơn.',
    date: '10/09/2025',
    author: 'Thanh Hà',
    readTime: '9 phút đọc',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Design',
    tags: ['UX Design', 'Website', 'User Experience', 'Conversion'],
    content: `
      <p>Trải nghiệm người dùng (UX) là yếu tố quyết định khách hàng có ở lại website của bạn hay không. Một website đẹp nhưng khó sử dụng sẽ khiến tỷ lệ thoát trang (bounce rate) tăng cao.</p>
      
      <h2>Tốc độ tải trang - Yếu tố sống còn</h2>
      <p>Người dùng không có kiên nhẫn. Nếu website của bạn mất quá 3 giây để tải, bạn đã mất đi 40% khách hàng tiềm năng. Tối ưu hình ảnh (WebP format), minified code, sử dụng CDN và lazy loading là những việc cần làm ngay.</p>
      
      <h2>Mobile First - Không còn là lựa chọn</h2>
      <p>Với hơn 70% lượng truy cập đến từ thiết bị di động, việc tối ưu giao diện mobile không còn là lựa chọn mà là bắt buộc. Hãy đảm bảo các nút bấm đủ lớn (tối thiểu 44x44px), font chữ dễ đọc (16px trở lên) và navigation mượt mà trên màn hình nhỏ.</p>
      
      <h2>Call To Action (CTA) Rõ Ràng</h2>
      <p>Đừng để khách hàng phải đoán xem họ cần làm gì tiếp theo. Đặt các nút CTA (Mua ngay, Đăng ký, Liên hệ) ở vị trí nổi bật, màu sắc tương phản để thúc đẩy hành động. Sử dụng động từ hành động mạnh mẽ.</p>
      
      <h2>Navigation đơn giản</h2>
      <p>Menu không nên quá 7 mục chính. Sử dụng breadcrumb để người dùng biết họ đang ở đâu. Thanh tìm kiếm phải dễ thấy và hoạt động tốt.</p>
      
      <h2>Form đơn giản hóa</h2>
      <p>Chỉ hỏi những thông tin thực sự cần thiết. Mỗi field bổ sung làm giảm 10% tỷ lệ hoàn thành form. Sử dụng autofill, validation real-time và thông báo lỗi rõ ràng.</p>
    `
  },
  {
    id: 5,
    title: 'Chạy Quảng Cáo Facebook: Đắt Nhưng Xắt Ra Miếng',
    excerpt: 'Làm sao để tối ưu chi phí quảng cáo (CPM) mà vẫn đảm bảo tỷ lệ chuyển đổi (CR) cao?',
    date: '05/09/2025',
    author: 'Quốc Bảo',
    readTime: '11 phút đọc',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    category: 'Ads',
    tags: ['Facebook Ads', 'Meta Ads', 'Performance Marketing', 'ROI'],
    content: `
      <p>Facebook Ads ngày càng đắt đỏ, nhưng vẫn là kênh quảng cáo hiệu quả nhất nếu biết cách làm. "Đắt xắt ra miếng" là câu nói chính xác cho tình hình hiện tại.</p>
      
      <h2>Targeting chính xác - Đừng bắn phá tràn lan</h2>
      <p>Đừng đốt tiền vào tệp khách hàng quá rộng. Sử dụng Lookalike Audience (1-3%) từ database khách hàng hiện tại và Custom Audience để retargeting những người đã tương tác với brand. Advantage+ Audience cũng là lựa chọn tốt cho người mới.</p>
      
      <h2>Creative là vua - Nội dung quyết định 80% thành công</h2>
      <p>Trong bối cảnh thuật toán thay đổi liên tục, nội dung quảng cáo (video, hình ảnh, text) đóng vai trò quan trọng hơn cả kỹ thuật setup. Hãy đầu tư sản xuất video ngắn (15-30s), bắt trend và đánh trúng nỗi đau khách hàng trong 3 giây đầu tiên.</p>
      
      <h2>Hook - Problem - Solution - CTA</h2>
      <p>Công thức vàng cho video ads: Hook (thu hút chú ý) → Problem (nêu vấn đề) → Solution (giải pháp của bạn) → CTA (kêu gọi hành động). Đừng quên thêm caption vì 85% người xem video không bật tiếng.</p>
      
      <h2>Thử nghiệm A/B Testing liên tục</h2>
      <p>Không có công thức chung cho mọi chiến dịch. Hãy liên tục thử nghiệm các mẫu quảng cáo, target khác nhau để tìm ra "công thức chiến thắng" (winning campaign) cho riêng bạn. Test ít nhất 3-5 creative mỗi campaign.</p>
      
      <h2>Tối ưu Landing Page</h2>
      <p>Quảng cáo tốt nhưng landing page tệ = tiền bay. Đảm bảo landing page tải nhanh, message nhất quán với ads, form đơn giản và CTA rõ ràng. Tỷ lệ chuyển đổi landing page tốt là trên 5%.</p>
      
      <h2>Ngân sách và Bidding Strategy</h2>
      <p>Bắt đầu với budget nhỏ (500k-1tr/ngày) để test. Khi tìm được winning campaign, scale dần dần (tăng 20-30%/ngày). Sử dụng Lowest Cost cho giai đoạn test và Cost Cap khi đã có dữ liệu.</p>
    `
  },
  {
    id: 6,
    title: 'Branding: Xây Dựng Thương Hiệu Cảm Xúc',
    excerpt: 'Kết nối với khách hàng bằng câu chuyện thương hiệu chân thực và chạm đến trái tim.',
    date: '01/09/2025',
    author: 'Ngọc Lan',
    readTime: '8 phút đọc',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    category: 'Branding',
    tags: ['Branding', 'Brand Story', 'Emotional Marketing', 'Brand Identity'],
    content: `
      <p>Thương hiệu không chỉ là logo hay slogan. Thương hiệu là cảm xúc mà khách hàng có khi nghĩ về bạn. Trong thời đại thông tin quá tải, chỉ những thương hiệu chạm đến trái tim mới được nhớ đến.</p>
      
      <h2>Kể chuyện (Storytelling) - Vũ khí bí mật</h2>
      <p>Mọi người thích nghe kể chuyện. Hãy kể câu chuyện về sự ra đời của sản phẩm, về những khó khăn bạn đã vượt qua, hay về những giá trị mà bạn theo đuổi. Một câu chuyện hay sẽ chạm đến trái tim khách hàng dễ dàng hơn ngàn lời quảng cáo.</p>
      
      <h2>Tính nhất quán - Chìa khóa thành công</h2>
      <p>Hãy đảm bảo sự nhất quán trong mọi điểm chạm thương hiệu (Brand Touchpoints): từ màu sắc, font chữ trên website, đến giọng văn trên fanpage, và thái độ phục vụ của nhân viên. Sự nhất quán tạo nên sự tin tưởng.</p>
      
      <h2>Brand Voice - Giọng nói riêng biệt</h2>
      <p>Thương hiệu của bạn nói chuyện như thế nào? Chuyên nghiệp và trang trọng? Thân thiện và hài hước? Hay trẻ trung và năng động? Xác định brand voice rõ ràng và giữ nó xuyên suốt mọi nội dung.</p>
      
      <h2>Tạo cộng đồng - Marketing 0 đồng</h2>
      <p>Xây dựng một cộng đồng những người yêu thích thương hiệu (Brand Lovers) là cách tốt nhất để marketing 0 đồng. Hãy lắng nghe và tương tác chân thành với họ. Tổ chức sự kiện offline, tạo group riêng và reward cho những fan trung thành.</p>
      
      <h2>Purpose-driven Brand</h2>
      <p>Thương hiệu của bạn tồn tại để làm gì ngoài việc kiếm tiền? Người tiêu dùng Gen Z đặc biệt quan tâm đến mục đích và giá trị xã hội của thương hiệu. Hãy có một "purpose" rõ ràng và thực hiện nó một cách chân thành.</p>
    `
  }
];

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SubHero
          tag="Blog"
          title="Tin Tức & Kiến Thức"
          subtitle="Cập nhật những xu hướng Marketing mới nhất, kiến thức chuyên ngành và câu chuyện thành công từ VIT DIGITAL."
        />

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-white dark:bg-[#112240] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1">
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 bg-secondary text-dark text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                    {item.category}
                  </span>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-accent" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-accent" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  <Link to={`/tin-tuc/${item.id}`}>{item.title}</Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <User size={16} className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.author}</span>
                </div>

                <div className="mt-auto">
                  <Link to={`/tin-tuc/${item.id}`} className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide group/btn hover:gap-3 transition-all">
                    Đọc Thêm <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5 rounded-2xl p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Muốn nhận thêm kiến thức Marketing?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Đăng ký nhận bản tin hàng tuần từ VIT DIGITAL để cập nhật những xu hướng mới nhất và tips hữu ích.
          </p>
          <Link
            to="/lien-he"
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-hover shadow-lg hover:shadow-accent/40 transition-all transform hover:-translate-y-1"
          >
            Đăng Ký Ngay
          </Link>
        </div>

      </div>
    </div>
  );
};

export default News;
