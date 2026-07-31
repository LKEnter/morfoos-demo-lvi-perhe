import React from "react";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Turnkey from "./components/Turnkey";
import FamilyStory from "./components/FamilyStory";
import Store from "./components/Store";
import BrandsCarousel from "./components/BrandsCarousel";
import Reviews from "./components/Reviews";
import CtaBand from "./components/CtaBand";
import Contact from "./components/Contact";

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
