export interface FAQ {
  id: string;
  category: 'tasarim' | 'fiyat' | 'bitkiler' | 'proje';
  categoryLabel: string;
  question: string;
  answer: string;
  order: number;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'tasarim',
    categoryLabel: 'Tasarım Süreci',
    question: 'Peyzaj tasarım süreci nasıl işler?',
    answer:
      'Ücretsiz keşif görüşmesi ile başlıyor, arazi analizi ve ihtiyaç tespiti yapıyoruz. Ardından konsept, 3D görselleştirme ve son tasarım aşamalarını birlikte değerlendiriyoruz.',
    order: 1,
  },
  {
    id: '2',
    category: 'tasarim',
    categoryLabel: 'Tasarım Süreci',
    question: 'İlk görüşmede neler konuşulur?',
    answer:
      'Yaşam tarzınızı, beklentilerinizi, bütçenizi ve arazinin teknik özelliklerini ele alıyoruz. Bu görüşme sayesinde size en uygun yaklaşımı belirliyoruz.',
    order: 2,
  },
  {
    id: '3',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Maliyetler nasıl belirlenir?',
    answer:
      'Maliyetler; alan büyüklüğü, kullanılan malzemeler, bitki seçimleri ve uygulama detaylarına göre şekillenir. Şeffaf bir kalem-kalem teklif sunuyoruz.',
    order: 3,
  },
  {
    id: '4',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Keşif görüşmesi ücretli mi?',
    answer:
      'Hayır. Ankara ve yakın çevresinde ilk keşif görüşmesi tamamen ücretsizdir. Yalnızca uzak lokasyonlarda ulaşım katkısı talep edebiliriz.',
    order: 4,
  },
  {
    id: '5',
    category: 'bitkiler',
    categoryLabel: 'Bitkiler & Malzeme',
    question: 'Hangi bitkileri tercih ediyorsunuz?',
    answer:
      'Ankara ikliminde uzun ömürlü, düşük su tüketimli ve estetik açıdan güçlü bitkileri önceliklendiriyoruz. Yerel ve adapte türler her zaman ilk tercihimizdir.',
    order: 5,
  },
  {
    id: '6',
    category: 'bitkiler',
    categoryLabel: 'Bitkiler & Malzeme',
    question: 'Sürdürülebilir malzemeler kullanıyor musunuz?',
    answer:
      'Evet. Geri dönüştürülebilir taş, doğal ahşap ve verimli sulama sistemleri standart paletimizin bir parçasıdır.',
    order: 6,
  },
  {
    id: '7',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Proje süresi ne kadar sürer?',
    answer:
      'Tasarım süreci ortalama 2–4 hafta, uygulama ise proje ölçeğine bağlı olarak 3 hafta ile 6 ay arasında değişir. Net takvimi sözleşme öncesi paylaşıyoruz.',
    order: 7,
  },
  {
    id: '8',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Bakım hizmeti sunuyor musunuz?',
    answer:
      'Evet. Aylık, mevsimsel veya yıllık bakım anlaşmaları yapıyoruz. Uygulamasını yaptığımız ya da daha önce başka firmaların kurduğu bahçelere bakım veriyoruz.',
    order: 8,
  },
];
