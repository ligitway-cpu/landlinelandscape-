export interface ServiceDetail {
  slug: string;
  title: string;
  subtext: string;
  metaDescription: string;
  paragraphs: string[];
  included: string[];
  related: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'peyzaj-tasarimi',
    title: 'Peyzaj Tasarımı',
    subtext: 'Arazinizin potansiyelini 3D görselleştirme ile hayata geçirin.',
    metaDescription:
      'Peyzaj tasarımı — arazi analizi, güneş ve rüzgar etüdü, 3D görselleştirme. Ankara merkezli, Türkiye genelinde hizmet. 2 yıl tam garanti, ücretsiz keşif.',
    paragraphs: [
      'Landline Landscape olarak her peyzaj projesini başından sonuna kadar özgün biçimde tasarlıyoruz. Arazi analizi, güneş ve rüzgar etüdü, toprak yapısı ve yaşam tarzı değerlendirmesiyle size özel bir konsept üretiyoruz.',
      'Uygulama başlamadan önce 3D görselleştirme sunuyoruz — bahçenizin teslimattan önce nasıl görüneceğini tam olarak biliyorsunuz. Belirsizlik yoktur, sürpriz yoktur.',
      "Ankara villalarından İstanbul çatı teraslarına, İzmir konut projelerinden Antalya tatil sitelerine kadar Türkiye genelinde konut, ticari ve kamusal projeler tasarlıyoruz.",
    ],
    included: [
      'Arazi ve toprak analizi',
      'Güneş, rüzgar ve gölge etüdü',
      '3D görselleştirme ve konsept sunumu',
      'Bitki planlaması ve türü seçimi',
      'Aydınlatma tasarımı',
      'Sulama sistemi planlaması',
      'Sert zemin (taş, beton, deck) planlaması',
    ],
    related: ['peyzaj-uygulama', 'bahce-aydinlatmasi', 'surdurulebilir-peyzaj'],
  },
  {
    slug: 'peyzaj-uygulama',
    title: 'Peyzaj Uygulama',
    subtext: 'Tasarımı sahaya taşıyan uzman uygulama ekibi.',
    metaDescription:
      'Peyzaj uygulama — altyapı, bitkilendirme, taş döşeme, rulo çim ve sulama kurulumu. Zamanında teslim, 2 yıl tam garanti. Türkiye genelinde hizmet.',
    paragraphs: [
      'Tasarım aşaması tamamlanan projenizi uzman saha ekibimizle hayata geçiriyoruz. Altyapı çalışmalarından bitkilendirmeye, taş döşemeden sulama sistemine kadar her adımı eksiksiz yönetiyoruz.',
      'Belirlenen takvime uyum bizim için taahhüttür — sözleşmede yazan tarihe sadık kalırız. Süreç boyunca düzenli ilerleme güncellemeleri paylaşırız.',
      "Türkiye'nin dört bir yanında konut villalarından kurumsal kampüslere, şehir parklarından tatil sitelerine geniş ölçekli deneyimimiz var.",
    ],
    included: [
      'Altyapı ve drenaj çalışmaları',
      'Taş, beton ve kompozit döşeme',
      'Bitkilendirme ve toprak hazırlığı',
      'Rulo çim serimi',
      'Sulama sistemi kurulumu',
      'Aydınlatma sistemi kurulumu',
      'Proje teslim belgesi ve garanti sertifikası',
    ],
    related: ['peyzaj-tasarimi', 'sulama-sistemleri', 'peyzaj-bakim'],
  },
  {
    slug: 'peyzaj-bakim',
    title: 'Peyzaj Bakım',
    subtext: 'Bahçenizin dört mevsim canlı ve değerli kalması için.',
    metaDescription:
      'Peyzaj bakım hizmeti — aylık ziyaret, mevsimlik budama, gübreleme, sulama kontrolü ve bitki sağlığı takibi. Ankara merkezli, Türkiye genelinde.',
    paragraphs: [
      'Projeyi bitirip gitmiyoruz. Yıllık bakım anlaşmalarımızla bahçenizi her mevsime hazırlıyoruz. Düzenli ziyaret, mevsimlik budama, gübreleme, sulama sistemi kontrolü ve bitki sağlığı takibi ile bahçeniz her zaman en iyi halinde kalır.',
      'Bakım anlaşması müşterilerimiz öncelikli olarak planlanır — randevu bekleme süresi yaşamazsınız.',
      'Ankara ve Türkiye genelindeki tüm projelerimize, bölge fark etmeksizin, düzenli bakım hizmeti sunuyoruz.',
    ],
    included: [
      'Aylık düzenli bakım ziyareti',
      'Mevsimlik budama ve şekillendirme',
      'Gübreleme ve toprak bakımı',
      'Sulama sistemi kontrolü ve mevsimlik ayarı',
      'Bitki sağlığı ve zararlı kontrolü',
      'Kış hazırlığı ve bahar canlandırma',
      'Acil müdahale hizmeti',
    ],
    related: ['sulama-sistemleri', 'peyzaj-uygulama', 'surdurulebilir-peyzaj'],
  },
  {
    slug: 'surdurulebilir-peyzaj',
    title: 'Sürdürülebilir Peyzaj',
    subtext: 'Doğayla uyumlu, geleceğe yatırım yapan bahçeler.',
    metaDescription:
      'Sürdürülebilir peyzaj — yerel bitki türleri, damla sulama, yağmur suyu hasadı ve organik toprak iyileştirme. 2 yıl tam garanti, Türkiye genelinde hizmet.',
    paragraphs: [
      'Yerel bitki türleri, su tasarruflu sulama, organik gübre ve geri dönüştürülmüş malzemelerle çevreye duyarlı peyzaj projeleri uyguluyoruz.',
      "Sürdürülebilir peyzaj bizim için bir pazarlama unsuru değil, temel ilkemizdir. 2009'dan bu yana her projemizde ekosisteme duyarlı kararlar alıyoruz.",
      'Yağmur suyu hasadı, biyoçeşitlilik ve toprak sağlığını ön planda tutarak hem estetik hem ekolojik değer yaratan projeler hayata geçiriyoruz.',
    ],
    included: [
      'Yerel ve kuraklığa dayanıklı bitki türleri',
      'Damla sulama ve su tasarrufu sistemleri',
      'Yağmur suyu hasadı tasarımı',
      'Organik gübre ve toprak iyileştirme',
      'Geri dönüştürülmüş malzeme kullanımı',
      'Biyoçeşitlilik odaklı bitki planlaması',
      'Karbon ayak izi azaltma danışmanlığı',
    ],
    related: ['yagmur-bahceleri', 'sulama-sistemleri', 'peyzaj-tasarimi'],
  },
  {
    slug: 'bahce-aydinlatmasi',
    title: 'Bahçe Aydınlatması',
    subtext: 'Bahçenizi gece de yaşanabilir, güvenli ve etkileyici kılın.',
    metaDescription:
      'Bahçe aydınlatması — LED spot, güneş enerjili sistemler, akıllı kontrol ve bitki vurgulama. 2 yıl sistem garantisi. Ankara merkezli, Türkiye genelinde.',
    paragraphs: [
      'Doğru aydınlatma tasarımı bahçenizin gece yarısı dahi etkileyici görünmesini sağlar. Güvenlik, estetik ve atmosfer — üçünü bir arada sunuyoruz.',
      'LED spot aydınlatmadan güneş enerjili sistemlere, yürüyüş yolu ışıklarından bitki vurgulama spotlarına kadar kapsamlı çözümler sunuyoruz. Akıllı kontrol sistemleriyle aydınlatmanızı telefonunuzdan yönetin.',
      'Tüm aydınlatma sistemlerimiz enerji verimlidir ve 2 yıl garantilidir.',
    ],
    included: [
      'LED spot ve genel aydınlatma',
      'Güneş enerjili aydınlatma sistemleri',
      'Yürüyüş yolu ve basamak aydınlatması',
      'Bitki ve ağaç vurgulama spotları',
      'Akıllı aydınlatma kontrol sistemi',
      'Havuz ve su öğesi aydınlatması',
      '2 yıl sistem garantisi',
    ],
    related: ['dis-mekan-mobilya', 'peyzaj-tasarimi', 'cati-teras-bahceleri'],
  },
  {
    slug: 'sulama-sistemleri',
    title: 'Sulama Sistemleri',
    subtext: 'Otomatik sulama — su tasarrufu yapın, bitkileriniz her zaman sağlıklı kalsın.',
    metaDescription:
      'Otomatik sulama sistemleri — damla sulama, sprinkler, akıllı kontrolör kurulumu ve yıllık bakım. 2 yıl sistem garantisi. Türkiye genelinde hizmet.',
    paragraphs: [
      'Yazın bahçenizi unutun. Otomatik damla sulama ve sprinkler sistemlerimizle bitkileriniz tam ihtiyaçları kadar su alır, siz hiçbir şey yapmak zorunda kalmazsınız.',
      'Akıllı sulama kontrolörleri hava durumuna göre otomatik ayarlama yapar — yağmurlu günlerde sistem kendiliğinden durur, kurak günlerde devreye girer. Su tasarrufu yaparken bitki sağlığını da maksimum düzeyde tutuyoruz.',
      'Ankara ve Türkiye genelinde kurulum, devreye alma ve yıllık bakım hizmeti sunuyoruz.',
    ],
    included: [
      'Damla sulama sistemi tasarımı ve kurulumu',
      'Sprinkler sistemi tasarımı ve kurulumu',
      'Akıllı sulama kontrolörü (hava durumuna duyarlı)',
      'Sektör ve hat planlaması',
      'Kış kışlatma (sistem boşaltma) hizmeti',
      'Yıllık bakım ve kontrol',
      '2 yıl sistem garantisi',
    ],
    related: ['peyzaj-bakim', 'surdurulebilir-peyzaj', 'peyzaj-uygulama'],
  },
  {
    slug: 'cati-teras-bahceleri',
    title: 'Çatı ve Teras Bahçeleri',
    subtext: 'Kullanılmayan terasınızı yaşayan bir bahçeye dönüştürün.',
    metaDescription:
      'Çatı ve teras bahçeleri — yapısal yük analizi, su yalıtımı, hafif substrat ve otomatik sulama. Ankara ve İstanbul dahil Türkiye genelinde hizmet.',
    paragraphs: [
      'Çatı katı ve teras alanları, doğru tasarımla evin en çok sevilen köşelerine dönüşür. Hafif substrat sistemleri, rüzgara dayanıklı bitki seçimi, su yalıtımı ve drenaj planlamasıyla güvenli ve estetik teras bahçeleri kuruyoruz.',
      'Yapısal yük hesabı ve teknik gereklilikler ekibimiz tarafından değerlendirilir — bina statik güvenliği her zaman önceliğimizdir.',
      "İstanbul'dan Ankara'ya Türkiye'nin kentsel dönüşüm projelerinde çatı bahçesi uzmanlığı sunuyoruz.",
    ],
    included: [
      'Yapısal yük analizi ve danışmanlık',
      'Su yalıtım sistemi',
      'Hafif substrat ve drenaj katmanı',
      'Rüzgara dayanıklı bitki seçimi',
      'Otomatik sulama sistemi',
      'Teras mobilyası yerleşim planı',
      'Aydınlatma entegrasyonu',
    ],
    related: ['dis-mekan-mobilya', 'bahce-aydinlatmasi', 'sulama-sistemleri'],
  },
  {
    slug: 'cocuk-oyun-alanlari',
    title: 'Çocuk Oyun Alanları',
    subtext: 'Güvenli, eğlenceli ve doğal malzemeli oyun köşeleri.',
    metaDescription:
      'Çocuk oyun alanları — sertifikalı darbe emici zemin, doğal ahşap oyun üniteleri, kum havuzu ve güvenli geçişler. Türkiye genelinde hizmet, 2 yıl garanti.',
    paragraphs: [
      'Çocukların hem güvenli hem keyifli zaman geçirebileceği, doğal malzeme ağırlıklı oyun alanları tasarlıyoruz.',
      'Sertifikalı güvenlik zeminleri, ahşap oyun üniteleri, kum havuzları ve bitki sınırlarıyla bahçenizin içine entegre, bahçeyle bütünleşik oyun bölgeleri oluşturuyoruz.',
      'Tüm malzemeler çocuk güvenliği standartlarına uygun olup düzenli bakımla uzun yıllar sorunsuz kullanılmaktadır.',
    ],
    included: [
      'Sertifikalı güvenlik zemin kaplaması (darbe emici)',
      'Doğal ahşap oyun üniteleri',
      'Kum havuzu tasarımı ve kurulumu',
      'Bitki sınırları ve güvenli geçiş yolları',
      'Yaşa uygun ekipman seçimi',
      'Aydınlatma entegrasyonu',
      'Bakım ve güvenlik kontrol planı',
    ],
    related: ['peyzaj-tasarimi', 'dis-mekan-mobilya', 'peyzaj-bakim'],
  },
  {
    slug: 'yagmur-bahceleri',
    title: 'Yağmur Bahçeleri',
    subtext: 'Yağmur suyunu değerlendirin, sel riskini azaltın, biyoçeşitliği destekleyin.',
    metaDescription:
      'Yağmur bahçeleri — yağmur suyu toplama, geçirgen zemin, eğim analizi ve su seven yerel bitkiler. Sürdürülebilir peyzaj, Türkiye genelinde hizmet.',
    paragraphs: [
      'Yağmur bahçeleri; çatı, yol ve yüzey sularını toplayarak toprağa geri kazandıran, hem estetik hem fonksiyonel peyzaj sistemleridir.',
      'Sel riskini azaltır, yeraltı suyunu besler ve biyoçeşitliği destekler. Özellikle eğimli arazilerde ve kentsel dönüşüm projelerinde yüksek çevresel ve ekonomik fayda sağlar.',
      "Türkiye'nin farklı iklim bölgelerinde yağmur bahçesi tasarımı ve uygulama deneyimimizle doğru sistemi kuruyoruz.",
    ],
    included: [
      'Yağmur suyu toplama ve yönlendirme tasarımı',
      'Eğim ve yüzey akış analizi',
      'Geçirgen zemin kaplamaları',
      'Su seven yerel bitki türleri seçimi',
      'Drenaj güvenlik katmanı',
      'Taşma önleme tasarımı',
      'Bakım ve temizlik planı',
    ],
    related: ['surdurulebilir-peyzaj', 'sulama-sistemleri', 'peyzaj-tasarimi'],
  },
  {
    slug: 'dis-mekan-mobilya',
    title: 'Dış Mekan Mobilya ve Tasarım',
    subtext: 'Bahçenizi tamamlayan pergola, deck ve oturma grubu çözümleri.',
    metaDescription:
      'Dış mekan mobilya ve tasarım — pergola, ahşap ve kompozit deck, oturma grubu, gölgelik ve dış mekan mutfağı. Türkiye genelinde hizmet, 2 yıl garanti.',
    paragraphs: [
      'Peyzaj tasarımını doğru mobilya ve yapısal öğelerle tamamlamak, bahçenizin kullanılabilirliğini ve değerini katlar.',
      'Bahçenizin stiline uygun pergola, oturma grubu, ahşap deck ve gölgelik seçimi, yerleştirme planı ve kurulumunu yapıyoruz. İç mekan konforunu dışarıya taşıyan, Türkiye iklim koşullarına dayanıklı, estetik çözümler sunuyoruz.',
      'Her öğe peyzaj tasarımının bir parçası olarak kurgulanır — sonradan eklenen bir aksesuar gibi değil, bahçenizle bütünleşik.',
    ],
    included: [
      'Pergola tasarımı ve kurulumu (ahşap, alüminyum, çelik)',
      'Ahşap ve kompozit deck uygulaması',
      'Dış mekan oturma grubu seçimi ve yerleştirmesi',
      'Gölgelik, tente ve güneşlik sistemleri',
      'Dış mekan mutfak ve barbekü alanı tasarımı',
      'Aydınlatma entegrasyonu',
      'Bakım ve koruma önerileri',
    ],
    related: ['cati-teras-bahceleri', 'bahce-aydinlatmasi', 'peyzaj-tasarimi'],
  },
];

export const serviceDetailBySlug = Object.fromEntries(
  serviceDetails.map((s) => [s.slug, s]),
) as Record<string, ServiceDetail>;
