import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PhotoPlaceholder } from "@/components/site-layout";

const references = ["Eurookna", "Eurookna", "Eurookna", "Vchodové dveře", "Vchodové dveře", "Vchodové dveře", "Vrata", "Vrata", "Vrata"];

export const Route = createFileRoute("/reference")({
  head: () => ({ meta: [
    { title: "Reference | TOP EURO WINDOWS" },
    { name: "description", content: "Ukázky realizací eurooken, vchodových dveří a vrat po celé České republice." },
    { property: "og:title", content: "Reference | TOP EURO WINDOWS" },
    { property: "og:description", content: "Ukázky realizací eurooken, vchodových dveří a vrat po celé České republice." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ReferencePage,
});

function ReferencePage() {
  return <>
    <PageIntro eyebrow="Naše práce" title="Reference" text="Realizovali jsme stovky zakázek po celé České republice. Prohlédněte si ukázky naší práce." />
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mb-8 flex gap-1 overflow-x-auto border-b border-border" aria-label="Kategorie referencí">
        {['Všechny', 'Eurookna', 'Dveře', 'Vrata'].map((tab, index) => <span key={tab} className={index === 0 ? "shrink-0 border-b-2 border-primary px-4 py-3 text-sm font-bold text-foreground" : "shrink-0 px-4 py-3 text-sm font-bold text-muted-foreground"}>{tab}</span>)}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {references.map((label, index) => <figure key={`${label}-${index}`}>
          <PhotoPlaceholder className="aspect-square sm:aspect-[4/3]" />
          <figcaption className="mt-3 text-xs font-bold text-muted-foreground">{label}</figcaption>
        </figure>)}
      </div>
    </section>
  </>;
}
