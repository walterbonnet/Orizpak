'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, MapPin } from 'lucide-react';
import Button from '../ui/button';
import Badge from '../ui/badge';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-warm-white py-24 sm:py-32 border-b border-brand-charcoal/10">
      {/* Editorial background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a05_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a05_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center"
            >
              <Badge variant="outline">Ingeniería de Materiales Biodegradables</Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-charcoal leading-none"
            >
              Nacido del grano. <br />
              <span className="text-brand-olive">Vuelto a la tierra.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg sm:text-xl text-brand-charcoal/80 max-w-2xl leading-relaxed"
            >
              Envases industriales fabricados con cáscara de arroz en Corrientes. Resistencia térmica superior sin aditivos fósiles ni microplásticos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/contacto">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Catálogo Técnico
                </Button>
              </Link>
              <Link href="/productos">
                <Button variant="outline" size="lg">
                  Ver Envases
                </Button>
              </Link>
            </motion.div>

            {/* Indicators (90-120 días, Sin BPA, Hecho en Corrientes) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-charcoal/10"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2 text-brand-charcoal">
                  <Leaf className="h-5 w-5 text-brand-olive" />
                  <span className="font-heading font-bold text-sm text-brand-charcoal">90–120 días</span>
                </div>
                <p className="font-body text-xs text-brand-charcoal/70">Desintegración molecular biológica sin residuos.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2 text-brand-charcoal">
                  <ShieldCheck className="h-5 w-5 text-brand-olive" />
                  <span className="font-heading font-bold text-sm text-brand-charcoal">Sin BPA</span>
                </div>
                <p className="font-body text-xs text-brand-charcoal/70">Fórmula libre de aditivos halogenados o BPA.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2 text-brand-charcoal">
                  <MapPin className="h-5 w-5 text-brand-olive" />
                  <span className="font-heading font-bold text-sm text-brand-charcoal">Ctes, Argentina</span>
                </div>
                <p className="font-body text-xs text-brand-charcoal/70">Producción regional a base de agro-residuos.</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Presentation (Right Side) */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Elegant organic mockup backdrop: solid warm beige with rounded-3xl and fine border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl border border-brand-charcoal/10 bg-brand-sand p-8 flex flex-col justify-between"
            >
              {/* Product Design Mock details inside card */}
              <div className="flex justify-between items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-charcoal text-brand-warm-white font-heading font-extrabold text-sm">
                  OP
                </div>
                <Badge variant="charcoal">ORIGEN ARROZ</Badge>
              </div>

              {/* Central Illustration of organic/tech concept */}
              <div className="my-auto py-8 flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  {/* Decorative circle outline */}
                  <div className="absolute inset-[-10px] rounded-full border border-dashed border-brand-charcoal/20" />
                  <div className="h-28 w-28 rounded-full bg-brand-warm-white flex items-center justify-center shadow-soft">
                    <Leaf className="h-12 w-12 text-brand-olive" />
                  </div>
                </div>
                <span className="font-heading text-lg font-bold text-brand-charcoal tracking-wide">
                  Cáscara de Arroz Sólida
                </span>
                <p className="font-body text-xs text-brand-charcoal/70 text-center max-w-[200px] leading-relaxed">
                  Desintegración biológica en tierra en 90 días.
                </p>
              </div>

              <div className="border-t border-brand-charcoal/10 pt-4 flex justify-between items-center text-xs font-heading font-bold text-brand-charcoal/60">
                <span>ORIZPAK ARGENTINA</span>
                <span>FBR. CORRIENTES</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
