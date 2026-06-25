import { Product, Metric, ProcessStep, FAQItem } from '../types';

export const products: Product[] = [
  {
    id: 'vaso-orizpack',
    name: 'Vaso OrizPack',
    description: 'Envase térmico rígido de cáscara de arroz. Aislante natural para bebidas calientes y frías sin aditivos químicos.',
    category: 'ECO-PACKAGING',
    material: 'Cáscara de Arroz',
    image: '/images/vaso-arroz.svg',
    dimensions: '350ml / 500ml',
    moq: 2000,
    certifications: [
      'Biocompostable Certificado (Norma ISO 17088 / INTI)',
      '0% Polímeros Petroquímicos (Libre de BPA)',
      'Apto Contacto Alimentario (Norma UNE-EN 1186 / INTI)'
    ],
    impact: 'Composta en 90-120 días',
    details: [
      'Estabilidad térmica garantizada hasta 100°C sin deformación.',
      'Aislamiento natural que reduce la transferencia de calor.',
      'Estructura libre de polímeros petroquímicos.',
      'Apto para lavavajillas y reutilización certificada.'
    ]
  },
  {
    id: 'plato-orizpack',
    name: 'Plato OrizPack Hondo y Playo',
    description: 'Vajilla de alta densidad mecánica. Rigidez idéntica al plástico inyectado, apto para alimentos calientes y grasas.',
    category: 'ECO-PACKAGING',
    material: 'Cáscara de Arroz',
    image: '/images/plato-arroz.svg',
    dimensions: 'Hondo: 18 cm (Capacidad ~600 ml) / Playo: 22 cm',
    moq: 1500,
    certifications: [
      'Biocompostable Certificado (Norma ISO 17088 / INTI)',
      '0% Polímeros Petroquímicos (Libre de BPA)',
      'Apto Contacto Alimentario (Norma UNE-EN 1186 / INTI)'
    ],
    impact: '0% Plástico - Agro-residuo',
    details: [
      'Resistencia a microondas y congelación (-20°C a 120°C).',
      'Barrera impermeable a lípidos y humedad.',
      'Apilado de alta precisión para cocinas profesionales.',
      'Degradación biológica completa sin liberar microplásticos.'
    ]
  },
  {
    id: 'bandeja-compartimentada',
    name: 'Bandeja Compartimentada OrizPack',
    description: 'Bandeja rígida para logística alimentaria. Mantiene la neutralidad organoléptica del almidón sin condensación.',
    category: 'ECO-PACKAGING',
    material: 'Biocompuesto de Arroz',
    image: '/images/bandeja-arroz.svg',
    dimensions: '24 cm x 18 cm x 2.5–3 cm',
    moq: 1000,
    certifications: [
      'Biocompostable Certificado (Norma ISO 17088 / INTI)',
      '0% Polímeros Petroquímicos (Libre de BPA)',
      'Apto Contacto Alimentario (Norma UNE-EN 1186 / INTI)'
    ],
    impact: '-85% Emisiones CO₂ eq',
    details: [
      'Barrera hidrofóbica natural contra la pérdida de vapor.',
      'Cierre hermético optimizado compatible con tapas biodegradables.',
      'Estabilidad estructural en transporte de media y larga distancia.',
      'Compuesto vegetal libre de compuestos halogenados.'
    ]
  },
  {
    id: 'bandeja-orizdelivery',
    name: 'Bandeja OrizDelivery',
    description: 'Contenedor hermético diseñado específicamente para transporte y delivery de comida preparada. Conserva el calor sin ablandar el envase.',
    category: 'ECO-PACKAGING',
    material: 'Biocompuesto de Arroz',
    image: '/images/contenedor-bagazo.svg',
    dimensions: '22 cm x 16 cm x 6 cm',
    moq: 1500,
    certifications: [
      'Biocompostable Certificado (Norma ISO 17088 / INTI)',
      '0% Polímeros Petroquímicos (Libre de BPA)',
      'Apto Contacto Alimentario (Norma UNE-EN 1186 / INTI)'
    ],
    impact: 'Estanqueidad térmica 100%',
    details: [
      'Cierre seguro de alta resistencia para transporte.',
      'Paredes térmicas que conservan la temperatura del alimento.',
      'Totalmente compostable en origen agrícola.',
      'Apta para microondas y líquidos calientes.'
    ]
  },
  {
    id: 'cubiertos-orizpack',
    name: 'Kit de Cubiertos OrizPack',
    description: 'Utensilios rígidos de alto rendimiento. Rigidez mecánica superior que no se dobla ante cortes o alimentos densos.',
    category: 'ECO-PACKAGING',
    material: 'Biocompuesto de Arroz',
    image: '/images/cubiertos-arroz.svg',
    dimensions: 'Largo 16 cm',
    moq: 5000,
    certifications: [
      'Biocompostable Certificado (Norma ISO 17088 / INTI)',
      '0% Polímeros Petroquímicos (Libre de BPA)',
      'Apto Contacto Alimentario (Norma UNE-EN 1186 / INTI)'
    ],
    impact: 'Reutilizable y Compostable',
    details: [
      'Resistencia al corte y tracción física certificada.',
      'Incluye servilleta compostable de fibra de bambú.',
      'Reutilizable y apto para esterilización doméstica.',
      'Bordes de precisión pulidos por fricción natural.'
    ]
  },
  {
    id: 'sorbetes-orizpack',
    name: 'Sorbetes OrizPack',
    description: 'Conducto rígido hidrofóbico de arroz. Mantiene su integridad estructural en líquidos por más de 12 horas.',
    category: 'ECO-PACKAGING',
    material: 'Cáscara de Arroz',
    image: '/images/sorbete-arroz.svg',
    dimensions: 'Largo 20 cm / Ø 8 mm',
    moq: 10000,
    certifications: [
      'Biocompostable Certificado (Norma ISO 17088 / INTI)',
      '0% Polímeros Petroquímicos (Libre de BPA)',
      'Apto Contacto Alimentario (Norma UNE-EN 1186 / INTI)'
    ],
    impact: 'No se ablanda - 100% Bio',
    details: [
      'Cero absorción de agua: no se ablanda ni altera sabores.',
      'Estabilidad garantizada en bebidas ácidas y alcohólicas.',
      'Biodegradación en compostera doméstica en 90 días.',
      'Diámetro calibrado para emulsiones y licuados densos.'
    ]
  },
  {
    id: 'tapas-orizpack',
    name: 'Tapas OrizPack',
    description: 'Tapas ecológicas a presión compatibles con vasos OrizPack de 350ml y 500ml. Sellado hermético para líquidos calientes.',
    category: 'ECO-PACKAGING',
    material: 'Biocompuesto de Arroz',
    image: '/images/vaso-pla.svg',
    dimensions: 'Compatibles 350ml y 500ml',
    moq: 2000,
    certifications: [
      'Biocompostable Certificado (Norma ISO 17088 / INTI)',
      '0% Polímeros Petroquímicos (Libre de BPA)',
      'Apto Contacto Alimentario (Norma UNE-EN 1186 / INTI)'
    ],
    impact: 'Cero derrames B2B',
    details: [
      'Calce hermético a presión para evitar fugas.',
      'Apto para bebidas calientes hasta 100°C.',
      'Material vegetal libre de aditivos petroquímicos.',
      'Diseño apilable para servicio ágil.'
    ]
  }
];

export const metrics: Metric[] = [
  {
    id: 'co2-avoided',
    value: '620 Ton',
    label: 'CO₂ Evitado al Año',
    description: 'Reducción de huella de carbono certificada por sustitución de polímeros fósiles.',
    icon: 'Leaf'
  },
  {
    id: 'plastic-replaced',
    value: '18.4 Millones',
    label: 'Plásticos Reemplazados',
    description: 'Unidades de un solo uso sustituidas en el canal HORECA.',
    icon: 'ShieldCheck'
  },
  {
    id: 'rice-reutilized',
    value: '380 Ton',
    label: 'Biomasa Reutilizada',
    description: 'Residuos agrícolas de Corrientes integrados a la economía circular.',
    icon: 'Trees'
  },
  {
    id: 'clients-certified',
    value: '450+',
    label: 'Operaciones Certificadas',
    description: 'Establecimientos B2B con auditoría de residuo cero.',
    icon: 'Award'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Residuo Agrícola',
    description: 'Recolección de cáscara de arroz sobrante en Corrientes. Evitamos la quema del residuo agrícola en origen.',
    icon: 'Leaf'
  },
  {
    step: 2,
    title: 'Transformación',
    description: 'Molienda física ultrafina de la biomasa arrocera. Proceso mecánico libre de solventes químicos y ácidos.',
    icon: 'Cpu'
  },
  {
    step: 3,
    title: 'Biocompuesto',
    description: 'Fusión de biomasa con polímeros de almidón vegetal. Síntesis de gránulos rígidos de alta densidad.',
    icon: 'Layers'
  },
  {
    step: 4,
    title: 'Producción Limpia',
    description: 'Moldeo industrial por termocompresión de bajo consumo. Acabado de precisión micrométrica sin mermas.',
    icon: 'Factory'
  },
  {
    step: 5,
    title: 'Uso Profesional',
    description: 'Integración directa en logística y servicio B2B. Resistencia hidrofóbica y térmica en operaciones exigentes.',
    icon: 'ShieldCheck'
  },
  {
    step: 6,
    title: 'Compostaje Rápido',
    description: 'Ciclo de degradación: 90–120 días → retorno al suelo.',
    icon: 'Recycle'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-arroz',
    question: '¿Por qué cáscara de arroz de Corrientes?',
    answer: 'Corrientes concentra el mayor volumen arrocero de Argentina. Aprovechamos la cascarilla resultante de la molienda para evitar su quema e inyectar valor local.'
  },
  {
    id: 'faq-moq',
    question: '¿Cuáles son los pedidos mínimos (MOQ)?',
    answer: 'Los mínimos varían desde 1,000 unidades en bandejas hasta 5,000 en cubiertos. Ofrecemos contratos de suministro anual programado.'
  },
  {
    id: 'faq-temp',
    question: '¿Mantiene la rigidez con líquidos calientes?',
    answer: 'Sí. La estructura de sílice natural del arroz es hidrofóbica. Soporta aceites y líquidos calientes a 100°C por más de 12 horas.'
  },
  {
    id: 'faq-custom',
    question: '¿El packaging es personalizable?',
    answer: 'Sí. Realizamos grabado láser de precisión y flexografía digital con tintas al agua aptas para consumo alimentario.'
  },
  {
    id: 'faq-time',
    question: '¿Cómo es el proceso de compostaje?',
    answer: 'Cuenta con certificación OK Compost HOME. Se desintegra molecularmente en composteras domésticas en un plazo de 90 a 120 días.'
  }
];
