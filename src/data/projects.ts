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
    year: 2024,
    area: '850 m²',
    duration: '4 ay',
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
    year: 2024,
    area: '320 m²',
    duration: '2 ay',
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
    year: 2023,
    area: '4.200 m²',
    duration: '6 ay',
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
    year: 2024,
    area: '410 m²',
    duration: '3 ay',
    featured: false,
  },
  {
    id: '5',
    title: 'Rezidans Çatı Bahçesi',
    slug: 'rezidans-cati-bahcesi',
    location: 'Ankara / Çankaya',
    category: 'konut',
    categoryLabel: 'Konut',
    image: outdoor,
    shortDescription: 'Çatı katı için hafif yapılı, modern peyzaj çözümü.',
    year: 2023,
    area: '180 m²',
    duration: '6 hafta',
    featured: false,
  },
  {
    id: '6',
    title: 'Kurumsal Kampüs Peyzajı',
    slug: 'kurumsal-kampus-peyzaji',
    location: 'Ankara / Çankaya',
    category: 'ticari',
    categoryLabel: 'Ticari',
    image: park,
    shortDescription: 'Şirket kampüsü için ölçekli, davetkar ve fonksiyonel düzen.',
    year: 2022,
    area: '6.800 m²',
    duration: '9 ay',
    featured: false,
  },
];
