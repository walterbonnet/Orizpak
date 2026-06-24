export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Vasos' | 'Platos' | 'Bandejas' | 'Cubiertos' | 'Sorbetes';
  material: 'Biocompuesto de Arroz' | 'Cáscara de Arroz';
  image: string;
  dimensions: string;
  moq: number; // Minimum Order Quantity
  certifications: string[];
  impact: string; // Eco-impact metric
  details: string[];
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
