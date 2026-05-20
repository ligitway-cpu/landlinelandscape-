import villa from '@/assets/villa_bahcesi.jpg';
import outdoor from '@/assets/outdoor_oturma.jpg';
import park from '@/assets/ankara_park.jpg';
import sustain from '@/assets/surdurulebilir.jpg';

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: 'PenTool' | 'Hammer' | 'Scissors' | 'Sprout';
  image: string;
  ctaLabel: string;
  order: number;
}

export const services: Service[] = [
  {
    id: 'peyzaj-tasarimi',
    slug: 'peyzaj-tasarimi',
    title: 'Peyzaj Tasarımı',
    shortDescription: 'Alanınıza özgün, estetik ve işlevsel peyzaj planları.',
    fullDescription:
      'Detaylı arazi analizi ve 3D görselleştirme ile hayalinizdeki bahçeyi tasarlıyoruz. Her proje, mekânın ruhuna ve yaşam tarzınıza uygun olarak özgün biçimde kurgulanır.',
    features: ['3D Tasarım Şemaları', 'Arazi Analizi', 'Bitki Planlaması', 'Aydınlatma Tasarımı'],
    icon: 'PenTool',
    image: villa,
    ctaLabel: 'Teklif Al',
    order: 1,
  },
  {
    id: 'peyzaj-uygulama',
    slug: 'peyzaj-uygulama',
    title: 'Peyzaj Uygulama',
    shortDescription: 'Tasarımdan sahaya — eksiksiz ve zamanında uygulama.',
    fullDescription:
      'Uzman saha ekibimizle altyapıdan bitkilendirmeye her adımı titizlikle yönetiyoruz. Kalite, zamanında teslim ve şeffaf süreç bizim için esastır.',
    features: ['Altyapı Çalışmaları', 'Bitkilendirme', 'Taş Döşeme', 'Sulama Sistemleri'],
    icon: 'Hammer',
    image: outdoor,
    ctaLabel: 'Teklif Al',
    order: 2,
  },
  {
    id: 'peyzaj-bakim',
    slug: 'peyzaj-bakim',
    title: 'Peyzaj Bakım',
    shortDescription: 'Bahçenizin güzelliğini dört mevsim koruyoruz.',
    fullDescription:
      'Düzenli bakım anlaşmalarımızla bahçenizin canlılığını ve değerini koruyun. Mevsime özel müdahaleler, bitki sağlığı kontrolü ve estetik bakım.',
    features: ['Budama & Şekillendirme', 'Gübreleme', 'Sulama Kontrolü', 'Bitki Sağlığı'],
    icon: 'Scissors',
    image: park,
    ctaLabel: 'Bakım Planı Al',
    order: 3,
  },
  {
    id: 'surdurulebilir-peyzaj',
    slug: 'surdurulebilir-peyzaj',
    title: 'Sürdürülebilir Peyzaj',
    shortDescription: 'Doğayla uyumlu, çevre dostu peyzaj çözümleri.',
    fullDescription:
      'Yerel bitki türleri ve su tasarruflu teknolojilerle ekosisteme duyarlı bahçeler. Hem estetik hem de gelecek nesillere değer katan tasarımlar.',
    features: ['Yerel Bitki Türleri', 'Su Tasarruflu Sulama', 'Toprak İyileştirme', 'Organik Yaklaşım'],
    icon: 'Sprout',
    image: sustain,
    ctaLabel: 'Bilgi Al',
    order: 4,
  },
];
