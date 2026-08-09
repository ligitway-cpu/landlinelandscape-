import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Send, Globe, Wallet } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CopperRule } from "@/components/ui/copper-rule";
import { Button, ButtonLink } from "@/components/ui/brand-button";
import { contact } from "@/data/contact";
import { toast } from "sonner";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | Landline Landscape" },
      {
        name: "description",
        content: "Landline Landscape iletişim — +90 531 715 37 79. Ankara merkezli, Türkiye genelinde hizmet. Haftanın 7 günü ücretsiz keşif görüşmesi için bugün arayın.",
      },
      { property: "og:title", content: "İletişim | Landline Landscape" },
      {
        property: "og:description",
        content: "Ankara merkezli, Türkiye genelinde hizmet. Ücretsiz keşif için bize ulaşın.",
      },
    ],
  }),
  component: IletisimPage,
});

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-border rounded-lg p-5 transition-colors hover:border-secondary/60">
      <div className="flex items-start gap-4">
        <div className="size-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
          <Icon size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-wider font-bold text-text-muted">{label}</p>
          <div className="mt-1 font-heading font-semibold text-text break-words">{children}</div>
        </div>
      </div>
    </div>
  );
}

function IletisimPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.currentTarget as HTMLFormElement).reset();
      toast.success("Mesajınız alındı. En kısa sürede dönüş yapacağız.");
    }, 700);
  };

  return (
    <>
      <PageHero
        label="İletişim"
        title="Bizimle İletişime Geçin"
        breadcrumb={[{ label: "Anasayfa", to: "/" }, { label: "İletişim" }]}
      />

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="!text-primary">Bize Ulaşın</h3>
            <CopperRule />
            <p className="text-text-muted">
              Her türlü proje sorunuz, fiyat teklifi veya keşif görüşmesi için aşağıdaki
              kanallardan bize ulaşabilirsiniz. WhatsApp en hızlı yanıt aldığınız kanaldır.
            </p>

            <div className="mt-7 space-y-3">
              <InfoCard icon={Phone} label="Telefon">
                <a href={`tel:${contact.phoneRaw}`} className="hover:text-secondary transition-colors">
                  {contact.phone}
                </a>
              </InfoCard>

              <InfoCard icon={MessageCircle} label="WhatsApp">
                <div className="space-y-3">
                  <p>{contact.phone}</p>
                  <ButtonLink
                    href={contact.whatsappMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    className="w-full"
                  >
                    WhatsApp'tan Yaz
                  </ButtonLink>
                </div>
              </InfoCard>

              <InfoCard icon={Mail} label="E-posta">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-secondary transition-colors"
                >
                  {contact.email}
                </a>
              </InfoCard>

              <InfoCard icon={MapPin} label="Adres">
                <div className="space-y-1 text-sm font-normal text-text">
                  <p>{contact.address.street}</p>
                  <p>{contact.address.building}</p>
                  <p>{contact.address.postal}</p>
                  <a
                    href={contact.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-secondary font-semibold hover:text-secondary-dark"
                  >
                    Haritada Gör →
                  </a>
                </div>
              </InfoCard>

              <InfoCard icon={Clock} label="Çalışma Saatleri">
                <div className="space-y-1">
                  <p>{contact.hours}</p>
                  <p className="text-sm font-normal text-text-muted">{contact.hoursNote}</p>
                </div>
              </InfoCard>

              <InfoCard icon={Globe} label="Hizmet Bölgesi">
                {contact.serviceArea}
              </InfoCard>

              <InfoCard icon={Wallet} label="Ödeme">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-primary">{contact.paymentTermsHeadline}</p>
                  <p className="text-sm font-normal text-text-muted leading-relaxed">
                    {contact.paymentTermsNote}
                  </p>
                  <p className="text-xs font-normal text-text-light leading-relaxed">
                    {contact.paymentMethods}
                  </p>
                </div>
              </InfoCard>

              <InfoCard icon={Instagram} label="Instagram">
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {contact.social.instagramHandle}
                </a>
              </InfoCard>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-border rounded-xl p-7 md:p-9 shadow-card h-fit"
          >
            <h3 className="!text-primary">Mesaj Gönderin</h3>
            <CopperRule width="sm" />
            <p className="text-text-muted text-sm">
              Formu doldurun, 1 iş günü içinde size dönüş yapalım.
            </p>

            <div className="mt-6 grid gap-4">
              <Field label="Ad Soyad *" name="name" required />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Telefon" name="phone" type="tel" />
                <Field label="E-posta *" name="email" type="email" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">
                  Proje Türü
                </label>
                <select
                  name="type"
                  defaultValue=""
                  className="w-full bg-surface border border-border rounded-md px-3.5 py-3 text-text font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
                >
                  <option value="" disabled>
                    Seçiniz
                  </option>
                  <option>Peyzaj Tasarımı</option>
                  <option>Peyzaj Uygulama</option>
                  <option>Peyzaj Bakım</option>
                  <option>Sürdürülebilir Peyzaj</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">
                  Mesajınız *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-surface border border-border rounded-md px-3.5 py-3 text-text font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full mt-2" disabled={sending}>
                <Send size={16} /> {sending ? "Gönderiliyor..." : "Mesajı Gönder"}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Quick CTA strip */}
      <section className="bg-primary dark-section py-12 border-t-[3px] border-secondary">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6 text-dark-text">
          <div>
            <p className="font-heading font-bold text-xl">Hızlı cevap için WhatsApp</p>
            <p className="text-dark-text/70 text-sm mt-1">
              Çoğu mesaja dakikalar içinde yanıt veriyoruz.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="font-heading text-2xl text-secondary-pale hover:text-white transition-colors"
            >
              {contact.phone}
            </a>
            <ButtonLink
              href={contact.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              WhatsApp'tan Yazın
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-primary mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-surface border border-border rounded-md px-3.5 py-3 text-text font-body focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
      />
    </div>
  );
}
