"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      title: "Luminous Lounge",
      category: "Living Spaces",
      desc: "Integrating polished brass, fluted oak panels, and custom boucle upholstery.",
    },
    {
      url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
      title: "Monolithic Kitchen",
      category: "Culinary Spaces",
      desc: "Statuary marble waterfalls contrasting with matte black structural frames.",
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      title: "The Velvet Lounge",
      category: "Master Bedroom",
      desc: "Plush velvet backdrops paired with warm ambient backlights and gold details.",
    },
    {
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      title: "Minimalist Bath",
      category: "Wellness Areas",
      desc: "Textured concrete walls coupled with seamless glass and brushed bronze hardware.",
    },
    {
      url: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=1200&auto=format&fit=crop",
      title: "The Obsidian Study",
      category: "Workspaces",
      desc: "Deep ash wood custom cabinetry designed with integrated ambient lighting profiles.",
    },
    {
      url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
      title: "Helical Staircase",
      category: "Architectural Focus",
      desc: "A custom micro-cement structural staircase spiraling around a lighting column.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden border-b border-white/5 bg-[#0d1010]">
      {/* Background glow */}
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-lime-400/5 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[4px] text-lime-400 font-semibold">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-white uppercase">
            CRAFTING DETAIL <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">GALLERY</span>
          </h2>
          <div className="w-24 h-[2px] bg-lime-400 mx-auto mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden group border border-white/5 shadow-2xl"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay with dynamic transparency */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity duration-300" />

              {/* Text content details at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold uppercase tracking-[3px] text-lime-400 mb-2">
                  {img.category}
                </span>
                
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">
                  {img.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
