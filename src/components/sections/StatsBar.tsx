import { AnimatedCounter } from '@/components/ui/animated-counter';

const stats = [
  { value: 20, suffix: '+', label: 'Yıl Deneyim' },
  { value: 250, suffix: '+', label: 'Tamamlanan Proje' },
  { value: 100, suffix: '%', label: 'Müşteri Memnuniyeti' },
  { value: 40, suffix: '+', label: 'Uzman Ekip' },
];

export function StatsBar() {
  return (
    <section
      id="stats"
      className="gradient-dark border-y border-secondary/25 py-14 dark-section"
    >
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x divide-dark-text/15">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-4">
            <AnimatedCounter
              to={s.value}
              suffix={s.suffix}
              className="font-heading font-bold text-4xl md:text-5xl text-secondary-pale block"
            />
            <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-dark-text/65 font-body">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
