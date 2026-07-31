import React from "react";
import dynamic from "next/dynamic";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Turnkey from "./components/Turnkey";
import FamilyStory from "./components/FamilyStory";
import Store from "./components/Store";
import CtaBand from "./components/CtaBand";
import Contact from "./components/Contact";

/** Below-fold interactive sections — keep out of the initial JS/CSS critical path. */
const BrandsCarousel = dynamic(() => import("./components/BrandsCarousel"), {
  loading: () => <div className="border-t border-[var(--color-border)] bg-white py-20 md:py-24" aria-hidden />,
});
const Reviews = dynamic(() => import("./components/Reviews"), {
  loading: () => (
    <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-light)] py-20 md:py-28" aria-hidden />
  ),
});

export const generateMetadata = () =>
  generateMorfoosSEO({
    title: "Perheputki Etelä | LVI, maanrakennus ja tarvikemyymälä",
    description:
      "Perheyritys vuosien kokemuksella. LVI-työt, maanrakennus, jätevesiratkaisut ja tarvikemyymälä pääkaupunkiseudulla ja Etelä-Suomessa. Pyydä tarjous jo tänään.",
    path: "/",
    ogImage: "/assets/images/hero.jpg",
  });

export default function Page() {
  return (
    <main id="sisalto" className="w-full pb-16 lg:pb-0">
      <LocalBusinessSchema
        name="Perheputki Etelä Oy"
        phone="+358400000014"
        email="info@perheputki.fi"
        address={{
          streetAddress: "Esimerkkikatu 1",
          addressLocality: "Helsinki",
          postalCode: "00100",
          addressCountry: "FI",
        }}
      />

      <Hero />
      <WhyUs />
      <Services />
      <Turnkey />
      <FamilyStory />
      <Store />
      <BrandsCarousel />
      <Reviews />
      <CtaBand />
      <Contact />
    </main>
  );
}
