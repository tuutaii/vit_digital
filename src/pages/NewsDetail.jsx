import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

// Mock data - In a real app, this would be fetched from an API
const newsData = [
  {
    id: 1,
    title: '5 Xu Hướng Marketing "Thống Trị" Năm 2024',
    excerpt: 'Khám phá những chiến lược Marketing mới đang làm mưa làm gió trên thị trường, từ AI Content đến Livestream tương tác.',
    date: '12/10/2025',
    author: 'Tuấn Tài',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Chiến Lược',
    content: `
      <p>Năm 2024 đánh dấu sự chuyển mình mạnh mẽ của Digital Marketing với sự trỗi dậy của trí tuệ nhân tạo (AI) và các nền tảng video ngắn.</p>
      
      <h2>1. AI Content - Trợ thủ đắc lực</h2>
      <p>Không thể phủ nhận sức mạnh của AI trong việc sản xuất nội dung. Từ ChatGPT đến Midjourney, các công cụ này giúp marketers tiết kiệm hàng ngàn giờ làm việc mỗi năm.</p>
      
      <h2>2. Short-form Video vẫn là vua</h2>
      <p>TikTok, Reels, và YouTube Shorts tiếp tục thống trị thời gian on-screen của người dùng. Các thương hiệu cần tập trung vào nội dung ngắn, súc tích và giải trí.</p>
      
      <h2>3. Livestream mua sắm (Shoppertainment)</h2>
      <p>Sự kết hợp giữa mua sắm và giải trí đang bùng nổ. Người xem không chỉ muốn mua hàng, họ muốn được giải trí trong quá trình đó.</p>
    `
  },
  {
    id: 2,
    title: 'Bí Quyết SEO Lên Top 1 Google Trong 3 Tháng',
    excerpt: 'Hướng dẫn chi tiết quy trình SEO tổng thể "Mũ Trắng", an toàn và bền vững cho doanh nghiệp SMEs.',
    date: '28/09/2025',
    author: 'Minh Hạnh',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    category: 'SEO',
    content: `
       <p>SEO không còn là cuộc chơi của spam link. Google ngày càng thông minh hơn và ưu tiên trải nghiệm người dùng.</p>
       <h2>Tối ưu E-E-A-T</h2>
       <p>Kinh nghiệm, Chuyên môn, Thẩm quyền và Độ tin cậy là 4 yếu tố then chốt để Google đánh giá chất lượng website của bạn.</p>
       <h2>Technical SEO</h2>
       <p>Đảm bảo website của bạn tải nhanh, thân thiện với di động và không có lỗi kỹ thuật là bước đầu tiên để chinh phục Google.</p>
    `
  },
  {
    id: 3,
    title: 'TikTok Shop: Mỏ Vàng Mới Cho Các Nhà Bán Lẻ',
    excerpt: 'Tại sao TikTok Shop lại có sức hút mãnh liệt đến vậy? Cách tối ưu vận hành để đạt doanh thu ngàn đơn.',
    date: '15/09/2025',
    author: 'Hoàng Nam',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    category: 'TikTok',
    content: `
       <p>TikTok Shop đang thay đổi hành vi mua sắm của người dùng tại Việt Nam.</p>
       <h2>Mô hình Affiliate</h2>
       <p>Tận dụng mạng lưới KOC/KSOL khổng lồ để bán hàng mà không cần bỏ chi phí quảng cáo cố định.</p>
    `
  },
  {
    id: 4,
    title: 'Tối Ưu Trải Nghiệm Người Dùng (UX) Trên Website',
    excerpt: 'Website đẹp là chưa đủ. Hãy làm cho nó dễ sử dụng để giữ chân khách hàng lâu hơn.',
    date: '10/09/2025',
    author: 'Thanh Hà',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Design',
    content: `
      <p>Trải nghiệm người dùng (UX) là yếu tố quyết định khách hàng có ở lại website của bạn hay không. Một website đẹp nhưng khó sử dụng sẽ khiến tỷ lệ thoát trang (bounce rate) tăng cao.</p>
      
      <h2>Tốc độ tải trang</h2>
      <p>Người dùng không có kiên nhẫn. Nếu website của bạn mất quá 3 giây để tải, bạn đã mất đi 40% khách hàng tiềm năng. Tối ưu hình ảnh, minified code, và sử dụng CDN là những việc cần làm ngay.</p>
      
      <h2>Mobile First</h2>
      <p>Với hơn 70% lượng truy cập đến từ thiết bị di động, việc tối ưu giao diện mobile không còn là lựa chọn mà là bắt buộc. Hãy đảm bảo các nút bấm đủ lớn, font chữ dễ đọc và navigation mượt mà trên màn hình nhỏ.</p>
      
      <h2>Call To Action (CTA) Rõ Ràng</h2>
      <p>Đừng để khách hàng phải đoán xem họ cần làm gì tiếp theo. Đặt các nút CTA (Mua ngay, Đăng ký, Liên hệ) ở vị trí nổi bật, màu sắc tương phản để thúc đẩy hành động.</p>
    `
  },
  {
    id: 5,
    title: 'Chạy Quảng Cáo Facebook: Đắt Nhưng Xắt Ra Miếng',
    excerpt: 'Làm sao để tối ưu chi phí quảng cáo (CPM) mà vẫn đảm bảo tỷ lệ chuyển đổi (CR) cao?',
    date: '05/09/2025',
    author: 'Quốc Bảo',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    category: 'Ads',
    content: `
      <p>Facebook Ads ngày càng đắt đỏ, nhưng vẫn là kênh quảng cáo hiệu quả nhất nếu biết cách làm. "Đắt xắt ra miếng" là câu nói chính xác cho tình hình hiện tại.</p>
      
      <h2>Targeting chính xác</h2>
      <p>Đừng đốt tiền vào tệp khách hàng quá rộng. Sử dụng Lookalike Audience và Custom Audience để tiếp cận những người thực sự quan tâm đến sản phẩm của bạn.</p>
      
      <h2>Creative là vua</h2>
      <p>Trong bối cảnh thuật toán thay đổi liên tục, nội dung quảng cáo (video, hình ảnh, text) đóng vai trò quan trọng hơn cả kỹ thuật setup. Hãy đầu tư sản xuất video ngắn, bắt trend và đánh trúng nỗi đau khách hàng.</p>
      
      <h2>Thử nghiệm A/B Testing</h2>
      <p>Không có công thức chung cho mọi chiến dịch. Hãy liên tục thử nghiệm các mẫu quảng cáo, target khác nhau để tìm ra "công thức chiến thắng" (winning campaign) cho riêng bạn.</p>
    `
  },
    {
    id: 6,
    title: 'Branding: Xây Dựng Thương Hiệu Cảm Xúc',
    excerpt: 'Kết nối với khách hàng bằng câu chuyện thương hiệu chân thực và chạm đến trái tim.',
    date: '01/09/2025',
    author: 'Ngọc Lan',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    category: 'Branding',
    content: `
      <p>Thương hiệu không chỉ là logo hay slogan. Thương hiệu là cảm xúc mà khách hàng có khi nghĩ về bạn.</p>
      
      <h2>Kể chuyện (Storytelling)</h2>
      <p>Mọi người thích nghe kể chuyện. Hãy kể câu chuyện về sự ra đời của sản phẩm, về những khó khăn bạn đã vượt qua, hay về những giá trị mà bạn theo đuổi. Một câu chuyện hay sẽ chạm đến trái tim khách hàng dễ dàng hơn ngàn lời quảng cáo.</p>
      
      <h2>Tính nhất quán</h2>
      <p>Hãy đảm bảo sự nhất quán trong mọi điểm chạm thương hiệu (Brand Touchpoints): từ màu sắc, font chữ trên website, đến giọng văn trên fanpage, và thái độ phục vụ của nhân viên.</p>
      
      <h2>Tạo cộng đồng</h2>
      <p>Xây dựng một cộng đồng những người yêu thích thương hiệu (Brand Lovers) là cách tốt nhất để marketing 0 đồng. Hãy lắng nghe và tương tác chân thành với họ.</p>
    `
  }
];

const NewsDetail = () => {
    const { id } = useParams();
    const post = newsData.find(item => item.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Bài viết không tồn tại</h1>
                <Link to="/tin-tuc" className="text-secondary hover:underline">Quay lại trang tin tức</Link>
            </div>
        )
    }

  return (
    <div className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
           <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-gray-500 hover:text-secondary transition-colors font-medium">
              <ArrowLeft size={20} /> Quay lại tin tức
           </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10">
            <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-wider rounded-full">
                    {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-500">
                     <Calendar size={14} /> {post.date}
                </span>
                 <span className="flex items-center gap-1.5 text-sm text-gray-500">
                     <Clock size={14} /> 5 phút đọc
                </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-gray-100 dark:border-gray-800 py-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <User size={20} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">Tác giả</p>
                    </div>
                 </div>
                 <button className="flex items-center gap-2 text-gray-500 hover:text-secondary transition-colors">
                     <Share2 size={20} /> <span className="hidden sm:inline">Chia sẻ</span>
                 </button>
            </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12 shadow-xl">
             <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mb-4 prose-headings:mt-8
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-8 prose-p:text-lg prose-p:mb-6
            prose-a:text-secondary hover:prose-a:text-accent prose-a:no-underline
            prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
            prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
        ">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        
        {/* Tags / CTA (Optional) */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
             <div className="bg-gray-50 dark:bg-[#112240] rounded-2xl p-8 text-center">
                 <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bạn cần tư vấn về vấn đề này?</h3>
                 <p className="text-gray-600 dark:text-gray-400 mb-6">Liên hệ ngay với chuyên gia của VIT DIGITAL để được hỗ trợ giải đáp miễn phí.</p>
                 <Link to="/lien-he" className="inline-block px-8 py-3 bg-secondary text-dark font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                     Nhận Tư Vấn Ngay
                 </Link>
             </div>
        </div>

      </div>
    </div>
  );
};

export default NewsDetail;
