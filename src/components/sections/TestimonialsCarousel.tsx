import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section className="section-y gradient-dark dark-section relative overflow-hidden">
      <Quote
        size={180}
        className="absolute -top-6 -left-6 text-secondary-pale/15 pointer-events-none"
        strokeWidth={1}
      />
      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={18} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="font-body italic text-xl md:text-2xl text-dark-text/95 leading-relaxed">
                "{t.quote}"
              </p>
              <p className="mt-7 font-heading font-semibold text-secondary-pale">{t.author}</p>
              <p className="mt-1 text-sm text-dark-text/55">
                {t.project} · {t.neighborhood}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Yorum ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? 'bg-secondary w-8' : 'bg-dark-text/25 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
