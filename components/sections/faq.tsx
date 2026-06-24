'use client';

import * as React from 'react';
import Link from 'next/link';
import { faqItems } from '@/lib/data';
import Accordion from '../ui/accordion';
import Badge from '../ui/badge';
import Button from '../ui/button';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = React.useState<string | null>('faq-moq');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-brand-warm-white py-24 sm:py-32 border-b border-brand-charcoal/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* FAQ Intro */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <Badge variant="outline">Preguntas Frecuentes</Badge>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-brand-charcoal leading-tight">
              Resolviendo tus dudas técnicas
            </h2>
            <p className="font-body text-base text-brand-charcoal/70 leading-relaxed">
              Encuentra respuestas rápidas sobre volúmenes mínimos de compra, personalización con marca corporativa, tiempos de degradación y logística.
            </p>
            <div className="pt-4">
              <p className="font-body text-sm text-brand-charcoal/60 mb-4">¿No encuentras lo que buscas?</p>
              <Link href="/contacto">
                <Button variant="outline" size="sm">
                  Contactar Soporte
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="lg:col-span-8 divide-y divide-brand-charcoal/10 border-t border-brand-charcoal/10">
            {faqItems.map((item) => (
              <Accordion
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
