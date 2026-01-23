import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ variant = 'wave', className = '' }) => {
    if (variant === 'wave') {
        return (
            <div className={`relative h-24 overflow-hidden ${className}`}>
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
                        className="fill-white/50 dark:fill-primary/50"
                        initial={{ d: "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" }}
                        animate={{
                            d: [
                                "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z",
                                "M0,20 C300,60 600,100 900,60 C1050,40 1150,20 1200,20 L1200,120 L0,120 Z",
                                "M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </div>
        );
    }

    if (variant === 'gradient') {
        return (
            <div className={`relative h-32 overflow-hidden ${className}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                </div>
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div className={`relative h-20 overflow-hidden flex items-center justify-center ${className}`}>
                <div className="flex gap-3">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-accent"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

export default SectionDivider;
