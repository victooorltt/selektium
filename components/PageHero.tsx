import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

export interface HeroBenefit {
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  label: string;
}

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  benefits?: HeroBenefit[];
  variant?: 'centered' | 'gradient';
  theme?: 'light' | 'dark';
  imagePosition?: string;
  imageWrapperClassName?: string;
  minHeight?: string;
  overlayClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  benefits,
  variant = 'centered',
  theme,
  imagePosition = 'object-center',
  imageWrapperClassName = '',
  minHeight = 'min-h-[580px] lg:min-h-[660px]',
  overlayClassName,
  className = '',
  children,
}: PageHeroProps) {
  const isGradient = variant === 'gradient';
  // Centered heros default to dark theme with rich overlay; gradient heros default to light theme
  const isDark = theme ? theme === 'dark' : !isGradient;

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? 'bg-zinc-950 border-b border-zinc-800/80' : 'bg-white border-b border-zinc-200/80'
      } ${minHeight} flex items-center ${
        isGradient ? '' : 'justify-center'
      } ${className}`.trim()}
    >
      {/* Background photo container */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden ${imageWrapperClassName}`.trim()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover ${imagePosition}`}
          fetchPriority="high"
          loading="eager"
        />
        {/* Overlay / Gradient */}
        {overlayClassName ? (
          <div className={overlayClassName} />
        ) : isDark ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        ) : isGradient ? (
          <>
            {/* Mobile vertical gradient: clean white behind top text, smooth progressive diffusion, photo clearly visible at bottom */}
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  'linear-gradient(to bottom, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.85) 52%, rgba(255, 255, 255, 0.3) 72%, rgba(255, 255, 255, 0) 90%)',
              }}
            />
            {/* Desktop horizontal gradient fade: solid white behind left text, gradual diffusion in center, right side completely open to show photo with full clarity */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  'linear-gradient(to right, #ffffff 0%, #ffffff 30%, rgba(255, 255, 255, 0.92) 44%, rgba(255, 255, 255, 0.4) 64%, rgba(255, 255, 255, 0) 84%)',
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        )}
      </div>

      {/* Content Container */}
      <div
        className={`relative z-10 mx-auto px-6 py-16 lg:py-24 w-full ${
          isGradient ? 'max-w-6xl text-left' : 'max-w-5xl text-center'
        }`}
      >
        <div className={isGradient ? 'max-w-xl lg:max-w-2xl' : 'max-w-3xl mx-auto'}>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] ${
              isDark ? 'text-white' : 'text-ink'
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-5 text-base sm:text-lg lg:text-xl leading-relaxed font-normal ${
                isDark ? 'text-zinc-200' : 'text-ink/80'
              } ${isGradient ? 'max-w-2xl' : 'max-w-2xl mx-auto'}`}
            >
              {subtitle}
            </p>
          )}

          {/* Action buttons */}
          {(ctaText || secondaryCtaText || children) && (
            <div
              className={`mt-8 flex flex-col sm:flex-row items-center gap-4 ${
                isGradient ? 'justify-start' : 'justify-center'
              }`}
            >
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl shadow-md transition-all hover:shadow-lg w-full sm:w-auto ${
                    isDark
                      ? 'text-ink bg-white hover:bg-zinc-100'
                      : 'text-white bg-accent hover:bg-accent-hover'
                  }`}
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-xl transition-colors w-full sm:w-auto ${
                    isDark
                      ? 'text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-xs'
                      : 'text-ink bg-white/90 hover:bg-white border border-zinc-300 hover:border-zinc-400'
                  }`}
                >
                  {secondaryCtaText}
                </Link>
              )}
              {children}
            </div>
          )}
        </div>

        {/* Benefits row */}
        {benefits && benefits.length > 0 && (
          <div
            className={`mt-10 pt-6 border-t ${
              isDark ? 'border-white/20' : 'border-zinc-300/60'
            } ${isGradient ? 'max-w-2xl' : 'max-w-4xl mx-auto'}`}
          >
            <div
              className={`grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-center sm:flex-nowrap gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium ${
                isDark ? 'text-zinc-200' : 'text-ink'
              } ${isGradient ? 'sm:justify-start' : 'sm:justify-center'}`}
            >
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 whitespace-nowrap justify-start sm:justify-center"
                  >
                    {IconComponent && (
                      <IconComponent
                        className={`h-4 w-4 shrink-0 ${
                          isDark ? 'text-blue-300' : 'text-accent'
                        }`}
                      />
                    )}
                    <span>{benefit.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
