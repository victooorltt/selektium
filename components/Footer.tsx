import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LinkedinIcon from '@/components/LinkedinIcon';

const serviceLinks = [
  { label: 'Empresas', href: '/servicios/empresas' },
  { label: 'Particulares', href: '/servicios/particulares' },
  { label: 'Selección convencional', href: '/servicios/empresas' },
  { label: 'Búsqueda directa', href: '/servicios/empresas' },
  { label: 'Formación y RRHH', href: '/servicios/empresas' },
  { label: 'Plan Selektium', href: '/servicios/particulares' },
];

const pageLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Ofertas de empleo', href: '/ofertas' },
  { label: 'Enviar CV', href: '/enviar-cv' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white border-t border-white/15">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Selektium"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              «La Selección a Su Alcance». Consultoría de Recursos Humanos de Bilbao. Asesoramiento, selección y formación para empresas y orientación laboral para particulares.
            </p>

            <div className="space-y-3.5 text-sm text-white/90 pt-1">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-200 shrink-0 mt-0.5" />
                <span>Avenida de las Universidades 8 Dpto. 2 (entreplanta), 48007 Bilbao (Bizkaia)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-200 shrink-0" />
                <a href="tel:946853124" className="hover:text-white transition-colors">
                  94 685 31 24
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-200 shrink-0" />
                <a href="mailto:consultora@selektium.com" className="hover:text-white transition-colors">
                  consultora@selektium.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-200 shrink-0" />
                <span className="text-white/70 text-xs">Atención únicamente con cita previa</span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <LinkedinIcon className="w-4 h-4 text-blue-200 shrink-0" />
                <a
                  href="http://es.linkedin.com/in/teresarocharrhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-xs text-white/80 underline"
                >
                  Perfil LinkedIn Teresa Rocha RRHH
                </a>
              </div>
            </div>
          </div>

          {/* Quick links to Services */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links to Pages */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Selektium
            </h3>
            <ul className="space-y-2.5 text-sm">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-accent bg-white hover:bg-zinc-100 rounded-xl shadow-xs transition-all w-full"
                >
                  Contactar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/15 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Selektium Team S.L. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Bilbao (Bizkaia)</span>
            <Link href="/enviar-cv" className="hover:text-white transition-colors">
              Base de CVs y RGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
