import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { ArrowRight, MapPin } from 'lucide-react';
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
    </section>
  );
}
