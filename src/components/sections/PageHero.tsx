import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/section-label';
import { CopperRule } from '@/components/ui/copper-rule';
import { fadeUp, staggerContainer } from '@/lib/variants';

interface Props {
  label: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export function PageHero({ label, title, description, breadcrumb }: Props) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 dark-section overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div
        className="absolute inset-0 opacity-25 mix-blend-luminosity"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(166,106,41,0.4), transparent 60%), radial-gradient(circle at 80% 70%, rgba(74,140,74,0.4), transparent 60%)',
        }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container-x relative text-dark-text"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel className="!text-secondary-pale">{label}</SectionLabel>
        </motion.div>
        <motion.h1 variants={fadeUp} className="!text-dark-text mt-2">
          {title}
        </motion.h1>
        <motion.div variants={fadeUp}>
          <CopperRule width="lg" />
        </motion.div>
        {description && (
          <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-lg text-dark-text/80 md:text-xl">
            {description}
          </motion.p>
        )}
        {breadcrumb && (
          <motion.nav variants={fadeUp} className="mt-5 text-sm text-dark-text/55">
            {breadcrumb.map((b, i) => (
              <span key={i}>
                {b.to ? (
                  <a href={b.to} className="hover:text-secondary-pale">
                    {b.label}
                  </a>
                ) : (
                  b.label
                )}
                {i < breadcrumb.length - 1 && <span className="mx-2">›</span>}
              </span>
            ))}
          </motion.nav>
        )}
      </motion.div>
    </section>
  );
}
