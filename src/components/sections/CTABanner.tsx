import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/brand-button';
import { CopperRule } from '@/components/ui/copper-rule';
import { contact } from '@/data/contact';
import { fadeUp, staggerContainer } from '@/lib/variants';

interface Props {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = 'Bahçe Projenizi Hayata Geçirelim',
  description = 'Ücretsiz keşif görüşmesi için hemen iletişime geçin. Hayalinizdeki bahçeyi birlikte tasarlayalım.',
}: Props) {
  return (
    <section className="bg-primary border-t-[3px] border-secondary py-20 dark-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
        className="container-x text-center text-dark-text"
      >
        <motion.h2 variants={fadeUp} className="!text-dark-text">
          {title}
        </motion.h2>
        <motion.div variants={fadeUp}>
          <CopperRule align="center" className="mx-auto" />
        </motion.div>
        <motion.p variants={fadeUp} className="max-w-xl mx-auto text-dark-text/80">
          {description}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/iletisim" variant="primary" size="lg">
            Randevu Al
          </ButtonLink>
          <ButtonLink
            href={contact.whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
          >
            WhatsApp ile Yaz
          </ButtonLink>
        </motion.div>
        <motion.a
          variants={fadeUp}
          href={`tel:${contact.phoneRaw}`}
          className="mt-8 inline-block font-heading text-2xl text-secondary-pale hover:text-white transition-colors"
        >
          {contact.phone}
        </motion.a>
      </motion.div>
    </section>
  );
}
