import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ModernServiceLayout = ({
    serviceName,
    heroTitle,
    heroDescription,
    heroImage,
    breadcrumbs = [],
    conceptColors = { main: "text-blue-600", bg: "bg-blue-100" }, // Custom accent colors
    conceptSection, // { title, content, image }
    serviceItems = [], // [{ title, desc, icon }]
    processSteps = [], // [{ step, title, desc, icon }]
    usps = [], // [{ title, desc, icon }]
    cta, // { title, desc, buttonText, link }
    children // NEW: Allow custom content injection
}) => {
    const { t } = useApp();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-[#020c1b] min-h-screen font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300 relative pt-24 md:pt-40">

            {/* 1. Hero Section (Parallax) */}
            <section ref={heroRef} className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroImage}
                        alt={serviceName}
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/50 to-gray-900/90 mix-blend-multiply"></div>
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
                    >
                        {heroTitle}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-2xl font-light max-w-3xl mx-auto opacity-90 leading-relaxed"
                    >
                        {heroDescription}
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            {/* 2. Breadcrumbs */}
            <div className="bg-gray-50 dark:bg-[#0a192f] border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500 dark:text-gray-400">
                        <Link to="/" className="hover:text-secondary dark:hover:text-accent transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <ChevronRight size={16} className="mx-2" />
                                {crumb.link ? (
                                    <Link to={crumb.link} className="hover:text-secondary dark:hover:text-accent transition-colors">{crumb.label}</Link>
                                ) : (
                                    <span className="text-gray-900 dark:text-white font-medium">{crumb.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>

            {/* 3. Concept & Value (2 Columns) */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <span className={`inline-block py-1 px-3 rounded-full ${conceptColors.bg} ${conceptColors.main} text-sm font-bold tracking-wider uppercase mb-6`}>
                                Tổng Quan
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                                {conceptSection.title}
                            </h2>
                            <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light space-y-6">
                                {conceptSection.content}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src={conceptSection.image} alt={conceptSection.title} className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                            </div>
                            {/* Decorative Blob */}
                            <div className={`absolute -bottom-10 -left-10 w-40 h-40 ${conceptColors.bg} rounded-full blur-3xl opacity-50 z-[-1]`}></div>
                            <div className={`absolute -top-10 -right-10 w-40 h-40 ${conceptColors.bg} rounded-full blur-3xl opacity-50 z-[-1]`}></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Service Items / Packages */}
            <section className="py-20 bg-gray-50 dark:bg-[#0a192f]/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Hạng Mục Triển Khai</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group bg-white dark:bg-[#112240] rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">
                                    {/* Background Icon Effect */}
                                    {React.cloneElement(item.icon, { size: 120 })}
                                </div>

                                <div className={`w-14 h-14 rounded-xl ${conceptColors.bg} ${conceptColors.main} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Content Slot */}
            {children}

            {/* 5. Process (Timeline) */}
            {processSteps.length > 0 && (
                <section className="py-20 lg:py-28 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Quy Trình Thực Hiện</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                                Quy trình chuẩn hóa giúp tối ưu hiệu suất và đảm bảo chất lượng từng dự án.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline Strip */}
                            <div className="hidden lg:block absolute top-[50%] left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 z-0"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="bg-white dark:bg-[#112240] p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-[#1a2d4d] transition-colors"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent p-0.5 mb-6 rotate-0 group-hover:rotate-12 transition-transform duration-500">
                                            <div className="w-full h-full bg-white dark:bg-[#112240] rounded-full flex items-center justify-center font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent">
                                                {step.step}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 6. USP (3 Cols) */}
            <section className="py-20 bg-gray-900 text-white relative isolate overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
                    alt="Background"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90 -z-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">Tại Sao Chọn VIT DIGITAL?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {usps.map((usp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-accent backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform">
                                    {usp.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{usp.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{usp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="py-24 bg-white dark:bg-[#020c1b]">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-3xl overflow-hidden px-6 py-20 px:md-20 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent transform -skew-y-2 scale-110"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6 leading-tight">
                                {cta.title}
                            </h2>
                            <p className="text-xl text-dark/80 mb-10 font-medium">
                                {cta.desc}
                            </p>
                            <Link
                                to={cta.link || "/lien-he"}
                                className="inline-flex items-center gap-2 px-10 py-5 bg-dark text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                {cta.buttonText || t('getStarted')} <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ModernServiceLayout;
