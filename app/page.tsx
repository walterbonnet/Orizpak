import * as React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/hero';
import ProductosPreview from '@/components/sections/productos-preview';
import Proceso from '@/components/sections/proceso';
import Comparativa from '@/components/sections/comparativa';
import EcoGastronomia from '@/components/sections/ecogastronomia';

// Dynamic imports for code splitting and reducing initial bundle size
const Impacto = dynamic(() => import('@/components/sections/impacto'), {
  ssr: true,
  loading: () => <div className="h-64 bg-brand-charcoal animate-pulse" />,
});

const FAQ = dynamic(() => import('@/components/sections/faq'), {
  ssr: true,
  loading: () => <div className="h-96 bg-brand-warm-white border border-brand-charcoal/10 animate-pulse" />,
});

const ContactoSection = dynamic(() => import('@/components/sections/contacto-section'), {
  ssr: true,
  loading: () => <div className="h-96 bg-brand-sand/20 animate-pulse" />,
});

export const metadata: Metadata = {
  title: 'ORIZPAK | Packaging Sustentable de Cáscara de Arroz',
  description: 'Envases biocompostables de alto rendimiento fabricados con cáscara de arroz de Corrientes, Argentina. Soluciones de triple impacto para gastronomía y delivery.',
  openGraph: {
    title: 'ORIZPAK | Packaging Sustentable de Cáscara de Arroz',
    description: 'Envases biocompostables de alto rendimiento fabricados con cáscara de arroz de Corrientes, Argentina. Soluciones de triple impacto para gastronomía y delivery.',
    url: 'https://orizpack.com.ar',
    siteName: 'ORIZPAK',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function Home() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'ORIZPAK',
    'alternateName': 'Orizpak Packaging',
    'url': 'https://orizpack.com.ar',
    'logo': 'https://orizpack.com.ar/logo.png',
    'description': 'Envases biocompostables premium hechos con cáscara de arroz en Corrientes. Soluciones de triple impacto y alto rendimiento para gastronomía B2B.',
    'sameAs': [
      'https://www.linkedin.com/company/orizpak'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+56-2-2840-5900',
      'contactType': 'sales',
      'email': 'contacto@orizpack.cl',
      'areaServed': 'AR',
      'availableLanguage': 'Spanish'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': 'Corrientes',
      'addressCountry': 'AR'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <ProductosPreview />
      <Proceso />
      <Impacto />
      <Comparativa />
      <EcoGastronomia />
      <FAQ />
      <ContactoSection />
    </>
  );
}
