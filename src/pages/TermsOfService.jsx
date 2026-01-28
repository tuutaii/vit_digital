import React, { useEffect } from 'react';
import { useSeoMetadata } from '../utils/seoUtils';
import SubHero from '../components/SubHero';

const TermsOfService = () => {
    useSeoMetadata('Điều Khoản Dịch Vụ', 'Các điều khoản và điều kiện sử dụng dịch vụ của VIT DIGITAL. Vui lòng đọc kỹ trước khi sử dụng.');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <SubHero
                    tag="Pháp Lý"
                    title="Điều Khoản Dịch Vụ"
                    subtitle="Quy định về quyền và trách nhiệm khi sử dụng dịch vụ của VIT DIGITAL."
                />

                <article className="prose prose-lg dark:prose-invert max-w-none px-4 md:px-0">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Chào mừng bạn đến với VIT DIGITAL. Bằng việc truy cập website và sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các Điều khoản Dịch vụ dưới đây.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">1. Chấp thuận điều khoản</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng ngừng sử dụng dịch vụ ngay lập tức. Chúng tôi có quyền sửa đổi các điều khoản này bất cứ lúc nào mà không cần báo trước.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">2. Sử dụng dịch vụ</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li>Bạn cam kết chỉ sử dụng dịch vụ cho các mục đích hợp pháp và không vi phạm pháp luật.</li>
                        <li>Không thực hiện hành vi phá hoại, tấn công mạng hoặc gây ảnh hưởng đến hoạt động của website.</li>
                        <li>Không sao chép, phân phối lại nội dung thuộc sở hữu của VIT DIGITAL mà không có sự đồng ý bằng văn bản.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">3. Sở hữu trí tuệ</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Tất cả nội dung trên website này bao gồm văn bản, hình ảnh, logo, video và mã nguồn đều là tài sản của VIT DIGITAL hoặc bên cấp phép. Mọi hành vi xâm phạm bản quyền sẽ bị xử lý theo quy định pháp luật.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">4. Giới hạn trách nhiệm</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        VIT DIGITAL không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc đặc biệt nào phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ của chúng tôi. Chúng tôi không đảm bảo website sẽ hoạt động không gián đoạn hoặc không có lỗi.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">5. Liên kết bên thứ ba</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Website có thể chứa liên kết đến các trang web bên thứ ba. Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung hoặc chính sách bảo mật của các trang web đó.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">6. Luật áp dụng</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Các điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam. Mọi tranh chấp sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-500 italic mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                        Cập nhật lần cuối: 28/01/2026
                    </p>
                </article>
            </div>
        </main>
    );
};

export default TermsOfService;
