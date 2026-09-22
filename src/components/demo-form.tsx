import { useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoForm({ children, submitLabel }: { children: ReactNode; submitLabel: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div className="border border-primary bg-primary-soft p-6" role="status">
        <Check className="h-6 w-6 text-primary" aria-hidden="true" />
        <p className="mt-4 font-bold text-foreground">Děkujeme za zprávu.</p>
        <p className="mt-1 text-sm text-muted-foreground">Toto je ukázkový formulář, data nebyla odeslána.</p>
        <Button type="button" variant="outline" className="mt-5" onClick={() => setSubmitted(false)}>
          Vyplnit znovu
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate={false}>
      {children}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {submitLabel}
      </Button>
    </form>
  );
}
