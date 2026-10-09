import Link from 'next/link';
import { Building2, User, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

const latestOffers = [
  {
    title: 'Camarero/a con experiencia',
    description:
      '¿Te gusta la hostelería, disfrutas trabajando en equipo y te motiva el contacto con personas de diferentes nacionalidades? Esta puede ser tu oportunidad. Desde Selektium, Consultoría de RRHH, buscamos talento para un local, ubicado en el centro de Bilbao, cuya actividad se centra en proporcionar servicios de restauración y eventos.',
    location: 'Bilbao centro',
  },
  {
    title: 'Cocinero/a Senior',
    description:
      'Desde Selektium, Consultoría de RRHH, buscamos talento para una empresa con varios locales ubicados en Bilbao, cuya actividad se centra en ofrecer desayunos, menús, catering y desarrollo de eventos.',
    location: 'Bilbao',
  },
  {
    title: 'Técnico/a Comercial Zona Norte – Sector Construcción / Industrial',
    description:
      'Desde Selektium estamos seleccionando un/a Técnico/a Comercial para nuestro cliente, compañía que se dedica a ofrecer soluciones técnicas para empresas del sector de construcción e industriales, estudiando las mejores alternativas acordes a sus negocios y respectivas actividades, desarrolladas basándose en tecnologías novedosas.',
    location: 'Zona Norte',
  },
  {
    title: 'Coordinador/a de Seguridad y Salud en Obras de Construcción',
    description:
      'Desde Selektium, Consultoría de RRHH, buscamos talento para una Empresa de Prevención de Riesgos Laborales, ubicada en Bizkaia, cuya actividad se centra en proporcionar servicios de prevención de riesgos laborales de todas las especialidades (seguridad, higiene, ergonomía, psicosociología y vigilancia de la salud) a empresas del sector de la construcción e industriales principalmente. Además, cuenta con un equipo humano cualificado y multidisciplinar dentro del ámbito de PRL.',
    location: 'Bizkaia',
  },
  {
    title: 'Administrativo/a Sector Servicios - Bizkaia',
    description:
      'Desde Selektium estamos seleccionando para nuestro cliente, una empresa del sector servicios ubicada en Bilbao, Bizkaia.',
    location: 'Bilbao, Bizkaia',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Centered overlay variant (Mandatory for Inicio) */}
      <PageHero
        title="La selección a su alcance"
        subtitle="Selección y formación Bilbao - Consultoría Recursos humanos Bilbao. Soluciones accesibles y a medida para organizaciones y particulares."
        imageSrc="/hero-home.webp"
        imageAlt="Selektium Consultoría de Recursos Humanos Bilbao"
        ctaText="Empresas"
        ctaHref="/servicios/empresas"
        secondaryCtaText="Particulares"
        secondaryCtaHref="/servicios/particulares"
        variant="centered"
        benefits={[
          { icon: Building2, label: 'Empresas' },
          { icon: User, label: 'Particulares' },
          { icon: Award, label: 'Selección y formación Bilbao' },
          { icon: CheckCircle2, label: 'Consultoría RRHH Bilbao' },
        ]}
      />

      {/* Main Introduction Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  La Selección a Su Alcance
                </span>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight mt-1">
                  Consultoría de Recursos Humanos en Bilbao
                </h2>
              </div>
              <p className="text-zinc-700 text-lg leading-relaxed font-normal">
                El eslogan de Selektium es «La Selección a Su Alcance». Esta Consultoría de Recursos Humanos de Bilbao nace de la inquietud de proporcionar asesoramiento y soluciones accesibles para organizaciones que se preocupan por la adecuada gestión de personas. Así como de particulares en búsqueda de nuevos retos profesionales.
              </p>
              <p className="text-zinc-600 text-base leading-relaxed">
                Se trata de una consultora que se esfuerza por dar respuestas a medida a aquellas compañías que necesitan un apoyo / departamento de gestión de personas. Se ofrecen diferentes alternativas para que las empresas puedan disfrutar de los servicios de Consultoría de Recursos Humanos, independiente de su dimensión, desde autónomos a grandes compañías, pasando por pymes. De hecho, entre otras facilidades, se posibilita segmentar los proyectos de selección y formación, es decir, el cliente puede elegir únicamente las fases que precise resultando más accesible y económico.
              </p>
              <p className="text-zinc-600 text-base leading-relaxed">
                Además, en todo momento el servicio se realiza desde el punto de vista de la empresa contratante y basándose en el perfil laboral que necesita. Cuidando al máximo la imagen de la compañía para la que se desarrolla el proyecto de reclutamiento y selección de persona, como la de las personas que se interesan por estas mismas ofertas de empleo.
              </p>
              <p className="text-zinc-600 text-base leading-relaxed">
                A destacar la especialización en evaluación y selección de perfiles comerciales que lleva a cabo Selektium, en las que se utilizan pruebas específicas para la detección de competencias y rasgos de personalidad idóneos para la venta.
              </p>
              <div className="pt-2">
                <Link
                  href="/servicios/empresas"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  Servicios para empresas <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-zinc-200 w-full h-full min-h-[480px] flex-1">
                <img
                  src="/consultoria-bilbao.webp"
                  alt="Consultoría de Recursos Humanos Selektium en Bilbao"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Accent Section (#142D59) with photo */}
      <AccentSection
        title="Selektium: Asesoramiento, selección y formación"
        subtitle="Referente en Bilbao y Península"
        imageSrc="/accent-home.webp"
        imageAlt="Consultoría Recursos Humanos Selektium"
        ctaText="Contactar con Selektium"
        ctaHref="/contacto"
        description={
          <>
            <p>
              En definitiva, Selektium se dedica al asesoramiento, selección y formación, evaluación y otros procesos relacionados con la gestión de personas. Por un lado, se dirige a las empresas para apoyarles en la búsqueda, evaluación, formación y retención del talento pudiendo llegar a ser un departamento de recursos humanos externalizado. Por otro lado, ofrece a los particulares orientación laboral.
            </p>
            <p>
              Selektium, Consultoría Recursos Humanos Bilbao, pretende ser un referente en la selección de personal tanto por la profesionalidad de sus servicios, como por el compromiso de las personas que lideran sus proyectos. Su oficina se encuentra en Bilbao aunque se abordan proyectos a nivel peninsular.
            </p>
          </>
        }
      />

      {/* Orientación Laboral Particulares */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                Orientación laboral para particulares
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                Asimismo, el equipo de Selektium promueve trasladar a los particulares el conocimiento y las necesidades del mercado laboral que recoge mediante los proyectos de Consultoría de Recursos Humanos Bilbao que desarrolla, sobre todo a nivel de selección y formación.
              </p>
              <p className="text-zinc-600 leading-relaxed text-base">
                Los procesos de orientación laboral consisten en acompañar a las personas que estén en búsqueda de una mejora en su situación profesional. Se ofrecen soluciones adaptadas a las necesidades individuales: optimizar su currículum, identificar cuáles son los canales de empleo o redes sociales donde encontrar ofertas de empleo acordes a su perfil o entrenar el desarrollo de sus competencias y habilidades para superar con éxito una selección de personal.
              </p>
              <div className="pt-2">
                <Link
                  href="/servicios/particulares"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs transition-colors"
                >
                  Conocer servicios para particulares
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
              <h3 className="text-lg font-semibold text-ink">
                Soluciones adaptadas a ti
              </h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Optimizar tu currículum vitae y carta de presentación.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Identificar los canales de empleo y redes profesionales idóneos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Entrenar competencias y habilidades para superar con éxito una selección de personal.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros colaboradores section */}
      <section className="py-20 lg:py-24 bg-zinc-50 border-b border-zinc-200/70">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
              Nuestros colaboradores
            </h2>
            <p className="text-zinc-700 text-lg leading-relaxed">
              Para ello, Selektium cuenta con un equipo flexible de colaboradores, cada uno especializado en su materia y en constante actualización para poder prestar un servicio integral. Entre todos apostamos por la calidad humana en los proyectos en los que nos vemos inmersos.
            </p>
            <div className="pt-1">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Conocer más sobre nosotros <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/colaboradores-selektium.jpg"
              alt="Nuestros colaboradores Selektium"
              className="w-full h-auto rounded-2xl shadow-md border border-zinc-200/80"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ÚLTIMAS OFERTAS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Bolsa de trabajo activa
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mt-2">
                ÚLTIMAS OFERTAS
              </h2>
            </div>
            <Link
              href="/ofertas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Ver todas las ofertas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestOffers.map((offer, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-zinc-200/80 hover:border-accent/40 hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <span className="inline-block text-xs font-medium text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                    {offer.location}
                  </span>
                  <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                    {offer.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed line-clamp-4">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                  <Link
                    href="/ofertas"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Ver <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/enviar-cv"
                    className="text-xs text-zinc-500 hover:text-ink font-medium"
                  >
                    Inscribirse
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection />
    </div>
  );
}
