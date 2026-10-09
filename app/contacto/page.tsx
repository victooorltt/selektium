'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import LinkedinIcon from '@/components/LinkedinIcon';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    servicio: 'Selección',
    mensaje: '',
    promoConsent: false,
    privacyConsent: false,
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setErrorMessage(
        'Debe aceptar la política de protección de datos y privacidad para continuar.'
      );
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero with gradient variant */}
      <PageHero
        title="Contacto"
        subtitle="Selektium ofrece sus servicios a nivel local, nacional e internacional. Las personas interesadas en participar en nuestros procesos de selección pueden enviar aquí su CV actualizado indicando la oferta de empleo y/o puestos afines a su perfil."
        imageSrc="/hero-contacto.webp"
        imageAlt="Oficina de Selektium en Bilbao"
        variant="gradient"
      />

      {/* Main Contact Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Contáctanos
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-ink mt-1">
                  Oficina en Bilbao
                </h2>
                <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
                  Selektium ofrece sus servicios a nivel local, nacional e internacional.
                </p>
              </div>

              <div className="space-y-5 p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-ink">Dirección</h3>
                    <p className="text-zinc-600 text-sm mt-0.5 leading-relaxed">
                      Avenida de las Universidades 8<br />
                      Dpto. 2 (entreplanta)<br />
                      48007 Bilbao (Bizkaia)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-ink">Teléfono</h3>
                    <a
                      href="tel:946853124"
                      className="text-zinc-700 hover:text-accent font-medium text-sm mt-0.5 block"
                    >
                      94 685 31 24
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-ink">Atención</h3>
                    <p className="text-zinc-600 text-xs mt-0.5 leading-relaxed font-medium text-accent">
                      Para un correcto funcionamiento de la oficina se atiende únicamente con cita previa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0 mt-0.5">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-ink">LinkedIn</h3>
                    <a
                      href="http://es.linkedin.com/in/teresarocharrhh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-600 hover:text-accent underline mt-0.5 block break-all"
                    >
                      http://es.linkedin.com/in/teresarocharrhh
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Enviar CV */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-accent" />
                  <h3 className="text-sm font-semibold text-ink">
                    ¿Quieres enviarnos tu currículum?
                  </h3>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Las personas interesadas en participar en nuestros procesos de selección pueden enviar su CV actualizado indicando la oferta de empleo y/o puestos afines a su perfil.
                </p>
                <div className="pt-1">
                  <Link
                    href="/enviar-cv"
                    className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                  >
                    Ir al formulario de CV →
                  </Link>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200 shadow-xs">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-ink">
                    Solicite su propuesta / presupuesto sin compromiso, ni coste alguno:
                  </h3>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-semibold text-ink">
                      Propuesta solicitada con éxito
                    </h4>
                    <p className="text-zinc-600 text-sm max-w-md mx-auto">
                      Gracias por contactar con Selektium. Nos pondremos en contacto contigo a través del correo o teléfono facilitado a la mayor brevedad.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFiles([]);
                      }}
                      className="px-5 py-2 text-sm font-semibold text-accent bg-zinc-50 border border-zinc-200 rounded-xl hover:bg-zinc-100 transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                          Nombre*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                          placeholder="Tu nombre y apellidos"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                          Empresa
                        </label>
                        <input
                          type="text"
                          value={formData.empresa}
                          onChange={(e) =>
                            setFormData({ ...formData, empresa: e.target.value })
                          }
                          placeholder="Nombre de tu compañía"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                          Cargo ocupado
                        </label>
                        <input
                          type="text"
                          value={formData.cargo}
                          onChange={(e) =>
                            setFormData({ ...formData, cargo: e.target.value })
                          }
                          placeholder="Tu cargo profesional"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                          Servicio
                        </label>
                        <select
                          value={formData.servicio}
                          onChange={(e) =>
                            setFormData({ ...formData, servicio: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                        >
                          <option value="Selección">Selección</option>
                          <option value="Formación">Formación</option>
                          <option value="Otros servicios de RRHH">
                            Otros servicios de RRHH
                          </option>
                          <option value="Orientación laboral particulares">
                            Orientación laboral particulares
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                          Correo electrónico*
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="ejemplo@correo.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                          Teléfono*
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) =>
                            setFormData({ ...formData, telefono: e.target.value })
                          }
                          placeholder="Teléfono de contacto"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) =>
                          setFormData({ ...formData, mensaje: e.target.value })
                        }
                        placeholder="Por favor, escriba su mensaje a continuación"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                      />
                    </div>

                    {/* File Upload */}
                    <div className="p-5 rounded-xl bg-zinc-50 border border-dashed border-zinc-300 space-y-2">
                      <label className="block text-xs font-semibold text-zinc-800">
                        Adjunta un archivo (puedes seleccionar varios archivos a la vez desde tu dispositivo para adjuntarlos)
                      </label>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white hover:bg-accent-hover text-xs font-semibold cursor-pointer transition-colors">
                          <Upload className="w-3.5 h-3.5" />
                          Seleccionar archivos
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        <span className="text-xs text-zinc-500">
                          {files.length > 0
                            ? `${files.length} archivo(s) seleccionado(s): ${files
                                .map((f) => f.name)
                                .join(', ')}`
                            : 'Ningún archivo seleccionado'}
                        </span>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.promoConsent}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              promoConsent: e.target.checked,
                            })
                          }
                          className="mt-1 w-4 h-4 rounded text-accent focus:ring-accent border-zinc-300"
                        />
                        <span className="text-xs text-zinc-600">
                          Autorizo el envío de información y promociones que puedan ser de mi interés mediante los medios facilitados.
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={formData.privacyConsent}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              privacyConsent: e.target.checked,
                            })
                          }
                          className="mt-1 w-4 h-4 rounded text-accent focus:ring-accent border-zinc-300"
                        />
                        <span className="text-xs text-zinc-600">
                          Acepto la política de protección de datos y privacidad. *
                        </span>
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-md transition-all hover:shadow-lg"
                      >
                        Enviar solicitud
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Accent Section (#142D59) with photo */}
      <AccentSection
        title="Atención a medida para empresas y particulares"
        subtitle="Bilbao y Nivel Peninsular"
        imageSrc="/accent-contacto.webp"
        imageAlt="Oficina Selektium Bilbao en Avenida de las Universidades"
        ctaText="Llamar al 94 685 31 24"
        ctaHref="tel:946853124"
        description="Selektium ofrece sus servicios a nivel local, nacional e internacional. Su oficina se encuentra en Bilbao aunque se abordan proyectos a nivel peninsular. Para un correcto funcionamiento de la oficina se atiende únicamente con cita previa."
      />

      {/* Final CTA Section */}
      <CTASection />
    </div>
  );
}
