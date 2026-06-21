"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Team() {
  const members = [
    {
      name: "Saifuddin K.",
      role: "Founder & Principal Architect",
      quote: "Design is not just what it looks like; it's how it makes you feel.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Amina Vance",
      role: "Director of Interior Design",
      quote: "Simplicity is the ultimate sophistication. Texture is our language.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Rajesh Sharma",
      role: "Master Craftsmanship Director",
      quote: "Materials tell stories. We select elements that will stand for centuries.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden border-b border-white/5 bg-[#0a0d0d]">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-lime-400/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[4px] text-lime-400 font-semibold">
            The Visionaries
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-white uppercase">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">CREATIVE MINDS</span>
          </h2>
          <div className="w-24 h-[2px] bg-lime-400 mx-auto mt-4" />
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group bg-[#111515] rounded-[32px] overflow-hidden border border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-lime-400/30"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual gradient filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Social icons overlay on hover */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#111515] border border-white/10 flex items-center justify-center text-white hover:text-lime-400 hover:border-lime-400 transition-colors">
                    <LinkedinIcon size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#111515] border border-white/10 flex items-center justify-center text-white hover:text-lime-400 hover:border-lime-400 transition-colors">
                    <InstagramIcon size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#111515] border border-white/10 flex items-center justify-center text-white hover:text-lime-400 hover:border-lime-400 transition-colors">
                    <TwitterIcon size={16} />
                  </a>
                </div>

                {/* Direct info overlay at bottom of image */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-xs uppercase tracking-[3px] text-lime-400 block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Text content card details */}
              <div className="p-8">
                <p className="text-zinc-400 text-sm italic leading-relaxed">
                  "{member.quote}"
                </p>
                <div className="mt-6 w-full h-[1px] bg-white/5 relative">
                  <div className="absolute left-0 top-0 w-8 h-[1px] bg-lime-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
