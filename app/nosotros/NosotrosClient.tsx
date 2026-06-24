'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Eye, Target, Compass, Award, ShieldCheck, Milestone } from 'lucide-react';
import Badge from '@/components/ui/badge';

export default function NosotrosClient() {
  const values = [
    {
      title: 'Innovación Circular',
      description: 'Re-imaginamos las soluciones de packaging desde el ciclo de retorno biológico, no del descarte industrial.',
      icon: <Compass className="h-5 w-5" />
    },
    {
      title: 'Excelencia Técnica',
      description: 'El packaging ecológico debe ser tan resistente e higiénico como el tradicional. Testeamos rigurosamente cada lote.',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'Auditoría Transparente',
      description: 'Respaldamos cada afirmación de sostenibilidad con certificaciones internacionales acreditadas (FSC, PEFC, TÜV).',
      icon: <ShieldCheck className="h-5 w-5" />
    }
  ];

  return (
    <div className="bg-brand-sand/10 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-7 text-left space-y-6">
            <Badge variant="outline">Nuestra Historia</Badge>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal">
              Empresa líder en <br />
              <span className="text-brand-olive">tecnología circular</span>
            </h1>
            <p className="font-body text-lg text-brand-charcoal/80 leading-relaxed">
              ORIZPAK nace para resolver la dependencia petroquímica en el packaging B2B. Integramos ingeniería de materiales y biomasa agrícola regional.
            </p>
            <p className="font-body text-base text-brand-charcoal/70 leading-relaxed">
              No reemplazamos plástico por marketing. Desarrollamos envases técnicos de alto rendimiento que retornan a la tierra como abono vegetal.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual branding block */}
            <div
              className="w-full max-w-[360px] aspect-square rounded-3xl p-8 border border-brand-charcoal/10 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, #606c38 0%, #283618 100%)',
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-warm-white/10 text-brand-warm-white">
                <Leaf className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-brand-warm-white leading-tight">
                  Packaging que no deja huella.
                </h3>
                <div className="h-[2px] w-16 bg-brand-sand" />
                <p className="font-body text-xs text-brand-warm-white/80">
                  OrizPak S.A. &copy; Ciudad de Corrientes, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Misión Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="bg-brand-warm-white p-10 rounded-3xl border border-brand-charcoal/10 shadow-soft flex flex-col justify-between text-left group hover:border-brand-charcoal/30 transition-all duration-200"
          >
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-charcoal/5 text-brand-charcoal">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal">
                Nuestra Misión
              </h2>
              <p className="font-body text-base text-brand-charcoal/80 leading-relaxed">
                Proveer soluciones de empaque B2B con degradación biológica total. Garantizamos rendimiento industrial sin huella contaminante.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-charcoal/10 flex items-center space-x-2 text-xs font-heading font-bold text-brand-charcoal/50 uppercase tracking-widest">
              <Milestone className="h-4 w-4 text-brand-olive" />
              <span>Propósito Operativo</span>
            </div>
          </motion.div>

          {/* Visión Card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="bg-brand-warm-white p-10 rounded-3xl border border-brand-charcoal/10 shadow-soft flex flex-col justify-between text-left group hover:border-brand-charcoal/30 transition-all duration-200"
          >
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-charcoal/5 text-brand-charcoal">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal">
                Nuestra Visión
              </h2>
              <p className="font-body text-base text-brand-charcoal/80 leading-relaxed">
                Liderar la transición hacia biopolímeros a partir de residuos agroindustriales. Sustituimos polímeros de origen fósil en Sudamérica.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-charcoal/10 flex items-center space-x-2 text-xs font-heading font-bold text-brand-charcoal/50 uppercase tracking-widest">
              <Milestone className="h-4 w-4 text-brand-olive" />
              <span>Proyección al 2030</span>
            </div>
          </motion.div>
        </div>

        {/* Corporate Values */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <Badge variant="outline">Nuestros Pilares</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-charcoal">
            Valores Corporativos
          </h2>
          <p className="font-body text-sm sm:text-base text-brand-charcoal/70 leading-relaxed">
            Principios irrenunciables que regulan nuestras operaciones, desde la ingeniería de materiales hasta las relaciones con nuestros distribuidores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-brand-warm-white p-8 rounded-3xl border border-brand-charcoal/10 text-left hover:border-brand-charcoal/30 hover:shadow-soft transition-all duration-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-charcoal/5 text-brand-charcoal mb-6">
                {val.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-3">
                {val.title}
              </h3>
              <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
