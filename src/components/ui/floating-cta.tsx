import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Calendar, X } from 'lucide-react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { contact } from '@/data/contact';

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (sessionStorage.getItem('floating-cta-dismissed') === '1') {
      setDismissed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('floating-cta-dismissed', '1');
    setDismissed(true);
  };

  const onQuote = () => {
    if (pathname === '/') {
      document.getElementById('teklif')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate({ to: '/iletisim' });
    }
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <button
            onClick={dismiss}
            aria-label="Kapat"
            className="absolute -top-2 -right-2 z-10 grid size-6 place-items-center rounded-full bg-primary text-white shadow-soft hover:bg-primary-dark transition-colors"
          >
            <X size={13} strokeWidth={3} />
          </button>

          <button
            onClick={onQuote}
            className="hidden md:inline-flex h-12 w-[140px] items-center justify-center gap-2 rounded-full bg-secondary text-white font-body font-bold text-sm uppercase tracking-wider shadow-card hover:bg-secondary-dark transition-colors"
          >
            <Calendar size={17} strokeWidth={2.5} />
            Teklif Al
          </button>

          <a
            href={contact.whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile yazın"
            className="relative grid size-12 place-items-center rounded-full bg-whatsapp text-white shadow-card hover:brightness-95 transition"
          >
            <span className="absolute inset-0 rounded-full bg-whatsapp/50 animate-[pulseSlow_2s_ease-in-out_infinite]" />
            <MessageCircle size={22} strokeWidth={2.5} className="relative" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
