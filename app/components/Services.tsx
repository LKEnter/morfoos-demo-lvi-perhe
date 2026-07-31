import Image from "next/image";
import Link from "next/link";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";
import { IMAGES } from "../lib/images";

const ICON_BADGE_GRADIENT = {
  background: "linear-gradient(135deg, var(--color-accent-hover) 0%, var(--color-accent-light) 100%)",
};

const PHOTO_SERVICES = [
  {
    title: "LVI-työt",
    text: "Vesi-, viemäri- ja lämmitysjärjestelmien asennukset ja korjaukset ammattitaidolla.",
    image: IMAGES.sauna,
    icon: (
      <path d="M7 21V10.5M17 21V10.5M4 10.5l8-6 8 6M9.5 21v-5a2.5 2.5 0 015 0v5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Maanrakennus",
    text: "Kaivutyöt, salaojitukset ja tonttien pohjatyöt kokeneella kalustolla.",
    image: IMAGES.excavator,
    icon: (
      <path d="M3 20h9M8 20V9l7-4 3 3-4 4 4 4-3 3-4-3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Tarvikemyymälä",
    text: "LVI-tarvikkeet ja varaosat samasta paikasta, ammattilaisen neuvoin.",
    image: "/assets/images/myymala.jpg",
    icon: (
      <path d="M4 9l1.5-5h13L20 9M4 9h16M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9M9 20v-5a1 1 0 011-1h4a1 1 0 011 1v5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Huolto",
    text: "Lämpöpumppujen ja lämmitysjärjestelmien huollot ja vikakorjaukset.",
    image: IMAGES.heatPump,
    icon: (
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const LIST_SERVICES = [
  {
    title: "Jätevesiratkaisut",
    text: "Kiinteistökohtaiset jätevesijärjestelmät vaatimusten mukaisesti, suunnittelusta asennukseen.",
    icon: (
      <path d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Kaivinkonetyöt",
    text: "Pihat, perustukset ja putkilinjat kaivetaan täsmällisesti ja siististi.",
    icon: (
      <path d="M3 20h9M8 20V9l7-4 3 3-4 4 4 4-3 3-4-3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Services() {
  return (
    <section id="palvelut" className="bg-[var(--color-bg-light)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className={sectionH2Class}>Palvelumme</h2>
        <p className={sectionLedeClass}>
          Yhdestä hanan vaihdosta koko talon LVI-urakkaan — hoidamme sen luotettavasti alusta
          loppuun.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PHOTO_SERVICES.map((service, i) => (
            <Link
              key={service.title}
              href="#"
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)]"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span
                  className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full shadow-[var(--shadow-soft)]"
                  style={ICON_BADGE_GRADIENT}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {service.icon}
                  </svg>
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-heading text-[17px] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                  {service.title}
                </h3>
                <p className="pretty flex-1 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                  {service.text}
                </p>
                <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-[var(--color-accent)] transition-colors duration-150 group-hover:text-[var(--color-accent-hover)]">
                  Lue lisää
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {LIST_SERVICES.map((service, i) => (
            <Link
              key={service.title}
              href="#"
              className="reveal group relative flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]"
              style={{ animationDelay: `${(i + 4) * 90}ms` }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={ICON_BADGE_GRADIENT}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {service.icon}
                </svg>
              </span>
              <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="max-w-[54ch] text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                {service.text}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors duration-300 ease-out group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[var(--color-ink-muted)] transition-colors duration-200 ease-out group-hover:text-white"
                >
                  <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
