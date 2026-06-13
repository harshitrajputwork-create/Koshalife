"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/rose-ras-dark.jpg", label: "Rose Ras" },
  { src: "/founder-lake.jpg", label: "Baneet Chawla" },
  { src: "/rose-ras-100ml.jpg", label: "Rose Ras 100ml" },
  { src: "/rose-ras-mini-bottle.jpg", label: "Travel Mini" },
  { src: "/founder-garden.jpg", label: "Founder" },
  { src: "/rose-ras-dark.jpg", label: "Rose Ras" },
  { src: "/rose-ras-100ml.jpg", label: "Rose Ras 100ml" },
  { src: "/founder-lake.jpg", label: "Baneet Chawla" },
];

export default function PhotoStrip() {
  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: "#2C1A0E" }}>
      <div className="flex gap-4" style={{ width: "max-content" }}>
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...photos, ...photos].map((p, i) => (
            <div
              key={i}
              className="relative flex-none overflow-hidden"
              style={{ width: "220px", height: "300px" }}
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                className="object-cover"
                style={{ filter: "brightness(0.75) saturate(0.9)" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: "linear-gradient(to top, rgba(44,26,14,0.7) 0%, transparent 100%)" }}
              >
                <p className="font-sans text-[8px] tracking-[0.2em] uppercase" style={{ color: "#C4943A" }}>
                  {p.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
