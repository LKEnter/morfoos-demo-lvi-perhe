import Image from "next/image";
import { CONTACT, SERVICE_AREA } from "../lib/contact";

const LINKS = [
  { href: "#etusivu", label: "Etusivu" },
  { href: "#palvelut", label: "Palvelut" },
  { href: "#tarvikemyymala", label: "Tarvikemyymälä" },
  { href: "#yritys", label: "Yritys" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] pb-28 pt-16 lg:pb-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center rounded-xl bg-white px-3 py-2">
              <Image
                src="/assets/images/brand/logo.svg"
                alt="Perheputki Etelä Oy"
                width={150}
                height={30}
                unoptimized
                className="h-[24px] w-auto"
              />
            </div>
            <p className="mt-4 max-w-[30ch] text-[14px] leading-relaxed text-white/60">
              Perheyritys, joka on hoitanut alueen kotien LVI-, maanrakennus- ja
              huoltotyöt vuosien kokemuksella.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white/50">
              Valikko
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[15px] text-white/75 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white/50">
              Yhteystiedot
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[15px] text-white/75">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-white">
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="hover:text-white">
                  {CONTACT.emailLabel}
                </a>
              </li>
              <li className="pt-1 text-white/60">
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white/50">
              Toiminta-alue
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[15px] text-white/75">
              {SERVICE_AREA.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 text-[13px] text-white/45">
          <p>© {new Date().getFullYear()} Perheputki Etelä Oy. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
}
