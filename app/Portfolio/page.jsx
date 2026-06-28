"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Calendar,
  Building2,
  Home,
  Briefcase,
  Store,
} from "lucide-react";
import Navbar from "../Home/Navbar";
import CTA from "../Home/Cta";
import WhatsAppButton from "../Home/WhatsApp";
import Footer from "../Home/Footer";

const projects = [
  {
    title: "Minimal Luxury Residence",
    category: "Residential Interior",
    location: "New Delhi",
    year: "2026",
    area: "4200 Sq Ft",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    title: "Executive Workspace",
    category: "Corporate Office",
    location: "Gurgaon",
    year: "2026",
    area: "6500 Sq Ft",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    title: "Luxury Dining Experience",
    category: "Restaurant Interior",
    location: "Noida",
    year: "2025",
    area: "2800 Sq Ft",
    icon: Store,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80",
  },
  {
    title: "Contemporary Villa",
    category: "Villa Interior",
    location: "Jaipur",
    year: "2025",
    area: "5200 Sq Ft",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    title: "Modern Penthouse",
    category: "Luxury Apartment",
    location: "Mumbai",
    year: "2026",
    area: "3600 Sq Ft",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    title: "Premium Retail Store",
    category: "Retail Interior",
    location: "Bangalore",
    year: "2025",
    area: "2200 Sq Ft",
    icon: Store,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
  },
];

export default function Portfolio() {
  return (
    <div>
    <section className="relative py-32 overflow-hidden bg-[#111515]">
      <Navbar/>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-lime-400/10 blur-[220px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-lime-400/10 blur-[220px] rounded-full" />

      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <span
            className="
              inline-flex px-5 py-2 rounded-full
              border border-lime-400/20
              bg-lime-400/10 text-lime-400
              uppercase tracking-[5px]
              text-xs
            "
          >
            Our Portfolio
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-[0.92]">
            Crafted Spaces
            <br />
            <span className="text-lime-400">
              That Inspire Living
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore our collection of luxury residences, premium offices,
            commercial environments, and timeless interiors designed to
            elevate experiences and redefine spaces.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20"
        >
          {[
            { value: "120+", label: "Projects Delivered" },
            { value: "500K+", label: "Sq Ft Designed" },
            { value: "50+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
                borderColor: "rgba(163,230,53,0.4)",
              }}
              className="
                rounded-[28px]
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8 text-center
              "
            >
              <h3 className="text-4xl font-bold text-lime-400">
                {item.value}
              </h3>

              <p className="mt-3 text-zinc-400 uppercase tracking-[3px] text-xs">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 mb-30 gap-8 mt-24">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "
              >
                {/* Image */}
                <div className="relative h-[520px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111515] via-[#111515]/40 to-transparent" />
                </div>

                {/* Floating Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/10 blur-[120px] rounded-full z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2 rounded-full
                        bg-lime-400/10
                        border border-lime-400/20
                        text-lime-400 text-xs
                        uppercase tracking-[3px]
                      "
                    >
                      <Icon size={14} />
                      {project.category}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      className="
                        w-12 h-12 rounded-full
                        border border-white/10
                        bg-black/40
                        backdrop-blur-xl
                        flex items-center justify-center
                      "
                    >
                      <ArrowUpRight className="text-lime-400" size={20} />
                    </motion.div>
                  </div>

                  <h3 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-4 text-zinc-400 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} />
                      {project.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={15} />
                      {project.year}
                    </div>

                    <div className="flex items-center gap-2">
                      <Building2 size={15} />
                      {project.area}
                    </div>
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[40px] border border-lime-400/10 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <CTA/>
        <WhatsAppButton/>
    
      </div>
    </section>
    <Footer/>
    </div>
  );
}