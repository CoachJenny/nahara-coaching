import React from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nahara Coaching',
  description: 'Coach professionnelle certifiée spécialisée en développement de carrière et intelligence émotionnelle',
  url: 'https://naharacoaching.com',
  logo: 'https://naharacoaching.com/logo.png',
  image: 'https://naharacoaching.com/og-image.jpg',
  telephone: '+33-XXX-XXX-XXX',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
    addressLocality: 'France',
  },
  sameAs: [
    'https://www.linkedin.com/in/naharacoaching',
    'https://www.instagram.com/naharacoaching',
  ],
  priceRange: '150€ - 3000€',
  serviceType: [
    'Coaching Professionnel',
    'Coaching de Carrière',
    'Développement du Leadership',
    'Intelligence Émotionnelle',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nahara Coaching',
  url: 'https://naharacoaching.com',
  description: 'Accompagnement professionnel personnalisé pour votre développement de carrière',
  inLanguage: 'fr-FR',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://naharacoaching.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nahara',
  jobTitle: 'Coach Professionnelle Certifiée',
  description: 'Coach professionnelle certifiée spécialisée en développement de carrière, leadership et intelligence émotionnelle',
  url: 'https://naharacoaching.com',
  image: 'https://naharacoaching.com/nahara-profile.jpg',
  sameAs: [
    'https://www.linkedin.com/in/naharacoaching',
    'https://www.instagram.com/naharacoaching',
  ],
  knowsAbout: [
    'Coaching Professionnel',
    'Développement de Carrière',
    'Leadership',
    'Intelligence Émotionnelle',
    'Reconversion Professionnelle',
  ],
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (offer: {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: offer.title,
  provider: {
    '@type': 'ProfessionalService',
    name: 'Nahara Coaching',
  },
  description: offer.description,
  offers: {
    '@type': 'Offer',
    price: offer.price.replace(/[^\d]/g, ''),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
});
