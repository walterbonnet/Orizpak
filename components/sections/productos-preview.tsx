'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';
import { products } from '@/lib/data';
import Badge from '../ui/badge';
import Button from '../ui/button';

export const ProductosPreview: React.FC = () => {
  return (
    <section className="bg-brand-warm-white py-24 sm:py-32 border-b border-brand-charcoal/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-4">
            <Badge variant="outline">Gama Biocompostable</Badge>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">
              Línea Cáscara de Arroz B2B
            </h2>
          </div>
          <p className="font-body text-base sm:text-lg text-brand-charcoal/70 max-w-md text-left md:text-right leading-relaxed">
            Nuestros platos, vasos, bandejas y cubiertos combinan rigidez estructural con degradación biológica total.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-brand-warm-white p-6 hover:shadow-soft hover:border-brand-charcoal/30 transition-all duration-200"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-sand/20 mb-6 flex items-center justify-center border border-brand-charcoal/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="sand">{product.impact}</Badge>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal group-hover:text-brand-olive transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-brand-charcoal/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {product.certifications.slice(0, 2).map((cert) => (
                    <span key={cert} className="text-[10px] font-heading font-bold text-brand-charcoal/60 bg-brand-sand px-2 py-0.5 rounded-full">
                      {cert.split(' ')[0]}
                    </span>
                  ))}
                </div>
                <Link href={`/productos?id=${product.id}`} className="inline-flex items-center text-sm font-heading font-bold text-brand-charcoal hover:text-brand-olive transition-colors duration-200">
                  Ver Ficha
                  <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/productos">
            <Button variant="outline" size="lg" icon={<Box className="h-4 w-4" />}>
              Ver Catálogo Completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductosPreview;
