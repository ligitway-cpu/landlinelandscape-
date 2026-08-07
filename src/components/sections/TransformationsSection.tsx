import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import villa from '@/assets/villa_bahcesi.jpg';
import outdoor from '@/assets/outdoor_oturma.jpg';
import park from '@/assets/ankara_park.jpg';
import { SectionLabel } from '@/components/ui/section-label';
import { CopperRule } from '@/components/ui/copper-rule';
import { ButtonLink } from '@/components/ui/brand-button';
import { fadeUp, staggerContainer } from '@/lib/variants';

export interface Transformation {
  id: string;
  /** Swap with a real "before" photo URL or imported asset. */
  before?: string;
  after: string;
  caption: string;
}

const transformations: Transformation[] = [
  {
    id: 'villa',
    before: undefined,
    after: villa,
    caption: 'Villa Bahçesi · Çankaya · 6 Hafta · 450m²',
  },
  {
    id: 'outdoor',
    before: undefined,
    after: outdoor,
    caption: 'Dış Mekan Oturma Alanı · Keçiören · 3 Hafta · 120m²',
  },
  {
    id: 'park',
    before: undefined,
    after: park,
    caption: 'Şehir Parkı · Yenimahalle · 8 Hafta · 2.400m²',
  },
];

function BeforeAfter({ item }: { item: Transformation }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-xl shadow-card touch-none"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
      >
        <img
          src={item.after}
          alt={item.caption}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          {item.before ? (
            <img
              src={item.before}
              alt={`${item.caption} — öncesi`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(150deg,#9a9a92_0%,#6f6f68_100%)]">
              <span className="font-heading text-2xl font-bold text-white/85">Öncesi</span>
            </div>
          )}
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-[rgba(120,40,40,0.85)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          Önce
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          Sonra
        </span>

        <div
          className="absolute inset-y-0 w-[3px] bg-white/90 cursor-ew-resize"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-hover">
            <ChevronLeft size={14} strokeWidth={3} />
            <ChevronRight size={14} strokeWidth={3} />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-text-muted">{item.caption}</figcaption>
    </figure>
  );
}

export function TransformationsSection() {
  const [index, setIndex] = useState(0);

  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-2xl mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Dönüşümler</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="!text-primary">
            Bakın Neler Değişiyor
          </motion.h2>
          <CopperRule />
          <motion.p variants={fadeUp} className="text-text-muted">
            Sürükleyerek önce ve sonrayı karşılaştırın
          </motion.p>
        </motion.div>

        <div className="hidden md:grid gap-6 md:grid-cols-3">
          {transformations.map((t) => (
            <BeforeAfter key={t.id} item={t} />
          ))}
        </div>

        <div className="md:hidden">
          <BeforeAfter key={transformations[index].id} item={transformations[index]} />
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Önceki dönüşüm"
              onClick={() =>
                setIndex((i) => (i - 1 + transformations.length) % transformations.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-text-muted">
              {index + 1} / {transformations.length}
            </span>
            <button
              type="button"
              aria-label="Sonraki dönüşüm"
              onClick={() => setIndex((i) => (i + 1) % transformations.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-heading text-xl text-primary">
            Bahçeniz de bu dönüşümü hak ediyor.
          </p>
          <div className="mt-5">
            <ButtonLink href="/iletisim" variant="primary" size="lg">
              Fiyat Teklifi Al →
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
