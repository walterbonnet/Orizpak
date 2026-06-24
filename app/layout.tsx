import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ORIZPAK | Packaging Sustentable de Cáscara de Arroz',
  description: 'Envases biocompostables premium hechos con cáscara de arroz en Corrientes. Soluciones de triple impacto y alto rendimiento para gastronomía B2B.',
  keywords: [
    'packaging sustentable',
    'compostable',
    'cáscara de arroz',
    'envases de arroz',
    'platos compostables',
    'vasos de arroz',
    'cubiertos compostables',
    'sorbetes ecológicos',
    'compostaje home',
    'Corrientes',
    'OK Compost',
    'B2B packaging'
  ],
  authors: [{ name: 'ORIZPAK Dev Team' }],
  openGraph: {
    title: 'ORIZPAK | Packaging Sustentable de Cáscara de Arroz',
    description: 'Envases biocompostables premium hechos con cáscara de arroz en Corrientes. Soluciones de triple impacto y alto rendimiento para gastronomía B2B.',
    url: 'https://orizpack.com.ar',
    siteName: 'ORIZPAK',
    locale: 'es_AR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-sand text-brand-charcoal selection:bg-brand-olive selection:text-brand-white">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
