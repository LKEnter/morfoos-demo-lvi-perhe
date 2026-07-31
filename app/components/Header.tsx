"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT } from "../lib/contact";

const NAV_LINKS = [
  { href: "#etusivu", label: "Etusivu" },
  { href: "#palvelut", label: "Palvelut" },
  { href: "#tarvikemyymala", label: "Tarvikemyymälä" },
  { href: "#yritys", label: "Yritys" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-dark)]">
      <div className="mx-auto grid h-[76px] max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 md:px-8">
        <Link
          href="#etusivu"
          className="flex shrink-0 items-center justify-self-start rounded-xl bg-white px-3 py-2 shadow-[var(--shadow-soft)] transition-transform duration-200 ease-out hover:scale-[1.02]"
          aria-label="Perheputki Etelä Oy, etusivulle"
        >
          <Image
            src="/assets/images/brand/logo.svg"
            alt="Perheputki Etelä Oy"
            width={168}
            height={34}
            unoptimized
            priority
            className="h-[26px] w-auto md:h-[30px]"
          />
        </Link>

        <nav className="hidden items-center justify-self-center gap-8 lg:flex" aria-label="Päävalikko">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-medium text-white/85 transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center justify-self-end gap-5 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-white/90 transition-colors duration-150 hover:text-white"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4.5 4h3.2l1.3 4-1.9 1.4a11 11 0 005.5 5.5l1.4-1.9 4 1.3v3.2a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 013 5.6 1.5 1.5 0 014.5 4z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Soita meille
          </a>
          <a
            href="#yhteystiedot"
            className="whitespace-nowrap rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-[15px] font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 hover:bg-[var(--color-accent-hover)]"
          >
            Pyydä tarjous
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="col-start-3 flex h-11 w-11 shrink-0 items-center justify-self-end rounded-full text-white lg:hidden"
          aria-label="Avaa valikko"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-dark)] lg:hidden">
          <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5">
            <div className="flex items-center rounded-xl bg-white px-3 py-2">
              <Image
                src="/assets/images/brand/logo.svg"
                alt="Perheputki Etelä Oy"
                width={150}
                height={30}
                unoptimized
                className="h-[24px] w-auto"
              />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white"
              aria-label="Sulje valikko"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 pt-6" aria-label="Mobiilivalikko">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-semibold text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-5 pt-8">
            <a
              href="#yhteystiedot"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-center text-[16px] font-semibold text-white"
            >
              Pyydä tarjous
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-center text-[16px] font-semibold text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4.5 4h3.2l1.3 4-1.9 1.4a11 11 0 005.5 5.5l1.4-1.9 4 1.3v3.2a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 013 5.6 1.5 1.5 0 014.5 4z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Soita meille
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
