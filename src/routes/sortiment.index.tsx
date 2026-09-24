import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, PhotoPlaceholder } from "@/components/site-layout";
import { products } from "@/lib/site-content";

export const Route = createFileRoute("/sortiment/")({
  head: () => ({ meta: [
    { title: "Sortiment | TOP EURO WINDOWS" },
    { name: "description", content: "Eurookna, dřevěné dveře, vrata, portály a zdvižně odsuvné stěny na míru." },
    { property: "og:title", content: "Sortiment | TOP EURO WINDOWS" },
    { property: "og:description", content: "Eurookna, dřevěné dveře, vrata, portály a zdvižně odsuvné stěny na míru." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: SortimentPage,
});

function SortimentPage() {
  return <>
    <PageIntro eyebrow="Naše výroba" title="Sortiment" text="Dřevěné výrobky na míru pro novostavby, rekonstrukce i náročné architektonické projekty." />
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {products.map((product, index) => <article key={product.name} className="group">
          <PhotoPlaceholder className="aspect-[16/10]" />
          <div className="border-b border-border py-6">
            <p className="mb-3 text-xs font-bold text-primary">0{index + 1} · {product.category}</p>
            <h2 className="text-2xl font-extrabold">{product.name}</h2>
            <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">{product.description}</p>
            <Link to="/sortiment/$slug" params={{ slug: product.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
              Detail produktu <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>)}
      </div>
    </section>
  </>;
}