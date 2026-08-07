import { Link } from '@tanstack/react-router';
import { Instagram, MessageCircle, Phone, Mail, MapPin, Clock, Globe, Leaf } from 'lucide-react';
import { contact } from '@/data/contact';
import { CopperRule } from '@/components/ui/copper-rule';

const quickLinks = [
  { to: '/', label: 'Anasayfa' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/hizmetler', label: 'Hizmetler' },
  { to: '/projeler', label: 'Projeler' },
  { to: '/sss', label: 'SSS' },
  { to: '/iletisim', label: 'İletişim' },
] as const;

const servicesLinks = [
  'Peyzaj Tasarımı',
  'Peyzaj Uygulama',
  'Peyzaj Bakım',
  'Sürdürülebilir Peyzaj',
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark-bg-deep text-dark-text border-t border-secondary/20">
      <div className="container-x pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Leaf size={20} className="text-secondary" />
              <span className="font-heading font-bold text-lg">
                Landline <span className="text-secondary-pale">Landscape</span>
              </span>
            </Link>
            <p className="mt-4 italic text-dark-text/55 text-sm leading-relaxed">
              "{contact.brand.slogan}"
            </p>
            <CopperRule width="sm" />
            <div className="mt-4 flex items-center gap-3">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-dark-text/50 hover:text-secondary-pale transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-dark-text/50 hover:text-whatsapp transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-pale text-sm uppercase tracking-wider mb-5">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-dark-text/60 hover:text-dark-text transition-colors text-[15px]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-pale text-sm uppercase tracking-wider mb-5">
              Hizmetler
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/hizmetler"
                    className="text-dark-text/60 hover:text-dark-text transition-colors text-[15px]"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-pale text-sm uppercase tracking-wider mb-5">
              İletişim
            </h4>
            <ul className="space-y-3.5 text-[15px]">
              <li>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-start gap-3 text-dark-text/75 hover:text-secondary-pale transition-colors"
                >
                  <Phone size={16} className="mt-1 shrink-0 text-secondary" />
                  <span>{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-dark-text/75 hover:text-whatsapp transition-colors"
                >
                  <MessageCircle size={16} className="mt-1 shrink-0 text-secondary" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-dark-text/75 hover:text-secondary-pale transition-colors break-all"
                >
                  <Mail size={16} className="mt-1 shrink-0 text-secondary" />
                  <span>{contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-text/75">
                <MapPin size={16} className="mt-1 shrink-0 text-secondary" />
                <span>
                  {contact.address.street}
                  <br />
                  {contact.address.building}
                  <br />
                  {contact.address.postal}
                </span>
              </li>
              <li className="flex items-start gap-3 text-dark-text/75">
                <Clock size={16} className="mt-1 shrink-0 text-secondary" />
                <span>
                  {contact.hours}
                  <br />
                  Haftanın 7 Günü Hizmetinizdeyiz
                </span>
              </li>
              <li className="flex items-start gap-3 text-dark-text/75">
                <Globe size={16} className="mt-1 shrink-0 text-secondary" />
                <span>{contact.serviceAreaShort}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/20">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dark-text/40">
          <p>© {year} Landline Landscape. Tüm hakları saklıdır.</p>
          <a
            href={contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-dark-text/70 transition-colors"
          >
            <Instagram size={14} /> {contact.social.instagramHandle}
          </a>
        </div>
      </div>
    </footer>
  );
}
