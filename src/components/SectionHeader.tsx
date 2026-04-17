interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {label && (
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold leading-tight mb-4 ${
          light ? 'text-white' : 'text-brand-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-brand-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
