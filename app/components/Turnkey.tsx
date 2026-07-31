import Image from "next/image";
import { IMAGES } from "../lib/images";

const STEPS = [
  {
    title: "Yhteydenotto ja kartoitus",
    text: "Käymme kohteessa paikan päällä ja kuuntelemme, mitä oikeasti tarvitset.",
  },
  {
    title: "Suunnitelma ja tarjous",
    text: "Saat selkeän, kiinteän tarjouksen — ei yllätyksiä laskussa jälkikäteen.",
  },
  {
    title: "Toteutus avaimet käteen",
    text: "LVI, sähkö ja maanrakennus samalta työmaalta, sovitussa aikataulussa.",
  },
];

export default function Turnkey() {
  return (
    <section className="border-t border-[var(--color-border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.015em] text-[var(--color-ink)] md:text-4xl">
              Avaimet käteen -projektit
            </h2>
            <p className="pretty mt-4 max-w-[52ch] text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
              Yksi urakoitsija, koko projekti. Kun tilaat kokonaisuuden meiltä, sinun ei tarvitse
              pyörittää useaa erillistä toimijaa — me vastaamme aikataulusta ja laadusta alusta
              loppuun.
            </p>
          </div>
          <a
            href="#yhteystiedot"
            className="inline-block shrink-0 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-center text-[16px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-[var(--color-accent-hover)]"
          >
            Pyydä tarjous projektiisi
          </a>
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--color-bg-light)] px-6 py-10 sm:px-10 sm:py-12">
          <ol className="flex flex-col gap-12 md:gap-8 md:flex-row md:gap-0">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex flex-1 md:gap-0 gap-6 md:flex-col">
                <div className="flex md:items-center md:w-full">
                  <span
                    className="reveal flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-dark)] font-heading text-lg font-bold text-white"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {index + 1}
                  </span>
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-[var(--color-border)] md:mx-4 md:block"
                    />
                  )}
                </div>

                <div
                  className="reveal mt-0 pr-6 md:mt-6 md:pr-8 lg:pr-10"
                  style={{ animationDelay: `${index * 120 + 60}ms` }}
                >
                  <h3 className="font-heading text-base font-bold tracking-[-0.01em] text-[var(--color-ink)] md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[36ch] text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal relative mt-6 aspect-[3/4] md:aspect-[21/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={IMAGES.luxuryBathroom}
            alt="Valmis, avaimet käteen -periaatteella toteutettu kylpyhuoneremontti"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
