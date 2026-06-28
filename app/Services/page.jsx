"use client";

import {
  Home,
  Building2,
  Armchair,
  KeyRound,
  Paintbrush,
  LampFloor,
  LayoutGrid,
  Warehouse,
  Hammer,
  Sofa,
  Layers,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import WhatsApp from "../Home/WhatsApp";
import Cta from "../Home/Cta"

const services = [
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Bespoke residential and commercial interiors crafted to reflect your personality, lifestyle, and vision while maintaining perfect balance between luxury and functionality.",
    highlights: ["3D Visualization", "Space Planning", "Material Selection"],
  },
  {
    icon: Building2,
    title: "Civil Works",
    description:
      "Comprehensive structural modifications, construction solutions, and architectural enhancements executed with precision, durability, and modern engineering standards.",
    highlights: ["Structural Work", "Renovation", "Waterproofing"],
  },
  {
    icon: Armchair,
    title: "Furniture",
    description:
      "Custom-designed furniture pieces tailored to your space, combining premium materials, exceptional craftsmanship, and timeless aesthetics.",
    highlights: ["Custom Designs", "Premium Wood", "Upholstery"],
  },
  {
    icon: KeyRound,
    title: "Turnkey Solutions",
    description:
      "Complete project execution from concept development and planning to final installation, ensuring a seamless and hassle-free experience.",
    highlights: ["End-to-End", "On-time Delivery", "Quality Assured"],
  },
  {
    icon: Paintbrush,
    title: "False Ceiling",
    description:
      "Elegant ceiling designs featuring modern patterns, concealed lighting, and premium finishes that elevate the visual appeal of every room.",
    highlights: ["Gypsum Board", "POP Ceilings", "LED Integration"],
  },
  {
    icon: LampFloor,
    title: "Lighting Design",
    description:
      "Layered lighting concepts that enhance ambiance, highlight architectural features, and create sophisticated living and working environments.",
    highlights: ["Ambient Lighting", "Accent Lights", "Smart Control"],
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    description:
      "Intelligent space optimization and layout planning designed to maximize comfort, functionality, movement flow, and visual harmony.",
    highlights: ["Floor Plans", "Traffic Flow", "Zoning"],
  },
  {
    icon: Warehouse,
    title: "Modular Kitchen",
    description:
      "Luxury modular kitchen solutions with smart storage systems, ergonomic layouts, and premium finishes tailored to modern lifestyles.",
    highlights: ["Smart Storage", "Ergonomic", "Premium Finish"],
  },
  {
    icon: Hammer,
    title: "Renovation",
    description:
      "Breathing new life into existing spaces through expert renovation, combining modern design principles with structural expertise.",
    highlights: ["Full Makeover", "Structural Repair", "Modernization"],
  },
  {
    icon: Sofa,
    title: "Upholstery",
    description:
      "Premium upholstery solutions for sofas, chairs, and walls using high-quality fabrics, leathers, and textures curated for luxury interiors.",
    highlights: ["Custom Fabric", "Leather Work", "Wall Panels"],
  },
  {
    icon: Layers,
    title: "Flooring",
    description:
      "Exquisite flooring installations using marble, hardwood, tiles, and engineered materials that define the character of every room.",
    highlights: ["Marble", "Hardwood", "Engineered Tiles"],
  },
  {
    icon: Wind,
    title: "HVAC & MEP",
    description:
      "Integrated mechanical, electrical, and plumbing solutions designed seamlessly within your interior for optimal functionality.",
    highlights: ["AC Planning", "Electrical", "Plumbing"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

export default function ServicesPage() {
  return (
    <div  className="bg-[#0a0d0d] min-h-screen text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-lime-400/10 blur-[200px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-36 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex px-5 py-2 rounded-full border border-lime-400/20 bg-lime-400/10 text-lime-400 uppercase tracking-[4px] text-xs mb-10"
          >
            What We Offer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-extrabold leading-[0.9]"
          >
            Our Premium
            <br />
            <span className="text-lime-400">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-zinc-400 text-xl leading-relaxed max-w-3xl"
          >
            From concept to completion, we deliver comprehensive interior
            solutions that transform spaces into timeless luxury experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16"
          >
            {[
              { value: "120+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "10+", label: "Years" },
              { value: "15+", label: "Awards" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <h3 className="text-4xl font-bold text-lime-400">{item.value}</h3>
                <p className="text-zinc-400 uppercase tracking-[3px] text-xs mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0d0d] to-transparent" />
      </section>

      {/* ── Services List ── */}
      <section className="relative py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute left-0 top-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-lime-400/20 bg-lime-400/10 text-lime-400 text-xs uppercase tracking-[5px]">
              Complete Solutions
            </span>
            <h2 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95]">
              Everything You
              <span className="text-lime-400 ml-4">Need</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-zinc-400 text-lg leading-relaxed">
              Our full spectrum of interior and design services ensures every
              aspect of your space is handled with precision and artistry.
            </p>
            <div className="relative max-w-5xl mx-auto mt-8 h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(163, 230, 53, 0.4)",
                    backgroundColor: "rgba(163, 230, 53, 0.03)",
                  }}
                  className="group bg-[#111515] border border-white/10 rounded-[32px] p-8 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span className="text-5xl md:text-6xl font-bold text-zinc-800 group-hover:text-lime-400/30 transition-all duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="lg:col-span-2">
                      <div className="w-20 h-20 rounded-2xl bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400 transition-all duration-300">
                        <Icon
                          size={36}
                          className="text-lime-400 group-hover:text-black transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-4">
                      <p className="text-zinc-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="lg:col-span-1 flex justify-end">
                      <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-lime-400 text-xl group-hover:bg-lime-400 group-hover:text-black group-hover:rotate-45 transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
   <Cta/>

      <WhatsApp />
      <Footer />
    </div>
  );
}

