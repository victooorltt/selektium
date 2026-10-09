import type { Metadata } from 'next';
import {
  Users,
  Compass,
  Award,
  Shield,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Nosotros | Selektium Bilbao',
  description:
    'La selección a su alcance. Conoce al equipo de Selektium: consultoría de recursos humanos, selección de personal y orientación laboral en Bilbao.',
};

export default function NosotrosPage() {
  return (
    <div>
      {/* Hero with gradient variant */}
      <PageHero
        title="La selección a su alcance"
        subtitle="SELEKTIUM - Selección de personal Bilbao. Consultoría de recursos humanos nacida de la inquietud de proporcionar soluciones accesibles y a medida."
        imageSrc="/hero-nosotros.webp"
        imageAlt="Equipo Selektium Consultoría de Recursos Humanos Bilbao"
        ctaText="Contactar"
        ctaHref="/contacto"
        variant="gradient"
      />

      {/* Intro / Origen / Filosofía */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                SELEKTIUM
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                Selección de personal Bilbao
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed font-normal">
                Selektium nace de la inquietud por ofrecer servicios de recursos humanos y selección y formación de personal y compañías de un modo accesible, mediante la optimización de los recursos, transparencia en su forma de trabajar, flexibilidad de procedimientos, confidencialidad y cuidado de la imagen de sus clientes.
              </p>
              <p className="text-zinc-600 leading-relaxed text-base">
                Se ofrecen a las empresas de Bilbao y resto de país, diferentes tipos de servicios de selección de personal, formación y otros asesoramientos de recursos humanos con la posibilidad de segmentar los proyectos. Es decir, no es imprescindible contratar la totalidad de los servicios, pudiendo únicamente solicitar la fase correspondiente a los procesos demandados, como la selección de personal. Siempre con la flexibilidad necesaria para satisfacer por completo las necesidades de cada cliente según su contexto.
              </p>
              <p className="text-zinc-600 leading-relaxed text-base">
                Desde un primer contacto, se lleva a cabo un asesoramiento acerca de la situación del mercado y factores relevantes a tener en cuenta en materia de recursos humanos, buscando la mejor estrategia para gestionar el talento y llevar a cabo la selección de personal. Cuidamos al máximo la atención a las personas que se interesan por Selektium y la imagen de las compañías con las que colaboramos: desde el diseño de las ofertas de empleo hasta el seguimiento de la persona seleccionada tras su incorporación.
              </p>
            </div>

            {/* Client Real Photo: tres personas.jpg */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                <img
                  src="/tres-personas.jpg"
                  alt="Equipo de Selektium"
                  className="w-full h-auto object-cover max-h-[500px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Accent Section (#142D59) with photo */}
      <AccentSection
        title="Consultoría Integral de Talento y Orientación Laboral"
        subtitle="Soluciones Estratégicas y Ética Profesional"
        imageSrc="/accent-nosotros.webp"
        imageAlt="Consultoría Integral de Talento Selektium"
        ctaText="Contactar"
        ctaHref="/contacto"
        description={
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-base">
                Impulso a la Carrera Profesional
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Selektium acompaña a los particulares en la búsqueda de nuevos retos mediante un trato personalizado, ya sea individual o grupal. Su enfoque se centra en destacar la marca personal de cada candidato, ayudándoles a enfatizar sus competencias clave para sobresalir en un mercado laboral competitivo.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-white text-base">
                Servicios Especializados de Empleabilidad
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                La entidad ofrece herramientas críticas como la revisión y traducción de CV, optimización de perfiles en LinkedIn y la redacción de cartas de presentación. Además, preparan a los profesionales para enfrentar con éxito entrevistas en diversos formatos (presenciales, digitales o dinámicas de grupo) y mejorar su presencia en canales de empleo.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-white text-base">
                Soluciones Estratégicas para Empresas
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Para las organizaciones, la consultora gestiona procesos de evaluación, selección y formación de equipos humanos. Su objetivo principal es ofrecer soluciones integrales que permitan a las empresas buscar, desarrollar y retener el talento, asegurando siempre una adecuación óptima entre la persona y el puesto de trabajo.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-white text-base">
                Compromiso con la Calidad y la Ética
              </h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Cada proyecto se aborda con máxima implicación, utilizando recursos tecnológicos y procesos deslocalizados para adaptarse a cada cliente. El equipo se distingue por su calidez humana y ética profesional, garantizando rigurosos estándares de confidencialidad y una mejora continua en todos sus servicios de recursos humanos.
              </p>
            </div>
          </div>
        }
      />

      {/* EQUIPO SELEKTIUM */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Selección personal
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
              EQUIPO SELEKTIUM
            </h2>
            <p className="text-zinc-700 text-lg leading-relaxed font-normal">
              Selektium apuesta por la constante búsqueda de sinergias conjuntas y metodologías de trabajo apoyadas en una estructura adaptable de profesionales que se adecua en función de proyectos. Buscando la excelencia en tareas de recursos humanos, selección de personal Bilbao y selección y formación. Asimismo, la actividad de Selektium puede complementarse, mediante acuerdos y alianzas con empresas colaboradoras de cara a proporcionar un servicio integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-ink">
                Dominio en el ámbito de la Psicología
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Su equipo destaca por su conocimiento y dominio en el ámbito de la Psicología y su trabajo con una red flexible e interdisciplinar de profesionales, lo que le permite adaptarse a las necesidades de cada cliente.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-ink">
                Vocación centrada en las personas
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                La preocupación compartida es el interés y disfrute por trabajar por, para, con y desde las personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection />
    </div>
  );
}
