"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function HowToUse() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#2C1A0E" }}
    >
      {/* Subtle atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(196,148,58,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p
            className="font-sans text-[10px] tracking-[0.35em] uppercase mb-6"
            style={{ color: "#C4943A" }}
          >
            The Ritual
          </p>
          <h2
            className="font-serif font-light leading-tight mb-8"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              color: "#F2E8D5",
            }}
          >
            How to use
            <br />
            <em style={{ color: "#C4943A" }}>Saffrona</em>
          </h2>

          {/* Animated gold divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-px mb-8"
            style={{ backgroundColor: "#C4943A" }}
          />

          <div className="space-y-4">
            {[
              { n: "01", text: "Gently cleanse and pat the under-eye area completely dry." },
              { n: "02", text: "Take a small amount of the elixir on your ring finger." },
              { n: "03", text: "Pat softly along the orbital bone. Never rub — let it absorb." },
            ].map((step) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + parseInt(step.n) * 0.1 }}
                className="flex items-start gap-4"
              >
                <span
                  className="font-serif text-xs pt-0.5 flex-none"
                  style={{ color: "#C4943A", opacity: 0.7 }}
                >
                  {step.n}
                </span>
                <p
                  className="font-sans text-sm font-light leading-6"
                  style={{ color: "#F2E8D5", opacity: 0.7 }}
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.8 }}
            className="font-serif italic mt-8 text-base"
            style={{ color: "#C4943A", opacity: 0.6 }}
          >
            Morning and night. Consistency is the ritual.
          </motion.p>
        </motion.div>

        {/* Right: Video */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative ring behind video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -inset-6 rounded-full border opacity-10"
            style={{ borderColor: "#C4943A" }}
          />

          <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", maxHeight: "560px" }}>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/how-to-use-video.mp4" type="video/mp4" />
            </video>

            {/* Sound toggle button */}
            <button
              onClick={toggleSound}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-all"
              style={{
                backgroundColor: "rgba(44,26,14,0.65)",
                border: "1px solid rgba(196,148,58,0.5)",
                backdropFilter: "blur(4px)",
              }}
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                /* Speaker with X (muted) */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#C4943A" />
                  <line x1="23" y1="9" x2="17" y2="15" stroke="#C4943A" strokeWidth="2" strokeLinecap="round" />
                  <line x1="17" y1="9" x2="23" y2="15" stroke="#C4943A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                /* Speaker with waves (sound on) */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#C4943A" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#C4943A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="#C4943A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>

            {/* Muted hint — fades after 3s */}
            {muted && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none"
              >
                <p
                  className="font-sans text-[8px] tracking-[0.2em] uppercase px-3 py-1"
                  style={{
                    backgroundColor: "rgba(44,26,14,0.7)",
                    color: "#C4943A",
                    backdropFilter: "blur(4px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Tap 🔇 for sound
                </p>
              </motion.div>
            )}

            {/* Gold corner accents */}
            <div
              className="absolute top-3 left-3 w-7 h-7 pointer-events-none"
              style={{ borderTop: "1px solid #C4943A", borderLeft: "1px solid #C4943A" }}
            />
            <div
              className="absolute bottom-3 right-3 w-7 h-7 pointer-events-none"
              style={{ borderBottom: "1px solid #C4943A", borderRight: "1px solid #C4943A" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
