import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { TransformationsSection } from "@/components/sections/TransformationsSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { LeadCapture } from "@/components/sections/LeadCapture";

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
