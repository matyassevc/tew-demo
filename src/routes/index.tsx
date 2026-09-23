import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/site-layout";
import { products } from "@/lib/site-content";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOP EURO WINDOWS | Eurookna a dveře na míru" },
      { name: "description", content: "Výrobce dřevěných eurooken a dveří na míru z Kostelce u Kyjova s tradicí od roku 2000." },
      { property: "og:title", content: "TOP EURO WINDOWS | Eurookna a dveře na míru" },
      { property: "og:description", content: "Výrobce dřevěných eurooken a dveří na míru z Kostelce u Kyjova s tradicí od roku 2000." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pb-36">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="section-label">Kostelec u Kyjova · od roku 2000</p>
            <h1 className="mt-8 text-5xl font-extrabold leading-[0.94] text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
              Výroba eurooken a dveří na míru
            </h1>
          </div>
          <div className="pb-2 lg:col-span-4">
            <p className="border-l border-primary pl-6 text-xl leading-8 text-muted-foreground">Výrobce s tradicí od roku 2000. Kostelec u Kyjova.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button asChild size="lg"><Link to="/poptavka">Nezávazná poptávka</Link></Button>
              <Link to="/sortiment" className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
              Prohlédnout sortiment <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mt-14">
          <PhotoPlaceholder label="[ hero foto ]" className="aspect-[4/3] sm:aspect-[16/8] lg:aspect-[21/9]" />
          <div className="border-t-4 border-primary bg-card p-6 sm:absolute sm:-bottom-12 sm:right-10 sm:max-w-sm sm:p-8">
            <p className="text-sm font-semibold leading-7 text-foreground">Dřevo, přesné řemeslo a technické řešení, které obstojí v každodenním provozu.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 border-t border-border px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12 lg:py-36">
        <div>
          <p className="section-label">Společnost</p>
          <p className="mt-8 text-7xl font-light text-border">01</p>
        </div>
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">Tradice, která formuje budoucnost</h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-muted-foreground lg:col-span-6">
          <p>Firma se již od svého vzniku v roce 2000 specializuje především na výrobu eurooken, vchodových eurodveří a vnitřních dveří celodřevěných. Naše výrobky se vyznačují vysokou kvalitou a bezkonkurenční cenou stanovenou přímo výrobcem.</p>
          <p>Naše eurookna a dveře jsou vyráběna dle nejnovějších vývojových poznatků a jsou pod stálou kontrolou zkušebního ústavu ve Zlíně. Naše výrobky splňují nejpřísnější technické normy, což zaručuje dokonalou funkčnost a dlouhou životnost. Standardní záruka na naše dřevěná eurookna a dveře je 5 let.</p>
          <p>Největší důraz klademe na povrchovou úpravu oken a dveří. Nabízíme kompletní služby spojené s instalací oken, včetně dodávky bohatého sortimentu příslušenství — žaluzie, roletky, sítě proti hmyzu, vnitřní i venkovní parapety.</p>
        </div>
      </section>

      <section className="bg-footer text-footer-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="grid gap-8 border-b border-footer-line pb-12 lg:grid-cols-2 lg:items-end">
            <div><p className="section-label">Sortiment</p><h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">Od oken po vstupní portály</h2></div>
            <p className="max-w-lg text-footer-muted lg:justify-self-end">Devět výrobkových řad, které přizpůsobíme rozměrem, materiálem i povrchovou úpravou konkrétní stavbě.</p>
          </div>
          <div className="divide-y divide-footer-line">
            {products.slice(0, 5).map((product, index) => (
              <Link key={product.slug} to="/sortiment/$slug" params={{ slug: product.slug }} className="group grid gap-3 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                <span className="text-xs text-footer-muted">0{index + 1}</span>
                <span className="text-xl font-bold sm:text-2xl">{product.name}</span>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-10 border-footer-muted text-footer-foreground hover:bg-background hover:text-foreground"><Link to="/sortiment">Celý sortiment</Link></Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="section-label">Proč TOP EURO WINDOWS</p><h2 className="mt-5 text-4xl font-extrabold">Kvalita v každém detailu</h2></div>
          <div className="grid gap-12 lg:col-span-8 md:grid-cols-3">
          {[
            ["Záruka 5 let", "Na všechna eurookna a dveře"],
            ["Výroba od roku 2000", "Zkušenosti a tradice"],
            ["Certifikované produkty", "Kontrola zkušebního ústavu Zlín"],
          ].map(([title, text]) => (
            <div key={title} className="border-t border-border pt-7">
              <p className="text-2xl font-extrabold">{title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-12">
          <PhotoPlaceholder label="[ reference ]" className="aspect-[4/3]" />
          <div className="flex flex-col justify-center lg:pl-10"><p className="section-label">Realizace</p><h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">Stovky zakázek po celé České republice</h2><p className="mt-6 max-w-lg leading-8 text-muted-foreground">Prohlédněte si ukázky eurooken, vchodových dveří a vrat v rodinných domech i dalších stavbách.</p><Button asChild variant="outline" className="mt-8 w-fit"><Link to="/reference">Prohlédnout reference</Link></Button></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="section-label">Váš projekt</p><h2 className="mt-5 text-5xl font-extrabold leading-[1.02] sm:text-7xl">Řekněte nám, co potřebujete vyrobit.</h2></div><div className="lg:col-span-4"><p className="mb-7 leading-7 text-muted-foreground">Ozveme se Vám do 2 pracovních dnů a probereme další postup.</p><Button asChild size="lg"><Link to="/poptavka">Nezávazná poptávka <ArrowRight /></Link></Button></div></div>
      </section>
    </>
  );
}
