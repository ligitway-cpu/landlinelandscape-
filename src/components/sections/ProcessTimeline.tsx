import { motion } from 'framer-motion';
import { MessageCircle, Compass, PenTool, HardHat, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/ui/section-label';
import { CopperRule } from '@/components/ui/copper-rule';
import { ButtonLink } from '@/components/ui/brand-button';
import { contact } from '@/data/contact';
import { fadeUp, staggerContainer } from '@/lib/variants';

const steps = [
  {
    Icon: MessageCircle,
    title: 'Ücretsiz Keşif',
    description: "Arayın veya WhatsApp'tan yazın. 24 saat içinde randevunuzu ayarlıyoruz.",
    badge: 'Ücretsiz',
  },
  {
    Icon: Compass,
    title: 'Yerinde Analiz',
    description:
      'Uzmanımız arazinizi inceler, güneş, toprak ve yaşam tarzınızı değerlendirir.',
    badge: '30–60 dk',
  },
  {
    Icon: PenTool,
    title: '3D Tasarım',
    description:
      'Proje öncesi 3D görselleştirme ile bahçenizin nasıl görüneceğini net olarak sunuyoruz.',
    badge: '3–5 gün',
  },
  {
    Icon: HardHat,
    title: 'Uygulama',
    description:
      'Uzman sahacı ekibimiz belirlenen takvimde, düzenli ilerleme raporlarıyla çalışır.',
    badge: 'Zamanında',
  },
  {
    Icon: ShieldCheck,
    title: 'Teslim & Garanti',
    description: 'Bitkiler, yapısal işler, sulama sistemi ve rulo çim dahil — 2 Yıl Tam Garanti.',
    badge: '2 Yıl Tam Garanti',
  },
];

export function ProcessTimeline() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-2xl mb-14"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Süreç</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="!text-primary">
            Nasıl Çalışıyoruz?
          </motion.h2>
          <CopperRule />
          <motion.p variants={fadeUp} className="text-text-muted">
            Fikirden teslimata — şeffaf ve öngörülebilir bir süreç
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="relative grid gap-10 md:grid-cols-5 md:gap-6"
        >
          {steps.map(({ Icon, title, description, badge }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="relative pl-16 md:pl-0 md:text-center"
            >
              {/* connector */}
              {i < steps.length - 1 && (
                <>
                  <span className="absolute left-[23px] top-12 bottom-[-2.5rem] w-[2px] bg-border md:hidden" />
                  <span className="hidden md:block absolute top-6 left-1/2 w-full h-[2px] bg-border" />
                </>
              )}

              <div className="absolute left-0 top-0 md:static md:mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white z-10 relative">
                {i + 1}
              </div>

              <Icon size={22} className="mt-4 text-secondary md:mx-auto" strokeWidth={2} />

              <h3 className="mt-3 text-lg !text-primary font-heading font-bold">{title}</h3>
              <span className="mt-2 inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {badge}
              </span>
              <p className="mt-3 text-sm text-text-muted">{description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-14 text-center">
          <ButtonLink
            href={contact.whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            Bugün İlk Adımı Atın →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
