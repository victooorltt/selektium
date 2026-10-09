import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Users,
  Search,
  Target,
  BarChart3,
  BookOpen,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Award,
  ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Servicios para Empresas | Selektium Bilbao',
  description:
    'Selección y formación para empresas: selección convencional, búsqueda de candidatos, búsqueda directa y evaluación interna en Bilbao y Zona Norte.',
};

export default function EmpresasPage() {
  return (
    <div>
      {/* Hero with gradient variant - Real Bilbao corporate cityscape */}
      <PageHero
        title="Selección y formación para tu empresa"
        subtitle="RRHH para tu empresa. Soluciones flexibles, accesibles y adaptadas a compañías de cualquier dimensión, desde autónomos y pymes hasta grandes empresas."
        imageSrc="/hero-empresas.webp"
        imageAlt="Servicios para empresas Selektium Bilbao"
        ctaText="Contactar"
        ctaHref="/contacto"
        secondaryCtaText="Solicitar Presupuesto"
        secondaryCtaHref="/contacto"
        variant="gradient"
      />

      {/* Dirigido a empresas que... */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Soluciones a Medida
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight mt-1">
              Los servicios que ofrecemos van dirigidos a empresas que
            </h2>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg font-normal">
              Respuestas profesionales y a medida ante las necesidades actuales de la gestión y selección de personas.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Recursos internos limitados',
                text: 'Tienen interés por sus colaboradores pero no cuentan con los recursos internos necesarios para atender de una forma más amplia el área de Gestión de Personas.',
                icon: Users,
              },
              {
                title: 'Refuerzo organizativo externo',
                text: 'Buscan un refuerzo externo en su estructura organizativa de Recursos Humanos.',
                icon: Briefcase,
              },
              {
                title: 'Evaluación objetiva',
                text: 'Desean evaluar de forma más objetiva su situación respecto a la gestión y selección personal.',
                icon: Target,
              },
              {
                title: 'Enfoque biopsicosocial',
                text: 'Consideran necesaria una ampliación de la funcionalidad del departamento de Recursos Humanos teniendo en cuenta aspectos más biopsicosociales de su capital humano.',
                icon: TrendingUp,
              },
              {
                title: 'Oportunidades de mejora',
                text: 'Valoran nuevos puntos de vista y otras perspectivas de cara a detectar e implantar oportunidades de mejora en su organización (selección y formación).',
                icon: BarChart3,
              },
              {
                title: 'Respuesta ágil y rentable',
                text: 'Detectan que, por las nuevas necesidades del mercado, es necesario un análisis e intervención contando con profesionales externos expertos que puedan responder de una manera competente, fácil, rápida y más rentable.',
                icon: ShieldCheck,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4 hover:border-accent/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mandatory Accent Section (#142D59) with photo */}
      <AccentSection
        title="RRHH para tu empresa"
        subtitle="Flexibilidad y Segmentación de Proyectos"
        imageSrc="/accent-empresas.webp"
        imageAlt="Asesoramiento de RRHH para empresas Selektium"
        ctaText="Solicitar Presupuesto"
        ctaHref="/contacto"
        description={
          <>
            <p>
              Selektium brinda un amplio abanico de servicios de recursos humanos, sobre todo en materia de selección personal, selección y formación. Ofreciendo, además, la posibilidad de segmentar los proyectos: todos ellos están sujetos a la flexibilidad necesaria para satisfacer por completo las necesidades de cada cliente según su contexto. Por este motivo, no es imprescindible contratar la totalidad de los procesos / servicios, pudiendo únicamente solicitar la fase que se requiera.
            </p>
            <p>
              Desde un primer contacto, se lleva a cabo un asesoramiento acerca de la situación del mercado y factores relevantes a tener en cuenta en materia de RRHH y selección personal, buscando la mejor estrategia para desarrollar y estandarizar sus procedimientos de evaluación, selección y formación, entre otras, y de esta manera identificar, captar, desarrollar y retener el talento.
            </p>
          </>
        }
      />

      {/* SECCIÓN 1: SELECCIÓN DE PERSONAL (con fotografía de Torre Iberdrola / Bilbao) */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contenido de Selección */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Especialidad Principal
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mt-1">
                  SELECCIÓN
                </h2>
                <p className="mt-4 text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Una de nuestras especialidades es la gestión de recursos humanos y la selección personal, dando gran importancia a inspeccionar y examinar completamente el mercado. Pensamos que, si existe, lo encontraremos; y si el perfil ideal solicitado no fuese accesible, reconduciremos conjuntamente la estrategia hasta alcanzar la mejor solución posible, cuidando en todo momento la imagen de la compañía y la atención a los candidatos.
                </p>
              </div>

              {/* 4 Métodos en tarjetas limpias */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink">
                      1. Selección convencional
                    </h3>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                      Con Garantía
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Definición del perfil, activación de fuentes de reclutamiento especializadas, filtro curricular, entrevistas personales u online y pruebas psicotécnicas cuando sean requeridas. Presentación final mediante informe pormenorizado.
                  </p>
                  <p className="text-xs text-zinc-500 font-medium pt-1">
                    ✓ Posibilidad de solicitar el proceso completo o fases individuales. Periodo de <strong>GARANTÍA</strong> con repetición sin coste si no se produce la adecuación persona-puesto.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h3 className="text-lg font-semibold text-ink">
                    2. Búsqueda de candidatos
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Agilización del proceso mediante profesionales ya identificados y evaluados en la plataforma Selektium. Servicio rápido, económico y eficaz con posibilidad de mantener una oferta permanente para cubrir vacantes habituales.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h3 className="text-lg font-semibold text-ink">
                    3. Búsqueda directa
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Metodología de reclutamiento proactiva de alto valor añadido: prospección de mercado, identificación de empresas y profesionales referentes en su sector, localización y captación para el proyecto del cliente.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h3 className="text-lg font-semibold text-ink">
                    4. Evaluación interna
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Evaluación de competencias y motivación de perfiles ya pertenecientes a la plantilla para promociones internas, reestructuraciones y optimización de la adecuación persona-puesto.
                  </p>
                </div>
              </div>
            </div>

            {/* Fotografía de la sección Selección */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200 space-y-0">
                <img
                  src="/seleccion-empresas.webp"
                  alt="Selección de personal en Bilbao Selektium"
                  className="w-full h-[460px] lg:h-[560px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 space-y-1">
                <p className="font-semibold text-ink text-sm">
                  Seguimiento e informes semanales
                </p>
                <p>
                  Feedback continuo y contacto permanente con la consultora responsable de gestionar cada proceso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: FORMACIÓN (con fotografía de Palacio Euskalduna) */}
      <section className="py-20 lg:py-24 bg-zinc-50/50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Fotografía de la sección Formación */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                <img
                  src="/formacion-empresas.webp"
                  alt="Formación para empresas Selektium Bilbao"
                  className="w-full h-[380px] lg:h-[460px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido de Formación */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Capacitación y Desarrollo
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mt-1">
                  FORMACIÓN
                </h2>
                <p className="mt-4 text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Selektium ofrece dentro de sus servicios de recursos humanos la detección de necesidades formativas, diseñando un plan de acción e impartición de formación a empresas y a sus trabajadores de diferentes cursos prácticos, entre los que destacamos:
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'Aprender a llevar a cabo la selección personal que más se adapte a mi empresa.',
                  'Cómo ser más operativo gestionando mi tiempo.',
                  'Cómo vender mis proyectos y gestionar mis primeros clientes.',
                  'Mejora de mis Habilidades de Comunicación.',
                  'Desarrollo de Habilidades Directivas.',
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-zinc-200/80 shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-zinc-800 leading-relaxed">
                      {course}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  Consultar plan formativo para tu equipo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: OTROS SERVICIOS DE RRHH (con fotografía de Plaza Moyúa) */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Contenido de Diagnóstico y RRHH */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Consultoría Organizacional
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mt-1">
                  OTROS SERVICIOS DE RRHH
                </h2>
                <p className="mt-4 text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Selektium ofrece a las empresas que no disponen de un departamento de RRHH o que teniéndolo sus funciones se centran en las áreas administrativas/contables, diferentes servicios que permiten implantar o completar las tareas de gestión de personas:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Diagnóstico general */}
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                  <h3 className="font-semibold text-base text-ink">
                    Evaluación y diagnóstico de la compañía
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                    <li className="flex items-center gap-2">• Clima laboral</li>
                    <li className="flex items-center gap-2">• Evaluación competencial</li>
                    <li className="flex items-center gap-2">• Diagnóstico motivacional</li>
                    <li className="flex items-center gap-2">• Diagnóstico de personalidad</li>
                  </ul>
                </div>

                {/* Estudio sector comercial */}
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                  <h3 className="font-semibold text-base text-ink">
                    Especialización en sector comercial
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                    <li className="flex items-center gap-2">• Habilidades en la negociación</li>
                    <li className="flex items-center gap-2">• Capacidades para actividad comercial</li>
                    <li className="flex items-center gap-2">• Personalidad para la venta</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-zinc-500 leading-relaxed">
                Nuestra metodología prioriza una previa evaluación o diagnóstico de la situación actual de la empresa con el objetivo de identificar y reforzar sus áreas de mejora mediante diferentes posibilidades de actuación incluyendo el diseño y confección de un plan de intervención, implantación o mejora de procedimientos de RRHH y sesiones de asesoramiento. Selektium favorece la máxima flexibilidad para ofrecer propuestas adaptadas a sus necesidades, filosofía, cultura y localización.
              </p>

              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs transition-colors"
                >
                  Solicitar propuesta sin compromiso
                </Link>
              </div>
            </div>

            {/* Fotografía de la sección Otros Servicios */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                <img
                  src="/diagnostico-empresas.webp"
                  alt="Consultoría y diagnóstico de RRHH Selektium Bilbao"
                  className="w-full h-[380px] lg:h-[460px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection />
    </div>
  );
}
