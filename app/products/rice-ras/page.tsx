"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WA_URL = "https://wa.me/919461911119?text=" + encodeURIComponent("Hi Kosha Life! I'd like to order Rice Ras - Brightening Rice Toner.");

const benefits = [
  { title: "Brightens Skin", desc: "Rice water has been used in Ayurvedic beauty rituals for centuries to reveal a natural, lit-from-within glow." },
  { title: "Deep Hydration", desc: "Amino acids and vitamins in rice water penetrate deeply, replenishing moisture without any heaviness." },
  { title: "Smooth Texture", desc: "Refines skin texture with every use — softer, more even skin from the very first spritz." },
  { title: "Boosts Glow", desc: "Licorice extract works alongside rice water to even skin tone and promote lasting radiance." },
  { title: "Strengthens Barrier", desc: "Aloe vera and rose hydrosol calm and fortify the skin barrier — especially for sensitive, reactive skin." },
];

const ingredients = [
  { name: "Rice Water", benefit: "Brightens & revives dull skin" },
  { name: "Licorice Extract", benefit: "Evens tone & promotes clarity" },
  { name: "Rose Hydrosol", benefit: "Hydrates, soothes & restores balance" },
  { name: "Aloe Vera", benefit: "Calms, cools & deeply moisturises" },
];

const steps = [
  { n: "01", text: "After cleansing, spray 2–3 pumps of Rice Ras on your face and neck." },
  { n: "02", text: "Gently pat it in with your fingertips until fully absorbed." },
  { n: "03", text: "Follow with your serum and moisturiser." },
  { n: "04", text: "Use twice daily, morning and night for best results." },
];

const gallery = [
  "/rice-ras-main.jpg",
  "/rice-ras-spray.jpg",
  "/rice-ras-ingredients.jpg",
  "/rice-ras-why.jpg",
];

export default function RiceRasPage() {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const ingredientsInView = useInView(ingredientsRef, { once: true, margin: "-80px" });
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

  return (
    <div style={{ backgroundColor: "#FDFAF4", minHeight: "100vh" }}>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: "rgba(253,250,244,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(196,148,58,0.12)" }}
      >
        <Link href="/" className="flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60" style={{ color: "#3D2B1F" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="#3D2B1F" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Back
        </Link>
        <span className="font-serif italic text-sm" style={{ color: "#C4943A" }}>Rice Ras</span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2" style={{ backgroundColor: "#C4943A", color: "#FDFAF4" }}>
          Order
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-16 grid lg:grid-cols-2 min-h-screen" style={{ backgroundColor: "#F5EFE4" }}>
        {/* Left: main product photo */}
        <div className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
          <Image src="/rice-ras-main.jpg" alt="Rice Ras - Brightening Rice Toner" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>

        {/* Right: product info */}
        <div className="flex flex-col justify-center px-10 lg:px-16 py-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[9px] tracking-[0.35em] uppercase mb-4"
            style={{ color: "#C4943A" }}
          >
            Rice Water · Licorice Extract · Rose Hydrosol
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-light leading-none mb-3"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#2C1A0E" }}
          >
            Rice
            <br />
            <em style={{ color: "#C4943A" }}>Ras</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-[10px] tracking-[0.2em] uppercase mb-6"
            style={{ color: "#9B6340" }}
          >
            The Brightening Rice Toner
          </motion.p>

          <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="w-12 h-px mb-6" style={{ backgroundColor: "#C4943A" }} />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans font-light text-sm leading-7 mb-6"
            style={{ color: "#3D2B1F", opacity: 0.8, maxWidth: "380px" }}
          >
            Inspired by Ayurvedic rituals, crafted for modern skin. Traditional wisdom. Visible results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="font-sans text-[9px] tracking-[0.15em] uppercase mb-8 px-4 py-2 inline-block"
            style={{ backgroundColor: "rgba(196,148,58,0.1)", color: "#9B6340", border: "1px solid rgba(196,148,58,0.3)", width: "fit-content" }}
          >
            100ml · For all skin types · Especially dull, tired &amp; dehydrated skin
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase w-fit transition-all hover:opacity-90"
            style={{ backgroundColor: "#C4943A", color: "#FDFAF4" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </motion.a>
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section className="py-12 px-6 overflow-hidden" style={{ backgroundColor: "#F2E8D5" }}>
        <p className="font-sans text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: "#C4943A" }}>Gallery</p>
        <div className="flex gap-4 overflow-x-auto scroll-hide snap-x snap-mandatory pb-2">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-none snap-start relative overflow-hidden"
              style={{ width: "260px", aspectRatio: "3/4" }}
            >
              <Image src={src} alt={`Rice Ras ${i + 1}`} fill priority={i === 0} sizes="260px" className="object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FDFAF4" }}>
        <div className="max-w-5xl mx-auto" ref={benefitsRef}>
          <motion.p initial={{ opacity: 0 }} animate={benefitsInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="font-sans text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: "#C4943A" }}>
            5 Benefits · 1 Rice Ras
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={benefitsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif font-light mb-14" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#3A5432" }}>
            Brighter. Softer. Stronger.
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={benefitsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.09 }} className="flex gap-4 items-start">
                <div className="w-px self-stretch mt-1 flex-none" style={{ backgroundColor: "#C4943A", minHeight: "36px" }} />
                <div>
                  <h3 className="font-serif text-base mb-1.5" style={{ color: "#2C1A0E" }}>{b.title}</h3>
                  <p className="font-sans font-light text-sm leading-6" style={{ color: "#3D2B1F", opacity: 0.7 }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F2E8D5" }}>
        <div className="max-w-5xl mx-auto" ref={ingredientsRef}>
          <motion.p initial={{ opacity: 0 }} animate={ingredientsInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="font-sans text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: "#C4943A" }}>
            Every ingredient. Every intention.
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif font-light mb-14" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#3A5432" }}>
            The Ingredient Story.
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ingredients.map((ing, i) => (
              <motion.div key={ing.name} initial={{ opacity: 0, y: 16 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }} className="p-6 border" style={{ borderColor: "rgba(196,148,58,0.2)", backgroundColor: "#FDFAF4" }}>
                <h3 className="font-serif text-lg mb-2" style={{ color: "#2C1A0E" }}>{ing.name}</h3>
                <p className="font-sans text-sm font-light" style={{ color: "#9B6340" }}>{ing.benefit}</p>
              </motion.div>
            ))}
          </div>

          {/* Ingredient photo — full uncropped */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={ingredientsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10">
            <Image src="/rice-ras-ingredients.jpg" alt="Rice Ras Ingredients" width={1200} height={900} style={{ width: "100%", height: "auto" }} />
          </motion.div>
        </div>
      </section>

      {/* ── How to use ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2C1A0E" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center" ref={stepsRef}>
          <div>
            <motion.p initial={{ opacity: 0 }} animate={stepsInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="font-sans text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: "#C4943A" }}>
              How to use
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif font-light mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#F2E8D5" }}>
              Morning and night.<br /><em style={{ color: "#C4943A" }}>For best results.</em>
            </motion.h2>
            <div className="space-y-7">
              {steps.map((s, i) => (
                <motion.div key={s.n} initial={{ opacity: 0, x: -16 }} animate={stepsInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} className="flex gap-6 items-start">
                  <span className="font-serif text-2xl font-light flex-none" style={{ color: "#C4943A", opacity: 0.4 }}>{s.n}</span>
                  <p className="font-sans font-light text-sm leading-7 pt-0.5" style={{ color: "#F2E8D5", opacity: 0.75 }}>{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* How to use photo */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={stepsInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.2 }} className="relative overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: "500px" }}>
            <Image src="/rice-ras-howto.jpg" alt="How to use Rice Ras" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "#F5EFE4" }}>
        <p className="font-serif italic mb-3" style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "#3A5432" }}>
          Traditional wisdom. Visible results.
        </p>
        <p className="font-sans font-light text-sm mb-10" style={{ color: "#3D2B1F", opacity: 0.65 }}>
          Order directly — no cart, no checkout, just a conversation.
        </p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-85" style={{ backgroundColor: "#3A5432", color: "#F2E8D5" }}>
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
