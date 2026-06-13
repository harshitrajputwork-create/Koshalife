"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WA_URL = "https://wa.me/919461911119?text=" + encodeURIComponent("Hi Kosha Life! I'd like to order the Saffrona Under Eye Elixir.");

const benefits = [
  { title: "Reduces Dark Circles", desc: "Saffron's crocin compound visibly lightens hyperpigmentation under the eyes." },
  { title: "Firms & Tightens", desc: "Ayurvedic actives restore elasticity to the thin, delicate under-eye skin." },
  { title: "Deep Nourishment", desc: "A bio-active elixir that penetrates without heaviness or residue." },
  { title: "Anti-Oxidant Shield", desc: "Kashmiri saffron is one of the most potent antioxidants in nature." },
];

const steps = [
  { n: "01", text: "Gently cleanse and pat the under-eye area completely dry." },
  { n: "02", text: "Take a small amount of the elixir on your ring finger." },
  { n: "03", text: "Pat softly along the orbital bone. Never rub — let it absorb." },
];

export default function SaffronaPage() {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

  return (
    <div style={{ backgroundColor: "#FDFAF4", minHeight: "100vh" }}>

      {/* ── Sticky Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: "rgba(253,250,244,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(196,148,58,0.12)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
          style={{ color: "#3D2B1F" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="#3D2B1F" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Back
        </Link>
        <span className="font-serif italic text-sm" style={{ color: "#C4943A" }}>Saffrona</span>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2"
          style={{ backgroundColor: "#C4943A", color: "#FDFAF4" }}
        >
          Order
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-16 grid lg:grid-cols-2 min-h-screen" style={{ backgroundColor: "#1A0E06" }}>
        {/* Left: video */}
        <div className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.5) saturate(0.8)" }}>
            <source src="/saffrona-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #1A0E06 100%)" }} />
        </div>

        {/* Right: info */}
        <div className="flex flex-col justify-center px-10 lg:px-16 py-16 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[9px] tracking-[0.35em] uppercase mb-4"
            style={{ color: "#C4943A" }}
          >
            Kashmiri Saffron · Bio-Active Elixir
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-light leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#F2E8D5" }}
          >
            Saffrona
            <br />
            <em style={{ color: "#C4943A", fontSize: "0.6em" }}>Under Eye Elixir</em>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-px mb-6"
            style={{ backgroundColor: "#C4943A" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans font-light text-sm leading-7 mb-10"
            style={{ color: "#F2E8D5", opacity: 0.75, maxWidth: "380px" }}
          >
            A golden elixir steeped in Kashmiri saffron — one of nature&apos;s rarest actives. Hand-harvested stigmas, slow-infused, crafted for the most delicate skin on your face.
          </motion.p>

          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="relative mb-10"
            style={{ width: "200px", aspectRatio: "1/1" }}
          >
            <Image
              src="/saffrona-product.png"
              alt="Saffrona Under Eye Elixir"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase w-fit transition-all hover:opacity-90"
            style={{ backgroundColor: "#C4943A", color: "#1A0E06" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </motion.a>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FDFAF4" }}>
        <div className="max-w-5xl mx-auto">
          <div ref={benefitsRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={benefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="font-sans text-[9px] tracking-[0.35em] uppercase mb-4"
              style={{ color: "#C4943A" }}
            >
              What it does
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif font-light mb-14"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#3A5432" }}
            >
              Liquid gold.<br />For your most delicate skin.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="w-px self-stretch mt-1" style={{ backgroundColor: "#C4943A", minHeight: "40px" }} />
                <div>
                  <h3 className="font-serif text-base mb-2" style={{ color: "#2C1A0E" }}>{b.title}</h3>
                  <p className="font-sans font-light text-sm leading-6" style={{ color: "#3D2B1F", opacity: 0.7 }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to use ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2C1A0E" }}>
        <div className="max-w-3xl mx-auto" ref={stepsRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={stepsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-sans text-[9px] tracking-[0.35em] uppercase mb-6"
            style={{ color: "#C4943A" }}
          >
            How to use
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light mb-12"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#F2E8D5" }}
          >
            Consistency is<br /><em style={{ color: "#C4943A" }}>the ritual.</em>
          </motion.h2>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -16 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="flex gap-6 items-start"
              >
                <span className="font-serif text-3xl font-light flex-none" style={{ color: "#C4943A", opacity: 0.4 }}>{s.n}</span>
                <p className="font-sans font-light text-base leading-7 pt-1" style={{ color: "#F2E8D5", opacity: 0.75 }}>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "#F2E8D5" }}>
        <p className="font-serif italic mb-4" style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "#3A5432" }}>
          Your eyes deserve better.
        </p>
        <p className="font-sans font-light text-sm mb-10" style={{ color: "#3D2B1F", opacity: 0.65 }}>
          Order directly — no cart, no checkout, just a conversation.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-85"
          style={{ backgroundColor: "#3A5432", color: "#F2E8D5" }}
        >
          Order on WhatsApp
        </a>
        <div className="mt-10">
          <Link href="/" className="font-sans text-[10px] tracking-[0.2em] uppercase pb-0.5" style={{ color: "#9B6340", borderBottom: "1px solid rgba(155,99,64,0.35)" }}>
            ← Back to Kosha Life
          </Link>
        </div>
      </section>
    </div>
  );
}
