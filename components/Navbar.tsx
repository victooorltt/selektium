'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Building2, User } from 'lucide-react';

const serviceLinks = [
  {
    href: '/servicios/empresas',
    label: 'Empresas',
    description: 'Selección, evaluación y formación para tu organización',
    icon: Building2,
  },
  {
    href: '/servicios/particulares',
    label: 'Particulares',
    description: 'Orientación laboral, impulso a tu carrera y Plan Selektium',
    icon: User,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-accent text-white border-b border-white/15 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" onClick={closeAllMenus} className="inline-flex items-center">
          <img
            src="/logo.png"
            alt="Selektium"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Inicio
          </Link>

          {/* Desktop Servicios Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              aria-expanded={servicesDropdownOpen}
              aria-label="Abrir menú de servicios"
              className="flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white transition-colors py-2 focus:outline-none"
            >
              <span>Servicios</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-white' : 'text-white/70'
                }`}
              />
            </button>

            {/* Dropdown Card */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-72 z-50">
                <div className="bg-[#0e2142] rounded-2xl shadow-2xl border border-white/15 p-2 text-sm">
                  <div className="space-y-1">
                    {serviceLinks.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-accent transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              {service.label}
                            </div>
                            <div className="text-xs text-white/70 line-clamp-1">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/nosotros"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/ofertas"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Ofertas
          </Link>
          <Link
            href="/enviar-cv"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Enviar CV
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden p-2 text-white/90 hover:text-white transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/15 bg-accent px-6 py-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="text-base font-medium text-white/90 hover:text-white transition-colors py-1.5"
            >
              Inicio
            </Link>

            {/* Mobile Servicios Accordion */}
            <div className="border-y border-white/10 py-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-base font-medium text-white/90 hover:text-white transition-colors py-1.5"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 mt-2 space-y-2 border-l-2 border-white/30">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeAllMenus}
                      className="block py-2 text-sm text-white/80 hover:text-white font-medium transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/nosotros"
              onClick={closeAllMenus}
              className="text-base font-medium text-white/90 hover:text-white transition-colors py-1.5"
            >
              Nosotros
            </Link>

            <Link
              href="/ofertas"
              onClick={closeAllMenus}
              className="text-base font-medium text-white/90 hover:text-white transition-colors py-1.5"
            >
              Ofertas
            </Link>

            <Link
              href="/enviar-cv"
              onClick={closeAllMenus}
              className="text-base font-medium text-white/90 hover:text-white transition-colors py-1.5"
            >
              Enviar CV
            </Link>

            <Link
              href="/contacto"
              onClick={closeAllMenus}
              className="text-base font-medium text-white/90 hover:text-white transition-colors py-1.5"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
