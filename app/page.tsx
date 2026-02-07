import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Storytelling } from '@/components/Storytelling';
import { Frustrations } from '@/components/Frustrations';
import { Promise } from '@/components/Promise';
import { Expectations } from '@/components/Expectations';
import { NotHere } from '@/components/NotHere';
import { EQi } from '@/components/EQi';
import { ForYou } from '@/components/ForYou';
import { Quiz } from '@/components/Quiz';
import { Offers } from '@/components/Offers';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import StructuredData, {
  organizationSchema,
  websiteSchema,
  personSchema
} from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Coaching professionnel personnalisé pour votre développement de carrière. Reconversion, leadership, intelligence émotionnelle. Accompagnement certifié EQ-i.',
  alternates: {
    canonical: 'https://naharacoaching.com',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={personSchema} />
      <Header />
      <div className="min-h-screen bg-white">
        <Hero />
        <Storytelling />
        <Frustrations />
        <Promise />
        <Expectations />
        <NotHere />
        <EQi />
        <ForYou />
        <Quiz />
        <Offers />
        <About />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
