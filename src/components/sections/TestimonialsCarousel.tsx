import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { CopperRule } from '@/components/ui/copper-rule';

const GOOGLE_URL = 'https://www.google.com/search?q=Landline+Landscape+Ankara';

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.scrollWidth / testimonials.length;
    setActive(Math.round(el.scrollLeft / card));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.scrollWidth / testimonials.length;
    el.scrollTo({ left: card * idx, behavior: 'smooth' });
  };

  const step = (dir: -1 | 1) => {
    const next = Math.min(Math.max(active + dir, 0), testimonials.length - 1);
    scrollToIndex(next);
  };

  return (
    <section className="section-y bg-background relative overflow-hidden">
      <div className="container-x relative">
        <div className="flex flex-col items-center text-center">
          <span className="section-label">Referanslar</span>
          <h2 className="font-heading font-bold mt-3">Müşterilerimiz Ne Diyor?</h2>
          <CopperRule width="md" className="my-6" />
          <p className="text-muted-foreground max-w-xl">
            250'den fazla projede binlerce müşteri memnuniyeti
          </p>
        </div>

        <div className="mt-12 relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="snap-start shrink-0 w-full md:w-[calc((100%-3rem)/3)] bg-card border border-border rounded-lg p-7 flex flex-col shadow-sm"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#F5A623] fill-[#F5A623]" />
                  ))}
                </div>
                <p className="font-body italic text-card-foreground/90 leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-11 w-11 shrink-0 rounded-full bg-primary/10 text-primary font-heading font-semibold flex items-center justify-center">
                    {initials(t.author)}
                  </span>
                  <span>
                    <span className="block font-heading font-semibold text-card-foreground">
                      {t.author}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {t.project} · {t.neighborhood}
                    </span>
                  </span>
                </div>
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 pt-4 border-t border-border text-sm text-primary hover:text-secondary transition-colors"
                >
                  Google'da Görüntüle →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={() => step(-1)}
              aria-label="Önceki yorum"
              className="h-10 w-10 rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Yorum ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    active === idx ? 'bg-secondary w-8' : 'bg-foreground/20 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => step(1)}
              aria-label="Sonraki yorum"
              className="h-10 w-10 rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
