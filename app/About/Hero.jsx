"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111515]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-lime-400/10 blur-[220px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lime-400/10 blur-[180px] rounded-full" />

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-5xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              border
              border-lime-400/20
              bg-lime-400/10
              text-lime-400
              uppercase
              tracking-[4px]
              text-xs
              mb-10
            "
          >
            About SAIFCO Interior
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              text-6xl
              md:text-8xl
              font-extrabold
              leading-[0.9]
            "
          >
            Crafting
            <br />
            <span className="text-lime-400">
              Timeless Spaces
            </span>
            <br />
            With Purpose
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="
              mt-10
              text-zinc-400
              text-xl
              leading-relaxed
              max-w-3xl
            "
          >
            At SAIFCO Interior, we believe every space tells a story.
            Through thoughtful planning, luxury craftsmanship, and
            innovative design, we transform homes, offices, and
            commercial environments into extraordinary experiences
            that inspire and endure.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16"
          >
            {[
              {
                value: "120+",
                label: "Projects",
              },
              {
                value: "50+",
                label: "Clients",
              },
              {
                value: "10+",
                label: "Years",
              },
              {
                value: "15+",
                label: "Awards",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                "
              >
                <h3 className="text-4xl font-bold text-lime-400">
                  {item.value}
                </h3>

                <p className="text-zinc-400 uppercase tracking-[3px] text-xs mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111515] to-transparent" />
    </section>
  );
}