import React, { useEffect } from 'react';

/**
 * Update the document title and meta description.
 * @param {string} title - The page title.
 * @param {string} description - The meta description.
 */
export const useSeoMetadata = (title, description) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} | VIT DIGITAL`;
        }

        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', description);
        }
    }, [title, description]);
};

/**
 * Generate Organization Schema.
 */
export const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VIT DIGITAL",
    "url": "https://vitdigital.com",
    "logo": "https://vitdigital.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+84-123-456-789",
        "contactType": "Customer Service"
    },
    "sameAs": [
        "https://facebook.com/vitdigital",
        "https://linkedin.com/company/vitdigital"
    ]
});

/**
 * Generate Article Schema.
 * @param {object} article - The article data.
 */
export const getArticleSchema = (article) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [
        article.image
    ],
    "datePublished": article.date,
    "dateModified": article.date,
    "author": [{
        "@type": "Person",
        "name": article.author,
        "url": "https://vitdigital.com/author/" + article.author.replace(/\s+/g, '-').toLowerCase()
    }],
    "publisher": {
        "@type": "Organization",
        "name": "VIT DIGITAL",
        "logo": {
            "@type": "ImageObject",
            "url": "https://vitdigital.com/logo.png"
        }
    },
    "description": article.excerpt
});

/**
 * Generate Service Schema.
 * @param {string} name - Service name.
 * @param {string} description - Service description.
 * @param {string} image - Service image URL.
 */
export const getServiceSchema = (name, description, image) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
        "@type": "Organization",
        "name": "VIT DIGITAL",
        "url": "https://vitdigital.com"
    },
    "image": image,
    "areaServed": "VN"
});

/**
 * Component to render JSON-LD script.
 * @param {object} schema - The schema object to render.
 */
export const JsonLd = ({ schema }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
);
