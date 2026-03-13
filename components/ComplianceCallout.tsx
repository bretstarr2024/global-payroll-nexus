import { AnimatedSection } from './AnimatedSection';

interface ComplianceCalloutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function ComplianceCallout({ title, children, className = '' }: ComplianceCalloutProps) {
  return (
    <AnimatedSection>
      <div className={`compliance-callout ${className}`}>
        {title && (
          <p className="text-sm font-semibold text-accent-warm-dark uppercase tracking-wider mb-2">
            {title}
          </p>
        )}
        {children}
      </div>
    </AnimatedSection>
  );
}
