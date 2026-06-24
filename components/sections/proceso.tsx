'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Factory, Recycle, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { processSteps } from '@/lib/data';
import Badge from '../ui/badge';

export const Proceso: React.FC = () => {
  // Map strings to Lucide icon components
  const iconMap: Record<string, React.ReactNode> = {
    Leaf: <Leaf className="h-5 w-5" />,
    Cpu: <Cpu className="h-5 w-5" />,
    Layers: <Layers className="h-5 w-5" />,
    Factory: <Factory className="h-5 w-5" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5" />,
    Recycle: <Recycle className="h-5 w-5" />,
  };

  return (
    <section className="bg-brand-sand/20 py-24 sm:py-32 relative overflow-hidden border-b border-brand-charcoal/10">
      {/* Background Graphic Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brand-charcoal/10 hidden lg:block -translate-y-12" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <Badge variant="outline">Ciclo Cerrado</Badge>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">
            De la tierra a tu marca,<br />y de regreso a la tierra
          </h2>
          <p className="font-body text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
            Diseñamos cada fase de nuestra cadena de producción bajo principios de economía circular, valorizando la cáscara de arroz correntina sobrante.
          </p>
        </div>

        {/* Steps Grid - 6 columns on large screen */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative flex flex-col items-start bg-brand-warm-white p-6 rounded-3xl border border-brand-charcoal/10 hover:border-brand-charcoal/30 hover:shadow-soft transition-all duration-200 group"
            >
              {/* Step Number Badge - Large Editorial Number */}
              <div className="absolute top-4 right-6 font-heading font-extrabold text-4xl text-brand-charcoal/10 group-hover:text-brand-charcoal/20 transition-colors duration-200">
                0{step.step}
              </div>

              {/* Icon Container */}
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-charcoal/5 text-brand-charcoal mb-6 group-hover:bg-brand-charcoal group-hover:text-brand-warm-white transition-all duration-200">
                {iconMap[step.icon]}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold text-brand-charcoal mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-xs text-brand-charcoal/80 leading-relaxed text-left">
                {step.description}
              </p>

              {/* Connector for large screen */}
              {index < 5 && (
                <div className="absolute top-1/2 -right-4.5 hidden lg:flex items-center justify-center text-brand-charcoal/20 -translate-y-12 z-20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
