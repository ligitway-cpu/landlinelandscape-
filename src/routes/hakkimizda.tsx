import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Eye, ShieldCheck, Map, Clock, Users, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CopperRule } from "@/components/ui/copper-rule";
import { SectionLabel } from "@/components/ui/section-label";
import { ButtonLink } from "@/components/ui/brand-button";
import { fadeUp, staggerContainer } from "@/lib/variants";
import { contact } from "@/data/contact";
import founderAsset from "@/assets/sevgi-bozdag.jpg.asset.json";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | Landline Landscape" },
      {
        name: "description",
        content:
          "Landline Landscape — 2009'dan bu yana Ankara merkezli, Türkiye genelinde peyzaj mimarlığı ve uygulama. Kurucu Sevgi Bozdağ liderliğinde 40+ uzman ekip, 250+ tamamlanan proje.",
      },
      { property: "og:title", content: "Hakkımızda | Landline Landscape" },
      {
        property: "og:description",
        content:
          "Türkiye genelinde güvenilir peyzaj partneri. Hikayemizi, değerlerimizi ve ekibimizi keşfedin.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lush-landing-pages.lovable.app/hakkimizda" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lush-landing-pages.lovable.app/hakkimizda" }],
  }),
  component: HakkimizdaPage,
});

const whyCards = [
  {
    icon: Award,
    title: "15 Yıllık Deneyim",
    text: "2009'dan bu yana Türkiye'nin farklı iklim ve coğrafyalarında başarıyla tamamlanan 250+ proje.",
  },
  {
    icon: Eye,
    title: "3D Önizleme Garantisi",
    text: "Her projede uygulama başlamadan önce 3D görselleştirme sunuyoruz. Görmeden imza atmıyorsunuz.",
  },
  {
    icon: ShieldCheck,
    title: "2 Yıl Tam Garanti",
    text: "Bitkiler, yapı, sulama ve rulo çim dahil tüm işçilik 2 yıl garantilidir. Arkamızda duruyoruz.",
  },
  {
    icon: Map,
    title: "Türkiye Genelinde",
    text: "Ankara merkezli, İstanbul, İzmir, Antalya, Bodrum, Çanakkale, Tekirdağ ve daha fazlasına hizmet.",
  },
  {
    icon: Clock,
    title: "Haftanın 7 Günü",
    text: "Ulaşmak istediğinizde buradayız. Telefon, WhatsApp veya e-posta — 7 gün yanınızdayız.",
  },
  {
    icon: Users,
    title: "40+ Uzman Ekip",
    text: "Tasarımcılar, saha uygulama uzmanları, ziraat mühendisleri ve sulama teknisyenlerinden oluşan kadro.",
  },
];

const timeline = [
  { year: "2009", event: "Landline Landscape, Ankara'da peyzaj alanında kuruldu." },
  { year: "2011", event: "İlk büyük villa peyzajı projesi Çankaya'da tamamlandı." },
  { year: "2015", event: "Ticari peyzaj bölümü kuruldu. Kurumsal projeler başladı." },
  { year: "2019", event: "Sürdürülebilir peyzaj ve sulama sistemleri eklendi." },
  { year: "2022", event: "100. proje teslim edildi. Ekip 25+ uzmana ulaştı." },
  { year: "2024", event: "250+ proje tamamlandı. 40+ kişilik uzman kadro aktif." },
];


function HakkimizdaPage() {
  return (
    <>
      <PageHero
        label="Hakkımızda"
        title="Türkiye Genelinde Güvenilir Peyzaj Partneri"
        description="Ankara merkezli, 2009'dan bu yana Türkiye genelinde tasarım, uygulama ve bakım hizmeti veriyoruz."
        breadcrumb={[{ label: "Anasayfa", to: "/" }, { label: "Hakkımızda" }]}
      />

      {/* Founder */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="w-full min-h-[360px] sm:min-h-[480px]"
          >
            <div className="relative w-full min-h-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-card bg-surface sm:min-h-[480px]">
              <img
                src={founderAsset.url}
                alt="Sevgi Bozdağ — Landline Landscape kurucusu ve peyzaj mimarı"
                loading="eager"
                fetchPriority="high"
                width={768}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Kurucu &amp; Vizyon Sahibi</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="!text-primary !mb-1">
              Sevgi Bozdağ
            </motion.h2>
            <motion.p variants={fadeUp} className="font-heading text-text-muted">
              Kurucu &amp; Peyzaj Mimarı
            </motion.p>
            <motion.div variants={fadeUp}>
              <CopperRule />
            </motion.div>
            <motion.p variants={fadeUp} className="text-text leading-relaxed">
              2009 yılında kurulan Landline Landscape, Sevgi Bozdağ'ın peyzajı salt bir estetik
              mesele olarak değil; yaşam kalitesini doğrudan etkileyen bir tasarım disiplini olarak
              görmesiyle hayat buldu. Yıllar içinde Ankara'nın en çok tercih edilen peyzaj firmaları
              arasına giren Landline, bugün İstanbul'dan Bodrum'a, Çanakkale'den Antalya'ya Türkiye
              genelinde projeler hayata geçiriyor.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-text leading-relaxed">
              Sevgi Bozdağ liderliğinde büyüyen 40+ kişilik uzman ekip; tasarım, uygulama, sulama
              sistemleri ve bakım olmak üzere dört ayrı alanda faaliyet göstermektedir. Her projede
              aynı ilke geçerlidir: teslim tarihine uyum, şeffaf iletişim ve 2 yıl tam garanti.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              {["2009'dan Beri", "250+ Proje", "Türkiye Genelinde"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-secondary/60 px-4 py-1.5 text-sm font-semibold text-secondary"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Neden Biz?</SectionLabel>
            <h2 className="!text-primary">Neden Landline Landscape?</h2>
            <CopperRule align="center" className="mx-auto" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border bg-white p-7 shadow-soft hover:border-secondary hover:shadow-card transition-[border-color,box-shadow] duration-300"
              >
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <c.icon size={26} className="text-primary" />
                </div>
                <h3 className="!text-primary text-lg font-heading font-bold">{c.title}</h3>
                <CopperRule width="sm" />
                <p className="text-sm text-text-muted leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y gradient-dark dark-section">
        <div className="container-x">
          <div className="text-center mb-14">
            <SectionLabel className="!text-secondary-pale">Yolculuğumuz</SectionLabel>
            <h2 className="!text-dark-text">Kilometre Taşlarımız</h2>
            <CopperRule align="center" className="mx-auto" />
          </div>
          <div className="relative overflow-x-auto pb-4">
            <div className="absolute top-[34px] left-0 right-0 h-px bg-secondary/40 block md:hidden lg:block" />
            <ol className="flex gap-10 min-w-max md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-6 md:min-w-0">
              {timeline.map((t, idx) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative w-56 md:w-auto"
                >
                  <div className="relative z-10 mx-auto size-[18px] rounded-full bg-secondary ring-4 ring-dark-bg" />
                  <p className="mt-5 text-center font-heading font-bold text-2xl text-secondary-pale">
                    {t.year}
                  </p>
                  <p className="mt-2 text-center text-sm text-dark-text/80 leading-relaxed">
                    {t.event}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary dark-section py-20 border-t-[3px] border-secondary">
        <div className="container-x text-center text-dark-text">
          <h2 className="!text-dark-text">Projenizi Birlikte Hayata Geçirelim</h2>
          <CopperRule align="center" className="mx-auto" />
          <p className="text-dark-text/80">
            Ücretsiz keşif görüşmesi için bugün iletişime geçin.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/iletisim" variant="primary" size="lg">
              Teklif Al →
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
          </div>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-2 text-dark-text/75">
            <Phone size={16} className="text-secondary" />
            <a href={`tel:${contact.phoneRaw}`} className="hover:text-secondary-pale transition-colors">
              {contact.phone}
            </a>
            <span>· Haftanın 7 Günü</span>
          </p>
          <p className="mt-4 text-sm">
            <Link to="/hizmetler" className="text-secondary-pale hover:text-dark-text transition-colors">
              Tüm hizmetlerimizi inceleyin →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
