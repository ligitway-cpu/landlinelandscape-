import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImg from '@/assets/hero.jpg';
import { ButtonLink } from '@/components/ui/brand-button';
import { CopperRule } from '@/components/ui/copper-rule';
import { contact } from '@/data/contact';

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Ankara'da modern villa peyzajı"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />

      {/* Vertical decorative text */}
      <span className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-center text-xs uppercase tracking-[0.4em] text-dark-text/25 font-body">
        Peyzaj Mimarlığı · Ankara
      </span>

      <div className="container-x relative z-10 pt-32 pb-24 text-dark-text">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-3xl"
        >
          <motion.span variants={item} className="section-label !text-secondary-pale">
            15 Yıl · 250+ Proje · Türkiye Genelinde Hizmet
          </motion.span>

          <motion.h1
            variants={item}
            className="!text-dark-text font-heading font-bold leading-[1.05] mt-3"
          >
            Ankara'nın Önde Gelen Peyzaj Tasarım Stüdyosu
          </motion.h1>

          <motion.div variants={item}>
            <CopperRule width="md" className="my-7" />
          </motion.div>

          <motion.p variants={item} className="max-w-xl text-dark-text/85 text-lg leading-relaxed">
            Hayal ettiğiniz bahçeyi, 3D tasarımdan teslimata kadar eksiksiz uyguluyoruz.
            Sulama sistemleri, aydınlatma, taş döşeme — tek firmadan uçtan uca hizmet.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href={contact.whatsappMsg}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Ücretsiz Keşif Talep Et
              </ButtonLink>
              <ButtonLink href="/projeler" variant="outline-light" size="lg">
                Projelerimizi İncele
              </ButtonLink>
            </div>
            <p className="mt-3 text-sm text-secondary-pale">
              ✓ Ücretsiz keşif · ✓ Bitkiler, yapısal işler, sulama sistemi ve rulo çim dahil — 2 Yıl Tam Garanti
            </p>
          </motion.div>

        </motion.div>
      </div>

      <a
        href="#stats"
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-text/50 hover:text-dark-text transition-colors animate-[bounceY_2s_ease-in-out_infinite]"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
