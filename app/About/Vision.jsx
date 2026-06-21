"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles, Compass } from "lucide-react";

export default function Vision() {
  const pillars = [
    {
      icon: <Eye className="text-lime-400" size={24} />,
      title: "Our Vision",
      desc: "To be recognized globally as a benchmark for ultra-luxury interior design, inspiring through forward-thinking spaces that balance state-of-the-art innovation with timeless class.",
    },
    {
      icon: <Target className="text-lime-400" size={24} />,
      title: "Our Mission",
      desc: "To carefully understand our client's vision and elevate it beyond expectation, integrating functionality with superior craftsmanship and high-performance materials.",
    },
    {
      icon: <Compass className="text-lime-400" size={24} />,
      title: "Design Philosophy",
      desc: "We believe inside spaces should harmonize naturally with their surroundings. Every shape, texture, and light source is chosen intentionally to induce tranquility and power.",
    },
    {
      icon: <Sparkles className="text-lime-400" size={24} />,
      title: "Uncompromising Quality",
      desc: "From hand-selecting Italian marble slabs to styling bespoke hardware, we maintain absolute devotion to detail. Near perfection is the baseline for everything we build.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 overflow-hidden border-b border-white/5 bg-[#0a0d0d]">
      {/* Background blur */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-lime-400/5 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[4px] text-lime-400 font-semibold">
            Pillars of Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-white uppercase">
            OUR PURPOSE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">PHILOSOPHY</span>
          </h2>
          <div className="w-24 h-[2px] bg-lime-400 mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                borderColor: "rgba(163, 230, 53, 0.4)",
                backgroundColor: "rgba(18, 22, 22, 0.6)",
                boxShadow: "0 10px 30px -10px rgba(163, 230, 53, 0.15)"
              }}
              className="bg-[#111515] border border-white/5 p-8 rounded-3xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Neon border-top highlight */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center mb-6 border border-lime-400/20 group-hover:bg-lime-400 group-hover:text-black transition-colors duration-300">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-lime-400 transition-colors duration-300">
                {pillar.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
