'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Badge from '../ui/badge';
import Button from '../ui/button';
import { Input, Textarea } from '../ui/input';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  company: z.string().min(2, { message: 'La empresa debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Ingresa un correo corporativo válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactoSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [generalError, setGeneralError] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setGeneralError('');
    try {
      // Simulate API call
      console.log('Sending Home B2B Quick Request:', data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      reset();
    } catch {
      setGeneralError('Ocurrió un error al enviar el formulario. Intenta nuevamente.');
    }
  };

  return (
    <section className="bg-brand-sand/20 py-24 sm:py-32 relative overflow-hidden border-b border-brand-charcoal/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <Badge variant="outline">Canales Directos</Badge>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-brand-charcoal leading-none">
                Conversemos <br />
                <span className="text-brand-charcoal/70">sobre tu proyecto</span>
              </h2>
              <p className="font-body text-base text-brand-charcoal/70 leading-relaxed">
                ¿Buscas optimizar tu línea de empaque o certificar tu delivery? Escríbenos para recibir muestras físicas y asesoría técnica de diseño a medida.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-brand-charcoal/10 font-body text-sm text-brand-charcoal">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-brand-olive" />
                <span>Respuesta en menos de 24 horas hábiles.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-olive" />
                <span>contacto@orizpack.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-olive" />
                <span>+54 379 440 5900</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-brand-warm-white p-8 sm:p-12 rounded-3xl border border-brand-charcoal/10 shadow-soft relative min-h-[480px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form-home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 text-left"
                  noValidate
                >
                  <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-4">
                    Solicita Muestras o una Cotización
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="form-name"
                      label="Nombre Completo *"
                      type="text"
                      error={errors.name?.message}
                      placeholder="Ej. Walter Pérez"
                      {...register('name')}
                    />
                    <Input
                      id="form-company"
                      label="Empresa / Razón Social *"
                      type="text"
                      error={errors.company?.message}
                      placeholder="Ej. EcoBite Cafe"
                      {...register('company')}
                    />
                  </div>

                  <Input
                    id="form-email"
                    label="Correo Corporativo *"
                    type="email"
                    error={errors.email?.message}
                    placeholder="w.perez@empresa.com"
                    {...register('email')}
                  />

                  <Textarea
                    id="form-message"
                    label="Mensaje / Requerimiento *"
                    rows={4}
                    error={errors.message?.message}
                    placeholder="Indícanos qué productos te interesan, volumen estimado y dirección para muestras físicas."
                    {...register('message')}
                  />

                  {generalError && (
                    <div className="text-red-500 font-body text-sm font-semibold">
                      {generalError}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Enviar Solicitud
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-olive/10 text-brand-olive">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                      ¡Solicitud Recibida!
                    </h3>
                    <p className="font-body text-base text-brand-charcoal/70 max-w-sm">
                      Gracias por contactarnos. Un especialista en empaques sustentables te responderá vía correo para coordinar los detalles.
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                  >
                    Volver a enviar
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
