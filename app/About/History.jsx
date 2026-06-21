"use client";

import React from "react";
import { motion } from "framer-motion";

export default function History() {
  const milestones = [
    {
      year: "2014",
      title: "Establishment of SAIFCO Studio",
      desc: "Founded in Mumbai, India, with a small team of 3 architects. Our focus was on high-end residential renovations and bespoke furniture design, establishing local trust.",
    },
    {
      year: "2017",
      title: "Expansion to Commercial Projects",
      desc: "Secured first major commercial contract, designing corporate headquarters and fine-dining lounges in metropolitan hubs. Expanded team size to 15 specialists.",
    },
    {
      year: "2020",
      title: "Global Recognition & Sustainable Integration",
      desc: "Won local design awards for eco-friendly modern architectures. Shifted philosophy to incorporate smart-home technologies and energy-efficient materials.",
    },
    {
      year: "2023",
      title: "Introduction of SAIFCO Bespoke Line",
      desc: "Launched a proprietary furniture and lighting line, sourced from finest marbles and hand-crafted bronze. Set up visual experience centers in 3 major cities.",
    },
    {
      year: "2026",
      title: "Next-Gen Editorial Design",
      desc: "Pioneering interactive design spaces utilizing immersive VR renderings and editorial layouts. Focused on defining the standard of luxurious, futuristic properties.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden border-b border-white/5 bg-[#0d1010]">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-lime-400/5 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[4px] text-lime-400 font-semibold">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-white uppercase">
            A TIMELINE OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">INNOVATION</span>
          </h2>
          <div className="w-24 h-[2px] bg-lime-400 mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-lime-400/50 via-lime-400/20 to-transparent" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-start lg:items-center justify-between relative w-full ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Bullet point indicator */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-[11px] w-6 h-6 rounded-full bg-black border-2 border-lime-400 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                  </div>

                  {/* Year text - visible on large screen next to bullet */}
                  <div className={`hidden lg:block w-[45%] text-right font-black text-6xl text-zinc-800 ${
                    isEven ? "text-right pr-8" : "text-left pl-8"
                  }`}>
                    {item.year}
                  </div>

                  {/* Details Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={`ml-12 lg:ml-0 w-[85%] lg:w-[45%] bg-[#111515] border border-white/5 p-8 rounded-3xl relative group ${
                      isEven ? "lg:text-left lg:pl-8" : "lg:text-left lg:pr-8"
                    }`}
                  >
                    {/* Glowing highlight in background */}
                    <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                    
                    <span className="inline-block lg:hidden text-lime-400 font-bold text-lg mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
