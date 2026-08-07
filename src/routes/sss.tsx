import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { CopperRule } from "@/components/ui/copper-rule";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/sss")({
  head: () => ({
    meta: [
      { title: "SSS | Landline Landscape" },
      {
        name: "description",
        content: "Peyzaj tasarımı fiyatları, ödeme koşulları, garanti ve hizmet bölgesi hakkında sıkça sorulan sorular. Landline Landscape — Ankara ve Türkiye geneli.",
      },
      { property: "og:title", content: "Sıkça Sorulan Sorular | Landline Landscape" },
      {
        property: "og:description",
        content: "Peyzaj süreci, fiyatlar ve bakım hakkındaki sorularınızın cevapları.",
      },
    ],
  }),
  component: SSSPage,
});

function SSSPage() {
  const grouped = faqs.reduce<Record<string, typeof faqs>>((acc, f) => {
    (acc[f.categoryLabel] ||= []).push(f);
    return acc;
  }, {});

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <PageHero
        label="SSS"
        title="Sıkça Sorulan Sorular"
        breadcrumb={[{ label: "Anasayfa", to: "/" }, { label: "SSS" }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="mb-10 last:mb-0">
              <h3 className="!text-primary text-lg font-heading font-bold">{cat}</h3>
              <CopperRule width="sm" />
              <Accordion type="single" collapsible className="mt-3">
                {items.map((f) => (
                  <AccordionItem
                    key={f.id}
                    value={f.id}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-5 text-left font-heading font-semibold text-base md:text-lg text-primary hover:no-underline hover:text-secondary [&[data-state=open]]:text-secondary">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent
                      forceMount
                      className="text-text leading-relaxed pb-5 data-[state=closed]:hidden"
                    >
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>


      <CTABanner
        title="Hâlâ sorunuz mu var?"
        description="Aklınızdakileri WhatsApp veya telefonla bize iletin. En kısa sürede dönüş yapalım."
      />
    </>
  );
}
