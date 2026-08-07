import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsBar } from "@/components/sections/StatsBar";
import { GuaranteeStrip } from "@/components/sections/GuaranteeStrip";
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
          "Türkiye genelinde 15+ yıllık deneyimle peyzaj tasarımı, uygulama ve bakım. Ankara merkezli, 250+ proje, 2 yıl garanti. İstanbul, İzmir, Antalya ve daha fazlası. Ücretsiz keşif için arayın.",
      },
      { property: "og:title", content: "Landline Landscape — Peyzaj Sanatı Bir Çizgiyle Başlar" },
      {
        property: "og:description",
        content: "Ankara merkezli, Türkiye genelinde 15+ yıllık deneyimle peyzaj tasarımı, uygulama ve bakım.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsBar />
      <GuaranteeStrip />
      <ServicesGrid />
      <ProcessTimeline />
      <ProjectsShowcase />
      <TransformationsSection />
      <TestimonialsCarousel />
      <LeadCapture />
    </>
  );
}
