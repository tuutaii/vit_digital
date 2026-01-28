import React from 'react';
import { Megaphone, Globe, PenTool, BarChart, Smartphone, Code, Lightbulb, Video, Radio } from 'lucide-react';

export const getServicesData = (t) => [
    {
        id: 'marketing-tong-the',
        icon: <Megaphone size={32} />,
        title: t('svcMarketing'),
        description: t('svcMarketingDesc'),
        link: '/dich-vu/marketing-tong-the'
    },
    {
        id: 'tu-van-chien-luoc',
        icon: <Lightbulb size={32} />,
        title: t('svcStrategy'),
        description: t('svcStrategyDesc'),
        link: '/dich-vu/tu-van-chien-luoc'
    },
    {
        id: 'quang-cao',
        icon: <Radio size={32} />,
        title: t('svcAds'),
        description: t('svcAdsDesc'),
        link: '/dich-vu/quang-cao'
    },
    {
        id: 'seo',
        icon: <BarChart size={32} />,
        title: t('svcSEO'),
        description: t('svcSEODesc'),
        link: '/dich-vu/seo'
    },
    {
        id: 'tiktok',
        icon: <Video size={32} />,
        title: t('svcTikTok'),
        description: t('svcTikTokDesc'),
        link: '/dich-vu/tiktok'
    },
    {
        id: 'thiet-ke-website',
        icon: <Globe size={32} />,
        title: t('svcWeb'),
        description: t('svcWebDesc'),
        link: '/dich-vu/thiet-ke-website'
    },
];
