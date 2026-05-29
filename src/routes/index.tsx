import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anasayfa | Landline Landscape — Ankara Peyzaj" },
      {
        name: "description",
        content:
          "Ankara'da hayalinizdeki bahçeyi gerçeğe dönüştürüyoruz. Peyzaj tasarımı, uygulama, bakım. Ücretsiz keşif için arayın.",
      },
      { property: "og:title", content: "Landline Landscape — Peyzaj Sanatı Bir Çizgiyle Başlar" },
      {
        property: "og:description",
        content: "Ankara'da 15+ yıllık deneyimle peyzaj tasarımı, uygulama ve bakım.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <ProjectsShowcase />
      <TestimonialsCarousel />
      <CTABanner />
    </>
  );
}
