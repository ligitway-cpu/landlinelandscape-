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
      'Süreç 5 adımdan oluşur: Ücretsiz yerinde keşif görüşmesi, arazi ve toprak analizi, 3D görselleştirme ile konsept sunumu, yazılı sözleşme ve uygulama, teslim ve 2 yıl tam garanti. Her adımda sizinle iletişim halindeyiz — hiçbir sürpriz yoktur.',
    order: 1,
  },
  {
    id: '2',
    category: 'tasarim',
    categoryLabel: 'Tasarım Süreci',
    question: 'İlk görüşmede neler konuşulur?',
    answer:
      'İlk görüşmemiz yaklaşık 30–60 dakika, yerinde gerçekleşir. Alanınızın büyüklüğü ve mevcut durumu, bitki ve estetik tercihleriniz, kullanım alışkanlıklarınız (çocuk, evcil hayvan, eğlence alanı vb.) ve tahmini bütçenizi birlikte değerlendiririz. Bu görüşme tamamen ücretsizdir ve herhangi bir taahhüt gerektirmez.',
    order: 2,
  },
  {
    id: '3',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Maliyetler nasıl belirlenir?',
    answer:
      'Fiyatlandırma; alan büyüklüğü (m²), zemin ve altyapı durumu, seçilen bitki türleri ve malzemeler, sulama ve aydınlatma gibi ek sistemlere göre belirlenir. Kesin rakam için yerinde keşif zorunludur. Tüm fiyatlar yazılı sözleşmeyle netleştirilir — başladıktan sonra sürpriz ek ücret uygulanmaz.',
    order: 3,
  },
  {
    id: '4',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Keşif görüşmesi ücretli mi?',
    answer:
      'Hayır. İlk keşif görüşmemiz tamamen ücretsizdir. Uzmanımız arazinizi ziyaret eder, ihtiyaçlarınızı değerlendirir ve size ön değerlendirme sunar. Herhangi bir yükümlülük doğurmaz.',
    order: 4,
  },
  {
    id: '5',
    category: 'bitkiler',
    categoryLabel: 'Bitkiler & Malzeme',
    question: 'Hangi bitkileri tercih ediyorsunuz?',
    answer:
      'Önceliğimiz her projenin bulunduğu iklime uyumlu, kışa dayanıklı ve az su tüketen bitki türleridir. Ankara projeleri için lavanta, adaçayı, boylu ardıç, ahlat ve yerel mevsimlik türleri sıkça kullanıyoruz. Her proje için toprak ve güneş analizi yaparak en uygun türleri belirliyoruz.',
    order: 5,
  },
  {
    id: '6',
    category: 'bitkiler',
    categoryLabel: 'Bitkiler & Malzeme',
    question: 'Sürdürülebilir malzemeler kullanıyor musunuz?',
    answer:
      'Evet. Geri dönüştürülmüş taş ve beton, doğal ahşap, damla sulama sistemleri, organik gübre ve biyolojik zararlı kontrolü standart yaklaşımımızın parçasıdır. Talep üzerine tam organik ve sertifikalı sürdürülebilir projeler de gerçekleştiriyoruz.',
    order: 6,
  },
  {
    id: '7',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Proje süresi ne kadar sürer?',
    answer:
      'Proje büyüklüğüne göre değişir: Küçük konut bahçeleri (50–150 m²) 1–3 hafta, orta ölçekli projeler (150–500 m²) 3–6 hafta, büyük ticari ve kamusal projeler 6–12 hafta sürebilir. İlk görüşmede tahmini takvimi sizinle paylaşırız ve belirlenen tarihe uyumu taahhüt ederiz.',
    order: 7,
  },
  {
    id: '8',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Bakım hizmeti sunuyor musunuz?',
    answer:
      'Evet. Yıllık bakım anlaşmalarımızla bahçenizi dört mevsim canlı tutuyoruz. Aylık düzenli ziyaret, mevsimlik budama ve şekillendirme, gübreleme, sulama sistemi kontrolü ve bitki sağlığı takibi bakım paketlerimizin kapsamındadır.',
    order: 8,
  },
  {
    id: '9',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Ödeme koşulları nelerdir?',
    answer:
      '%50 iş başlangıcında, %50 teslimatta çalışıyoruz. Tüm fiyatlar başlamadan önce yazılı sözleşmeyle netleştirilir. Proje süresince herhangi bir ek veya sürpriz ücret uygulanmaz. Kabul ettiğimiz ödeme yöntemleri: banka transferi, EFT ve kredi kartı.',
    order: 9,
  },
  {
    id: '10',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Ankara dışında hizmet veriyor musunuz?',
    answer:
      "Evet. Ankara merkezli olmakla birlikte İstanbul, Çanakkale, Tekirdağ, İzmir, Antalya, Bodrum ve Türkiye'nin birçok iline hizmet veriyoruz. Büyük ölçekli projeler için Türkiye'nin her bölgesi değerlendirilebilir. Detaylar için bize ulaşın.",
    order: 10,
  },
  {
    id: '11',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Tamamlanan projelerde garanti sunuyor musunuz?',
    answer:
      'Evet. Tüm uygulama projelerimizde 2 yıl tam garanti sunuyoruz. Garanti kapsamı: bitkiler, yapısal işler, sulama sistemi ve rulo çim. İlk yılda tutunamayan bitkiler ücretsiz değiştirilir. Sulama ve yapı işleri için 2 yıl geçerlidir.',
    order: 11,
  },
];
