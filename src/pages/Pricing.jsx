import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, HelpCircle, ArrowRight, Layout, BarChart, ShoppingBag, Video, Smartphone, Globe, ChevronDown, ChevronUp, Megaphone as MegaphoneIcon, Search as SearchIcon, FileText as FileTextIcon, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubHero from '../components/SubHero';
import { useApp } from '../context/AppContext';

const Pricing = () => {
    const { t } = useApp();
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const packages = [
        {
            name: t('pkgStartup'),
            price: "15.000.000đ",
            period: t('perMonth'),
            description: t('pkgStartupDesc'),
            features: [
                t('ftS1'),
                t('ftS2'),
                t('ftS3'),
                t('ftS4'),
                t('ftS5')
            ],
            recommended: false,
            color: "blue"
        },
        {
            name: t('pkgGrowth'),
            price: "35.000.000đ",
            period: t('perMonth'),
            description: t('pkgGrowthDesc'),
            features: [
                t('ftG1'),
                t('ftG2'),
                t('ftG3'),
                t('ftG4'),
                t('ftG5'),
                t('ftG6')
            ],
            recommended: true,
            color: "secondary"
        },
        {
            name: t('pkgEnterprise'),
            price: t('contactForPrice'),
            period: "",
            description: t('pkgEnterpriseDesc'),
            features: [
                t('ftE1'),
                t('ftE2'),
                t('ftE3'),
                t('ftE4'),
                t('ftE5'),
                t('ftE6')
            ],
            recommended: false,
            color: "purple"
        }
    ];

    const otherServices = [
        { name: t('svcMarketing'), icon: <Target />, desc: t('svcMarketingDesc'), link: "/dich-vu/marketing-tong-the" },
        { name: t('svcStrategy'), icon: <TrendingUp />, desc: t('svcStrategyDesc'), link: "/dich-vu/tu-van-chien-luoc" },
        { name: t('svcAds'), icon: <MegaphoneIcon />, desc: t('svcAdsDesc'), link: "/dich-vu/quang-cao" },
        { name: t('svcSEO'), icon: <SearchIcon />, desc: t('svcSEODesc'), link: "/dich-vu/seo" },
        { name: t('svcTikTok'), icon: <Smartphone />, desc: t('svcTikTokDesc'), link: "/dich-vu/tiktok" },
        { name: t('srvLive'), icon: <Video />, desc: t('srvLiveDesc'), link: "/dich-vu/livestream" },
        { name: t('svcWeb'), icon: <Layout />, desc: t('svcWebDesc'), link: "/dich-vu/thiet-ke-website" }
    ];

    const processSteps = [
        { step: "01", title: t('step1'), desc: t('step1Desc') },
        { step: "02", title: t('step2'), desc: t('step2Desc') },
        { step: "03", title: t('step3'), desc: t('step3Desc') },
        { step: "04", title: t('step4'), desc: t('step4Desc') }
    ];

    const contextFAQs = [
        { question: t('faq1'), answer: t('faq1a') },
        { question: t('faq2'), answer: t('faq2a') },
        { question: t('faq3'), answer: t('faq3a') },
        { question: t('faq4'), answer: t('faq4a') }
    ];

    return (
        <div className="bg-white dark:bg-[#020c1b] min-h-screen font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {/* Hero Section */}
            <SubHero
                tag={t('pricingTitle').split('–')[0]}
                title={t('pricingTitle').split('–')[1] || t('pricingTitle')}
                subtitle={t('pricingSubtitle')}
                ctaText={t('registerNow')} // This might point to /lien-he default
            />

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
                                className={`relative flex flex-col p-8 rounded-xl border ${pkg.recommended ? 'border-secondary shadow-[0_0_30px_rgba(100,255,218,0.15)] bg-white dark:bg-[#112240] scale-105 z-10' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0a192f]'} hover:shadow-2xl transition-all duration-300`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                        <span className="bg-gradient-to-r from-secondary to-accent text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{t('mostPopular')}</span>
                                    </div>
                                )}
                                <h3 className={`text-2xl font-serif font-bold mb-2 ${pkg.recommended ? 'text-secondary' : 'text-gray-900 dark:text-white'}`}>{pkg.name}</h3>
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
                                    {t('registerNow')}
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
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900 dark:text-white">{t('detailedServices')}</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">{t('detailedServicesDesc')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {otherServices.map((service, index) => (
                            <Link
                                to={service.link}
                                key={index}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-[#112240] p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all flex items-start gap-4 h-full cursor-pointer group"
                                >
                                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-accent transition-colors">{service.name}</h4>
                                            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent mb-2" />
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900 dark:text-white">{t('workingProcess')}</h2>
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
                            <div className="lg:w-1/3 text-white flex flex-col h-full">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('quoteTitle')}</h2>
                                <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg">{t('quoteDesc')}</p>

                                <div className="space-y-6 mb-8 flex-grow">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary backdrop-blur-md">
                                            <Shield size={24} />
                                        </div>
                                        <span className="font-bold">{t('quoteSecurity')}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary backdrop-blur-md">
                                            <Zap size={24} />
                                        </div>
                                        <span className="font-bold">{t('quoteResponse')}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary backdrop-blur-md">
                                            <Star size={24} />
                                        </div>
                                        <span className="font-bold">{t('quoteConsult')}</span>
                                    </div>
                                </div>

                                {/* Lively Image */}
                                <div className="rounded-2xl overflow-hidden mt-auto shadow-2xl border border-white/20 hidden lg:block">
                                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Consultation" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>

                            <div className="lg:w-2/3 bg-white dark:bg-[#112240] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{t('fullName')}</label>
                                            <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all shadow-inner placeholder-gray-400" placeholder={t('phName')} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{t('phoneNumber')}</label>
                                            <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all shadow-inner placeholder-gray-400" placeholder={t('phPhone')} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{t('email')}</label>
                                            <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all shadow-inner placeholder-gray-400" placeholder={t('phEmail')} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Website/Fanpage</label>
                                            <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all shadow-inner placeholder-gray-400" placeholder="https://..." />
                                        </div>
                                    </div>
                                    <div className="space-y-2 relative">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{t('budget')}</label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none cursor-pointer shadow-inner font-medium hover:border-gray-300 dark:hover:border-gray-500">
                                                <option>{t('budgetU20')}</option>
                                                <option>{t('budget20_50')}</option>
                                                <option>{t('budget50_100')}</option>
                                                <option>{t('budgetO100')}</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                        </div>
                                    </div>
                                    <div className="space-y-2 relative">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">{t('interestedService')}</label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none cursor-pointer shadow-inner font-medium hover:border-gray-300 dark:hover:border-gray-500">
                                                <option>{t('subjMarketing')}</option>
                                                <option>{t('subjSEO')}</option>
                                                <option>{t('subjAds')}</option>
                                                <option>{t('subjWeb')}</option>
                                                <option>{t('subjOther')}</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                        </div>
                                    </div>
                                    <button className="w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg hover:shadow-accent/40 hover:bg-accent-hover transition-all text-lg mt-4 uppercase tracking-wide transform hover:-translate-y-1">
                                        {t('btnQuote')}
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
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900 dark:text-white">{t('faqTitle')}</h2>
                    </div>
                    <div className="space-y-4">
                        {contextFAQs.map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-[#112240] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
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

export default Pricing;
