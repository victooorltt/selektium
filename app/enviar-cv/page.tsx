'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Upload, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

function EnviarCVContent() {
  const searchParams = useSearchParams();
  const puestoParam = searchParams.get('puesto') || '';

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    email: '',
    telefono: '',
    localidad: '',
    ofertaPuesto: '',
    mensaje: '',
    consentimientoCesion: false,
    consentimientoInfo: false,
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (puestoParam) {
      setFormData((prev) => ({ ...prev, ofertaPuesto: puestoParam }));
    }
  }, [puestoParam]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentimientoCesion) {
      setErrorMessage(
        'Es obligatorio marcar la primera casilla de consentimiento de cesión de datos para tramitar su candidatura.'
      );
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero with centered variant (same style as Inicio without benefits) */}
      <PageHero
        title="Déjanos tu CV aquí"
        subtitle="Las personas interesadas en participar en nuestros procesos de selección pueden enviar su CV actualizado indicando la oferta de empleo y/o puestos afines a su perfil."
        imageSrc="/hero-enviar-cv.webp"
        imageAlt="Enviar currículum a Selektium"
        variant="centered"
      />

      {/* Formulario de Envío de CV */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-zinc-50 border border-accent/20 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold text-ink">
                Currículum recibido correctamente
              </h2>
              <p className="text-zinc-600 text-sm max-w-lg mx-auto">
                Gracias, {formData.nombre}. Hemos registrado tu candidatura para{' '}
                <span className="font-semibold text-accent">
                  {formData.ofertaPuesto || 'nuestra base de talento'}
                </span>
                . Nuestro equipo de consultores revisará tu perfil y contactará contigo si surge una oportunidad acorde.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFiles([]);
                  }}
                  className="px-6 py-2.5 text-sm font-semibold text-accent bg-white border border-zinc-300 rounded-xl hover:bg-zinc-50 transition-colors"
                >
                  Enviar otro currículum
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-b border-zinc-200 pb-4">
                <h2 className="text-2xl font-semibold text-ink">
                  Formulario de recepción de candidaturas
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Los campos marcados con asterisco (*) son obligatorios.
                </p>
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                    Apellidos*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.apellidos}
                    onChange={(e) =>
                      setFormData({ ...formData, apellidos: e.target.value })
                    }
                    placeholder="Tus apellidos"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                    DNI*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dni}
                    onChange={(e) =>
                      setFormData({ ...formData, dni: e.target.value })
                    }
                    placeholder="12345678X"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                  />
                </div>

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
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
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
                    placeholder="600 000 000"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                    Localidad/Provincia *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.localidad}
                    onChange={(e) =>
                      setFormData({ ...formData, localidad: e.target.value })
                    }
                    placeholder="Ej. Bilbao, Bizkaia"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                    Oferta de Empleo / Puestos de interés*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ofertaPuesto}
                    onChange={(e) =>
                      setFormData({ ...formData, ofertaPuesto: e.target.value })
                    }
                    placeholder="Indica la oferta o sector"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-800 mb-1.5">
                  Por favor, escriba su mensaje a continuación:
                </label>
                <textarea
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  placeholder="Detalles sobre tu experiencia, disponibilidad o perfil..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                />
              </div>

              {/* File upload */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-dashed border-zinc-300 space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">
                  Adjunta tu CV* (puedes seleccionar varios archivos a la vez desde tu dispositivo para adjuntarlos)
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover text-sm font-semibold cursor-pointer transition-colors shadow-2xs">
                    <Upload className="w-4 h-4" />
                    Seleccionar archivos
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.docx,.doc,.jpg,.jpeg,.png,.ppt,.pptx"
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
                <p className="text-xs text-zinc-500">
                  *Formatos de archivo permitidos: pdf, docx, doc, jpg, jpeg, png, ppt y pptx.
                </p>
              </div>

              {/* RGPD Legal Text & Checkboxes */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4 text-xs text-zinc-600 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <p className="font-semibold text-zinc-900">
                    Información sobre Protección de Datos (RGPD)
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consentimientoCesion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          consentimientoCesion: e.target.checked,
                        })
                      }
                      className="mt-1 w-4 h-4 rounded text-accent focus:ring-accent border-zinc-300"
                    />
                    <span className="text-xs text-zinc-700">
                      Al marcar esta casilla autorizo a que Selektium Team S.L. ceda mis datos a las empresas usuarias para formar parte de la base de datos de currículums, gestionarlos para realizar procesos de selección de personas, otros procedimientos de RRHH y/u orientación laboral. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentimientoInfo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          consentimientoInfo: e.target.checked,
                        })
                      }
                      className="mt-1 w-4 h-4 rounded text-accent focus:ring-accent border-zinc-300"
                    />
                    <span className="text-xs text-zinc-700">
                      Autorizo a Selektium para que pueda informarme sobre cuestiones relativas a la actividad de la empresa mediante los medios facilitados.
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-md transition-all hover:shadow-lg"
                >
                  Enviar CV
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection />
    </div>
  );
}

export default function EnviarCVPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-sm text-zinc-500">
          Cargando formulario...
        </div>
      }
    >
      <EnviarCVContent />
    </Suspense>
  );
}
