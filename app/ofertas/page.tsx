'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Send,
  Building,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

const offersList = [
  {
    id: 'camarero-experiencia',
    title: 'Camarero/a con experiencia',
    category: 'Hostelería y Eventos',
    location: 'Bilbao centro (Bizkaia)',
    summary:
      '¿Te gusta la hostelería, disfrutas trabajando en equipo y te motiva el contacto con personas de diferentes nacionalidades? Esta puede ser tu oportunidad.',
    description:
      '¿Te gusta la hostelería, disfrutas trabajando en equipo y te motiva el contacto con personas de diferentes nacionalidades? Esta puede ser tu oportunidad. Desde Selektium, Consultoría de RRHH, buscamos talento para un local, ubicado en el centro de Bilbao, cuya actividad se centra en proporcionar servicios de restauración y eventos.',
  },
  {
    id: 'cocinero-senior',
    title: 'Cocinero/a Senior',
    category: 'Hostelería y Restauración',
    location: 'Bilbao (Bizkaia)',
    summary:
      'Buscamos talento culinario con experiencia para empresa de restauración con varios locales y servicios de catering.',
    description:
      'Desde Selektium, Consultoría de RRHH, buscamos talento para una empresa con varios locales ubicados en Bilbao, cuya actividad se centra en ofrecer desayunos, menús, catering y desarrollo de eventos.',
  },
  {
    id: 'tecnico-comercial-zona-norte',
    title: 'Técnico/a Comercial Zona Norte – Sector Construcción / Industrial',
    category: 'Comercial y Ventas',
    location: 'Zona Norte',
    summary:
      'Compañía de soluciones técnicas para sectores de construcción e industrial basada en tecnologías novedosas.',
    description:
      'Desde Selektium estamos seleccionando un/a Técnico/a Comercial para nuestro cliente, compañía que se dedica a ofrecer soluciones técnicas para empresas del sector de construcción e industriales, estudiando las mejores alternativas acordes a sus negocios y respectivas actividades, desarrolladas basándose en tecnologías novedosas.',
  },
  {
    id: 'coordinador-seguridad-salud',
    title: 'Coordinador/a de Seguridad y Salud en Obras de Construcción',
    category: 'Prevención de Riesgos Laborales',
    location: 'Bizkaia',
    summary:
      'Empresa referente de Prevención de Riesgos Laborales en todas sus especialidades técnicas y de salud.',
    description:
      'Desde Selektium, Consultoría de RRHH, buscamos talento para una Empresa de Prevención de Riesgos Laborales, ubicada en Bizkaia, cuya actividad se centra en proporcionar servicios de prevención de riesgos laborales de todas las especialidades (seguridad, higiene, ergonomía, psicosociología y vigilancia de la salud) a empresas del sector de la construcción e industriales principalmente. Además, cuenta con un equipo humano cualificado y multidisciplinar dentro del ámbito de PRL.',
  },
  {
    id: 'administrativo-sector-servicios',
    title: 'Administrativo/a Sector Servicios - Bizkaia',
    category: 'Administración y Gestión',
    location: 'Bilbao, Bizkaia',
    summary:
      'Proceso de selección para empresa consolidada del sector servicios ubicada en Bilbao.',
    description:
      'Desde Selektium estamos seleccionando para nuestro cliente, una empresa del sector servicios ubicada en Bilbao, Bizkaia.',
  },
];

export default function OfertasPage() {
  const [expandedOffer, setExpandedOffer] = useState<string | null>(null);

  const toggleOffer = (id: string) => {
    setExpandedOffer((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Hero with gradient variant */}
      <PageHero
        title="Ofertas"
        subtitle="Consulta las oportunidades de empleo y procesos de selección activos gestionados por Selektium en Bilbao y Zona Norte."
        imageSrc="/hero-ofertas.webp"
        imageAlt="Ofertas de empleo activas en Selektium"
        ctaText="Enviar CV espontáneo"
        ctaHref="/enviar-cv"
        variant="gradient"
      />

      {/* Listado de Ofertas */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Bolsa de Empleo Selektium
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mt-2">
              Procesos de selección abiertos
            </h2>
            <p className="mt-3 text-zinc-600 text-base">
              Haz clic en "Ver" en cualquiera de las ofertas para consultar el detalle completo del puesto y postularte con tu CV.
            </p>
          </div>

          <div className="space-y-6">
            {offersList.map((offer) => {
              const isExpanded = expandedOffer === offer.id;

              return (
                <article
                  key={offer.id}
                  className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-white hover:border-accent/40 transition-all p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-md">
                          <Building className="w-3 h-3" />
                          {offer.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md">
                          <MapPin className="w-3 h-3 text-zinc-400" />
                          {offer.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-ink leading-tight pt-1">
                        {offer.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleOffer(offer.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-accent bg-white hover:bg-zinc-100 border border-zinc-200 rounded-xl transition-colors shadow-2xs self-start"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Ocultar' : 'Ver'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Summary preview */}
                  {!isExpanded && (
                    <p className="mt-4 text-zinc-600 text-sm leading-relaxed">
                      {offer.summary}
                    </p>
                  )}

                  {/* Expanded detailed content */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-zinc-200/80 space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                          Descripción del puesto
                        </h4>
                        <p className="text-zinc-700 text-base leading-relaxed">
                          {offer.description}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <Link
                          href={`/enviar-cv?puesto=${encodeURIComponent(offer.title)}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs transition-colors w-full sm:w-auto"
                        >
                          <Send className="w-4 h-4" />
                          Inscribirme a esta oferta
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleOffer(offer.id)}
                          className="text-xs text-zinc-500 hover:text-ink font-medium px-3 py-2"
                        >
                          Cerrar detalle
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mandatory Accent Section (#142D59) with photo */}
      <AccentSection
        title="¿No encuentras una vacante adaptada a tu perfil?"
        subtitle="Base de Talento Selektium"
        imageSrc="/accent-ofertas.webp"
        imageAlt="Entrevista y selección de personal Selektium"
        ctaText="Enviar CV"
        ctaHref="/enviar-cv"
        description="Las personas interesadas en participar en nuestros procesos de selección pueden enviar aquí su CV actualizado indicando la oferta de empleo y/o puestos afines a su perfil. Analizamos cada candidatura para incorporarla a procesos presentes y futuros."
      />

      {/* Final CTA Section */}
      <CTASection />
    </div>
  );
}
