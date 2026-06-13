"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ingredients = [
  {
    id: "rose",
    name: "Rosa Damascena",
    label: "Damask Rose",
    teaser: "The queen of all botanicals.",
    detail:
      "Steam-distilled at its peak bloom. Rose water from Damask roses reduces redness, hydrates deeply, and restores the skin's natural pH. No synthetic fragrance. No shortcuts.",
    origin: "Rajasthan, India",
    usedIn: "Rose Ras",
    Icon: () => (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer petals */}
        <path d="M40 8 C40 8, 52 20, 52 32 C52 38, 48 44, 40 46 C32 44, 28 38, 28 32 C28 20, 40 8, 40 8Z" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M62 22 C62 22, 58 36, 48 42 C43 45, 37 45, 32 42 C34 35, 40 30, 48 30 C55 30, 62 22, 62 22Z" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M64 46 C64 46, 52 48, 44 44 C39 41, 36 36, 36 30 C42 30, 48 34, 52 40 C56 45, 64 46, 64 46Z" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M50 66 C50 66, 42 56, 40 46 C39 40, 40 34, 44 30 C46 35, 46 42, 44 48 C42 54, 50 66, 50 66Z" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M30 66 C30 66, 38 56, 40 46 C41 40, 40 34, 36 30 C34 35, 34 42, 36 48 C38 54, 30 66, 30 66Z" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M16 46 C16 46, 28 48, 36 44 C41 41, 44 36, 44 30 C38 30, 32 34, 28 40 C24 45, 16 46, 16 46Z" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M18 22 C18 22, 22 36, 32 42 C37 45, 43 45, 48 42 C46 35, 40 30, 32 30 C25 30, 18 22, 18 22Z" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        {/* Center */}
        <circle cx="40" cy="38" r="6" stroke="#C4943A" strokeWidth="1" fill="none" />
        <circle cx="40" cy="38" r="2.5" fill="#C4943A" opacity="0.4" />
        {/* Stem */}
        <line x1="40" y1="68" x2="40" y2="80" stroke="#7A9A65" strokeWidth="1" />
        <path d="M40 73 L34 68" stroke="#7A9A65" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    id: "saffron",
    name: "Crocus Sativus",
    label: "Kashmiri Saffron",
    teaser: "Liquid gold for the skin.",
    detail:
      "The most precious spice on earth, used in Ayurvedic skincare for centuries. Saffron brightens, evens skin tone, and carries potent antioxidant properties. A single stigma harvested by hand.",
    origin: "Kashmir, India",
    usedIn: "Saffrona Under Eye Elixir",
    Icon: () => (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Crocus petals */}
        <ellipse cx="40" cy="25" rx="8" ry="22" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <ellipse cx="40" cy="25" rx="8" ry="22" stroke="#7A9A65" strokeWidth="1.2" fill="none" transform="rotate(60 40 40)" />
        <ellipse cx="40" cy="25" rx="8" ry="22" stroke="#7A9A65" strokeWidth="1.2" fill="none" transform="rotate(120 40 40)" />
        {/* Stigmas */}
        <line x1="40" y1="38" x2="36" y2="22" stroke="#C4943A" strokeWidth="1.2" />
        <line x1="40" y1="38" x2="40" y2="20" stroke="#C4943A" strokeWidth="1.2" />
        <line x1="40" y1="38" x2="44" y2="22" stroke="#C4943A" strokeWidth="1.2" />
        <circle cx="36" cy="22" r="2" fill="#C4943A" />
        <circle cx="40" cy="20" r="2" fill="#C4943A" />
        <circle cx="44" cy="22" r="2" fill="#C4943A" />
        {/* Center */}
        <circle cx="40" cy="38" r="3" fill="#C4943A" opacity="0.3" />
        {/* Stem and leaves */}
        <line x1="40" y1="42" x2="40" y2="78" stroke="#7A9A65" strokeWidth="1.2" />
        <path d="M40 58 C40 58, 30 52, 26 44" stroke="#7A9A65" strokeWidth="1" fill="none" />
        <path d="M40 65 C40 65, 50 59, 54 51" stroke="#7A9A65" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    id: "neem",
    name: "Azadirachta Indica",
    label: "Sacred Neem",
    teaser: "Nature's oldest remedy.",
    detail:
      "Called the 'village pharmacy' in Ayurveda. Neem's antibacterial and anti-inflammatory properties have been celebrated for over 4,000 years. Grounding, clarifying, and profoundly healing for stressed skin.",
    origin: "Maharashtra, India",
    usedIn: "Future formulations",
    Icon: () => (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Branch */}
        <path d="M40 75 L40 35" stroke="#7A9A65" strokeWidth="1.5" fill="none" />
        <path d="M40 55 L28 40" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M40 48 L52 33" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        <path d="M40 40 L30 25" stroke="#7A9A65" strokeWidth="1.2" fill="none" />
        {/* Leaves */}
        <ellipse cx="23" cy="36" rx="7" ry="4" stroke="#7A9A65" strokeWidth="1" fill="none" transform="rotate(-40 23 36)" />
        <ellipse cx="57" cy="29" rx="7" ry="4" stroke="#7A9A65" strokeWidth="1" fill="none" transform="rotate(40 57 29)" />
        <ellipse cx="25" cy="20" rx="7" ry="4" stroke="#7A9A65" strokeWidth="1" fill="none" transform="rotate(-50 25 20)" />
        <ellipse cx="40" cy="12" rx="7" ry="4" stroke="#7A9A65" strokeWidth="1" fill="none" transform="rotate(0 40 12)" />
        <ellipse cx="55" cy="18" rx="7" ry="4" stroke="#7A9A65" strokeWidth="1" fill="none" transform="rotate(45 55 18)" />
        {/* Small berries */}
        <circle cx="30" cy="14" r="2.5" stroke="#C4943A" strokeWidth="0.75" fill="none" />
        <circle cx="44" cy="8" r="2.5" stroke="#C4943A" strokeWidth="0.75" fill="none" />
        <circle cx="50" cy="12" r="2" stroke="#C4943A" strokeWidth="0.75" fill="none" />
      </svg>
    ),
  },
];

function IngredientCard({
  ingredient,
  index,
}: {
  ingredient: (typeof ingredients)[0];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { Icon } = ingredient;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.11, ease: "easeOut" }}
      className="perspective-1000 cursor-pointer select-none"
      style={{ minHeight: "320px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
      aria-label={`${ingredient.name} — tap to learn more`}
    >
      <div
        className="relative w-full preserve-3d transition-all duration-700"
        style={{
          minHeight: "320px",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front face */}
        <div
          className="backface-hidden absolute inset-0 flex flex-col items-center justify-center p-8 border"
          style={{
            backgroundColor: "#FDFAF4",
            borderColor: "rgba(196,148,58,0.15)",
          }}
        >
          <Icon />
          <div className="mt-6 text-center">
            <p
              className="font-sans text-[9px] tracking-[0.25em] uppercase mb-2"
              style={{ color: "#C4943A" }}
            >
              {ingredient.label}
            </p>
            <h3
              className="font-serif italic text-xl mb-3"
              style={{ color: "#3A5432" }}
            >
              {ingredient.name}
            </h3>
            <p
              className="font-sans text-sm font-light"
              style={{ color: "#9B6340" }}
            >
              {ingredient.teaser}
            </p>
          </div>
          <p
            className="font-sans text-[8px] tracking-[0.2em] uppercase mt-8"
            style={{ color: "#C4943A", opacity: 0.5 }}
          >
            Hover to discover
          </p>
        </div>

        {/* Back face */}
        <div
          className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between p-8"
          style={{ backgroundColor: "#3A5432" }}
        >
          <div>
            <p
              className="font-sans text-[9px] tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C4943A" }}
            >
              {ingredient.label}
            </p>
            <p
              className="font-sans font-light text-sm leading-7"
              style={{ color: "#F2E8D5" }}
            >
              {ingredient.detail}
            </p>
          </div>
          <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(242,232,213,0.15)" }}>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: "#C4943A", opacity: 0.7 }}>Origin</p>
            <p className="font-serif text-sm" style={{ color: "#F2E8D5" }}>{ingredient.origin}</p>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase mt-3 mb-1" style={{ color: "#C4943A", opacity: 0.7 }}>Found in</p>
            <p className="font-serif italic text-sm" style={{ color: "#F2E8D5" }}>{ingredient.usedIn}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Ingredients() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#F2E8D5" }}
    >
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
            From the earth
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="font-serif font-light max-w-2xl leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#3A5432" }}
          >
            What goes in matters as much as what stays out.
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ingredients.map((ingredient, i) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-sans text-[10px] tracking-[0.2em] uppercase text-center mt-12"
          style={{ color: "#9B6340", opacity: 0.6 }}
        >
          All ingredients are ethically sourced from across India
        </motion.p>
      </div>
    </section>
  );
}
