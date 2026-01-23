import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, TrendingUp, Award, Target, Rocket } from 'lucide-react';

const FloatingIcons = ({ section = 'default' }) => {
    const iconSets = {
        services: [
            { Icon: Sparkles, position: 'top-20 left-10', delay: 0, color: 'text-blue-400' },
            { Icon: Zap, position: 'top-40 right-20', delay: 0.5, color: 'text-orange-400' },
            { Icon: Target, position: 'bottom-32 left-20', delay: 1, color: 'text-purple-400' },
        ],
        portfolio: [
            { Icon: Award, position: 'top-32 right-16', delay: 0.3, color: 'text-yellow-400' },
            { Icon: Rocket, position: 'bottom-40 right-32', delay: 0.8, color: 'text-pink-400' },
        ],
        growth: [
            { Icon: TrendingUp, position: 'top-24 left-16', delay: 0.2, color: 'text-green-400' },
            { Icon: Sparkles, position: 'bottom-28 right-24', delay: 0.7, color: 'text-cyan-400' },
        ]
    };

    const icons = iconSets[section] || iconSets.services;

    return (
        <>
            {icons.map(({ Icon, position, delay, color }, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${position} opacity-10 dark:opacity-5 pointer-events-none hidden lg:block`}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay, duration: 1, ease: "easeOut" }}
                >
                    <Icon className={color} size={48} strokeWidth={1.5} />
                </motion.div>
            ))}
        </>
    );
};

export default FloatingIcons;
