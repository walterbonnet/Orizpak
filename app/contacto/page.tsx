import { Metadata } from 'next';
import { Suspense } from 'react';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
  title: 'Cotizaciones B2B y Muestras de Packaging | ORIZPAK',
  description: 'Solicita muestras gratuitas y cotizaciones personalizadas para tu marca. Soluciones de packaging sustentable de cáscara de arroz de alta calidad.',
  openGraph: {
    title: 'Cotizaciones B2B y Muestras de Packaging | ORIZPAK',
    description: 'Solicita muestras gratuitas y cotizaciones personalizadas para tu marca. Soluciones de packaging sustentable de cáscara de arroz de alta calidad.',
    url: 'https://orizpack.com.ar/contacto',
    siteName: 'ORIZPAK',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contacto B2B y Ventas Corporativas - ORIZPAK',
    'description': 'Formulario para solicitar muestras gratuitas de envases y cotizaciones por volumen.',
    'url': 'https://orizpack.com.ar/contacto',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'ORIZPAK',
      'telephone': '+56-2-2840-5900',
      'email': 'contacto@orizpack.cl'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-brand-sand/10">
          <div className="animate-pulse font-heading text-xl text-brand-charcoal">Cargando formulario...</div>
        </div>
      }>
        <ContactoClient />
      </Suspense>
    </>
  );
}
