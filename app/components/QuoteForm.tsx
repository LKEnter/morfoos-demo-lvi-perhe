"use client";

import { useState } from "react";
import { CONTACT } from "../lib/contact";

type ResidenceId = "omakotitalo" | "taloyhtio" | "yritys" | "maatila";
type ServiceId = "lvi" | "lammitys" | "maanrakennus" | "jatevesi";

const STEPS = [
  { label: "Kohde" },
  { label: "Palvelu" },
  { label: "Yhteystiedot" },
] as const;

const RESIDENCE_TYPES: { id: ResidenceId; label: string; icon: React.ReactNode }[] = [
  {
    id: "omakotitalo",
    label: "Omakotitalo",
    icon: (
      <path
        d="M4 11.5 12 4l8 7.5M6.5 10v9.5a1 1 0 001 1h9a1 1 0 001-1V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "taloyhtio",
    label: "Taloyhtiö",
    icon: (
      <path
        d="M4 20.5V5a1 1 0 011-1h6a1 1 0 011 1v15.5M12 20.5v-8a1 1 0 011-1h6a1 1 0 011 1v8M7.5 8h1M7.5 12h1M7.5 16h1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "yritys",
    label: "Yritys",
    icon: (
      <path
        d="M4 8.5h16V19a1 1 0 01-1 1H5a1 1 0 01-1-1V8.5zM9 8.5V6.5a1 1 0 011-1h4a1 1 0 011 1v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "maatila",
    label: "Maatila",
    icon: (
      <path
        d="M12 3.5c4 3.2 7 7.3 7 11a7 7 0 11-14 0c0-3.7 3-7.8 7-11z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
];

const SERVICE_OPTIONS: { id: ServiceId; label: string; icon: React.ReactNode }[] = [
  {
    id: "lvi",
    label: "LVI-työt",
    icon: (
      <path
        d="M7 21V10.5M17 21V10.5M4 10.5l8-6 8 6M9.5 21v-5a2.5 2.5 0 015 0v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "lammitys",
    label: "Lämmitys & huolto",
    icon: (
      <path
        d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "maanrakennus",
    label: "Maanrakennus",
    icon: (
      <path
        d="M3 20h9M8 20V9l7-4 3 3-4 4 4 4-3 3-4-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "jatevesi",
    label: "Jätevesiratkaisut",
    icon: (
      <path
        d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
];

const inputClass =
  "w-full rounded-xl border border-white/40 bg-black/15 px-4 py-3 text-[15px] text-white placeholder:text-white/75 transition-colors duration-150 focus-visible:border-white focus-visible:bg-black/20 focus-visible:outline-white focus-visible:outline-offset-2";

const optionButtonClass = (selected: boolean) =>
  `flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl px-3 text-center transition-colors duration-150 ease-out focus-visible:outline-white focus-visible:outline-offset-2 ${
    selected
      ? "bg-white text-[var(--color-accent)]"
      : "border border-white/40 bg-transparent text-white hover:bg-black/10"
  }`;

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div>
      <ol className="flex items-center gap-2 sm:gap-3">
        {STEPS.map((step, i) => {
          const isDone = i < currentStep;
          const isCurrent = i === currentStep;
          return (
            <li key={step.label} className="flex flex-1 items-start gap-2 sm:flex-none sm:gap-3">
              <div className="flex flex-col items-center gap-0">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-colors duration-200 ${
                    isDone || isCurrent
                      ? "bg-white text-[var(--color-accent)]"
                      : "border border-white/50 text-white/90"
                  }`}
                >
                  {isDone ? (
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <p
                  className={`mt-2.5 text-[13px] font-semibold ${
                    isDone || isCurrent ? "text-white" : "text-white/90"
                  }`}
                >
                  {step.label}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <span aria-hidden="true" className="mt-3.5 h-px flex-1 bg-white/25 sm:w-8 sm:flex-none" />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [residence, setResidence] = useState<ResidenceId | null>(null);
  const [services, setServices] = useState<ServiceId[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: ServiceId) => {
    setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  const canAdvance = step === 0 ? residence !== null : step === 1 ? services.length > 0 : true;
  const canSubmit = name.trim() !== "" && (phone.trim() !== "" || email.trim() !== "");

  const handleSubmit = () => {
    if (!canSubmit) return;

    const residenceLabel = RESIDENCE_TYPES.find((r) => r.id === residence)?.label ?? "";
    const serviceLabels = SERVICE_OPTIONS.filter((s) => services.includes(s.id))
      .map((s) => s.label)
      .join(", ");

    const bodyLines = [
      `Kohde: ${residenceLabel}`,
      `Palvelut: ${serviceLabels}`,
      `Nimi: ${name}`,
      phone ? `Puhelin: ${phone}` : null,
      email ? `Sähköposti: ${email}` : null,
      message ? `Viesti: ${message}` : null,
    ].filter(Boolean);

    const mailto = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      "Tarjouspyyntö verkkosivulta"
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 px-7 py-14 text-center sm:px-9">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-heading text-xl font-bold text-white">Kiitos pyynnöstäsi!</h3>
        <p className="max-w-[36ch] text-[15px] leading-relaxed text-white">
          Sähköpostisovelluksesi avautui viestiluonnoksella. Jos se ei avautunut, soita meille
          suoraan numeroon{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-white underline underline-offset-2">
            {CONTACT.phoneLabel}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col px-7 py-8 sm:px-9 sm:py-9">
      <h3 className="font-heading text-xl font-bold text-white md:text-2xl">Pyydä tarjous</h3>
      <p className="mt-1.5 text-[14px] text-white">Kolme lyhyttä vaihetta, ei sitoumuksia.</p>

      <div className="mt-6">
        <StepIndicator currentStep={step} />
      </div>

      <div className="mt-7 flex-1">
        {step === 0 && (
          <div className="grid grid-cols-2 gap-3">
            {RESIDENCE_TYPES.map((option) => {
              const selected = residence === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setResidence(option.id)}
                  aria-pressed={selected}
                  className={optionButtonClass(selected)}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {option.icon}
                  </svg>
                  <span className="text-[13.5px] font-semibold leading-tight">{option.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {step === 1 && (
          <div className="grid grid-cols-2 gap-3">
            {SERVICE_OPTIONS.map((option) => {
              const selected = services.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => toggleService(option.id)}
                  aria-pressed={selected}
                  className={optionButtonClass(selected)}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {option.icon}
                  </svg>
                  <span className="text-[13.5px] font-semibold leading-tight">{option.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-white">Nimi *</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Etunimi Sukunimi"
                className={inputClass}
                required
              />
            </label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-white">Puhelin</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="040 123 4567"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-white">Sähköposti</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nimi@esimerkki.fi"
                  className={inputClass}
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-white">Viesti (valinnainen)</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Kerro lyhyesti, mistä on kyse"
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </label>
            <p className="text-[12.5px] text-white/90">
              Anna joko puhelinnumero tai sähköposti, jotta voimme olla sinuun yhteydessä.
            </p>
          </div>
        )}
      </div>

      <div className="mt-7 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="rounded-full border border-white/30 px-5 py-3 text-[14px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-white/10 focus-visible:outline-white focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-0"
        >
          Takaisin
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => canAdvance && setStep((s) => s + 1)}
            disabled={!canAdvance}
            className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[var(--color-accent)] transition-opacity duration-150 ease-out hover:opacity-90 focus-visible:outline-[var(--color-dark)] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Seuraava
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[var(--color-accent)] transition-opacity duration-150 ease-out hover:opacity-90 focus-visible:outline-[var(--color-dark)] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Lähetä pyyntö
          </button>
        )}
      </div>
    </div>
  );
}
