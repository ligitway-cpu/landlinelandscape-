import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { Button, ButtonLink } from '@/components/ui/brand-button';
import { CopperRule } from '@/components/ui/copper-rule';
import { contact } from '@/data/contact';
import { fadeUp, staggerContainer } from '@/lib/variants';

const bullets = [
  'İş öncesi 3D görselleştirme',
  'Yerinde toprak ve güneş analizi',
  '2 yıl tam kapsam garanti',
  'Ankara iklimine uygun yerel bitki uzmanlığı',
  'Proje boyunca özel takip sistemi',
];

const serviceOptions = [
  'Peyzaj Tasarımı',
  'Peyzaj Uygulama',
  'Peyzaj Bakım',
  'Sulama Sistemi',
  'Sürdürülebilir Peyzaj',
  'Diğer',
];

const inputClass =
  'w-full rounded-[4px] border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-light focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition';

export function LeadCapture() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success('Teşekkürler! En kısa sürede size dönüş yapacağız.');
      form.reset();
    }, 600);
  };

  return (
    <section id="teklif" className="section-y bg-primary border-t-[3px] border-secondary dark-section">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-dark-text"
        >
          <motion.h2 variants={fadeUp} className="!text-dark-text">
            Bahçeniz Bu Yıl Dönüşebilir
          </motion.h2>
          <CopperRule />
          <motion.p variants={fadeUp} className="max-w-lg text-dark-text/80">
            Ücretsiz yerinde keşif için formu doldurun. 48 saat içinde size özel fiyat
            teklifi hazırlayalım.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-dark-text/90 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check size={13} strokeWidth={3} className="text-white" />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            className="mt-5 flex items-start gap-3 text-sm text-dark-text/90"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Check size={13} strokeWidth={3} className="text-white" />
            </span>
            %50 başlangıçta, %50 teslimatta — şeffaf ve yazılı sözleşme
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 flex items-center gap-2 text-xs text-secondary-pale"
          >
            <Zap size={14} /> Nisan–Ekim sezonu dolmaktadır. Yerinizi bugün ayırtın.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7">
            <ButtonLink
              href={contact.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              size="lg"
            >
              Ya da WhatsApp ile Yazın →
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="rounded-xl bg-white p-6 sm:p-8 shadow-card"
        >
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="lc-name" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Ad Soyad *
              </label>
              <input id="lc-name" name="name" required placeholder="Adınız Soyadınız" className={inputClass} />
            </div>
            <div>
              <label htmlFor="lc-phone" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Telefon *
              </label>
              <input id="lc-phone" name="phone" type="tel" required placeholder="+90 5XX XXX XX XX" className={inputClass} />
            </div>
            <div>
              <label htmlFor="lc-email" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                E-posta
              </label>
              <input id="lc-email" name="email" type="email" placeholder="eposta@ornek.com" className={inputClass} />
            </div>
            <div>
              <label htmlFor="lc-service" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Hizmet Türü *
              </label>
              <select id="lc-service" name="service" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Seçiniz
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="lc-message" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Mesajınız
              </label>
              <textarea
                id="lc-message"
                name="message"
                rows={3}
                placeholder="Projeniz hakkında kısaca bilgi verin..."
                className={inputClass}
              />
            </div>
            <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full">
              {submitting ? 'Gönderiliyor…' : 'Ücretsiz Teklif Talep Et →'}
            </Button>
            <p className="flex items-center justify-center gap-1.5 text-[11px] text-text-muted">
              <Lock size={12} /> Bilgileriniz güvende. Spam göndermiyoruz.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
