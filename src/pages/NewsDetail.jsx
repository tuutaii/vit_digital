import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import { newsData } from '../data/newsData';
import { useSeoMetadata, getArticleSchema, JsonLd } from '../utils/seoUtils';
import '../styles/article.css';

const NewsDetail = () => {
  const { id } = useParams();
  const post = newsData.find(item => item.id === parseInt(id));

  // Dynamic Metadata
  useSeoMetadata(
    post ? post.title : 'Bài viết không tồn tại',
    post ? post.excerpt : 'Trang tin tức chi tiết từ VIT DIGITAL'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center container mx-auto px-4 text-center bg-white dark:bg-[#020c1b]">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Bài viết không tồn tại</h1>
        <Link to="/tin-tuc" className="text-secondary hover:underline">Quay lại trang tin tức</Link>
      </main>
    )
  }

  const articleSchema = getArticleSchema(post);

  return (
    <main className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
      <JsonLd schema={articleSchema} />

      <article className="container mx-auto px-4 max-w-4xl" itemScope itemType="https://schema.org/Article">
        {/* Breadcrumb / Back */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-secondary transition-colors font-medium">
            <ArrowLeft size={20} aria-hidden="true" /> Quay lại tin tức
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-sm">
              {post.category}
            </span>
            <time className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400" dateTime={post.date.split('/').reverse().join('-')}>
              <Calendar size={14} aria-hidden="true" /> {post.date}
            </time>
            <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Clock size={14} aria-hidden="true" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight font-serif" itemProp="headline">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-y border-gray-100 dark:border-gray-800 py-6">
            <address className="flex items-center gap-3 not-italic">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <User size={20} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm" itemProp="author">{post.author}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tác giả</p>
              </div>
            </address>
            <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-secondary transition-colors" aria-label="Share this article">
              <Share2 size={20} aria-hidden="true" /> <span className="hidden sm:inline">Chia sẻ</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
            loading="eager"
            fetchPriority="high"
            itemProp="image"
          />
        </div>

        {/* Article Content */}
        <section className="article-content" itemProp="articleBody">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>

        {/* Footer: Tags & Share */}
        <footer className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-secondary/10 hover:text-secondary transition-colors cursor-pointer">
                  <Tag size={14} aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Chia sẻ bài viết</h3>
            <div className="flex gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={18} aria-hidden="true" />
                <span className="hidden sm:inline">Facebook</span>
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={18} aria-hidden="true" />
                <span className="hidden sm:inline">Twitter</span>
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
                <span className="hidden sm:inline">LinkedIn</span>
              </button>
            </div>
          </div>
        </footer>

        {/* CTA */}
        <aside className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bạn cần tư vấn về vấn đề này?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Liên hệ ngay với chuyên gia của VIT DIGITAL để được hỗ trợ giải đáp miễn phí.</p>
            <Link to="/lien-he" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-accent/40 transition-all transform hover:-translate-y-1">
              Nhận Tư Vấn Ngay
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              Bằng việc liên hệ, bạn đồng ý với <Link to="/privacy-policy" className="underline hover:text-accent">Chính sách bảo mật</Link> của chúng tôi.
            </p>
          </div>
        </aside>

        {/* Related Posts */}
        <aside className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Bài viết liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData.filter(item => item.id !== post.id && item.category === post.category).slice(0, 2).map((relatedPost) => (
              <Link key={relatedPost.id} to={`/tin-tuc/${relatedPost.id}`} className="group flex gap-4 p-4 bg-gray-50 dark:bg-[#112240] rounded-xl hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                <img src={relatedPost.image} alt={relatedPost.title} className="w-24 h-24 object-cover rounded-lg shrink-0" loading="lazy" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-secondary transition-colors line-clamp-2 mb-2">{relatedPost.title}</h3>
                  <time className="text-xs text-gray-500 dark:text-gray-400">{relatedPost.date} • {relatedPost.readTime}</time>
                </div>
              </Link>
            ))}
          </div>
        </aside>

      </article>
    </main>
  );
};

export default NewsDetail;
