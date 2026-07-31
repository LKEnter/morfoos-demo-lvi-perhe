/** Shared contact details */
export const CONTACT = {
  phoneLabel: "040 000 0014",
  phoneHref: "tel:+358400000014",
  emailLabel: "info@perheputki.fi",
  emailHref: "mailto:info@perheputki.fi",
  addressLine1: "Esimerkkikatu 1",
  addressLine2: "00100 Helsinki",
  mapHref: "https://maps.google.com/?q=Esimerkkikatu+1,+00100+Helsinki",
} as const;

export const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Esimerkkikatu+1,+00100+Helsinki&hl=fi&z=14&output=embed";

export const OPENING_HOURS = [
  { day: "Ma–Pe", hours: "8–17" },
  { day: "La", hours: "9–13" },
  { day: "Su", hours: "Suljettu" },
] as const;

export const SERVICE_AREA = ["Pääkaupunkiseutu", "Uusimaa", "Etelä-Suomi", "lähialueet"] as const;
