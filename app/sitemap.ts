import { MetadataRoute } from 'next';
import { coachingOffers } from '@/data/offers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://naharacoaching.com';
  const currentDate = new Date();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  const offerRoutes = coachingOffers.map((offer) => ({
    url: `${baseUrl}/offres/${offer.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...offerRoutes];
}
