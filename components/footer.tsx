import * as React from 'react';
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-warm-white border-t border-brand-charcoal/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-warm-white text-brand-charcoal">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-brand-warm-white">
                ORIZ<span className="text-brand-olive font-medium">PAK</span>
              </span>
            </Link>
            <p className="text-brand-warm-white/70 text-sm font-body leading-relaxed max-w-sm">
              Desarrollamos soluciones de packaging premium sustentable para empresas que buscan reducir su impacto ambiental sin comprometer la calidad ni el rendimiento industrial.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-2xl bg-brand-warm-white/10 text-brand-warm-white hover:bg-brand-olive hover:text-brand-warm-white transition-colors duration-200"
                aria-label="LinkedIn de Orizpack"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-2xl bg-brand-warm-white/10 text-brand-warm-white hover:bg-brand-olive hover:text-brand-warm-white transition-colors duration-200"
                aria-label="Instagram de Orizpack"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-warm-white mb-6">Navegación</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-brand-warm-white/70 hover:text-brand-olive text-sm font-body transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-brand-warm-white/70 hover:text-brand-olive text-sm font-body transition-colors duration-200">
                  Catálogo de Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-brand-warm-white/70 hover:text-brand-olive text-sm font-body transition-colors duration-200">
                  Nosotros y Misión
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-brand-warm-white/70 hover:text-brand-olive text-sm font-body transition-colors duration-200">
                  Contacto B2B
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-warm-white mb-6">Contacto B2B</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-brand-warm-white/70 text-sm font-body leading-relaxed">
                <MapPin className="h-5 w-5 text-brand-olive flex-shrink-0 mt-0.5" />
                <span>Parque Industrial Enea, Pudahuel, Santiago, Chile</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-warm-white/70 text-sm font-body">
                <Phone className="h-5 w-5 text-brand-olive flex-shrink-0" />
                <span>+56 2 2840 5900</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-warm-white/70 text-sm font-body">
                <Mail className="h-5 w-5 text-brand-olive flex-shrink-0" />
                <span>contacto@orizpack.cl</span>
              </li>
            </ul>
          </div>

          {/* Certifications Col */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-warm-white mb-6">Certificaciones Reales</h3>
            <div className="space-y-4 text-xs font-body text-brand-warm-white/60">
              <div className="border border-brand-warm-white/10 rounded-2xl p-4 bg-brand-warm-white/5">
                <span className="font-heading font-bold text-brand-warm-white block mb-1">FSC® Recycled / 100%</span>
                Papeles y cartones provenientes de fuentes forestales controladas y manejadas de forma sustentable.
              </div>
              <div className="border border-brand-warm-white/10 rounded-2xl p-4 bg-brand-warm-white/5">
                <span className="font-heading font-bold text-brand-warm-white block mb-1">OK Compost HOME / INDUSTRIAL</span>
                Certificación TÜV Austria que asegura biodegradabilidad completa sin residuos de microplásticos.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="mt-16 pt-8 border-t border-brand-warm-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-body text-brand-warm-white/40 gap-4">
          <p>&copy; {currentYear} ORIZPAK. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-brand-olive transition-colors duration-200">
              Políticas de Privacidad
            </Link>
            <Link href="#" className="hover:text-brand-olive transition-colors duration-200">
              Términos de Servicio B2B
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
