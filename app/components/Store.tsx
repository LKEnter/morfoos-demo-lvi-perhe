import Image from "next/image";
import { CONTACT, OPENING_HOURS } from "../lib/contact";

const CATEGORIES = ["Varaosat", "Kylpyhuonetuotteet", "Vedenkäsittely", "LVI-tarvikkeet"];

export default function Store() {
  return (
    <section id="tarvikemyymala" className="border-t border-[var(--color-border)] bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="balance font-heading text-3xl font-semibold tracking-[-0.015em] text-[var(--color-ink)] md:text-4xl">
            Tarvikemyymälä Helsingissä
          </h2>
          <p className="pretty mt-4 max-w-[52ch] text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            Myymälästämme löydät LVI-varaosat, kylpyhuonetuotteet ja vedenkäsittelyjärjestelmät —
            ja saat samalla ammattilaisen neuvon siihen, mitä oma kohteesi todella tarvitsee.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {CATEGORIES.map((category) => (
              <li
                key={category}
                className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-[14px] font-medium text-white"
              >
                {category}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-1 border-t border-[var(--color-border)] pt-6">
            {OPENING_HOURS.map((row) => (
              <div key={row.day} className="flex justify-between gap-6 text-[15px]">
                <span className="text-[var(--color-ink-muted)]">{row.day}</span>
                <span className="font-medium text-[var(--color-ink)]">{row.hours}</span>
              </div>
            ))}
          </div>

          <a
            href={CONTACT.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-[var(--color-dark)] px-7 py-3.5 text-[16px] font-semibold text-[var(--color-dark)] transition-colors duration-150 ease-out hover:bg-[var(--color-dark)] hover:text-white"
          >
            Katso myymälä kartalla
          </a>
        </div>

        <div className="reveal relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/images/myymala.jpg"
            alt="Perheputki Etelä -tarvikemyymälän hyllyt"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
