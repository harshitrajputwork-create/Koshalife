"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function FounderStory() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story"
      className="py-24"
      style={{ backgroundColor: "#F2E8D5" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-0 items-stretch">

        {/* Left: Founder photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden"
          style={{ minHeight: "520px", backgroundColor: "#2C1A0E" }}
        >
          {/* Real founder photo filling the panel */}
          <Image
            src="/founder-photo.png"
            alt="Baneet Chawla, Founder of Kosha Life"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle dark vignette at the bottom for the name tag readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(44,26,14,0.75) 0%, transparent 45%)",
            }}
          />
          {/* Name tag */}
          <div className="absolute bottom-8 left-8 right-8">
            <div
              className="inline-block px-4 py-2"
              style={{
                backgroundColor: "rgba(44,26,14,0.65)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="font-serif text-lg font-light"
                style={{ color: "#F2E8D5" }}
              >
                Baneet Chawla
              </p>
              <p
                className="font-sans text-[9px] tracking-[0.25em] uppercase mt-0.5"
                style={{ color: "#C4943A" }}
              >
                Founder, Kosha Life
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-24"
          style={{ backgroundColor: "#FDFAF4" }}
        >
          <p
            className="font-sans text-[10px] tracking-[0.35em] uppercase mb-8"
            style={{ color: "#C4943A" }}
          >
            The woman behind it
          </p>

          <h2
            className="font-serif font-light leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#3A5432" }}
          >
            She didn&apos;t start with a lab.
            <br />
            She started with <em>intent.</em>
          </h2>

          <div
            className="w-12 h-px mb-8"
            style={{ backgroundColor: "#C4943A" }}
          />

          <div className="space-y-5">
            <p
              className="font-sans font-light text-sm leading-7"
              style={{ color: "#3D2B1F" }}
            >
              Kosha Life began in an Instagram DM. Baneet Chawla had been
              searching for skincare that matched what she believed — that
              nature doesn&apos;t need improving, it needs understanding.
              Ayurveda gave her that lens.
            </p>
            <p
              className="font-sans font-light text-sm leading-7"
              style={{ color: "#3D2B1F" }}
            >
              What started as recommendations to friends became a brand —
              female-founded, slow-made, built on trust rather than marketing.
              Every product is something she would put on her own face first.
            </p>
            <p
              className="font-serif italic text-base"
              style={{ color: "#9B6340" }}
            >
              &ldquo;I wanted skincare that felt like a ritual, not a routine.&rdquo;
            </p>
          </div>

          <div className="mt-10 flex gap-5">
            <a
              href="https://www.instagram.com/thekoshalife_ayurvedicskincare/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.2em] uppercase pb-0.5"
              style={{ color: "#3D2B1F", borderBottom: "1px solid #C4943A" }}
            >
              Follow the journey
            </a>
            <a
              href={`https://wa.me/919461911119?text=Hi%20Baneet!%20I%27d%20love%20to%20know%20more%20about%20Kosha%20Life.`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.2em] uppercase pb-0.5"
              style={{ color: "#9B6340", borderBottom: "1px solid rgba(155,99,64,0.4)" }}
            >
              Say hello →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
