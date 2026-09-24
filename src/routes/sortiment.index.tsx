import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, PhotoPlaceholder, ProductEyebrow } from "@/components/site-layout";
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {products.map((product, index) => <article key={product.slug} className="group flex flex-col border border-border bg-card">
          <span className="block h-[3px] w-8 bg-primary transition-[width] duration-300 ease-out group-hover:w-full" aria-hidden="true" />
          <PhotoPlaceholder className="aspect-[4/3]" />
          <ProductEyebrow index={index} category={product.category} className="border-b border-border px-6 py-4 transition-colors duration-300 group-hover:bg-primary-soft/40" />
          <div className="flex flex-1 flex-col p-6">
            <h2 className="text-xl font-extrabold leading-snug sm:text-2xl">{product.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{product.description}</p>
            <Link to="/sortiment/$slug" params={{ slug: product.slug }} className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover">
              Detail produktu <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </article>)}
      </div>
    </section>
  </>;
}
