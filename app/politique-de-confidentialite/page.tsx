import { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles de Nahara Coaching. Informations sur la collecte et le traitement de vos données.',
  alternates: {
    canonical: 'https://naharacoaching.com/politique-de-confidentialite',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
