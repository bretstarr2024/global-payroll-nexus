import Link from 'next/link';

interface ContentCardProps {
  href: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  /** Small metadata items shown above the title (e.g. category pill, date, read time) */
  meta?: React.ReactNode;
  /** Badge shown below description (e.g. "3 articles", "The gap no one covers") */
  badge?: { label: string; variant?: 'default' | 'warm' };
  /** CTA text shown at bottom with arrow (e.g. "Read guide", "Browse articles") */
  cta?: string;
  /** Highlight border color — uses warm/coral accent */
  highlight?: boolean;
  /** Layout: vertical (default) or horizontal (icon left, content right) */
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

function CardWrapper({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function ContentCard({
  href,
  icon,
  title,
  description,
  meta,
  badge,
  cta,
  highlight = false,
  layout = 'vertical',
  className = '',
}: ContentCardProps) {
  const borderClass = highlight
    ? 'border-accent-warm/30 hover:border-accent-warm/60'
    : '';

  const iconBgClass = highlight
    ? 'bg-accent-warm/10 text-accent-warm'
    : 'bg-primary/10 text-primary';

  if (layout === 'horizontal') {
    return (
      <CardWrapper
        href={href}
        className={`card card-hover group flex items-start gap-4 hover:no-underline h-full ${borderClass} ${className}`}
      >
        {icon && (
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${iconBgClass}`}>
            {icon}
          </div>
        )}
        <div className="min-w-0">
          {meta && <div className="flex flex-wrap items-center gap-2 mb-2">{meta}</div>}
          <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-secondary mt-1">{description}</p>
          {badge && (
            <span className={`inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-full ${
              badge.variant === 'warm'
                ? 'text-accent-warm-dark bg-accent-warm/10'
                : 'text-text-muted bg-surface-alt'
            }`}>
              {badge.label}
            </span>
          )}
          {cta && <CardCTA label={cta} />}
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper
      href={href}
      className={`card card-hover group block hover:no-underline h-full ${borderClass} ${className}`}
    >
      {icon && (
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform ${iconBgClass}`}>
          {icon}
        </div>
      )}
      {meta && <div className="flex flex-wrap items-center gap-2 mb-3">{meta}</div>}
      <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
        {title}
      </h3>
      <p className="text-text-secondary text-sm">{description}</p>
      {badge && (
        <span className={`inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
          badge.variant === 'warm'
            ? 'text-accent-warm-dark bg-accent-warm/10'
            : 'text-text-muted bg-surface-alt'
        }`}>
          {badge.label}
        </span>
      )}
      {cta && <CardCTA label={cta} />}
    </CardWrapper>
  );
}

function CardCTA({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
      {label}
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </span>
  );
}

/** Reusable metadata pill */
export function MetaPill({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'muted' }) {
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
      variant === 'primary'
        ? 'text-primary bg-primary/10'
        : 'text-text-muted'
    }`}>
      {children}
    </span>
  );
}
