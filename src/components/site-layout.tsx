import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const navigation = [
  { label: "Společnost", to: "/" },
  { label: "Sortiment", to: "/sortiment" },
  { label: "Reference", to: "/reference" },
  { label: "Poptávka", to: "/poptavka" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-border/70 bg-background/80 backdrop-blur-xl" : "border-transparent bg-background"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to="/" className="text-[11px] font-extrabold uppercase text-foreground" aria-label="TOP EURO WINDOWS – domů">
            Výroba od 2000
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavní navigace">
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
          <Link to="/poptavka" className="hidden items-center gap-2 border-l border-border pl-7 text-xs font-extrabold uppercase text-primary lg:flex">
            Poptat výrobu <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
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
            <p className="text-2xl font-extrabold">TOP EURO WINDOWS</p>
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
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
        <p className="section-label lg:col-span-3">{eyebrow}</p>
        <div className="lg:col-span-9">
          <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.98] text-foreground sm:text-7xl lg:text-8xl">{title}</h1>
          {text ? <p className="mt-8 max-w-2xl border-l border-primary pl-6 text-lg leading-8 text-muted-foreground">{text}</p> : null}
        </div>
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
