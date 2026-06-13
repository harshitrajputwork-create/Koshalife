"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    q: "What is Rose Ras?",
    a: "Rose Ras is a 100% pure, steam-distilled rose water made from Damask roses (Rosa Damascena). No preservatives, no synthetic fragrance, no dilution. Use it as a toner, facial mist, or add it to DIY skincare. It works for all skin types and is especially good for sensitive, oily, and combination skin.",
  },
  {
    q: "How do I order?",
    a: "We currently sell through WhatsApp and Instagram DM. Simply click any 'Shop via WhatsApp' button on this page, or send us a message directly at +91 94619 11119. We'll confirm your order, share payment details, and dispatch within 1–2 business days.",
  },
  {
    q: "Are Kosha Life products natural and chemical-free?",
    a: "Yes. Every ingredient is chosen deliberately. Our products contain no parabens, no sulphates, no synthetic fragrances, and no artificial colours. What you see in the ingredient list is exactly what goes into the formulation — nothing is hidden.",
  },
  {
    q: "Do you ship pan-India?",
    a: "Yes, we ship all across India. Shipping typically takes 3–7 business days depending on your location. We package with care — your order arrives safely.",
  },
  {
    q: "What makes Kosha Life different from other Ayurvedic brands?",
    a: "We don't use Ayurveda as a marketing label. It's the actual framework behind how we formulate. Small batches, traceable ingredients, and a founder who uses every product herself. There's no middleman between Baneet's vision and what arrives at your door.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="border-b"
      style={{ borderColor: "rgba(196,148,58,0.2)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="font-serif text-lg font-light pr-6 leading-snug"
          style={{ color: "#2C1A0E" }}
        >
          {item.q}
        </span>
        <span
          className="flex-none w-5 h-5 flex items-center justify-center transition-transform duration-300"
          style={{
            color: "#C4943A",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" strokeWidth="1.2" />
            <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="font-sans font-light text-sm leading-7 pb-6 pr-10 max-w-2xl"
              style={{ color: "#3D2B1F" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#FDFAF4" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-sans text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ color: "#C4943A" }}
          >
            Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif font-light"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3A5432" }}
          >
            Good questions deserve honest answers.
          </motion.h2>
        </div>

        {/* FAQ list */}
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-14 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ borderColor: "rgba(196,148,58,0.2)" }}
        >
          <p className="font-sans text-sm font-light" style={{ color: "#3D2B1F" }}>
            Still have questions?
          </p>
          <a
            href="https://wa.me/919461911119?text=Hi%20Kosha%20Life!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] tracking-[0.2em] uppercase pb-0.5"
            style={{ color: "#C4943A", borderBottom: "1px solid rgba(196,148,58,0.4)" }}
          >
            Ask us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
