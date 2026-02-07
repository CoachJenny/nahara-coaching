import { Metadata } from 'next';
import { OfferDetail } from '@/components/OfferDetail';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { coachingOffers } from '@/data/offers';
import StructuredData, { serviceSchema, breadcrumbSchema } from '@/components/StructuredData';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const offer = coachingOffers.find(o => o.id === params.id);

  if (!offer) {
    return {
      title: 'Offre non trouvée',
    };
  }

  return {
    title: `${offer.title} - Programme de Coaching`,
    description: `${offer.description}. ${offer.format}. ${offer.benefits.join('. ')}.`,
    alternates: {
      canonical: `https://naharacoaching.com/offres/${offer.id}`,
    },
    openGraph: {
      title: `${offer.title} - Nahara Coaching`,
      description: offer.description,
      url: `https://naharacoaching.com/offres/${offer.id}`,
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${offer.title} - Nahara Coaching`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return coachingOffers.map((offer) => ({
    id: offer.id,
  }));
}

export default function OfferPage({ params }: Props) {
  const offer = coachingOffers.find(o => o.id === params.id);

  if (!offer) {
    return null;
  }

  const breadcrumbs = breadcrumbSchema([
    { name: 'Accueil', url: 'https://naharacoaching.com' },
    { name: 'Offres', url: 'https://naharacoaching.com/#offres' },
    { name: offer.title, url: `https://naharacoaching.com/offres/${offer.id}` },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbs} />
      <StructuredData data={serviceSchema(offer)} />
      <Header />
      <OfferDetail />
      <Footer />
    </>
  );
}
