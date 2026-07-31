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
    neighborhood: 'Çankaya',
    project: 'Villa Bahçe Tasarımı',
    quote:
      'Landline Landscape ekibi hayalimizdeki bahçeyi gerçeğe dönüştürdü. Süreç boyunca profesyonel, titiz ve son derece şeffaf çalıştılar.',
    rating: 5,
  },
  {
    id: '2',
    author: 'Ayşe Kılıç',
    neighborhood: 'Etimesgut',
    project: 'Konut Bahçesi & Sulama',
    quote:
      'İlk görüşmeden teslimata kadar her adımda yanımızdaydılar. Sulama sistemi dahil her şey kusursuzdu. Kesinlikle tavsiye ederim.',
    rating: 5,
  },
  {
    id: '3',
    author: 'Emre Şahin',
    neighborhood: 'Çankaya',
    project: 'Kurumsal Kampüs Peyzajı',
    quote:
      "Ticari projemiz için çok sayıda firma ile görüştük. Landline'ın 3D tasarım sunumu ve proje takibi rakipsizdi.",
    rating: 5,
  },
  {
    id: '4',
    author: 'Selin Arslan',
    neighborhood: 'Yenimahalle',
    project: 'Çatı Terası Tasarımı',
    quote:
      'Çatı terasımız artık evin en sevilen köşesi. Bitki seçiminden aydınlatmaya her detay düşünülmüş.',
    rating: 5,
  },
  {
    id: '5',
    author: 'Hasan Demir',
    neighborhood: 'Keçiören',
    project: 'Yıllık Bakım Anlaşması',
    quote:
      'Bakım anlaşmasıyla bahçemiz her mevsim muhteşem görünüyor. Ekip zamanında gelir, işini özenle yapar.',
    rating: 5,
  },
  {
    id: '6',
    author: 'Zeynep Çelik',
    neighborhood: 'Sincan',
    project: 'Sürdürülebilir Bahçe',
    quote:
      'Sürdürülebilir tasarım isteğimizi tam anlayıp uyguladılar. Yerel bitkiler, yağmur suyu hasadı — tam istediğimiz gibiydi.',
    rating: 5,
  },
];
