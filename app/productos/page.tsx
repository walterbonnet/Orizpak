import { Metadata } from 'next';
import { Suspense } from 'react';
import ProductosCatalog from './ProductosCatalog';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Catálogo de Envases de Cáscara de Arroz B2B | ORIZPAK',
  description: 'Explora nuestra gama de platos, vasos, bandejas y cubiertos biocompostables de alto rendimiento para gastronomía y delivery. Soluciones certificadas OK Compost.',
  openGraph: {
    title: 'Catálogo de Envases de Cáscara de Arroz B2B | ORIZPAK',
    description: 'Explora nuestra gama de platos, vasos, bandejas y cubiertos biocompostables de alto rendimiento para gastronomía y delivery. Soluciones certificadas OK Compost.',
    url: 'https://orizpack.com.ar/productos',
    siteName: 'ORIZPAK',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function ProductosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Catálogo de Packaging de Cáscara de Arroz ORIZPAK',
    'description': 'Envases compostables certificados para cafeterías, restaurantes y catering.',
    'url': 'https://orizpack.com.ar/productos',
    'itemListElement': products.map((prod, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': prod.name,
        'description': prod.description,
        'image': `https://orizpack.com.ar${prod.image}`,
        'category': prod.category,
        'offers': {
          '@type': 'AggregateOffer',
          'priceCurrency': 'ARS',
          'offerCount': 1,
          'eligibleQuantity': {
            '@type': 'QuantitativeValue',
            'value': prod.moq,
            'unitText': 'units'
          }
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-brand-sand/10">
          <div className="animate-pulse font-heading text-xl text-brand-charcoal">Cargando catálogo...</div>
        </div>
      }>
        <ProductosCatalog />
      </Suspense>
    </>
  );
}
