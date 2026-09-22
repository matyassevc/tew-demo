import { createFileRoute } from "@tanstack/react-router";
import { DemoForm } from "@/components/demo-form";
import { PageIntro, PhotoPlaceholder } from "@/components/site-layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [
    { title: "Kontakt | TOP EURO WINDOWS" },
    { name: "description", content: "Kontaktujte výrobce eurooken a dveří TOP EURO WINDOWS v Kostelci u Kyjova." },
    { property: "og:title", content: "Kontakt | TOP EURO WINDOWS" },
    { property: "og:description", content: "Kontaktujte výrobce eurooken a dveří TOP EURO WINDOWS v Kostelci u Kyjova." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: KontaktPage,
});

function KontaktPage() {
  return <>
    <PageIntro eyebrow="Jsme Vám k dispozici" title="Kontakt" />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
      <div>
        <h2 className="text-2xl font-extrabold">TOP EURO WINDOWS s.r.o.</h2>
        <address className="mt-5 space-y-3 not-italic text-muted-foreground">
          <p>Kostelec u Kyjova (okr. Hodonín)</p>
          <p>Tel: <a href="tel:+420603178648" className="font-bold text-foreground hover:text-primary">603 178 648</a></p>
          <p>E-mail: <a href="mailto:info@tew.cz" className="font-bold text-foreground hover:text-primary">info@tew.cz</a></p>
        </address>
        <PhotoPlaceholder label="[ mapa ]" className="mt-10 aspect-[16/10]" />
      </div>
      <div className="border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        <h2 className="mb-7 text-2xl font-extrabold">Napište nám</h2>
        <DemoForm submitLabel="Odeslat">
          <div className="space-y-2"><Label htmlFor="contact-name">Jméno <span className="text-primary">*</span></Label><Input id="contact-name" name="name" required maxLength={100} autoComplete="name" className="field-control" /></div>
          <div className="space-y-2"><Label htmlFor="contact-email">E-mail <span className="text-primary">*</span></Label><Input id="contact-email" name="email" type="email" required maxLength={255} autoComplete="email" className="field-control" /></div>
          <div className="space-y-2"><Label htmlFor="contact-message">Zpráva <span className="text-primary">*</span></Label><Textarea id="contact-message" name="message" required maxLength={2000} rows={7} className="field-control resize-y" /></div>
        </DemoForm>
      </div>
    </section>
  </>;
}
