import { MessageCircle } from 'lucide-react';
import { contact } from '@/data/contact';

export function WhatsAppFloating() {
  return (
    <a
      href={contact.whatsappMsg}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp: +905317153779"
      className="lg:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-4 py-3 font-body font-bold text-sm uppercase tracking-wider shadow-card animate-[pulseSlow_3s_ease-in-out_infinite]"
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      {contact.whatsapp}
    </a>
  );
}
