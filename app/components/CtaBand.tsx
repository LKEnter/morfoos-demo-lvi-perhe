import Image from "next/image";
import { CONTACT } from "../lib/contact";
import { IMAGES } from "../lib/images";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src={IMAGES.heatPump}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[80%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--color-dark)]/[.5] md:bg-[linear-gradient(105deg,rgba(31,41,51,.95)_0%,rgba(31,41,51,.9)_32%,rgba(31,41,51,.62)_58%,rgba(31,41,51,.22)_82%)]"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5 text-center md:items-start md:px-8 md:text-left">
        <h2 className="reveal balance max-w-[22ch] font-heading text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.75rem]">
          Tarvitsetko luotettavan LVI-kumppanin?
        </h2>
        <p
          className="reveal pretty mt-4 max-w-[46ch] text-lg leading-relaxed text-white/85"
          style={{ animationDelay: "90ms" }}
        >
          Kerro meille, mistä on kyse — palaamme asiaan nopeasti ja kerromme suoraan, miten
          voimme auttaa.
        </p>

        <div
          className="reveal md:w-auto w-full mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "170ms" }}
        >
          <a
            href="#yhteystiedot"
            className="rounded-full md:w-auto w-full bg-[var(--color-accent)] px-8 py-3.5 text-center text-[16px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-[var(--color-accent-hover)]"
          >
            Pyydä tarjous
          </a>
          <a
            href={CONTACT.phoneHref}
            className="rounded-full md:w-auto w-full border border-white/40 px-8 py-3.5 text-center text-[16px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-white/10"
          >
            Soita {CONTACT.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
