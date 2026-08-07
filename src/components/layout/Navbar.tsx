import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/brand-button';
import { contact } from '@/data/contact';

const links = [
  { to: '/', label: 'Anasayfa' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/hizmetler', label: 'Hizmetler' },
  { to: '/projeler', label: 'Projeler' },
  { to: '/sss', label: 'SSS' },
  { to: '/iletisim', label: 'İletişim' },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 bg-primary-dark border-b border-white/10 transition-all duration-300',
        scrolled && 'shadow-[0_2px_12px_rgba(0,0,0,0.15)]',
      )}
    >

      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf size={22} className="text-secondary group-hover:rotate-12 transition-transform" />
          <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-dark-text">
            Landline <span className="text-secondary-pale">Landscape</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm font-body font-semibold uppercase tracking-wider text-dark-text/85 hover:text-secondary-pale transition-colors group"
              activeProps={{ className: 'text-secondary-pale' }}
              activeOptions={{ exact: l.to === '/' }}
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ButtonLink href={contact.whatsappMsg} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
            Randevu Al
          </ButtonLink>
        </div>

        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'lg:hidden inline-flex items-center justify-center rounded-lg p-2 transition-colors',
            open
              ? 'bg-secondary text-primary-dark'
              : 'bg-primary-dark/60 backdrop-blur-sm text-dark-text hover:bg-primary-dark/80',
          )}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-dark-bg-deep z-40"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="container-x flex flex-col gap-2 py-10"
            >
              {links.map((l) => (
                <motion.div
                  key={l.to}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={l.to}
                    className="block py-3 text-2xl font-heading font-semibold text-dark-text border-b border-white/5"
                    activeProps={{ className: 'text-secondary-pale' }}
                    activeOptions={{ exact: l.to === '/' }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6 flex flex-col gap-3"
              >
                <ButtonLink href={contact.whatsappMsg} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                  Randevu Al
                </ButtonLink>
                <ButtonLink href={`tel:${contact.phoneRaw}`} variant="outline-light" size="lg">
                  {contact.phone}
                </ButtonLink>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
