import Image from "next/image";
import { CONTACT } from "../lib/contact";

export default function Hero() {
  return (
    <section
      id="etusivu"
      className="flex min-h-[90svh] flex-col justify-center bg-[var(--color-bg-light)] pb-10 pt-12 md:min-h-[95svh] md:pb-14 md:pt-16 border-b border-gray-200"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-8">
        <div className="flex flex-col gap-6 md:max-w-[46rem]">
          <p className="text-[15px] font-semibold tracking-wide text-[var(--color-accent)]">
            Pääkaupunkiseutu · Uusimaa · Etelä-Suomi
          </p>

          <h1 className="balance font-heading text-[clamp(2.25rem,4.4vw+1rem,3.75rem)] font-extrabold leading-[1.06] tracking-[-0.02em] text-[var(--color-ink)]">
            LVI-palvelut luotettavasti vuosien kokemuksella
          </h1>

          <p className="pretty max-w-[52ch] text-lg leading-relaxed text-[var(--color-ink-muted)] md:text-xl">
            Tarjoamme LVI-työt, maanrakennuksen ja tarvikemyymälän palvelut vuosien
            kokemuksella — yhdeltä ja samalta perheyritykseltä.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <a
              href="#yhteystiedot"
              className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-center text-[16px] font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-out hover:bg-[var(--color-accent-hover)]"
            >
              Pyydä tarjous
            </a>
            <a
              href={CONTACT.phoneHref}
              className="rounded-full border border-[var(--color-border)] px-7 py-3.5 text-center text-[16px] font-semibold text-[var(--color-ink)] transition-colors duration-150 ease-out hover:bg-white"
            >
              Soita {CONTACT.phoneLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-[95vw] md:mt-14-">
        {/* Concave joint where the text column meets the image — cut from the page bg */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-7 left-0 hidden h-7 w-7 md:block"
          style={{
            background:
              "radial-gradient(circle at bottom left, transparent 28px, var(--color-bg-light) 28px)",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-7 right-0 hidden h-7 w-7 md:block"
          style={{
            background:
              "radial-gradient(circle at bottom right, transparent 28px, var(--color-bg-light) 28px)",
          }}
        />

        <div className="relative aspect-[13/11] w-full overflow-hidden rounded-[28px] md:aspect-[21/9]">
          <Image
            src="/assets/images/hero.jpg"
            alt="Perheputki Etelä Oy:n ammattilainen LVI-työssä"
            fill
            priority
            fetchPriority="high"
            quality={75}
            sizes="90vw"
            className="object-cover"
          />
        </div>

        <div className="absolute -bottom-6 right-1/2 flex items-center justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white px-6 md:px-20 w-fit md:max-w-[90%] py-4 shadow-[var(--shadow-soft)] sm:right-8 md:-bottom-4 md:right-1/2 translate-x-1/2">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)] font-heading text-[15px] font-extrabold text-[var(--color-accent)]">
            ✓
          </span>
          <div className="leading-tight">
            <p className="font-heading text-[15px] font-bold text-[var(--color-ink)] text-nowrap">
              Vuosien kokemus
            </p>
            <p className="text-[13px] text-[var(--color-ink-muted)] text-nowrap">Paikallinen perheyritys</p>
          </div>
        </div>
      </div>
    </section>
  );
}
