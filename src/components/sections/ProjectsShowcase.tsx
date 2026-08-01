import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MapPin, Maximize2, Clock, X } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { SectionLabel } from '@/components/ui/section-label';
import { CopperRule } from '@/components/ui/copper-rule';
import { ButtonLink } from '@/components/ui/brand-button';
import { fadeUp, staggerContainer } from '@/lib/variants';

interface Props {
  items?: Project[];
  showHeader?: boolean;
  showCta?: boolean;
}

export function ProjectsShowcase({
  items,
  showHeader = true,
  showCta = true,
}: Props) {
  const list = items ?? projects.filter((p) => p.featured);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="section-y bg-white">
      <div className="container-x">
        {showHeader && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-2xl mb-12"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Projeler</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="!text-primary">
              Öne Çıkan Çalışmalarımız
            </motion.h2>
            <CopperRule />
            <motion.p variants={fadeUp} className="text-text-muted">
              Ankara'da tamamladığımız konut, ticari ve kamusal projelerimizden bir seçki.
            </motion.p>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          {list.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              layout
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-xl shadow-card cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="absolute inset-0 gradient-card-overlay pointer-events-none" />

              <span className="absolute top-3 left-3 inline-flex items-center bg-secondary text-white font-heading font-semibold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-copper">
                {p.categoryLabel}
              </span>

              <div className="absolute bottom-0 inset-x-0 p-6 text-dark-text">
                <h3 className="!text-dark-text text-xl font-heading font-bold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-dark-text/70">
                  <MapPin size={13} /> {p.location}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-xs text-dark-text/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 size={12} /> Yaklaşık {p.area}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} /> {p.duration}
                  </span>
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-pale translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Projeyi İncele <ArrowRight size={15} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {showCta && (
          <div className="mt-12 text-center">
            <ButtonLink href="/projeler" variant="outline" size="lg">
              Tüm Projeleri Gör
            </ButtonLink>
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-dark/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-card"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Kapat"
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-primary/80 text-white hover:bg-primary transition-colors"
              >
                <X size={18} />
              </button>
              <img
                src={active.image}
                alt={active.title}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <span className="inline-flex items-center bg-secondary text-white font-heading font-semibold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-sm">
                  {active.categoryLabel}
                </span>
                <h3 className="mt-4 !text-primary text-2xl font-heading font-bold">
                  {active.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-text-muted">
                  <MapPin size={14} /> {active.location}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 size={13} /> Yaklaşık {active.area}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {active.duration}
                  </span>
                </p>
                <CopperRule width="sm" />
                <p className="text-text leading-relaxed">{active.description}</p>
                <div className="mt-6">
                  <ButtonLink href="/iletisim" variant="primary" size="lg">
                    Bu Projeye Benzer Bir Proje İçin →
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
