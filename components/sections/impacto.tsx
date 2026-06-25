'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Trees, Award } from 'lucide-react';
import { metrics } from '@/lib/data';
import Badge from '../ui/badge';

// Custom Count Up component using IntersectionObserver for premium visual engagement
interface CountUpProps {
  value: string;
}

const CountUp: React.FC<CountUpProps> = ({ value }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  // Parse value: e.g. "620 Ton" -> 620, "18.4 Millones" -> 18.4, "450+" -> 450
  const match = value.match(/^([\d.]+)(.*)$/);
  const targetNumber = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
          const duration = 1200; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            
            const currentCount = start + easeProgress * targetNumber;
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNumber);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  const formattedCount = targetNumber % 1 === 0 ? Math.floor(count).toLocaleString('es-AR') : count.toFixed(1);

  return (
    <div ref={elementRef} className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-warm-white tracking-tight mb-2">
      {hasAnimated ? `${formattedCount}${suffix}` : `0${suffix}`}
    </div>
  );
};

export const Impacto: React.FC = () => {
  // Map string to Lucide icon components
  const iconMap: Record<string, React.ReactNode> = {
    Leaf: <Leaf className="h-5 w-5" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5" />,
    Trees: <Trees className="h-5 w-5" />,
    Award: <Award className="h-5 w-5" />,
  };

  return (
    <section className="bg-brand-charcoal text-brand-warm-white py-24 sm:py-32 relative overflow-hidden border-b border-brand-charcoal/10">
      {/* Editorial grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-6 text-left space-y-4">
            <Badge variant="outline" className="border-brand-warm-white/20 text-brand-warm-white bg-transparent">
              Indicadores Clave
            </Badge>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-brand-warm-white leading-tight">
              Sustentabilidad que <br />
              <span className="text-brand-sand">puedes medir y auditar</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-body text-base sm:text-lg text-brand-warm-white/70 text-left leading-relaxed">
              El packaging ecológico no es solo una declaración de intenciones. Proveemos a nuestros clientes B2B en Corrientes y Chaco con argumentos de diseño y datos precisos de sustitución ambiental que pueden incorporar directamente en sus reportes de triple impacto y balances de ESG.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col justify-between bg-brand-warm-white/5 border border-brand-warm-white/10 p-8 rounded-3xl hover:border-brand-warm-white/30 hover:bg-brand-warm-white/10 transition-all duration-200 group"
            >
              <div>
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-warm-white/10 text-brand-warm-white mb-8 group-hover:bg-brand-warm-white group-hover:text-brand-charcoal transition-all duration-200">
                  {iconMap[metric.icon]}
                </div>

                {/* Animated Metric Value */}
                <CountUp value={metric.value} />

                {/* Metric Label */}
                <div className="font-heading text-xs font-bold text-brand-sand uppercase tracking-widest mb-4">
                  {metric.label}
                </div>
              </div>

              {/* Metric Description */}
              <p className="font-body text-xs sm:text-sm text-brand-warm-white/60 leading-relaxed border-t border-brand-warm-white/10 pt-4">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impacto;
