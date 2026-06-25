import { Product, Metric, ProcessStep, FAQItem } from '../types';

export const products: Product[] = [
  {
    id: 'vaso-orizpack',
    name: 'Vaso OrizPack de 350ml/500ml',
    description: 'Envase térmico rígido de cáscara de arroz. Aislante natural para bebidas calientes y frías sin aditivos químicos.',
    category: 'ECO-PACKAGING',
    material: 'Cáscara de Arroz',
    image: '/images/vaso-arroz.svg',
    dimensions: '350ml / 500ml',
    moq: 10,
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
      'Resistencia a la humedad prolongada: Diseñado para mantener su rigidez estructural durante todo el ciclo de uso gastronómico sin ablandarse.'
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
    value: '320000 Ton',
    label: 'RESIDUO DISPONIBLE EN LA REGIÓN',
    description: 'Mitigación de afecciones respiratorias en familias rurales mediante la valorización y rescate de la cáscara de arroz que hoy se quema a cielo abierto en los molinos del NEA.',
    icon: 'Leaf'
  },
  {
    id: 'plastic-replaced',
    value: '100%',
    label: 'LIBRE DE POLÍMEROS FÓSILES',
    description: 'Sustitución real del plástico de un solo uso y telgopor en el canal gastronómico y delivery por vajilla rígida biocompostable.',
    icon: 'ShieldCheck'
  },
  {
    id: 'rice-reutilized',
    value: '70% / 30%',
    label: 'BIOMASA LOCAL INTEGRADA',
    description: 'Fórmula optimizada de triple impacto basada en cáscara de arroz procesada de Corrientes combinada con biopolímeros naturales.',
    icon: 'Trees'
  },
  {
    id: 'clients-certified',
    value: '90-120 Días',
    label: 'DEGRADACIÓN BIOLÓGICA COMPLETA',
    description: 'Sustentabilidad medible respaldada bajo normas científicas de aptitud alimentaria y compostaje industrial (ISO 17088 / INTI).',
    icon: 'Award'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Materia Prima Local',
    description: 'Recolección de la cáscara de arroz sobrante en los molinos de Corrientes. Así, evitamos de manera directa la quema de este residuo a cielo abierto en la región.',
    icon: 'Leaf'
  },
  {
    step: 2,
    title: 'Molienda Limpia',
    description: 'Proceso puramente mecánico de molienda fina de la biomasa arrocera, libre de solventes químicos y ácidos contaminantes.',
    icon: 'Cpu'
  },
  {
    step: 3,
    title: 'Fórmula Circular',
    description: 'Fusión del residuo de arroz procesado con biopolímeros naturales a base de almidón vegetal. Creación de gránulos rígidos listos para el moldeo.',
    icon: 'Layers'
  },
  {
    step: 4,
    title: 'Inyección Industrial',
    description: 'Moldeo por inyección térmica industrial utilizando matrices de acero de alta precisión. Fabricación eficiente, rápida y de bajo consumo energético.',
    icon: 'Factory'
  },
  {
    step: 5,
    title: 'Servicio Gastronómico',
    description: 'Distribución directa en locales de delivery, eventos y ferias. Productos descartables con alta resistencia térmica y barrera impermeable a la humedad.',
    icon: 'ShieldCheck'
  },
  {
    step: 6,
    title: 'Retorno al Suelo',
    description: 'Degradación biológica completa a través de plantas de compostaje en un plazo de 90 a 120 días. El material vuelve a la tierra de forma orgánica y libre de microplásticos.',
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
    answer: 'Nuestros pedidos mínimos están adaptados a la escala de cada comercio, ofreciendo packs desde 10 unidades (ideales para pruebas operativas de menú) hasta cajas cerradas de 500 unidades para el stock mensual. Para asegurar la provisión continua y tarifas corporativas preferenciales, coordinamos contratos de suministro anual programado.'
  },
  {
    id: 'faq-temp',
    question: '¿Se ablanda o deforma con comidas y líquidos calientes?',
    answer: 'No, para nada. A diferencia del cartón o el papel, el biocompuesto de cáscara de arroz no absorbe humedad ni grasas. Soporta perfectamente líquidos hirviendo (hasta 100°C) y mantiene su rigidez intacta por más de 12 horas, asegurando que el delivery llegue impecable.'
  },
  {
    id: 'faq-custom',
    question: '¿El packaging es personalizable?',
    answer: 'Desarrollo a medida para la incorporación de la identidad visual de tu local mediante grabado láser de alta precisión en la superficie del biocompuesto o tampografía ecológica, destacando tu logo junto al sello de OrizPak.'
  },
  {
    id: 'faq-time',
    question: '¿Cómo es el proceso de compostaje?',
    answer: 'Cuenta con certificación OK Compost HOME. Se desintegra molecularmente en composteras domésticas en un plazo de 90 a 120 días.'
  }
];
