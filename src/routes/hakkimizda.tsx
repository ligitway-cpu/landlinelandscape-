import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, Leaf, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { CopperRule } from "@/components/ui/copper-rule";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp, staggerContainer } from "@/lib/variants";
import { contact } from "@/data/contact";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | Landline Landscape" },
      {
        name: "description",
        content: "15+ yıllık deneyimle Ankara'nın önde gelen peyzaj tasarım firması Landline Landscape.",
      },
      { property: "og:title", content: "Hakkımızda | Landline Landscape" },
      {
        property: "og:description",
        content: "Ankara'nın güvenilir peyzaj partneri. Hikayemizi, değerlerimizi ve ekibimizi keşfedin.",
      },
    ],
  }),
  component: HakkimizdaPage,
});

const values = [
  {
    icon: Users,
    title: "Müşteri Odaklı Hizmet",
    text: "Her projeyi sizin yaşam tarzınız etrafında kurguluyoruz. Beklentinizin ötesine geçmek standardımız.",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik",
    text: "Doğayla uyumlu, yerel bitki türlerine dayalı ve uzun ömürlü çözümler bizim için pazarlama değil, ilkedir.",
  },
  {
    icon: Lightbulb,
    title: "Yenilikçi Çözümler",
    text: "3D görselleştirme, akıllı sulama, modern malzemeler — geleneksel zanaatı çağdaş teknikle birleştiriyoruz.",
  },
];

const timeline = [
  { year: "2009", event: "Landline Landscape, Ankara'da peyzaj mühendisliği alanında kuruldu." },
  { year: "2011", event: "İlk büyük konut projesi Çankaya'da tamamlandı. Ekip 5 kişiye ulaştı." },
  { year: "2015", event: "Ticari peyzaj bölümü kuruldu. Kurumsal kampüs projeleri başladı." },
  { year: "2019", event: "Sürdürülebilir peyzaj ve akıllı sulama sistemleri hizmet yelpazesine eklendi." },
  { year: "2022", event: "100. proje teslim edildi. Ekip 25+ uzmanla büyüdü." },
  { year: "2024", event: "250. proje tamamlandı. 40+ kişilik uzman kadro, Ankara genelinde aktif." },
];

const team = [
  { initials: "LD", name: "Kurucu Ortak", title: "Peyzaj Mimarı, 15+ Yıl Deneyim" },
  { initials: "PY", name: "Proje Yöneticisi", title: "Saha Koordinasyonu, Uygulama" },
  { initials: "ZM", name: "Ziraat Mühendisi", title: "Bitki Sağlığı & Sulama Sistemleri" },
  { initials: "TU", name: "Tasarım Uzmanı", title: "3D Görselleştirme & Konsept" },
];


function HakkimizdaPage() {
  return (
    <>
      <PageHero
        label="Hakkımızda"
        title="Ankara'nın Güvenilir Peyzaj Partneri"
        breadcrumb={[{ label: "Anasayfa", to: "/" }, { label: "Hakkımızda" }]}
      />

      {/* Story */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Hikayemiz</SectionLabel>
            </motion.div>
            <motion.blockquote
              variants={fadeUp}
              className="border-l-4 border-secondary pl-6 italic font-heading font-light text-2xl md:text-3xl !text-primary leading-snug"
            >
              "Bir bahçe sadece bitki değil; bir yaşam alanıdır."
            </motion.blockquote>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-5 text-text leading-relaxed"
          >
            <motion.h3 variants={fadeUp} className="!text-primary">
              Çizgilerin ardındaki ekip
            </motion.h3>
            <motion.p variants={fadeUp}>
              Landline Landscape, 2011'den bu yana Ankara'da peyzaj sanatını farklı bir lige
              taşımak için çalışan, çok disiplinli bir tasarım ve uygulama atölyesidir. Peyzaj
              mimarları, bahçe ustaları, sulama mühendisleri ve bakım teknisyenlerinden oluşan
              ekibimizle her projeyi tek bir el gibi yönetiyoruz.
            </motion.p>
            <motion.p variants={fadeUp}>
              Çankaya'daki bir villa bahçesinden Yenimahalle'deki bir şehir parkına kadar,
              farklı ölçeklerdeki projelerde ortak paydamız aynı: özgün tasarım, sağlam
              uygulama ve uzun vadeli bakım.
            </motion.p>
            <motion.p variants={fadeUp}>
              250'den fazla teslim ettiğimiz proje ve sayısız bakım anlaşmamızla bugün Ankara'nın
              en güvenilir peyzaj markalarından biriyiz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Değerlerimiz</SectionLabel>
            <h2 className="!text-primary">Bizi Biz Yapan İlkeler</h2>
            <CopperRule align="center" className="mx-auto" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="bg-surface border border-border hover:border-secondary rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon size={28} className="text-primary" />
                </div>
                <h3 className="!text-primary text-xl">{v.title}</h3>
                <CopperRule width="sm" />
                <p className="text-text-muted">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image showcase */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={teamImg}
              alt="Landline Landscape ekibi"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-xl shadow-card w-full object-cover aspect-[4/3]"
            />
          </motion.div>
          <div>
            <SectionLabel>Uzman Ekibimiz</SectionLabel>
            <h2 className="!text-primary">Tasarımı sahada gerçeğe dönüştüren ekip</h2>
            <CopperRule />
            <p className="text-text-muted">
              Peyzaj mimarları, ziraat mühendisleri, deneyimli ustalar ve bakım teknisyenleri.
              Her uzmanlığı kendi alanında en iyi olan kişilerden bir araya getirdik.
            </p>
            <ul className="mt-5 space-y-2 text-text">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-secondary shrink-0" />
                40+ kişilik tasarım, uygulama ve bakım kadrosu
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-secondary shrink-0" />
                Akredite peyzaj mimarları ve ziraat mühendisleri
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-secondary shrink-0" />
                Ankara'nın her bölgesinde aynı kalite standardı
              </li>
            </ul>
          </div>
        </div>

        <div className="container-x mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-border bg-white p-6 text-center shadow-soft"
              >
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-primary/10 font-heading font-bold text-xl text-primary">
                  {m.initials}
                </div>
                <h3 className="mt-4 !text-primary text-base font-heading font-bold">{m.name}</h3>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">{m.title}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center font-heading text-lg text-primary">
            Ekibimizle tanışmak ister misiniz? Arayın:{" "}
            <a
              href={`tel:${contact.phoneRaw}`}
              className="font-bold text-secondary underline decoration-secondary/40 underline-offset-4 hover:text-secondary-dark transition-colors"
            >
              {contact.phone}
            </a>
          </p>
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
            <ol className="flex gap-10 min-w-max md:grid md:grid-cols-5 md:gap-6 md:min-w-0">
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

      <CTABanner
        title="Birlikte Çalışalım"
        description="Projeniz için Ankara'nın en deneyimli peyzaj ekibini yanınızda hissedin."
      />
    </>
  );
}
