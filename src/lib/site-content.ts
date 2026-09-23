export const products = [
  {
    slug: "eurookna",
    name: "Eurookna",
    description:
      "Moderní dřevěná okna, která ozvláštní Vaši domácnost a dodají jí příjemný dotek přírody a nadstandardu.",
    category: "Dřevěná okna",
    detail: "Eurookna vyrábíme na míru konkrétnímu otvoru, stavbě i požadavkům investora. Důraz klademe na kvalitní dřevo, přesné zpracování a odolnou povrchovou úpravu.",
  },
  {
    slug: "drevo-hlinikova-okna",
    name: "Dřevo-hliníková okna",
    description:
      "Kombinací dřeva a hliníku dostanete moderní okna s nevšedním designem, které kombinují výhody obou dvou materiálů.",
    category: "Kombinovaná okna",
    detail: "Interiér si zachovává přirozený charakter dřeva, zatímco vnější hliníkové opláštění pomáhá chránit konstrukci před povětrnostními vlivy.",
  },
  {
    slug: "vchodove-dvere-klasik",
    name: "Vchodové dveře Klasik",
    description:
      "Dveře z kvalitního dřeva Vám mohou za rok ušetřit nemalou částku za energii spotřebovanou na vytápění Vašeho domu.",
    category: "Vchodové dveře",
    detail: "Tradiční vzhled, poctivé materiály a řešení na míru domu. Volit lze rozměry, členění, prosklení, odstín i kování.",
  },
  {
    slug: "vchodove-dvere-panel",
    name: "Vchodové dveře Panel",
    description:
      "Pro ty, kteří se nedokážou spokojit s ničím jiným než s nejvyšší kvalitou — konstrukčně bezpečné a maximálně funkční.",
    category: "Vchodové dveře",
    detail: "Panelové dveře umožňují čisté moderní plochy a individuální kombinace materiálů. Konstrukci přizpůsobujeme architektuře vstupu.",
  },
  {
    slug: "vrata",
    name: "Vrata",
    description: "Zhotovení vrat v jakémkoli rozměru podle přání zákazníka.",
    category: "Vrata",
    detail: "Vyrábíme vrata pro domy, hospodářské objekty i dílny. Návrh respektuje rozměr otvoru, způsob používání a charakter stavby.",
  },
  {
    slug: "sekcni-garazova-vrata-drevena",
    name: "Sekční garážová vrata dřevěná",
    description:
      "Kvalitní sekční vrata pro garáž či dílnu. Rozměry, materiály i konstrukce přesně podle přání zákazníka.",
    category: "Garážová vrata",
    detail: "Dřevěná sekční vrata spojují pohodlné otevírání s přirozeným vzhledem. Každou sestavu připravujeme podle konkrétního stavebního otvoru.",
  },
  {
    slug: "zdvizne-odsuvne-steny",
    name: "Zdvižně odsuvné stěny",
    description:
      "Pro domy s terasou či zahradou — vstup splňující všechny požadavky pro propojení interiéru s exteriérem.",
    category: "Prosklené stěny",
    detail: "Velké prosklené plochy otevírají interiér směrem k terase a zahradě. Řešení navrhujeme s ohledem na snadné ovládání a tepelný komfort.",
  },
  {
    slug: "vstupni-portaly",
    name: "Vstupní portály",
    description: "Hezký vstupní portál dokáže i z nezajímavé budovy udělat výstavní palác.",
    category: "Vstupní řešení",
    detail: "Portál sjednocuje dveře, boční díly i nadsvětlíky do jednoho architektonického celku. Rozměry a členění vznikají vždy na míru.",
  },
  {
    slug: "vnitrni-dvere-drevene",
    name: "Vnitřní dveře dřevěné",
    description:
      "Kvalitní dřevěné dveře z Vámi zvoleného materiálu, na přání zasklené moderním ornamentním sklem.",
    category: "Interiérové dveře",
    detail: "Interiérové dveře přizpůsobíme materiálem, členěním i povrchovou úpravou navazujícím prvkům domu. Samozřejmostí je výroba na míru.",
  },
] as const;

export type Product = (typeof products)[number];
