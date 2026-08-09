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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LandscapeArchitect",
          name: "Landline Landscape",
          image: "https://lush-landing-pages.lovable.app/og-image.jpg",
          url: "https://lush-landing-pages.lovable.app",
          telephone: "+905317153779",
          email: "iletisim@landlinelandscape.com",
          priceRange: "$$",
          foundingDate: "2009",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Yenimahalle Yakacık, 3602. Sokak, Bina: 4, Daire: 4",
            addressLocality: "Yenimahalle",
            addressRegion: "Ankara",
            postalCode: "06560",
            addressCountry: "TR",
          },
          areaServed: [
            { "@type": "Country", name: "Türkiye" },
            { "@type": "City", name: "Ankara" },
            { "@type": "City", name: "İstanbul" },
            { "@type": "City", name: "İzmir" },
            { "@type": "City", name: "Antalya" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "20:00",
            },
          ],
          sameAs: ["https://www.instagram.com/landline.landscape"],
        }),
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
