import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Search,
  Globe,
  Share2,
  Video,
  Mail,
  CheckCircle2,
  Users,
  Compass,
  FileCheck,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import AccentSection from '@/components/AccentSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Servicios para Particulares | Selektium Bilbao',
  description:
    'Nuevos retos profesionales te esperan. Asesoramiento, Plan Selektium, revisión de CV, LinkedIn y preparación de entrevistas para particulares.',
};

export default function ParticularesPage() {
  return (
    <div>
      {/* Hero with gradient variant (image on right, text on left) */}
      <PageHero
        title={
          <>
            Nuevos retos profesionales <br />
            te esperan
          </>
        }
        subtitle="Acompañamiento personalizado en el proceso de cambio. Asesoramiento y trato individual o grupal para destacar como profesional y enfatizar tus principales competencias."
        imageSrc="/hero-particulares.webp"
        imageAlt="Orientación laboral y retos profesionales Selektium"
        ctaText="Contactar"
        ctaHref="/contacto"
        secondaryCtaText="Solicitar Presupuesto"
        secondaryCtaHref="/contacto"
        variant="gradient"
      />

      {/* Intro & A quiénes se dirige */}
      <section className="py-20 lg:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                PARTICULARES
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-tight">
                Asesoramiento y trato personalizado
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                Selektium puede acompañarte de un modo personalizado en el proceso de cambio o búsqueda de nuevos retos profesionales. Ofrecemos asesoramiento y trato personalizado, en modalidad individual o grupal, para que puedas destacar como profesional y enfatizar tus principales competencias personales.
              </p>
              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-xs transition-colors"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4">
              <h3 className="text-lg font-semibold text-ink">
                ¿A quiénes dirige Selektium sus servicios?
              </h3>
              <ul className="space-y-3">
                {[
                  'Aprender a llevar a cabo la selección personal que más se adapte a mi empresa.',
                  'Cómo ser más operativo gestionando mi tiempo.',
                  'Cómo vender mis proyectos y gestionar mis primeros clientes.',
                  'Mejora de mis Habilidades de Comunicación.',
                  'Desarrollo de Habilidades Directivas.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo te ayudamos? */}
      <section className="py-20 lg:py-24 bg-zinc-50/50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Herramientas y Metodología
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink mt-2">
              ¿Cómo te ayudamos?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Elaboración de perfil profesional */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink">
                Elaboración de perfil profesional
              </h3>
              <p className="text-xs font-medium text-accent">Si aún no dispones de un CV</p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Inicialmente la Consultora te enviará una plantilla para conocer los detalles sobre tu perfil: estudios, experiencia, competencias, etc. En menos de una semana, contactaremos contigo telefónicamente para concertar una cita personal o vía on-line en la que tendremos la oportunidad de trasladarte una propuesta de elaboración de tu cv. Este servicio te permitirá plasmar los datos fundamentales de tu perfil contando con las pautas necesarias para la búsqueda efectiva de empleo.
              </p>
            </div>

            {/* 2. Revisión de CV */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink">Revisión de CV</h3>
              <p className="text-xs font-medium text-accent">Análisis y feedback de tu cv</p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                El primer paso a seguir será el envío de tu cv a la consultora. Posteriormente, tu cv será analizado detalladamente: formato, orden, coherencia, cronología, etc. En menos de una semana, contactaremos contigo telefónicamente para concertar una cita personal o vía on-line en la que devolverte un feedback pormenorizado de sus puntos fuertes y oportunidades de mejora.
              </p>
            </div>

            {/* 3. Presencia en canales de empleo */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink">
                Presencia en canales de empleo
              </h3>
              <p className="text-xs font-medium text-accent">
                Posiciónate o mejora tu presencia en canales recomendados
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Si quieres insertar tu perfil o mejorar su presencia en los canales de empleo más recomendados para ti, mediante este servicio puedes recibir un informe personalizado acerca de qué canales de empleo son los más oportunos y utilizados para hacer visible tu cv, potenciando de esta manera su alcance y consideración.
              </p>
            </div>

            {/* 4. Traducción de tu CV */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink">Traducción de tu CV</h3>
              <p className="text-xs font-medium text-accent">Transcribe tu CV a varios idiomas</p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Si quieres enviar tu cv a una compañía multinacional de sede extranjera, una empresa de otro país y/o que tu perfil sea considerado por recruiters internacionales, este servicio te posibilitará adaptarlo al idioma y formato acorde a las demandas del destinatario.
              </p>
            </div>

            {/* 5. LinkedIn */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink">LinkedIn</h3>
              <p className="text-xs font-medium text-accent">
                Elaboración o mejora de tu perfil y funcionamiento
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Creando una cuenta de LinkedIn o mejorando la que ya dispones, podrás hacer visible tu perfil on-line, conectar con profesionales afines a ti, unirte a grupos de tu interés, inscribirte a ofertas de empleo, hacerte ver a través de tus publicaciones o localizar a profesionales y compañías potencialmente interesados en tu perfil entre otras muchas posibilidades. Junto a la creación o perfeccionamiento de la cuenta, recibirás pautas en una sesión presencial u on-line.
              </p>
            </div>

            {/* 6. Preparación de entrevistas */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-ink leading-snug">
                Preparación de entrevistas
              </h3>
              <p className="text-xs font-medium text-accent">
                Personales, telefónicas, ON-LINE o dinámicas de grupo
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Tendrás la oportunidad de realizar una simulación de entrevista adecuada a tu perfil y sector de interés. Finalmente se te devolverán las impresiones del proceso y un feedback de la simulación, así como las claves fundamentales para tu éxito a la hora de afrontar una entrevista real.
              </p>
            </div>

            {/* 7. Carta de presentación */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-2xs md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-ink">Carta de presentación / emails</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed max-w-3xl">
                Creación o corrección de cartas de presentación, motivación, emails o mensajes que acompañen el envío de la candidatura favoreciendo que aumente su eficacia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Accent Section (#142D59) with photo: Plan Selektium */}
      <AccentSection
        title="Plan Selektium"
        subtitle="Asesoramiento Integral y Acompañamiento"
        imageSrc="/accent-particulares.webp"
        imageAlt="Plan Selektium Acompañamiento Profesional"
        ctaText="Solicitar Presupuesto"
        ctaHref="/contacto"
        description={
          <>
            <p>
              Consiste en un asesoramiento y acompañamiento integral y personalizado. Se trata de un proceso de identificación, gestión y modificación de los objetivos, herramientas y estrategias esenciales en la búsqueda de nuevos retos. Todo ello acompañado de las principales pautas y apoyos por parte de una Consultora.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-white/95">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                <span>Definirás tu propio objetivo personal y profesional.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                <span>Analizarás tus fortalezas, áreas de mejora, recursos diferenciales y posibles límites (autoconocimiento).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                <span>Identificarás las herramientas necesarias y la mejor estrategia: CV, carta de presentación y LinkedIn.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                <span>Participarás en simulaciones de entrevista a través de reuniones individuales personales u on-line.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                <span>Durante todo el mes estimado del Plan, podrás plantear dudas y analizar en profundidad tu participación en evaluaciones concretas.</span>
              </li>
            </ul>
          </>
        }
      />

      {/* Servicios Complementarios & Talleres Grupales */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Servicios complementarios */}
            <div className="overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100">
                <img
                  src="/retoques-cv.webp"
                  alt="Redacción, modificación y retoques de CV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Servicios Complementarios
                    </span>
                    <h3 className="text-2xl font-semibold text-ink mt-1">
                      Redacción, modificación y retoques de CV
                    </h3>
                  </div>
                  <div className="space-y-3 text-zinc-600 text-sm leading-relaxed">
                    <p>
                      Una vez se haya analizado tu cv y hayas recibido el feedback correspondiente, puedes solicitar la creación y/o modificación del diseño y formato del mismo que incluya las mejoras anteriormente propuestas.
                    </p>
                    <p>
                      Asimismo, este servicio está pensado para las personas que quieran darle un enfoque diferente a su trayectoria profesional y/o ampliar su cv con nuevos criterios.
                    </p>
                    <p>
                      También puedes solicitarlo para mantener siempre al día tu cv, contemplando las nuevas tendencias y así lograr potenciar su eficacia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Talleres grupales */}
            <div className="overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100">
                <img
                  src="/talleres-grupales.webp"
                  alt="Talleres grupales Selektium"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Formación Grupal
                    </span>
                    <h3 className="text-2xl font-semibold text-ink mt-1">Talleres grupales</h3>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Periódicamente realizamos talleres grupales de un máximo 10 personas donde analizamos las principales estrategias de la búsqueda activa de nuevos retos profesionales:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
                    {[
                      'Claves de las cartas de presentación, emails…',
                      'Características del mercado objetivo y cómo potenciar la candidatura por sectores.',
                      'Criterios fundamentales de un cv y cómo destacar el propio.',
                      'Principales canales de empleo y redes sociales donde encontrar las ofertas que se ajusten a cada perfil.',
                      'Habilidades y competencias propias y cómo resaltarlas.',
                      'Capacidad de empatizar y adaptación a los diferentes niveles de interlocución en selección.',
                      'Pautas para superar una entrevista de selección / dinámica de grupo con éxito.',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
