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
      'Süreç şu 4 adımdan oluşur: (1) Ücretsiz keşif görüşmesi — arazinizi yerinde inceler, beklentilerinizi dinleriz. (2) Konsept ve 3D görselleştirme — mekânınıza özel tasarımı dijital ortamda sunuyoruz. (3) Uygulama — anlaşılan takvimde saha ekibimizle çalışmaya başlıyoruz. (4) Teslim ve bakım — 2 yıl işçilik garantisiyle projeyi teslim alıyorsunuz.',
    order: 1,
  },
  {
    id: '2',
    category: 'tasarim',
    categoryLabel: 'Tasarım Süreci',
    question: 'İlk görüşmede neler konuşulur?',
    answer:
      'İlk görüşmemiz yaklaşık 30–60 dakika, yerinde gerçekleşir. Bu görüşmede: arazi büyüklüğü ve mevcut durum, istediğiniz bitki ve estetik tarz, kullanım alışkanlıkları (çocuk/evcil hayvan/eğlence), tahmini bütçe aralığı ve projenin zaman çerçevesini konuşuruz. Bu görüşme tamamen ücretsizdir.',
    order: 2,
  },
  {
    id: '3',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Maliyetler nasıl belirlenir?',
    answer:
      'Fiyatlandırma şu faktörlere göre değişir: alan büyüklüğü (m²), zemin hazırlığı ve altyapı durumu, seçilen bitki türleri ve malzemeler, sulama ve aydınlatma gibi ek sistemler. Küçük konut bahçeleri (50–150 m²) ile büyük ticari projeler (1.000+ m²) için fiyat aralıkları önemli ölçüde farklılık gösterir. Kesin teklif için ücretsiz keşif görüşmemiz gereklidir.',
    order: 3,
  },
  {
    id: '4',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Keşif görüşmesi ücretli mi?',
    answer:
      'Hayır, ilk keşif görüşmemiz tamamen ücretsizdir. Uzmanımız arazinizi ziyaret eder, ihtiyaçlarınızı değerlendirir ve size ön bir değerlendirme sunar. Herhangi bir taahhüt gerektirmez.',
    order: 4,
  },
  {
    id: '5',
    category: 'bitkiler',
    categoryLabel: 'Bitkiler & Malzeme',
    question: 'Hangi bitkileri tercih ediyorsunuz?',
    answer:
      'Önceliğimiz Ankara iklimine uyumlu, kışa dayanıklı ve az su tüketimiyle gelişen yerel bitki türleridir. Lavanta, adaçayı, muhabbet çiçeği, ahlat, boylu ardıç ve mevsimlik çiçekler sıkça kullandığımız türler arasındadır. Her projeyi güneş alımı, rüzgar ve toprak yapısına göre özelleştiriyoruz.',
    order: 5,
  },
  {
    id: '6',
    category: 'bitkiler',
    categoryLabel: 'Bitkiler & Malzeme',
    question: 'Sürdürülebilir malzemeler kullanıyor musunuz?',
    answer:
      'Evet. Geri dönüştürülmüş taş ve beton, doğal ahşap, yağmur suyu hasat sistemleri, organik gübre ve biyolojik zararlı kontrolü standart yaklaşımımızın parçasıdır. Taleple tam organik ve sertifikalı sürdürülebilir proje de gerçekleştirebiliyoruz.',
    order: 6,
  },
  {
    id: '7',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Proje süresi ne kadar sürer?',
    answer:
      'Proje büyüklüğüne göre değişir: Küçük konut bahçeleri (50–150 m²) 1–3 hafta, orta ölçekli projeler (150–500 m²) 3–6 hafta, büyük ticari veya kamusal projeler 6–12 hafta sürebilir. İlk görüşmede tahmini takvimi sizinle paylaşırız. Sözleşmede belirtilen tarihe uyumu garanti ediyoruz.',
    order: 7,
  },
  {
    id: '8',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Bakım hizmeti sunuyor musunuz?',
    answer:
      'Evet, yıllık bakım anlaşmalarımızla bahçenizi dört mevsim canlı tutuyoruz. Bakım paketlerimiz: aylık ziyaret, mevsimlik budama ve gübreleme, sulama sistemi kontrolü ve bitki sağlığı takibini kapsar. Projeyi bitirip gitmiyoruz — isteyenlerle uzun vadeli bakım ortaklığı kuruyoruz.',
    order: 8,
  },
  {
    id: '9',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Ankara dışında hizmet veriyor musunuz?',
    answer:
      "Ankara merkezli olmakla birlikte İstanbul, Çanakkale, Tekirdağ, İzmir, Antalya, Bodrum ve Türkiye'nin birçok iline hizmet veriyoruz.",
    order: 9,
  },
  {
    id: '10',
    category: 'proje',
    categoryLabel: 'Proje & Bakım',
    question: 'Projede garanti var mı?',
    answer:
      'Bitkiler, yapısal işler, sulama sistemi ve rulo çim dahil — 2 Yıl Tam Garanti.',
    order: 10,
  },
  {
    id: '11',
    category: 'fiyat',
    categoryLabel: 'Fiyatlandırma',
    question: 'Ödeme koşulları nelerdir?',
    answer:
      'Ödeme koşulları proje kapsamına göre belirlenmektedir. Detaylar için ücretsiz keşif görüşmemizde bilgi alabilirsiniz.',
    order: 11,
  },
];
