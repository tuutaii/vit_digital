import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const SubHero = ({
    title,
    highlightTitle,
    subtitle,
    tag,
    ctaText,
    ctaLink = "/lien-he"
}) => {
    const { t } = useApp();

    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-primary transition-colors duration-300">
            {/* Background Elements - copied from Hero to ensure consistency */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[0%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] opacity-60" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Tag */}
                    {tag && (
                        <span className="inline-block py-2 px-4 border border-accent/20 rounded-full text-accent text-sm font-semibold tracking-widest mb-6 bg-accent/5 backdrop-blur-sm">
                            {tag}
                        </span>
                    )}

                    {/* Title */}
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                        {title} {highlightTitle && <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600 block sm:inline">{highlightTitle}</span>}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            {subtitle}
                        </p>
                    )}

                    {/* CTA */}
                    {ctaText && (
                        <Link
                            to={ctaLink}
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-hover shadow-lg hover:shadow-accent/30 transition-all transform hover:-translate-y-1"
                        >
                            {ctaText}
                        </Link>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default SubHero;
