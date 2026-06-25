'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { products } from '@/lib/data';
import { Product } from '@/types';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';

const categories = ['Todos', 'ECO-PACKAGING'] as const;
const materials = [
  'Todos',
  'Cáscara de Arroz',
  'Biocompuesto de Arroz',
] as const;

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialProductId = searchParams.get('id');

  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Todos');
  const [selectedMaterial, setSelectedMaterial] = React.useState<string>('Todos');
  const [prevProductId, setPrevProductId] = React.useState<string | null>(initialProductId);
  const [activeProduct, setActiveProduct] = React.useState<Product | null>(
    initialProductId ? products.find((p) => p.id === initialProductId) || null : null
  );
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (activeProduct) {
      setSelectedImage(activeProduct.image);
    } else {
      setSelectedImage(null);
    }
  }, [activeProduct]);

  if (initialProductId !== prevProductId) {
    setPrevProductId(initialProductId);
    setActiveProduct(initialProductId ? products.find((p) => p.id === initialProductId) || null : null);
  }

  // Filter products
  const filteredProducts = products.filter((prod) => {
    const matchesSearch =
      prod.name.toLowerCase().includes(search.toLowerCase()) ||
      prod.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todos' || prod.category === selectedCategory;
    const matchesMaterial =
      selectedMaterial === 'Todos' || prod.material === selectedMaterial;
    return matchesSearch && matchesCategory && matchesMaterial;
  });

  return (
    <div className="bg-brand-sand/10 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-4 mb-16">
          <Badge variant="outline">Catálogo Industrial</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal">
            Nuestras Soluciones B2B
          </h1>
          <p className="font-body text-lg text-brand-charcoal/70 max-w-3xl leading-relaxed">
            Explora nuestra gama de productos compostables de alto rendimiento. Diseñados para integrarse en tu logística y mejorar la sustentabilidad de tu marca.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-brand-warm-white rounded-3xl border border-brand-charcoal/10 p-8 mb-12 shadow-soft space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-6 relative">
              <Search className="absolute left-4 top-3.5 h-4.5 w-4.5 text-brand-charcoal/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar producto..."
                className="w-full rounded-3xl border border-brand-charcoal/20 bg-brand-warm-white pl-12 pr-4 py-3 font-body text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-3">
              <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60">
                Categoría
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-3xl px-4 py-2 font-heading text-xs font-bold transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-brand-charcoal text-brand-warm-white'
                        : 'bg-brand-sand/30 text-brand-charcoal hover:bg-brand-charcoal/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-8 font-body text-sm text-brand-charcoal/60">
          <span>Mostrando {filteredProducts.length} productos</span>
          {(selectedCategory !== 'Todos' || selectedMaterial !== 'Todos' || search !== '') && (
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSelectedMaterial('Todos');
                setSearch('');
              }}
              className="inline-flex items-center text-brand-charcoal font-bold hover:text-brand-olive cursor-pointer"
            >
              Limpiar filtros <X className="ml-1 h-4 w-4" />
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-charcoal/10 bg-brand-warm-white p-6 hover:shadow-soft hover:border-brand-charcoal/30 transition-all duration-200 cursor-pointer"
              >
                <div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-sand/20 mb-6 flex items-center justify-center border border-brand-charcoal/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="charcoal">ECO-PACKAGING</Badge>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <span className="font-heading text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-brand-charcoal group-hover:text-brand-olive transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-charcoal/10 flex items-center justify-end">
                  <span className="inline-flex items-center text-sm font-heading font-bold text-brand-charcoal group-hover:text-brand-olive transition-colors duration-200">
                    Ver Ficha Técnica
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-brand-warm-white rounded-3xl border border-brand-charcoal/10 p-12 text-center max-w-xl mx-auto space-y-4 shadow-soft">
            <HelpCircle className="h-12 w-12 text-brand-charcoal/30 mx-auto" />
            <h3 className="font-heading text-xl font-bold text-brand-charcoal">
              No se encontraron productos
            </h3>
            <p className="font-body text-sm text-brand-charcoal/70 leading-relaxed">
              Prueba cambiando los filtros o la búsqueda. Si necesitas una solución de packaging a medida que no figura en catálogo, contáctanos directamente.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="sm" className="mt-4">
                Cotizar Solución Especial
              </Button>
            </Link>
          </div>
        )}

        {/* Product Detail Modal */}
        <AnimatePresence>
          {activeProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/60">
              {/* Modal Card */}
              <div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-brand-warm-white border border-brand-charcoal/10 p-6 sm:p-10 text-left flex flex-col lg:flex-row gap-8 shadow-soft"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProduct(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-brand-sand/50 text-brand-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive transition-colors duration-200 z-10 cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Left Side: Product Image & Badges */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-sand/20 flex items-center justify-center border border-brand-charcoal/5 mb-6">
                    <Image
                      src={selectedImage || activeProduct.image}
                      alt={activeProduct.name}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover animate-fade-in"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="charcoal">ECO-PACKAGING</Badge>
                    </div>
                  </div>

                  {/* Thumbnail Selector */}
                  {activeProduct.images && activeProduct.images.length > 1 && (
                    <div className="flex gap-4 mb-6">
                      {activeProduct.images.map((img, idx) => {
                        const isSelected = selectedImage === img;
                        const isHot = img.includes('caliente');
                        const isCold = img.includes('fria');
                        const isHondo = img.includes('hondo');
                        const isPlayo = img.includes('playo');

                        let groupLabel = 'Producto';
                        let label = `Imagen ${idx + 1}`;

                        if (activeProduct.id === 'tapas-orizpack') {
                          groupLabel = 'Tapa';
                          label = isHot ? 'Caliente' : isCold ? 'Fría' : `Variante ${idx + 1}`;
                        } else if (activeProduct.id === 'plato-orizpack') {
                          groupLabel = 'Plato';
                          label = isHondo ? 'Hondo' : isPlayo ? 'Playo' : `Variante ${idx + 1}`;
                        }

                        return (
                          <button
                            key={img}
                            onClick={() => setSelectedImage(img)}
                            className={`flex-1 flex items-center gap-3 p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'border-brand-charcoal bg-brand-sand/20 shadow-sm'
                                : 'border-brand-charcoal/10 bg-transparent hover:border-brand-charcoal/30'
                            }`}
                          >
                            <div className="relative aspect-square w-12 h-12 overflow-hidden rounded-lg bg-brand-sand/10 border border-brand-charcoal/5 flex-shrink-0">
                              <Image
                                src={img}
                                alt={`${activeProduct.name} - ${label}`}
                                width={48}
                                height={48}
                                className="object-cover h-full w-full"
                              />
                            </div>
                            <div>
                              <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/50 block">
                                {groupLabel}
                              </span>
                              <span className="font-heading text-xs font-bold text-brand-charcoal">
                                {label}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Certifications Block */}
                  <div className="space-y-3 bg-brand-sand/30 p-6 rounded-3xl border border-brand-charcoal/10">
                    <span className="font-heading text-xs font-bold text-brand-charcoal block uppercase tracking-wider">
                      Certificaciones de Sustentabilidad
                    </span>
                    <div className="flex flex-col gap-2">
                      {activeProduct.certifications.map((cert) => (
                        <div key={cert} className="flex items-center space-x-2 text-xs font-body text-brand-charcoal/80">
                          <ShieldCheck className="h-4.5 w-4.5 text-brand-olive flex-shrink-0" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Technical Specs & Details */}
                <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="font-heading text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest">
                      {activeProduct.category}
                    </span>
                    <h2 className="font-heading text-3xl font-bold text-brand-charcoal leading-none">
                      {activeProduct.name}
                    </h2>
                    <p className="font-body text-base text-brand-charcoal/80 leading-relaxed">
                      {activeProduct.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-charcoal/10 font-body text-sm">
                      <div>
                        <span className="text-brand-charcoal/50 block text-[10px] font-bold uppercase tracking-wider mb-1">Dimensiones</span>
                        <span className="font-bold text-brand-charcoal">{activeProduct.dimensions}</span>
                      </div>
                      <div>
                        <span className="text-brand-charcoal/50 block text-[10px] font-bold uppercase tracking-wider mb-1">Pedido mínimo</span>
                        <span className="font-bold text-brand-charcoal">
                          {activeProduct.moq} unidades {activeProduct.id === 'vaso-orizpack' ? '(1 pack)' : ''}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="font-heading text-xs font-bold text-brand-charcoal block uppercase tracking-wider">
                        Especificaciones Industriales
                      </span>
                      <ul className="space-y-2 font-body text-sm text-brand-charcoal/80 list-disc list-inside">
                        {activeProduct.details.map((detail, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote Trigger */}
                  <div className="pt-4">
                    <Link href={`/contacto?product=${activeProduct.id}`}>
                      <Button variant="primary" className="w-full">
                        Cotizar
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ProductosCatalog() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-brand-sand/10">
        <div className="animate-pulse font-heading text-xl text-brand-charcoal">Cargando catálogo...</div>
      </div>
    }>
      <CatalogContent />
    </React.Suspense>
  );
}
