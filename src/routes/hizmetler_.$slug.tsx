import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Phone,
  FileText,
  ShieldCheck,
  Wallet,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/sections/PageHero";
import { CopperRule } from "@/components/ui/copper-rule";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, ButtonLink } from "@/components/ui/brand-button";
import { contact } from "@/data/contact";
import { serviceDetailBySlug, type ServiceDetail } from "@/data/serviceDetails";
import { fadeUp, staggerContainer } from "@/lib/variants";

export const Route = createFileRoute("/hizmetler_/$slug")({
  loader: ({ params }) => {
    const service = serviceDetailBySlug[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} | Landline Landscape` : "Hizmet | Landline Landscape";
    const desc = s?.metaDescription ?? "";
    const url = `https://lush-landing-pages.lovable.app/hizmetler/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ServiceDetailPage,
});

const trustItems = [
  "2 Yıl Tam Garanti",
  "Ücretsiz İlk Keşif",
  "%50 Başlangıçta, %50 Teslimatta",
  "Türkiye Genelinde Hizmet",
  "Haftanın 7 Günü",
];

const workSteps = [
  {
    icon: Phone,
    title: "Ücretsiz Keşif",
    text: "Arayın ya da yazın. 24 saat içinde randevunuzu ayarlıyoruz.",
  },
  {
    icon: FileText,
    title: "Tasarım & Teklif",
    text: "Yerinde analiz, detaylı fiyat teklifi ve yazılı sözleşme.",
  },
  {
    icon: CheckCircle,
    title: "Uygulama & Garanti",
    text: "Zamanında teslim ve 2 yıl tam garanti.",
  },
];

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: ServiceDetail };
  const [sending, setSending] = useState(false);

  const related = service.related
    .map((slug) => serviceDetailBySlug[slug])
    .filter(Boolean) as ServiceDetail[];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Talebiniz alındı. En kısa sürede dönüş yapacağız.");
    }, 700);
  };

  return (
    <>
      {/* [A] Page hero */}
      <PageHero
        label="Hizmet"
        title={service.title}
        breadcrumb={[
          { label: "Anasayfa", to: "/" },
          { label: "Hizmetler", to: "/hizmetler" },
          { label: service.title },
        ]}
      />

      <section className="bg-primary dark-section pb-14 -mt-2">
        <div className="container-x text-dark-text">
          <p className="max-w-2xl text-dark-text/80">{service.subtext}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/iletisim" variant="primary" size="lg">
              Ücretsiz Teklif Al
            </ButtonLink>
            <ButtonLink
              href={contact.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              WhatsApp ile Sor
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* [B] Description + trust card */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[3fr_2fr] items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Hizmet Detayı</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="!text-primary">
              {service.title}
            </motion.h2>
            <motion.div variants={fadeUp}>
              <CopperRule />
            </motion.div>
            <div className="space-y-4 text-text leading-relaxed">
              {service.paragraphs.map((p) => (
                <motion.p key={p.slice(0, 24)} variants={fadeUp}>
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border bg-surface p-7 shadow-card"
          >
            <h3 className="!text-primary text-lg font-heading font-bold">Neden Landline?</h3>
            <CopperRule width="sm" />
            <ul className="mt-3 space-y-3">
              {trustItems.map((t) => (
                <li key={t} className="flex items-start gap-3 text-text">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-sm font-semibold">{t}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/iletisim" variant="primary" className="mt-6 w-full">
              Hemen Teklif Al →
            </ButtonLink>
          </motion.aside>
        </div>
      </section>

      {/* [C] What's included */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Kapsam</SectionLabel>
            <h2 className="!text-primary">Bu Hizmet Neleri Kapsar?</h2>
            <CopperRule />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.included.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-white px-5 py-4"
              >
                <CheckCircle size={20} className="mt-0.5 shrink-0 text-secondary" />
                <span className="text-text leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* [D] How we work */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Süreç</SectionLabel>
            <h2 className="!text-primary">Nasıl Çalışıyoruz?</h2>
            <CopperRule align="center" className="mx-auto" />
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {workSteps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-surface p-7 text-center shadow-soft"
              >
                <div className="mx-auto size-14 rounded-full bg-secondary text-white grid place-items-center shadow-copper">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-5 !text-primary text-lg font-heading font-bold">
                  {i + 1}. {s.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* [E] Guarantee banner */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container-x flex flex-col md:flex-row items-start gap-6">
          <ShieldCheck size={54} className="text-secondary shrink-0" />
          <div>
            <h2 className="!text-primary !mb-2">2 Yıl Tam Garanti — Hiçbir Endişe Olmadan</h2>
            <p className="text-text-muted leading-relaxed max-w-3xl">
              Bitkiler, yapısal işler, sulama sistemi ve rulo çim dahil tüm uygulamalarımız 2 yıl
              boyunca garantimiz kapsamındadır. Bir sorun oluşursa ücretsiz müdahale ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* [F] Payment terms */}
      <section className="bg-white py-14">
        <div className="container-x">
          <div className="rounded-xl border border-border bg-surface p-7 flex items-start gap-5">
            <Wallet size={30} className="text-secondary shrink-0 mt-1" />
            <div>
              <h3 className="!text-primary text-lg font-heading font-bold">
                {contact.paymentTermsTitle}
              </h3>
              <p className="mt-2 font-heading font-bold text-primary">
                {contact.paymentTermsHeadline}
              </p>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Sürpriz yoktur. Tüm kalemler yazılı sözleşmeyle belirlenir. Kabul ettiğimiz
                yöntemler: banka transferi, EFT, kredi kartı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [G] Booking CTA */}
      <section className="bg-primary dark-section py-20 border-t-[3px] border-secondary">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-start text-dark-text">
          <div>
            <h2 className="!text-dark-text">Bu Hizmet İçin Bugün Teklif Alın</h2>
            <CopperRule />
            <p className="text-dark-text/80">Ücretsiz keşif görüşmesi — taahhüt yok.</p>
            <ul className="mt-7 space-y-3.5 text-[15px]">
              <li>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-center gap-3 hover:text-secondary-pale transition-colors"
                >
                  <Phone size={17} className="text-secondary shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-whatsapp transition-colors"
                >
                  <MessageCircle size={17} className="text-secondary shrink-0" />
                  WhatsApp ile Yaz
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 hover:text-secondary-pale transition-colors break-all"
                >
                  <Mail size={17} className="text-secondary shrink-0" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-dark-text/80">
                <Clock size={17} className="text-secondary shrink-0" />
                Haftanın 7 Günü Hizmetinizdeyiz
              </li>
              <li className="flex items-center gap-3 text-dark-text/80">
                <MapPin size={17} className="text-secondary shrink-0" />
                Ankara merkezli · Türkiye Genelinde
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl bg-white border border-border p-7 shadow-card"
          >
            <h3 className="!text-primary text-lg font-heading font-bold">Teklif Formu</h3>
            <CopperRule width="sm" />
            <div className="mt-4 grid gap-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">
                  Ad Soyad *
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-surface border border-border rounded-md px-3.5 py-3 text-text font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Telefon *</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-surface border border-border rounded-md px-3.5 py-3 text-text font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Hizmet</label>
                <input
                  name="service"
                  readOnly
                  value={service.title}
                  className="w-full bg-border/30 border border-border rounded-md px-3.5 py-3 text-text font-body cursor-default"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">Mesajınız</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full bg-surface border border-border rounded-md px-3.5 py-3 text-text font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={sending}>
                {sending ? "Gönderiliyor..." : "Teklif Talep Et →"}
              </Button>
              <p className="text-xs text-text-light text-center">
                ✓ Ücretsiz keşif · ✓ 2 yıl garanti · ✓ 7/7 hizmet
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* [H] Related services */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Devamı</SectionLabel>
            <h2 className="!text-primary">Diğer Hizmetlerimiz</h2>
            <CopperRule />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border bg-white p-6 shadow-soft hover:border-secondary hover:shadow-card transition-[border-color,box-shadow] duration-300"
              >
                <h3 className="!text-primary text-lg font-heading font-bold">{r.title}</h3>
                <CopperRule width="sm" />
                <p className="text-sm text-text-muted leading-relaxed">{r.subtext}</p>
                <Link
                  to="/hizmetler/$slug"
                  params={{ slug: r.slug }}
                  className="mt-4 inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:text-secondary-dark transition-colors"
                >
                  İncele
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
