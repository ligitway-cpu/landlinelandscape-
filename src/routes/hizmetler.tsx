import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Check,
  PenTool,
  Hammer,
  Scissors,
  Sprout,
  Zap,
  Droplets,
  Home,
  Smile,
  CloudRain,
  Armchair,
  ShieldCheck,
  MapPin,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { CopperRule } from "@/components/ui/copper-rule";
import { SectionLabel } from "@/components/ui/section-label";
import { ButtonLink } from "@/components/ui/brand-button";
import { services } from "@/data/services";
import { contact } from "@/data/contact";
import { fadeUp, staggerContainer } from "@/lib/variants";

const differentiators = [
  "İş öncesi 3D görselleştirme",
  "Yerinde toprak ve güneş analizi",
  "2 yıl tam kapsam garanti",
  "Ankara iklimine uygun yerel bitki uzmanlığı",
  "Proje boyunca özel takip sistemi",
];

const icons: Record<string, LucideIcon> = { PenTool, Hammer, Scissors, Sprout };

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: "Hizmetler | Landline Landscape" },
      {
        name: "description",
        content: "Peyzaj tasarımı, uygulama, bakım ve sürdürülebilir peyzaj — Ankara'da uçtan uca hizmet.",
      },
      { property: "og:title", content: "Hizmetler | Landline Landscape" },
      {
        property: "og:description",
        content: "Tasarımdan bakıma kadar peyzajın her aşamasında profesyonel hizmet.",
      },
    ],
  }),
  component: HizmetlerPage,
});

const steps = [
  { n: 1, title: "İlk Görüşme", text: "Ücretsiz keşif. İhtiyaç ve beklentilerinizi birlikte netleştiriyoruz." },
  { n: 2, title: "Tasarım & Plan", text: "Arazi analizi, konsept, 3D görselleştirme ve son tasarım." },
  { n: 3, title: "Uygulama", text: "Uzman saha ekibimizle planın sahaya kusursuz aktarımı." },
  { n: 4, title: "Teslimat & Bakım", text: "Teslim sonrası bakım anlaşmasıyla bahçeniz dört mevsim güvende." },
];

const extras: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Zap,
    title: "Bahçe Aydınlatması",
    text: "Bahçenizi gece de yaşanabilir kılıyoruz. LED spot, güneş enerjili ve akıllı aydınlatma sistemleri kuruyoruz.",
  },
  {
    icon: Droplets,
    title: "Sulama Sistemleri",
    text: "Otomatik damla sulama, sprinkler ve akıllı kontrol sistemleri ile su tasarrufu ve sağlıklı bitkiler. Yazın bahçenizi unutun.",
  },
  {
    icon: Home,
    title: "Çatı & Teras Bahçeleri",
    text: "Balkon ve çatı teraslarını yeşil yaşam alanlarına dönüştürüyoruz. Hafif substrat, özel bitki seçimi.",
  },
  {
    icon: Smile,
    title: "Çocuk Oyun Alanları",
    text: "Güvenli zemin kaplamaları, doğal ahşap ve eğlenceli tasarımlarla çocuklara özel bahçe köşeleri.",
  },
  {
    icon: CloudRain,
    title: "Yağmur Bahçeleri",
    text: "Yağmur suyunu toprağa kazandıran, sel riskini azaltan ve biyoçeşitliği destekleyen sürdürülebilir bahçe sistemleri.",
  },
  {
    icon: Armchair,
    title: "Dış Mekan Mobilya & Tasarım",
    text: "Bahçenizin stiline uygun pergola, oturma grubu ve dış mekan mobilya seçimi ve yerleştirmesi.",
  },
];


function HizmetlerPage() {
  return (
    <>
      <PageHero
        label="Hizmetler"
        title="Hizmetlerimiz"
        breadcrumb={[{ label: "Anasayfa", to: "/" }, { label: "Hizmetler" }]}
      />

      {services.map((s, i) => {
        const Icon = icons[s.icon];
        const isOdd = i % 2 === 0;
        return (
          <section
            key={s.id}
            className={`section-y ${isOdd ? "bg-white" : "bg-surface"}`}
            id={s.slug}
          >
            <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: isOdd ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={`relative ${isOdd ? "" : "lg:order-2"}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="rounded-xl shadow-card w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 size-16 rounded-xl bg-secondary text-white flex items-center justify-center shadow-copper">
                  <Icon size={28} />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className={isOdd ? "" : "lg:order-1"}
              >
                <motion.div variants={fadeUp}>
                  <SectionLabel>{`Hizmet 0${i + 1}`}</SectionLabel>
                </motion.div>
                <motion.h2 variants={fadeUp} className="!text-primary">
                  {s.title}
                </motion.h2>
                <motion.div variants={fadeUp}>
                  <CopperRule />
                </motion.div>
                <motion.p variants={fadeUp} className="text-text-muted">
                  {s.fullDescription}
                </motion.p>
                <motion.ul variants={fadeUp} className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={18} className="mt-1 text-secondary shrink-0" strokeWidth={3} />
                      <span className="font-semibold text-text">{f}</span>
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/iletisim" variant="primary">
                    Teklif Al
                  </ButtonLink>
                  <ButtonLink
                    href={contact.whatsappMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                  >
                    WhatsApp ile Sor
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Process */}
      <section className="section-y gradient-dark dark-section">
        <div className="container-x">
          <div className="text-center mb-14">
            <SectionLabel className="!text-secondary-pale">Süreç</SectionLabel>
            <h2 className="!text-dark-text">Nasıl Çalışıyoruz?</h2>
            <CopperRule align="center" className="mx-auto" />
          </div>
          <div className="relative overflow-x-auto">
            <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px bg-secondary/30" />
            <ol className="flex gap-10 min-w-max md:grid md:grid-cols-4 md:gap-8 md:min-w-0">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative w-60 md:w-auto text-center"
                >
                  <div className="relative z-10 mx-auto size-14 rounded-full bg-secondary text-white font-heading font-bold text-xl flex items-center justify-center shadow-copper">
                    {s.n}
                  </div>
                  <h3 className="mt-5 !text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-dark-text/70 leading-relaxed">{s.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <SectionLabel>Ek Hizmetler</SectionLabel>
            <h2 className="!text-primary">Ek Hizmetlerimiz — Tam Kapsamlı Bahçe Çözümleri</h2>
            <CopperRule />
            <p className="text-text-muted mt-4">Her detayı tek bir uzman ekipten alın.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((e) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-border rounded-xl p-6 shadow-soft hover:shadow-card hover:border-secondary transition-[border-color,box-shadow] duration-300"
              >
                <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/15 transition-colors">
                  <e.icon size={22} className="text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="!text-primary text-lg font-heading font-bold">{e.title}</h3>
                <CopperRule width="sm" />
                <p className="text-sm text-text-muted leading-relaxed">{e.text}</p>
                <Link
                  to="/iletisim"
                  className="mt-4 inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:text-secondary-dark transition-colors group/link"
                >
                  Bilgi Al
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white pt-14">
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Neden Landline?</SectionLabel>
            <h2 className="!text-primary">Bizi Farklı Kılan 5 Avantaj</h2>
            <CopperRule />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-text"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check size={13} strokeWidth={3} className="text-white" />
                </span>
                <span className="text-sm leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Guarantee + service area */}
      <section className="bg-white pb-4 pt-10">
        <div className="container-x space-y-4">
          <div className="flex items-center gap-4 rounded-xl border border-border bg-primary/5 px-6 py-5">
            <ShieldCheck size={30} className="text-primary shrink-0" />
            <p className="font-heading font-semibold text-primary">{contact.guarantee}</p>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-surface px-6 py-5">
            <MapPin size={28} className="text-secondary shrink-0" />
            <div>
              <p className="font-heading font-semibold text-primary">Hizmet Bölgemiz</p>
              <p className="mt-1 text-sm text-text-muted leading-relaxed">
                {contact.serviceAreaLong}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

    </>
  );
}
