import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { CTABanner } from "@/components/sections/CTABanner";
import { projects, categoryFilters, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projeler")({
  head: () => ({
    meta: [
      { title: "Projeler | Landline Landscape" },
      {
        name: "description",
        content: "Ankara ve çevresinde tamamladığımız konut, ticari, kamusal ve sürdürülebilir peyzaj projeleri.",
      },
      { property: "og:title", content: "Projeler | Landline Landscape" },
      {
        property: "og:description",
        content: "Tamamlanmış peyzaj projelerimizden seçkin örnekler.",
      },
    ],
  }),
  component: ProjelerPage,
});

function ProjelerPage() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        label="Projeler"
        title="Projelerimiz"
        breadcrumb={[{ label: "Anasayfa", to: "/" }, { label: "Projeler" }]}
      />

      <div className="sticky top-[72px] z-30 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="container-x py-4 overflow-x-auto">
          <LayoutGroup>
            <div className="flex gap-2 min-w-max">
              {categoryFilters.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setFilter(c.value)}
                  className={cn(
                    "relative px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-colors",
                    filter === c.value
                      ? "text-white border-primary"
                      : "text-text-muted bg-white border-border hover:border-secondary hover:text-primary",
                  )}
                >
                  {filter === c.value && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  {c.label}
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>
      </div>

      <ProjectsShowcase items={list} showHeader={false} showCta={false} />

      <CTABanner
        title="Projenizi Hayal Edin, Birlikte Gerçekleştirelim"
        description="Her ölçekteki peyzaj projesi için bize ulaşın. Konseptten teslimata kadar yanınızdayız."
      />
    </>
  );
}
