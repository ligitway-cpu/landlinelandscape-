import { motion } from 'framer-motion';
import { PenTool, Hammer, Scissors, Sprout, ArrowRight, type LucideIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { services } from '@/data/services';
import { SectionLabel } from '@/components/ui/section-label';
import { CopperRule } from '@/components/ui/copper-rule';
import { fadeUp, staggerContainer } from '@/lib/variants';

const icons: Record<string, LucideIcon> = { PenTool, Hammer, Scissors, Sprout };

export function ServicesGrid() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Hizmetlerimiz</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="!text-primary">
            Bahçeniz İçin Her Şey
          </motion.h2>
          <CopperRule align="center" className="mx-auto" />
          <motion.p variants={fadeUp} className="text-text-muted mt-4">
            Tasarımdan uygulamaya, bakımdan sürdürülebilirliğe kadar peyzajın her aşamasında
            yanınızdayız.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.div
                key={s.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative bg-white border border-border rounded-xl p-8 shadow-soft hover:shadow-card hover:border-secondary transition-[border-color,box-shadow] duration-300"
              >
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/15 transition-colors">
                  <Icon size={28} className="text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="!text-primary text-xl font-heading font-bold">{s.title}</h3>
                <CopperRule width="sm" />
                <p className="text-text-muted leading-relaxed">{s.shortDescription}</p>
                <Link
                  to="/hizmetler"
                  className="mt-5 inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:text-secondary-dark transition-colors group/link"
                >
                  Detayları Gör
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
