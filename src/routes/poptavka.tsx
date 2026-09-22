import { createFileRoute } from "@tanstack/react-router";
import { DemoForm } from "@/components/demo-form";
import { PageIntro } from "@/components/site-layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/lib/site-content";

export const Route = createFileRoute("/poptavka")({
  head: () => ({ meta: [
    { title: "Nezávazná poptávka | TOP EURO WINDOWS" },
    { name: "description", content: "Pošlete nezávaznou poptávku na eurookna, dveře nebo vrata na míru." },
    { property: "og:title", content: "Nezávazná poptávka | TOP EURO WINDOWS" },
    { property: "og:description", content: "Pošlete nezávaznou poptávku na eurookna, dveře nebo vrata na míru." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: PoptavkaPage,
});

function Field({ id, label, required = false, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return <div className="space-y-2"><Label htmlFor={id}>{label}{required ? <span className="text-primary"> *</span> : null}</Label>{children}</div>;
}

function PoptavkaPage() {
  return <>
    <PageIntro eyebrow="Napište nám" title="Nezávazná poptávka" text="Vyplňte formulář a ozveme se Vám do 2 pracovních dnů." />
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <DemoForm submitLabel="Odeslat poptávku">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Jméno a příjmení" required><Input id="name" name="name" required maxLength={100} autoComplete="name" className="field-control" /></Field>
          <Field id="email" label="E-mail" required><Input id="email" name="email" type="email" required maxLength={255} autoComplete="email" className="field-control" /></Field>
        </div>
        <Field id="phone" label="Telefon"><Input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel" className="field-control" /></Field>
        <Field id="product" label="Typ produktu"><select id="product" name="product" className="field-control w-full border border-input px-3 text-sm text-foreground"><option value="">Vyberte produkt</option>{products.map((product) => <option key={product.name}>{product.name}</option>)}</select></Field>
        <Field id="message" label="Zpráva / Popis požadavku"><Textarea id="message" name="message" maxLength={2000} rows={7} className="field-control resize-y" /></Field>
      </DemoForm>
    </section>
  </>;
}
