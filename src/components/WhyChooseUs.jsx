import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const WhyChooseUs = () => {
    const { t } = useApp();

    const features = [
        {
            icon: <Users size={32} />,
            title: t('expertTeam'),
            desc: t('expertTeamDesc'),
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <TrendingUp size={32} />,
            title: t('realResults'),
            desc: t('realResultsDesc'),
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Clock size={32} />,
            title: t('speedFlexibility'),
            desc: t('speedFlexibilityDesc'),
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Shield size={32} />,
            title: t('wcuSecurity'),
            desc: t('wcuSecurityDesc'),
            color: "from-purple-500 to-indigo-500"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 inline-block">{t('whyChooseUs')}</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                            {t('wcuPartner')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">{t('wcuGrowth')}</span> Của Bạn
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
                            {t('wcuDesc')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-[#112240] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-secondary/30 transition-all group"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                alt="Team Meeting"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="text-secondary fill-secondary text-white" size={32} />
                                    <div>
                                        <h4 className="font-bold text-lg">{t('wcuKPI')}</h4>
                                        <p className="text-sm text-gray-200">{t('wcuKPICommit')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full blur-[80px] opacity-20"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary rounded-full blur-[80px] opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
