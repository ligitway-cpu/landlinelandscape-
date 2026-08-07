import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ui/brand-button';

export function GuaranteeStrip() {
  return (
    <section className="bg-primary/5 border-y border-primary/10 py-8">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center gap-5 md:gap-7 text-center md:text-left"
        >
          <ShieldCheck size={44} className="text-primary mx-auto md:mx-0 shrink-0" strokeWidth={1.6} />
          <div className="flex-1">
            <p className="font-heading font-bold text-lg text-primary leading-snug">
              Bitkiler, yapısal işler, sulama sistemi ve rulo çim dahil — 2 Yıl Tam Garanti
            </p>
            <p className="mt-1 text-sm text-text-muted leading-relaxed max-w-2xl">
              Tüm projelerimiz kapsam dahilindeki her kalemle birlikte 2 yıl boyunca
              garantimiz altındadır.
            </p>
          </div>
          <div className="shrink-0">
            <ButtonLink href="/sss" variant="outline">
              Garantimiz Hakkında Bilgi →
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
