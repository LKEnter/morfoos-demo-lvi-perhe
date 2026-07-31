import { CONTACT } from "../lib/contact";

export default function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[var(--color-border)] bg-white/95 p-3 backdrop-blur-sm [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden"
      role="region"
      aria-label="Pikavalinnat"
    >
      <a
        href={CONTACT.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-dark)] px-4 py-3 text-[15px] font-semibold text-[var(--color-dark)]"
      >
        Soita
      </a>
      <a
        href="#yhteystiedot"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-[15px] font-semibold text-white"
      >
        Pyydä tarjous
      </a>
    </div>
  );
}
