'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { products } from '@/lib/data';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import { Input, Textarea } from '@/components/ui/input';

const contactoSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  company: z.string().min(2, { message: 'La empresa debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Ingresa un correo corporativo válido.' }),
  phone: z.string().min(6, { message: 'El teléfono debe tener al menos 6 dígitos.' }),
  productInterest: z.string(),
  volume: z.string(),
  customPrint: z.boolean(),
  message: z.string().min(10, { message: 'El mensaje de requerimiento debe tener al menos 10 caracteres.' }),
});

type ContactoFormData = z.infer<typeof contactoSchema>;

export default function ContactoClient() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';
  const preselectedRef = searchParams.get('ref') || '';

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [generalError, setGeneralError] = React.useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactoFormData>({
    resolver: zodResolver(contactoSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      productInterest: preselectedProduct,
      volume: '1,000 a 5,000 uds',
      customPrint: false,
      message: preselectedRef === 'ecogastronomia' ? 'Me interesa postular al Programa EcoGastronomía B2B.' : '',
    },
  });

  // Sync parameters if they load dynamically
  React.useEffect(() => {
    if (preselectedProduct) {
      setValue('productInterest', preselectedProduct);
    }
    if (preselectedRef === 'ecogastronomia') {
      setValue('message', 'Me interesa postular al Programa EcoGastronomía B2B.');
    }
  }, [preselectedProduct, preselectedRef, setValue]);

  const onSubmit = async (data: ContactoFormData) => {
    setGeneralError('');
    try {
      // Simulate API call
      console.log('Sending B2B Contact Request:', data);
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setIsSubmitted(true);
      reset();
    } catch {
      setGeneralError('Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="bg-brand-sand/10 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-4 mb-16">
          <Badge variant="outline">Canales B2B</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal">
            Contacto B2B & Cotizaciones
          </h1>
          <p className="font-body text-lg text-brand-charcoal/70 max-w-3xl leading-relaxed">
            Completa nuestro formulario de factibilidad técnica para coordinar un envío de muestras físicas gratuitas a tu sucursal o solicitar tarifas por volumen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form Card */}
          <div className="lg:col-span-8 bg-brand-warm-white p-8 sm:p-12 rounded-3xl border border-brand-charcoal/10 shadow-soft min-h-[550px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form-contacto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 text-left"
                  noValidate
                >
                  <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6 border-b border-brand-charcoal/10 pb-4">
                    Formulario de Requerimiento Técnico
                  </h2>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="cont-name"
                      label="Nombre Completo *"
                      type="text"
                      error={errors.name?.message}
                      placeholder="Ej. Walter Pérez"
                      {...register('name')}
                    />
                    <Input
                      id="cont-company"
                      label="Empresa / Razón Social *"
                      type="text"
                      error={errors.company?.message}
                      placeholder="Ej. Orizpack Alimentos S.A."
                      {...register('company')}
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="cont-email"
                      label="Correo Corporativo *"
                      type="email"
                      error={errors.email?.message}
                      placeholder="w.perez@empresa.com"
                      {...register('email')}
                    />
                    <Input
                      id="cont-phone"
                      label="Teléfono Móvil / WhatsApp *"
                      type="tel"
                      error={errors.phone?.message}
                      placeholder="Ej. +56 9 1234 5678"
                      {...register('phone')}
                    />
                  </div>

                  {/* Product and Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="w-full space-y-2">
                      <label htmlFor="cont-product" className="block font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
                        Línea de Interés
                      </label>
                      <select
                        id="cont-product"
                        className="w-full rounded-3xl border border-brand-charcoal/20 bg-brand-warm-white px-5 py-3 font-body text-sm text-brand-charcoal focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal focus:outline-none transition-all duration-200"
                        {...register('productInterest')}
                      >
                        <option value="">Selecciona un producto...</option>
                        {products.map((prod) => (
                          <option key={prod.id} value={prod.id}>
                            {prod.name}
                          </option>
                        ))}
                        <option value="otro">Otro Requerimiento / Diseños a Medida</option>
                      </select>
                    </div>

                    <div className="w-full space-y-2">
                      <label htmlFor="cont-volume" className="block font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
                        Volumen Mensual Estimado
                      </label>
                      <select
                        id="cont-volume"
                        className="w-full rounded-3xl border border-brand-charcoal/20 bg-brand-warm-white px-5 py-3 font-body text-sm text-brand-charcoal focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal focus:outline-none transition-all duration-200"
                        {...register('volume')}
                      >
                        <option value="Menos de 1,000 uds">Menos de 1,000 uds</option>
                        <option value="1,000 a 5,000 uds">1,000 a 5,000 uds</option>
                        <option value="5,000 a 10,000 uds">5,000 a 10,000 uds</option>
                        <option value="Más de 10,000 uds">Más de 10,000 uds</option>
                      </select>
                    </div>
                  </div>

                  {/* Custom Branding Check */}
                  <div className="flex items-center space-x-3 py-2">
                    <input
                      id="cont-custom"
                      type="checkbox"
                      className="h-5 w-5 rounded border-brand-charcoal/20 text-brand-olive focus:ring-brand-olive cursor-pointer"
                      {...register('customPrint')}
                    />
                    <label htmlFor="cont-custom" className="font-heading text-sm font-semibold text-brand-charcoal/80 cursor-pointer select-none">
                      Deseo personalizar el packaging con mi logotipo corporativo.
                    </label>
                  </div>

                  {/* Message */}
                  <Textarea
                    id="cont-msg"
                    label="Detalle del Requerimiento / Dirección de Envío para Muestras"
                    rows={4}
                    error={errors.message?.message}
                    placeholder="Indícanos las dimensiones requeridas, tipos de alimentos a contener, o dirección de envío de muestras físicas."
                    {...register('message')}
                  />

                  {generalError && (
                    <div className="text-red-500 font-body text-sm font-semibold">
                      {generalError}
                    </div>
                  )}

                  <div className="pt-4 border-t border-brand-charcoal/10">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Enviar Requerimiento B2B
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-olive/10 text-brand-olive">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-heading text-3xl font-bold text-brand-charcoal">
                      ¡Requerimiento Ingresado!
                    </h2>
                    <p className="font-body text-base text-brand-charcoal/70 max-w-md leading-relaxed">
                      Tu solicitud de cotización / muestras ha sido ingresada en nuestro sistema CRM. Un consultor técnico de nuestra planta industrial te llamará en las próximas horas.
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="md"
                  >
                    Ingresar Otra Cotización
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8 text-left">
            <div className="bg-brand-warm-white p-8 rounded-3xl border border-brand-charcoal/10 shadow-soft space-y-6">
              <h3 className="font-heading text-lg font-bold text-brand-charcoal">
                Planta Central & Oficinas
              </h3>
              
              <div className="space-y-4 font-body text-sm text-brand-charcoal/80 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brand-olive flex-shrink-0 mt-0.5" />
                  <span>Parque Industrial Enea, Pudahuel, Santiago, Chile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-olive flex-shrink-0" />
                  <span>+56 2 2840 5900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-olive flex-shrink-0" />
                  <span>contacto@orizpack.cl</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-olive flex-shrink-0" />
                  <span>Lunes a Viernes, 08:30 a 18:00 hrs.</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-charcoal text-brand-warm-white p-8 rounded-3xl space-y-4 shadow-soft">
              <h3 className="font-heading text-lg font-bold text-brand-warm-white">
                Compromiso Certificado
              </h3>
              <p className="font-body text-xs text-brand-warm-white/70 leading-relaxed">
                Todas nuestras muestras de papel kraft y bagazo de caña se entregan acompañadas de copias de sus respectivas certificaciones internacionales de compostabilidad y cadena de custodia forestal:
              </p>
              <div className="space-y-2 text-xs font-heading font-semibold text-brand-warm-white/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-olive" />
                  <span>TÜV Austria OK Compost (HOME & INDUSTRIAL)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-olive" />
                  <span>FSC® Recycled / 100% (Manejo Responsable)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-olive" />
                  <span>PEFC (Custodia Sostenible)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
