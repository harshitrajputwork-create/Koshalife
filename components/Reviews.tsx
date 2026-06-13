"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    quote: "I have been using Rose Ras for so long now. Best rose water. Definitely come back.",
    name: "Priya S.",
    location: "Delhi",
    product: "Rose Ras",
    stars: 5,
  },
  {
    quote: "The product feels refreshing and gentle on the skin. Absolutely love it.",
    name: "Aishwarya M.",
    location: "Mumbai",
    product: "Rose Ras",
    stars: 5,
  },
  {
    quote: "Finally a rose water that actually smells like roses. Not synthetic, not watered down. This is the real thing.",
    name: "Tanya R.",
    location: "Bangalore",
    product: "Rose Ras",
    stars: 5,
  },
  {
    quote: "The under eye elixir has become part of my morning ritual. Nothing else comes close.",
    name: "Sheetal K.",
    location: "Pune",
    product: "Saffrona Under Eye Elixir",
    stars: 5,
  },
];

function ReviewCard({ review, index }: { review: (typeof reviews)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09, ease: "easeOut" }}
      className="flex flex-col"
      style={{ backgroundColor: "#F2E8D5", padding: "2rem", height: "100%" }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: review.stars }).map((_, s) => (
          <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#C4943A">
            <polygon points="5,1 6.2,3.8 9,3.8 6.9,5.7 7.6,8.5 5,6.9 2.4,8.5 3.1,5.7 1,3.8 3.8,3.8" />
          </svg>
        ))}
      </div>

      {/* Quote — grows to fill space, keeping all cards equal height */}
      <blockquote
        className="font-serif italic leading-7 flex-1"
        style={{ fontSize: "1.05rem", color: "#3D2B1F" }}
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      {/* Divider + Attribution — always pinned to bottom */}
      <div className="mt-6">
        <div className="w-8 h-px mb-4" style={{ backgroundColor: "#C4943A" }} />
        <p className="font-sans text-xs tracking-wider" style={{ color: "#2C1A0E" }}>
          {review.name}
        </p>
        <p className="font-sans text-[10px] mt-0.5" style={{ color: "#9B6340" }}>
          {review.location} · {review.product}
        </p>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });
  const videoRef = useRef<HTMLDivElement>(null);
  const videoInView = useInView(videoRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-sans text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: "#C4943A" }}
          >
            What they say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="font-serif font-light"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3A5432" }}
          >
            Real skin. Real words.
          </motion.h2>
        </div>

        {/* Testimonial video — featured */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, y: 24 }}
          animate={videoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 relative overflow-hidden"
          style={{ maxWidth: "480px" }}
        >
          <div
            className="relative"
            style={{ backgroundColor: "#2C1A0E", aspectRatio: "9/16", maxHeight: "480px" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ opacity: 0.95 }}
            >
              <source src="/testimonial-video.mp4" type="video/mp4" />
            </video>
            {/* Gold corner accent */}
            <div
              className="absolute top-4 left-4 w-8 h-8 pointer-events-none"
              style={{ borderTop: "1px solid #C4943A", borderLeft: "1px solid #C4943A", opacity: 0.6 }}
            />
            <div
              className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none"
              style={{ borderBottom: "1px solid #C4943A", borderRight: "1px solid #C4943A", opacity: 0.6 }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4"
              style={{ background: "linear-gradient(to top, rgba(44,26,14,0.8) 0%, transparent 100%)" }}
            >
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase" style={{ color: "#C4943A" }}>
                Verified Customer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Review cards grid — uniform equal-height rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{ alignItems: "stretch" }}>
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.instagram.com/thekoshalife_ayurvedicskincare/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] tracking-[0.25em] uppercase pb-0.5"
            style={{ color: "#3D2B1F", borderBottom: "1px solid #C4943A" }}
          >
            See more on Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
