export interface Testimonial {
  id: string;
  author: string;
  neighborhood: string;
  project: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Mehmet Yılmaz',
    neighborhood: 'Çankaya, Ankara',
    project: 'Villa Bahçe Tasarımı',
    quote:
      'Landline Landscape ekibi hayalimizdeki bahçeyi gerçeğe dönüştürdü. Süreç boyunca profesyonel, titiz ve son derece şeffaf çalıştılar.',
    rating: 5,
  },
  {
    id: '2',
    author: 'Ayşe Demir',
    neighborhood: 'Yenimahalle, Ankara',
    project: 'Sürdürülebilir Bahçe',
    quote:
      'Sadece estetik değil, çevre dostu bir çözüm de istiyorduk. Yerel bitkilerle kurguladıkları bahçe ilk günkü canlılığıyla bugün de bizi karşılıyor.',
    rating: 5,
  },
  {
    id: '3',
    author: 'Kemal Aksoy',
    neighborhood: 'Keçiören, Ankara',
    project: 'Otel Terası Peyzajı',
    quote:
      'Misafirlerimiz terasımızı sosyal medyada paylaşmaya başladı. Yatırımımızın karşılığını çok kısa sürede aldık. Teşekkürler Landline.',
    rating: 5,
  },
];
