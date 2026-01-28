import React, { useEffect } from 'react';
import { useSeoMetadata } from '../utils/seoUtils';
import SubHero from '../components/SubHero';

const PrivacyPolicy = () => {
    useSeoMetadata('Chính Sách Bảo Mật', 'Cam kết bảo mật thông tin khách hàng của VIT DIGITAL. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white dark:bg-[#020c1b] min-h-screen pt-32 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <SubHero
                    tag="Pháp Lý"
                    title="Chính Sách Bảo Mật"
                    subtitle="Chúng tôi cam kết bảo vệ sự riêng tư và bảo mật thông tin cá nhân của bạn."
                />

                <article className="prose prose-lg dark:prose-invert max-w-none px-4 md:px-0">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Tại VIT DIGITAL, chúng tôi coi trọng sự riêng tư của khách hàng. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và chia sẻ thông tin cá nhân của bạn khi bạn truy cập hoặc sử dụng dịch vụ của chúng tôi.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">1. Thu thập thông tin</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Chúng tôi có thể thu thập các loại thông tin sau:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li><strong>Thông tin liên hệ:</strong> Tên, địa chỉ email, số điện thoại khi bạn điền form liên hệ.</li>
                        <li><strong>Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành (thông qua cookie và log file).</li>
                        <li><strong>Thông tin sử dụng:</strong> Cách bạn tương tác với website, các trang bạn đã xem.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">2. Sử dụng thông tin</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Chúng tôi sử dụng thông tin thu thập được để:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li>Cung cấp và duy trì dịch vụ.</li>
                        <li>Phản hồi các yêu cầu, thắc mắc của bạn.</li>
                        <li>Gửi thông tin cập nhật, bản tin (nếu bạn đã đăng ký).</li>
                        <li>Cải thiện trải nghiệm người dùng trên website.</li>
                        <li>Đảm bảo an ninh hệ thống.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">3. Chia sẻ thông tin</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Chúng tôi cam kết <strong>không bán, trao đổi hoặc chuyển giao</strong> thông tin cá nhân của bạn cho bên thứ ba vì mục đích thương mại. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp sau:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                        <li>Với các đối tác cung cấp dịch vụ (như đơn vị lưu trữ web, email marketing) nhưng buộc họ phải tuân thủ bảo mật.</li>
                        <li>Khi có yêu cầu từ cơ quan pháp luật có thẩm quyền.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">4. Cookie</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Website sử dụng cookie để lưu trữ tùy chọn của bạn và theo dõi hiệu suất. Bạn có thể tắt cookie trong cài đặt trình duyệt, nhưng điều này có thể ảnh hưởng đến trải nghiệm sử dụng.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-serif">5. Thay đổi chính sách</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        VIT DIGITAL có quyền cập nhật chính sách này bất cứ lúc nào. Mọi thay đổi sẽ được thông báo trên trang này.
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-500 italic mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                        Cập nhật lần cuối: 28/01/2026
                    </p>
                </article>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
