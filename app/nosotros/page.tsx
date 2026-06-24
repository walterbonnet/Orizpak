import { Metadata } from 'next';
import NosotrosClient from './NosotrosClient';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Líderes en Tecnología Circular | ORIZPAK',
  description: 'Conoce nuestra historia, misión y valores corporativos. Diseñamos e investigamos tecnologías de empaque compostables a partir de cáscara de arroz.',
  openGraph: {
    title: 'Sobre Nosotros | Líderes en Tecnología Circular | ORIZPAK',
    description: 'Conoce nuestra historia, misión y valores corporativos. Diseñamos e investigamos tecnologías de empaque compostables a partir de cáscara de arroz.',
    url: 'https://orizpack.com.ar/nosotros',
    siteName: 'ORIZPAK',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
