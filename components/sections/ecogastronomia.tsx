'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChefHat, BadgePercent, CheckCircle, Lightbulb } from 'lucide-react';
import Badge from '../ui/badge';
import Button from '../ui/button';

export const EcoGastronomia: React.FC = () => {
  const benefits = [
    {
      title: 'Sello Local Sustentable',
      description: 'Certificación y recursos gráficos de co-branding para visibilizar el uso de envases libres de polímeros petroquímicos.',
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: 'Tarifas Corporativas',
      description: 'Descuentos técnicos por escala y contratos de suministro anual programado para garantizar el stock operativo.',
      icon: <BadgePercent className="h-5 w-5" />
    },
    {
      title: 'Auditorías de Merma',
      description: 'Análisis dimensional de despachos para optimizar el gramaje, peso de carga y costos logísticos de empaque.',
      icon: <Lightbulb className="h-5 w-5" />
    },
    {
      title: 'Diseño Personalizado Gratuito',
      description: 'Desarrollo a medida de planos troquelados y grabado láser personalizado sin costo de matricería inicial.',
      icon: <ChefHat className="h-5 w-5" />
    }
  ];

  return (
    <section className="bg-brand-sand/20 py-24 sm:py-32 relative overflow-hidden border-b border-brand-charcoal/10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <Badge variant="outline">Alianza Gastronómica</Badge>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-brand-charcoal leading-tight">
              Únete al Programa <br />
              <span className="text-brand-charcoal/70">EcoGastronomía</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
              Valida el desempeño ecológico de tu establecimiento. Accede a suministro certificado, auditoría logística de mermas y material co-branding.
            </p>
            <div className="pt-2">
              <Link href="/contacto?ref=ecogastronomia">
                <Button variant="primary" size="lg">
                  Postular al Programa B2B
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-brand-warm-white p-8 rounded-3xl border border-brand-charcoal/10 hover:border-brand-charcoal/30 hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-charcoal/5 text-brand-charcoal mb-8">
                    {benefit.icon}
                  </div>
                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  {/* Description */}
                  <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoGastronomia;
