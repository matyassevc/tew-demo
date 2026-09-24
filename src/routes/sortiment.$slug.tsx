import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder, ProductEyebrow } from "@/components/site-layout";
import { products } from "@/lib/site-content";

export const Route = createFileRoute("/sortiment/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} | TOP EURO WINDOWS` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: `${loaderData.name} | TOP EURO WINDOWS` },
      { property: "og:description", content: loaderData.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const index = products.findIndex((item) => item.slug === product.slug);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <Link to="/sortiment" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> Zpět na sortiment</Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><ProductEyebrow index={index} category={product.category} /><h1 className="mt-7 text-5xl font-extrabold leading-[0.98] sm:text-7xl lg:text-8xl">{product.name}</h1></div>
          <p className="border-l border-primary pl-6 text-lg leading-8 text-muted-foreground lg:col-span-4">{product.description}</p>
        </div>
        <PhotoPlaceholder label="[ produkt foto ]" className="mt-14 aspect-[4/3] sm:aspect-[16/8]" />
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-4"><p className="section-label">Řešení na míru</p><h2 className="mt-5 text-4xl font-extrabold leading-tight">Od návrhu po montáž</h2></div>
          <div className="lg:col-span-8"><p className="max-w-3xl text-xl leading-9 text-foreground">{product.detail}</p><div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">{["Zaměření a konzultace", "Výroba na míru", "Dodání a instalace"].map((step, stepIndex) => <div key={step}><p className="text-xs font-bold text-primary">0{stepIndex + 1}</p><p className="mt-3 font-extrabold">{step}</p></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
        <PhotoPlaceholder label="[ detail materiálu ]" className="aspect-[4/3]" />
        <div className="flex flex-col justify-center lg:pl-10"><p className="section-label">Individuální provedení</p><h2 className="mt-5 text-4xl font-extrabold">Pro Váš dům a Váš způsob používání</h2><p className="mt-6 leading-8 text-muted-foreground">Konkrétní skladbu, rozměry, barevnost i doplňky s Vámi projdeme podle technických možností a charakteru stavby.</p><Button asChild size="lg" className="mt-8 w-fit"><Link to="/poptavka">Poptat tento produkt <ArrowRight /></Link></Button></div>
      </section>
    </>
  );
}