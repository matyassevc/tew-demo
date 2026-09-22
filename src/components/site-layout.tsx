import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const navigation = [
  { label: "Společnost", to: "/" },
  { label: "Sortiment", to: "/sortiment" },
  { label: "Reference", to: "/reference" },
  { label: "Poptávka", to: "/poptavka" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

function Brand() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="TOP EURO WINDOWS – domů">
      <span className="grid h-10 w-10 place-items-center border-2 border-primary text-[10px] font-extrabold leading-none text-primary">
        TEW
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-extrabold text-foreground">TOP EURO WINDOWS</span>
        <span className="block text-[10px] font-semibold uppercase text-muted-foreground">od roku 2000</span>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-12">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Hlavní navigace">
            {navigation.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={active ? "nav-link nav-link-active" : "nav-link"}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-foreground lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-border bg-background px-5 py-3 lg:hidden" aria-label="Mobilní navigace">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block border-b border-border py-3 text-sm font-bold text-foreground last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="bg-footer text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto_1fr] lg:px-12">
          <div>
            <p className="text-lg font-extrabold">TOP EURO WINDOWS</p>
            <p className="mt-2 text-sm text-footer-muted">Dřevěná okna a dveře na míru</p>
          </div>
          <nav className="flex flex-col gap-3 text-sm md:items-center" aria-label="Navigace v zápatí">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className="text-footer-muted hover:text-footer-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <address className="not-italic md:text-right">
            <a href="tel:+420603178648" className="block font-bold hover:text-footer-muted">
              603 178 648
            </a>
            <a href="mailto:info@tew.cz" className="mt-2 block text-sm text-footer-muted hover:text-footer-foreground">
              info@tew.cz
            </a>
          </address>
        </div>
        <div className="border-t border-footer-line px-5 py-5 text-center text-xs text-footer-muted">
          © 2026 TOP EURO WINDOWS s.r.o.
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <p className="section-label">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">{title}</h1>
        {text ? <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p> : null}
      </div>
    </section>
  );
}

export function PhotoPlaceholder({ label = "[ foto ]", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`grid place-items-center bg-placeholder text-xs font-semibold uppercase text-placeholder-foreground ${className}`}>
      {label}
    </div>
  );
}
