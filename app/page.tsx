"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const images = [
    "/images/gallery-1.jpeg",
    "/images/gallery-2.jpeg",
    "/images/gallery-3.jpeg",
    "/images/gallery-4.jpeg",
    "/images/gallery-5.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const getImage = (offset: number) => {
    return images[(current + offset + images.length) % images.length];
  };

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <main className="min-h-screen bg-[#f4f0e8] text-[#1f1f1f]">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate min-h-screen overflow-hidden px-6 pb-8 pt-0 text-white md:px-16 md:pb-12 md:pt-0"
      >
        <img
          src="/images/hero.jpeg"
          alt="Evento country"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        <header className="relative z-20">
          <nav className="absolute -left-2 top-8 flex flex-col gap-1 font-serif text-lg text-white">
            <a href="#chi-siamo" className="transition hover:text-[#ead4a4]">
              Chi siamo
            </a>

            <a href="#gallery" className="transition hover:text-[#ead4a4]">
              Gallery
            </a>

            <a href="#contatti" className="transition hover:text-[#ead4a4]">
              Contatti
            </a>
          </nav>

          <img
            src="/images/Logo png transparent.png"
            alt="Always Country"
            className="absolute left-1/2 top-8 h-32 w-auto -translate-x-1/2 brightness-0 invert"
          />
        </header>

        <div className="mt-64 max-w-5xl md:mt-80">
          <div className="mb-10 w-full">
            <p className="font-serif text-xl font-light uppercase tracking-[0.04em] text-[#ead4a4] md:text-2xl">
              Cappelli, accessori e abbigliamento in stile country
            </p>

            <div className="mt-6 h-px w-full bg-white/30" />

            <p className="mt-8 max-w-xl font-serif text-base leading-snug text-white/85 md:text-lg">
              Una piccola realtà che offre prodotti di qualità per gli amanti
              dello stile country, presente nei principali eventi e nelle
              occasioni più importanti del settore.
            </p>
          </div>

          <motion.h1
            style={{
              y: titleY,
              scale: titleScale,
              fontFamily: "var(--font-battle-road)",
            }}
            className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-center leading-none text-[#ead4a4] text-6xl md:text-[9rem]"
          >
            Always Country
          </motion.h1>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section
        id="chi-siamo"
        className="bg-[#f4f0e8] px-6 py-24 md:px-16 md:py-32"
      >
        <div className="mx-auto max-w-[1600px]">

          <div className="mb-6 flex items-center gap-6">
            <div className="h-px w-12 bg-[#c89a4b]" />

            <p className="font-serif text-lg text-[#c89a4b]">
              Chi siamo
            </p>
          </div>

          <h2 className="w-full font-serif text-4xl leading-tight text-[#2a2118] [text-indent:20%] md:text-6xl">
            Always Country è una piccola impresa familiare specializzata nella vendita di
            articoli country e western.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="space-y-8 font-serif text-lg leading-relaxed text-[#4b4035] md:text-xl">
              <p>
                Da quasi vent'anni portiamo il nostro stand nei principali eventi country italiani
                 e in numerose manifestazioni europee. Nel tempo abbiamo costruito un'attività basata
                  sulla qualità dei prodotti, sulla conoscenza del settore e sul rapporto diretto con i clienti.
              </p>

              <p>
                I cappelli rappresentano da sempre il nostro punto di forza. Nel
                corso degli anni abbiamo costruito un assortimento che comprende
                modelli classici e contemporanei, disponibili in diverse forme,
                materiali e misure. Proponiamo cappelli provenienti da differenti
                produttori e paesi, con soluzioni adatte sia a chi cerca un
                accessorio elegante sia a chi desidera un autentico cappello western.
              </p>
            </div>

            <div className="space-y-8 font-serif text-lg leading-relaxed text-[#4b4035] md:text-xl">
              <p>
                Accanto ai cappelli offriamo una selezione di cinture in vero cuoio
                di groppone e fibbie decorative, realizzate con materiali di qualità
                e curate nei dettagli. Molti dei prodotti che proponiamo provengono
                da lavorazioni artigianali e sono scelti per garantire robustezza e
                durata nel tempo.
              </p>

              <p>
                La nostra offerta comprende inoltre bolo tie, gioielli e
                bigiotteria ispirati all'estetica del West americano, oltre a
                cappotti e soprabiti in stile Old West, inclusi modelli di
                produzione inglese. Questi rappresentano solo una parte del nostro
                assortimento, che comprende numerosi altri articoli e accessori
                dedicati al mondo country e western.
              </p>
  
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="bg-[#f4f0e8] px-6 py-24 md:px-16 md:py-32"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 flex items-center gap-6">
            <div className="h-px w-12 bg-[#c89a4b]" />

            <p className="font-serif text-lg text-[#c89a4b]">
              Gallery
            </p>
          </div>

          <div className="relative mx-auto flex h-[420px] max-w-4xl items-center justify-center">
            {/* immagini laterali sinistra */}
            <img
              src={getImage(-2)}
              alt="Gallery laterale sinistra"
              className="absolute left-0 z-10 h-64 w-48 -rotate-6 rounded-sm border-8 border-white object-cover shadow-xl"
            />

            <img
              src={getImage(-1)}
              alt="Gallery laterale sinistra"
              className="absolute left-24 z-20 h-72 w-56 -rotate-3 rounded-sm border-8 border-white object-cover shadow-xl"
            />

            {/* immagini laterali destra */}
            <img
              src={getImage(1)}
              alt="Gallery laterale destra"
              className="absolute right-24 z-20 h-72 w-56 rotate-3 rounded-sm border-8 border-white object-cover shadow-xl"
            />

            <img
              src={getImage(2)}
              alt="Gallery laterale destra"
              className="absolute right-0 z-10 h-64 w-48 rotate-6 rounded-sm border-8 border-white object-cover shadow-xl"
            />

            {/* freccia sinistra */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute -left-16 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#2a2118] shadow-xl transition hover:scale-110"
            >
              <ChevronLeft size={30} />
            </button>

            {/* freccia destra */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute -right-16 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#2a2118] shadow-xl transition hover:scale-110"
            >
              <ChevronRight size={30} />
            </button>

            {/* immagine centrale */}
            <div className="relative z-30 bg-white p-4 shadow-2xl">
              <img
                src={getImage(0)}
                alt="Gallery principale"
                className="h-80 w-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section
        id="contatti"
        className="bg-[#e8dfcf] px-6 py-24 md:px-16 md:py-32"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 flex items-center gap-6">
            <div className="h-px w-12 bg-[#c89a4b]" />

            <p className="font-serif text-lg text-[#c89a4b]">
              Contatti
            </p>
          </div>

          <h2 className="max-w-4xl font-serif text-4xl leading-tight text-[#2a2118] md:text-6xl">
            Vuoi trovarci o contattarci?
          </h2>

          <div className="mt-10 space-y-3 font-serif text-lg text-[#4b4035] md:text-xl">
            <p>Email: alwayscountry.info@gmail.com</p>
            <p>Telefono: +39 351 669 2942</p>
            <p>P.IVA: 02556860506</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#3b2a1d] px-6 py-10 text-[#ead4a4] md:px-16">
  <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="font-serif text-lg">Always Country</p>
      <p className="text-sm text-[#d8cfc0]">
        Articoli country e western • Italia & Europa
      </p>
    </div>

    <div className="text-sm text-[#d8cfc0]">
      © {new Date().getFullYear()} Always Country. Tutti i diritti riservati.
    </div>

    <div className="text-sm text-[#d8cfc0]">
      Sito realizzato da Sisa Ruiz
    </div>
  </div>
</footer>
    </main>
  );
}