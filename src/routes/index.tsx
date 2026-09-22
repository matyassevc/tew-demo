import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <section className="relative grid min-h-[680px] items-end overflow-hidden bg-placeholder lg:min-h-[720px]">
        <div className="absolute inset-x-0 top-28 text-center text-xs font-semibold uppercase text-placeholder-foreground sm:top-36">[ hero foto ]</div>
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <p className="text-xs font-extrabold uppercase text-primary-foreground">TOP EURO WINDOWS · Kostelec u Kyjova</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] text-primary-foreground sm:text-6xl lg:text-7xl">
            Výroba eurooken a dveří na míru
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg">
            Výrobce s tradicí od roku 2000. Kostelec u Kyjova.
          </p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button asChild size="lg"><Link to="/poptavka">Nezávazná poptávka</Link></Button>
            <Link to="/sortiment" className="group inline-flex items-center gap-2 text-sm font-bold text-primary-foreground">
              Prohlédnout sortiment <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
        <div>
          <p className="section-label">Společnost</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">Profil společnosti</h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-muted-foreground">
          <p>Firma se již od svého vzniku v roce 2000 specializuje především na výrobu eurooken, vchodových eurodveří a vnitřních dveří celodřevěných. Naše výrobky se vyznačují vysokou kvalitou a bezkonkurenční cenou stanovenou přímo výrobcem.</p>
          <p>Naše eurookna a dveře jsou vyráběna dle nejnovějších vývojových poznatků a jsou pod stálou kontrolou zkušebního ústavu ve Zlíně. Naše výrobky splňují nejpřísnější technické normy, což zaručuje dokonalou funkčnost a dlouhou životnost. Standardní záruka na naše dřevěná eurookna a dveře je 5 let.</p>
          <p>Největší důraz klademe na povrchovou úpravu oken a dveří. Nabízíme kompletní služby spojené s instalací oken, včetně dodávky bohatého sortimentu příslušenství — žaluzie, roletky, sítě proti hmyzu, vnitřní i venkovní parapety.</p>
        </div>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          {[
            ["Záruka 5 let", "Na všechna eurookna a dveře"],
            ["Výroba od roku 2000", "Zkušenosti a tradice"],
            ["Certifikované produkty", "Kontrola zkušebního ústavu Zlín"],
          ].map(([title, text]) => (
            <div key={title} className="py-10 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="text-xl font-extrabold">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
