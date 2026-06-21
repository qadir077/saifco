"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Overview() {
  const points = [
    "Bespoke High-End Spatial Concepts",
    "Mastery in Lighting & Texture Balancing",
    "Sourcing Rare & Exquisite Materials Globally",
    "End-to-End Architectural Craftsmanship",
  ];

  return (
    <section className="relative py-24 overflow-hidden border-b border-white/5 bg-[#0d1010]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-lime-400/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-xs uppercase tracking-[4px] text-lime-400 font-semibold">
              The Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-white leading-tight uppercase">
              Bespoke Spaces, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">
                Tailored Experiences
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Founded on the belief that environment shapes human experience, SAIFCO Interior has spent over a decade crafting luxurious spaces that marry high-end design aesthetics with structural precision. We do not just design rooms; we curate functional works of art that reflect our clients' unique personalities and aspirations.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Whether it is a multi-million dollar residential villa or a sleek corporate headquarters, we focus on every detail—from the initial layout to the selection of bespoke fabrics, marble cuts, and custom lighting installations. Our signature touch blends contemporary sleekness with warm, organic textures, resulting in spaces that feel both elevated and welcoming.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-zinc-300 text-sm"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 border border-lime-400/25">
                    <Check size={12} />
                  </div>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
                alt="Sophisticated Living Room"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-[3px] text-lime-400 block mb-1">
                  Featured project
                </span>
                <h4 className="text-xl font-bold text-white uppercase">
                  The Emerald Penthouse
                </h4>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-lime-400/30 rounded-br-3xl pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-lime-400/30 rounded-tl-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
