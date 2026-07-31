const REASONS = [
  {
    title: "Perheyritys",
    text: "Toisen sukupolven perheyritys — päätökset tehdään täällä, ei kaukana pääkonttorissa.",
    icon: (
      <path d="M4 21V10.5L12 4l8 6.5V21M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Vuosien kokemus",
    text: "Olemme ratkoneet alueen LVI- ja maanrakennushaasteita vuosien kokemuksella.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Avaimet käteen",
    text: "Yksi tilaus, yksi yhteyshenkilö — hoidamme LVI-, sähkö- ja maanrakennustyöt saumattomasti.",
    icon: (
      <path d="M15.5 8.5a3.5 3.5 0 11-4.86 3.22L5 17.36V19h1.64l5.64-5.64A3.5 3.5 0 0115.5 8.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Paikallinen palvelu",
    text: "Tunnemme pääkaupunkiseudun ja Etelä-Suomen kohteet — apu on aina lähellä.",
    icon: (
      <path d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal flex flex-col gap-4 lg:border-l lg:border-[var(--color-border)] lg:pl-7 lg:first:border-l-0 lg:first:pl-0"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {reason.icon}
                </svg>
              </span>
              <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                {reason.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--color-ink-muted)]">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
