import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

/** Fictional demo brand placeholders — not real supplier partnerships. */
const BRANDS = [
  { name: "AquaLine" },
  { name: "LämpöPro" },
  { name: "VesiNord" },
  { name: "PutkiTech" },
  { name: "LattiLämpö" },
  { name: "KylpyVal" },
] as const;

function BrandTile({ brand, decorative }: { brand: (typeof BRANDS)[number]; decorative?: boolean }) {
  return (
    <div
      aria-hidden={decorative || undefined}
      className="mr-5 flex h-20 w-[168px] shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white px-6 grayscale transition-all duration-300 ease-out hover:grayscale-0 hover:shadow-[var(--shadow-soft)]"
    >
      <span className="font-heading text-[15px] font-bold tracking-[-0.01em] text-[var(--color-ink)] opacity-70 transition-opacity duration-300 ease-out hover:opacity-100">
        {brand.name}
      </span>
    </div>
  );
}

export default function BrandsCarousel() {
  const track = [
    ...BRANDS.map((brand) => ({ brand, decorative: false })),
    ...BRANDS.map((brand) => ({ brand, decorative: true })),
  ];

  return (
    <section className="border-t border-[var(--color-border)] bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className={sectionH2Class}>Luotettavia merkkejä</h2>
        <p className={sectionLedeClass}>
          Myymälästämme löydät alan tunnetuimpia ja luotetuimpia LVI-tuotteita.
        </p>
      </div>

      <div className="group relative mt-10 overflow-hidden max-w-[1200px] mx-auto">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32"
          style={{ background: "linear-gradient(90deg, white 0%, white 35%, transparent 100%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32"
          style={{ background: "linear-gradient(270deg, white 0%, white 35%, transparent 100%)" }}
        />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map(({ brand, decorative }, i) => (
            <BrandTile key={`${brand.name}-${i}`} brand={brand} decorative={decorative} />
          ))}
        </div>
      </div>
    </section>
  );
}
