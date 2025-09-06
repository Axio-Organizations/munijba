import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Municipalidad de Juan Bautista Alberdi | Tucumán, Argentina',
  description: 'Servicios y trámites municipales al alcance de tu mano. Gobierno transparente y cercano a los ciudadanos de Juan Bautista Alberdi, Tucumán.',
  keywords: 'municipalidad, juan bautista alberdi, tucuman, tramites, servicios, gobierno',
  authors: [{ name: 'Municipalidad de Juan Bautista Alberdi' }],
  creator: 'Municipalidad de Juan Bautista Alberdi',
  publisher: 'Municipalidad de Juan Bautista Alberdi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Municipalidad de Juan Bautista Alberdi',
    description: 'Servicios y trámites municipales al alcance de tu mano',
    url: 'https://alberdi.gob.ar',
    siteName: 'Municipalidad de Juan Bautista Alberdi',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Municipalidad de Juan Bautista Alberdi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Municipalidad de Juan Bautista Alberdi',
    description: 'Servicios y trámites municipales al alcance de tu mano',
    images: ['/images/og-image.jpg'],
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
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GovernmentOrganization',
              name: 'Municipalidad de Juan Bautista Alberdi',
              url: 'https://alberdi.gob.ar',
              logo: 'https://alberdi.gob.ar/images/logo.svg',
              description: 'Gobierno municipal de Juan Bautista Alberdi, Tucumán, Argentina',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. San Martín 123',
                addressLocality: 'Juan Bautista Alberdi',
                addressRegion: 'Tucumán',
                postalCode: 'T4178',
                addressCountry: 'AR',
              },
              telephone: '+54 3865-421000',
              email: 'contacto@alberdi.gob.ar',
              openingHours: 'Mo-Fr 07:00-13:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -27.6839,
                longitude: -65.4456,
              },
              sameAs: [
                'https://www.facebook.com/MunicipalidadAlberdi',
                'https://www.instagram.com/municipalidadalberdi',
                'https://twitter.com/MuniAlberdi',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link focus-visible:focus">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
