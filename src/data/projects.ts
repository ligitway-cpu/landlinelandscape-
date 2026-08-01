import villa from '@/assets/villa_bahcesi.jpg';
import outdoor from '@/assets/outdoor_oturma.jpg';
import park from '@/assets/ankara_park.jpg';
import sustain from '@/assets/surdurulebilir.jpg';

export type ProjectCategory = 'konut' | 'ticari' | 'kamusal' | 'surdurulebilir';

export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  shortDescription: string;
  description: string;
  year: number;
  area?: string;
  duration?: string;
  featured: boolean;
}

export const categoryFilters: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 'konut', label: 'Konut' },
  { value: 'ticari', label: 'Ticari' },
  { value: 'kamusal', label: 'Kamusal' },
  { value: 'surdurulebilir', label: 'Sürdürülebilir' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Villa Bahçe Tasarımı',
    slug: 'villa-bahce-tasarimi',
    location: 'Ankara / Çankaya',
    category: 'konut',
    categoryLabel: 'Konut',
    image: villa,
    shortDescription: 'Modern villa için özgün, doğayla bütünleşen bahçe tasarımı.',
    description:
      "Çankaya'da özel villa için tasarlanan bu projede, gizlilik ekranları, çim alanlar ve otomatik sulama sistemi bir arada uygulandı.",
    year: 2024,
    area: '450 m²',
    duration: '6 Hafta',
    featured: true,
  },
  {
    id: '2',
    title: 'Dış Mekan Dinlenme Alanı',
    slug: 'dis-mekan-dinlenme-alani',
    location: 'Ankara / Keçiören',
    category: 'ticari',
    categoryLabel: 'Ticari',
    image: outdoor,
    shortDescription: 'Otel terası için sıcak atmosferli outdoor lounge düzeni.',
    description:
      'Ticari bir mekânın dış alanı, oturma grupları, bitki duvarı ve aydınlatma sistemiyle dönüştürüldü.',
    year: 2024,
    area: '120 m²',
    duration: '3 Hafta',
    featured: true,
  },
  {
    id: '3',
    title: 'Şehir Parkı Yenileme',
    slug: 'sehir-parki-yenileme',
    location: 'Ankara / Yenimahalle',
    category: 'kamusal',
    categoryLabel: 'Kamusal',
    image: park,
    shortDescription: 'Mahalle parkı için kapsamlı yenileme ve peyzaj çalışması.',
    description:
      "Yenimahalle'de kamusal yeşil alan projesi — yürüyüş yolları, oyun alanı ve su öğesiyle yenilendi.",
    year: 2023,
    area: '2.400 m²',
    duration: '8 Hafta',
    featured: true,
  },
  {
    id: '4',
    title: 'Yenilebilir Bahçe',
    slug: 'yenilebilir-bahce',
    location: 'Ankara / Etimesgut',
    category: 'surdurulebilir',
    categoryLabel: 'Sürdürülebilir',
    image: sustain,
    shortDescription: 'Yerel bitkilerle kurulan suya duyarlı sürdürülebilir bahçe.',
    description:
      "Etimesgut'ta meyve ağaçları, sebze yatakları ve kompost sistemiyle kurgulanmış üretken bahçe.",
    year: 2024,
    area: '280 m²',
    duration: '4 Hafta',
    featured: false,
  },
  {
    id: '5',
    title: 'Rezidans Çatı Bahçesi',
    slug: 'rezidans-cati-bahcesi',
    location: 'Ankara / Çankaya',
    category: 'konut',
    categoryLabel: 'Konut',
    // TODO: gerçek proje fotoğrafı ile değiştirilecek (geçici placeholder)
    image: sustain,
    shortDescription: 'Çatı katı için hafif yapılı, modern peyzaj çözümü.',
    description:
      "Çankaya'da rezidans çatı katı — hafif substrat, rüzgara dayanıklı bitkiler ve teras mobilyası.",
    year: 2023,
    area: '85 m²',
    duration: '2 Hafta',
    featured: false,
  },
  {
    id: '6',
    title: 'Kurumsal Kampüs Peyzajı',
    slug: 'kurumsal-kampus-peyzaji',
    location: 'Ankara / Çankaya',
    category: 'ticari',
    categoryLabel: 'Ticari',
    // TODO: gerçek proje fotoğrafı ile değiştirilecek (geçici placeholder)
    image: sustain,
    shortDescription: 'Şirket kampüsü için ölçekli, davetkar ve fonksiyonel düzen.',
    description:
      'Kurumsal kampüs girişi ve açık alanlarının yeşillendirme ve sert zemin uygulamaları.',
    year: 2022,
    area: '1.200 m²',
    duration: '6 Hafta',
    featured: false,
  },
];
