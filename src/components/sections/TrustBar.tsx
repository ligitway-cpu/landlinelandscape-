import { ShieldCheck, Star, CalendarClock, MapPin, PhoneCall } from 'lucide-react';

const items = [
  {
    Icon: ShieldCheck,
    line1: '2 Yıl İşçilik Garantisi',
    line2: 'Tüm Projelerimizde',
  },
  {
    Icon: Star,
    line1: '4.9 ★ Google Puanı',
    line2: "Google'da İncele →",
    href: 'https://www.google.com/search?q=Landline+Landscape+Ankara',
  },
  {
    Icon: CalendarClock,
    line1: '15+ Yıl Deneyim',
    line2: "Ankara'da Aktif",
  },
  {
    Icon: MapPin,
    line1: "Tüm Ankara'ya Hizmet",
    line2: "Çankaya'dan Sincan'a",
  },
  {
    Icon: PhoneCall,
    line1: 'Ücretsiz İlk Keşif',
    line2: 'Yerinde Görüşme',
  },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-x">
        <ul className="grid grid-cols-2 md:flex md:items-center md:justify-between md:min-h-[76px] divide-x divide-border">
          {items.map(({ Icon, line1, line2, href }, i) => (
            <li
              key={line1}
              className={`flex items-center gap-2.5 py-3 px-3 md:px-4 ${
                i === items.length - 1 && items.length % 2 === 1
                  ? 'col-span-2 justify-center md:justify-start'
                  : ''
              } ${i % 2 === 0 ? 'border-l-0 md:border-l' : ''} ${i === 0 ? 'md:border-l-0' : ''}`}
            >
              <Icon size={20} className="shrink-0 text-primary" strokeWidth={2} />
              <div className="min-w-0">
                <p className="text-[13px] font-body font-bold leading-tight text-text">
                  {line1}
                </p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] leading-tight text-text-muted hover:text-secondary transition-colors"
                  >
                    {line2}
                  </a>
                ) : (
                  <p className="text-[11px] leading-tight text-text-muted">{line2}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
