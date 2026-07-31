import Image from "next/image";
import { IMAGES } from "../lib/images";

const TIMELINE = [
  {
    year: "Alkuajat",
    title: "Yritys perustetaan",
    text: "Kaikki alkoi yhdestä pakettiautosta ja halusta tehdä LVI-työt kunnolla — naapurustolle, jonka jokainen talo tunnettiin nimeltä.",
  },
  {
    year: "2000-luku",
    title: "Toinen sukupolvi mukaan",
    text: "Osaaminen ja arvot siirtyivät seuraavalle sukupolvelle. Sama ote työhön, laajempi kalusto ja koko Etelä-Suomen palvelualue.",
  },
  {
    year: "Tänään",
    title: "Paikallinen kumppani alueelle",
    text: "Palvelemme edelleen samalla periaatteella pääkaupunkiseudulla ja Etelä-Suomessa — nyt LVI:n, maanrakennuksen ja tarvikemyymälän voimin.",
  },
];

export default function FamilyStory() {
  return (
    <section id="yritys" className="bg-[var(--color-bg-light)] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-16">
        <div className="reveal relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto">
          <Image
            src={IMAGES.familyWorkshop}
            alt="Kaksi sukupolvea työskentelee yhdessä verstaassa"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover grayscale"
          />
        </div>

        <div>
          <h2 className="balance font-heading text-3xl font-semibold tracking-[-0.015em] text-[var(--color-ink)] md:text-4xl">
            Perheyritys, joka on hoitanut alueen koteja jo kaksi sukupolvea
          </h2>
          <p className="pretty mt-4 max-w-[58ch] text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            Perheputki Etelä Oy on yhä perheen käsissä. Emme ole ketju emmekä franchise — olemme
            paikallinen yritys, joka on nähnyt tämän alueen talot rakennettaessa, remontoitaessa
            ja vuosikymmenten varrella hoidettaessa.
          </p>

          <ol className="mt-10 flex flex-col gap-8 border-l border-[var(--color-border)] pl-7">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[34px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-light)]" />
                <p className="font-heading text-sm font-bold uppercase tracking-[0.04em] text-[var(--color-accent)]">
                  {item.year}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="pretty mt-1.5 max-w-[52ch] text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
