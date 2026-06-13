"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WA_BASE =
  "https://wa.me/919461911119?text=Hi%20Kosha%20Life!%20I%27d%20like%20to%20order%20";

const products = [
  {
    id: "rose-ras",
    name: "Rose Ras",
    subtitle: "The Essence of Roses.",
    description:
      "Steam distilled from Damask roses. No additives, no shortcuts. Just the purest rose water you'll ever feel on your skin.",
    detail: "100ml · Steam Distilled · All Skin Types",
    wa: WA_BASE + "Rose%20Ras",
    video: "/rose-ras-video.mp4",
    image: "/rose-ras-product.png",
  },
  {
    id: "saffrona",
    name: "Saffrona Under Eye Elixir",
    subtitle: "Mindful. Minimal. Made with Love.",
    description:
      "Liquid saffron meets ancient Ayurvedic science. A golden elixir for the most delicate skin, without compromise.",
    detail: "Under Eye Elixir · Saffron-Infused · All Skin Types",
    wa: WA_BASE + "Saffrona%20Under%20Eye%20Elixir",
    video: "/saffrona-video.mp4",
    image: "/saffrona-product.png",
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex-none w-72 sm:w-80 lg:w-96 snap-start"
    >
      <div className="relative overflow-hidden" style={{ borderRadius: "2px" }}>

        {/* Video visual — autoplay loop */}
        <div className="relative overflow-hidden group" style={{ minHeight: "420px" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src={product.video} type="video/mp4" />
            {/* Fallback to image if video fails */}
          </video>
          {/* Moody overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(44,26,14,0.6) 0%, rgba(44,26,14,0.1) 50%, transparent 100%)",
            }}
          />
          {/* Gold corner accents */}
          <div
            className="absolute top-4 left-4 w-7 h-7 pointer-events-none opacity-50"
            style={{ borderTop: "1px solid #C4943A", borderLeft: "1px solid #C4943A" }}
          />
          <div
            className="absolute bottom-4 right-4 w-7 h-7 pointer-events-none opacity-50"
            style={{ borderBottom: "1px solid #C4943A", borderRight: "1px solid #C4943A" }}
          />
          {/* Index */}
          <span
            className="absolute top-5 right-5 font-sans text-xs tracking-[0.2em] opacity-40"
            style={{ color: "#F2E8D5" }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Text block */}
        <div className="px-7 py-8" style={{ backgroundColor: "#FDFAF4" }}>
          <p
            className="font-sans text-[9px] tracking-[0.3em] uppercase mb-3"
            style={{ color: "#C4943A" }}
          >
            {product.detail}
          </p>
          <h3
            className="font-serif font-light text-2xl leading-tight mb-2"
            style={{ color: "#2C1A0E" }}
          >
            {product.name}
          </h3>
          <p className="font-serif italic text-base mb-4" style={{ color: "#9B6340" }}>
            {product.subtitle}
          </p>
          <p className="font-sans text-sm font-light leading-6 mb-7" style={{ color: "#3D2B1F" }}>
            {product.description}
          </p>
          <a
            href={product.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-250 pb-0.5"
            style={{ color: "#2C1A0E", borderBottom: "1px solid #C4943A" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C4943A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#2C1A0E"; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="collection" className="py-24" style={{ backgroundColor: "#F2E8D5" }}>
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase mb-4"
          style={{ color: "#C4943A" }}
        >
          The Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="font-serif font-light"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#3A5432" }}
        >
          Slow beauty, no compromise.
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto scroll-hide snap-x snap-mandatory pb-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}

          {/* More coming card */}
          <div className="flex-none w-72 sm:w-80 lg:w-96 snap-start">
            <div
              className="relative flex flex-col items-center justify-center overflow-hidden"
              style={{ minHeight: "420px", background: "linear-gradient(145deg, #3A5432 0%, #2C1A0E 100%)" }}
            >
              <div className="absolute inset-0 opacity-20">
                <Image src="/brand-editorial.png" alt="" fill className="object-cover" sizes="384px" />
              </div>
              <div className="relative z-10 text-center px-8">
                <p className="font-serif italic text-xl mb-2" style={{ color: "#F2E8D5", opacity: 0.8 }}>
                  More coming.
                </p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase" style={{ color: "#C4943A" }}>
                  Follow @thekoshalife
                </p>
              </div>
            </div>
            <div className="px-7 py-8" style={{ backgroundColor: "#FDFAF4" }}>
              <p className="font-sans text-sm font-light leading-6" style={{ color: "#3D2B1F" }}>
                New formulations are in the works. Follow us on Instagram to stay close.
              </p>
              <a
                href="https://www.instagram.com/thekoshalife_ayurvedicskincare/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase mt-6 pb-0.5"
                style={{ color: "#2C1A0E", borderBottom: "1px solid #C4943A" }}
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <p
        className="text-center font-sans text-[9px] tracking-[0.2em] uppercase mt-6 lg:hidden"
        style={{ color: "#9B6340", opacity: 0.6 }}
      >
        ← Scroll to explore →
      </p>
    </section>
  );
}
