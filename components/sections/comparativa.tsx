import * as React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import Badge from '../ui/badge';

export const Comparativa: React.FC = () => {
  const features = [
    {
      title: 'Materia Prima',
      traditional: 'Plásticos fósiles (PE, PP, PS) o celulosa de deforestación.',
      orizpack: 'Cáscara de arroz regional de Corrientes (agro-residuo valorizado).',
      highlight: true
    },
    {
      title: 'Huella de Carbono',
      traditional: 'Emisiones elevadas por extracción, síntesis y refinado petroquímico.',
      orizpack: 'Emisión neutra. Aprovechamiento de biomasa agrícola preexistente.',
      highlight: false
    },
    {
      title: 'Descomposición',
      traditional: '400 a 500 años. Fragmentación física en microplásticos persistentes.',
      orizpack: '90 a 120 días. Desintegración biológica total en compostera casera.',
      highlight: true
    },
    {
      title: 'Rendimiento Térmico',
      traditional: 'Condensación de vapor y potencial migración de monómeros tóxicos.',
      orizpack: 'Paredes hidrofóbicas transpirables. Cero migración química hasta 100°C.',
      highlight: false
    },
    {
      title: 'Normativa Legal',
      traditional: 'Afecto a prohibiciones globales y leyes de plásticos de un solo uso.',
      orizpack: 'Aprobado por SENASA y FDA para contacto directo con alimentos.',
      highlight: true
    }
  ];

  return (
    <section className="bg-brand-warm-white py-24 sm:py-32 border-b border-brand-charcoal/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <Badge variant="outline">Estudio Técnico</Badge>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">
            Compara el rendimiento <br />de tu packaging actual
          </h2>
          <p className="font-body text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
            Analizamos técnicamente el rendimiento y ciclo de vida de los envases comerciales tradicionales frente a la tecnología sustentable de ORIZPAK.
          </p>
        </div>

        {/* Comparison Table / Cards Container */}
        <div className="overflow-x-auto rounded-3xl border border-brand-charcoal/10 shadow-soft">
          <table className="min-w-full divide-y divide-brand-charcoal/10 text-left bg-brand-warm-white">
            <thead>
              <tr className="bg-brand-sand/10">
                <th scope="col" className="px-6 py-6 font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                  Característica
                </th>
                <th scope="col" className="px-6 py-6 font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal/60">
                  <div className="flex items-center space-x-2">
                    <ShieldAlert className="h-4.5 w-4.5 text-red-600" />
                    <span>Empaque Tradicional</span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-6 font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal bg-brand-charcoal/5">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4.5 w-4.5 text-brand-olive" />
                    <span>Solución ORIZPAK</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-charcoal/10 font-body text-sm text-brand-charcoal">
              {features.map((feat, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors duration-200 ${
                    feat.highlight ? 'bg-brand-sand/5' : ''
                  }`}
                >
                  {/* Feature Title */}
                  <td className="px-6 py-6 font-heading font-bold text-sm text-brand-charcoal max-w-[200px] align-middle">
                    {feat.title}
                  </td>
                  
                  {/* Traditional Details */}
                  <td className="px-6 py-6 text-brand-charcoal/70 max-w-[340px] leading-relaxed">
                    <div className="flex items-start space-x-2">
                      <X className="h-4.5 w-4.5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{feat.traditional}</span>
                    </div>
                  </td>
                  
                  {/* Orizpack Details */}
                  <td className="px-6 py-6 bg-brand-charcoal/[0.01] text-brand-charcoal font-semibold max-w-[340px] leading-relaxed">
                    <div className="flex items-start space-x-2">
                      <Check className="h-4.5 w-4.5 text-brand-olive flex-shrink-0 mt-0.5" />
                      <span>{feat.orizpack}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparativa;
