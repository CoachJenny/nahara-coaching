import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://naharacoaching.com'),
  title: {
    default: 'Nahara Coaching - Coach Professionnelle Certifiée | Développement de Carrière',
    template: '%s | Nahara Coaching'
  },
  description: 'Coach professionnelle certifiée spécialisée en développement de carrière et intelligence émotionnelle. Accompagnement personnalisé pour reconversion, évolution professionnelle et leadership.',
  keywords: ['coaching professionnel', 'coach carrière', 'reconversion professionnelle', 'développement personnel', 'intelligence émotionnelle', 'leadership', 'orientation professionnelle', 'bilan de compétences', 'coaching cadres', 'coaching dirigeants'],
  authors: [{ name: 'Nahara Coaching' }],
  creator: 'Nahara Coaching',
  publisher: 'Nahara Coaching',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://naharacoaching.com',
    siteName: 'Nahara Coaching',
    title: 'Nahara Coaching - Coach Professionnelle Certifiée',
    description: 'Accompagnement professionnel personnalisé pour votre développement de carrière et votre épanouissement professionnel.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nahara Coaching - Coach Professionnelle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nahara Coaching - Coach Professionnelle Certifiée',
    description: 'Accompagnement professionnel personnalisé pour votre développement de carrière.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
