"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  Box,
  Hammer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import CTA from "../Home/Cta";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import WhatsAppButton from "../Home/WhatsApp";


const process = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your lifestyle, goals, aesthetic preferences, and project requirements to create a strong foundation for the design journey.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Concept & Space Planning",
    description:
      "Our designers create layouts, mood boards, material palettes, and detailed concepts that maximize functionality and elevate the visual experience.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "3D Visualization & Approval",
    description:
      "Photorealistic renders and immersive 3D visualizations allow you to experience the final design before execution begins.",
    icon: Box,
  },
  {
    number: "04",
    title: "Execution & Craftsmanship",
    description:
      "Our skilled craftsmen and project managers bring the approved design to life with precision, premium materials, and exceptional attention to detail.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Delivery & Final Styling",
    description:
      "We complete the project with final styling, quality checks, and finishing touches to deliver a timeless interior experience.",
    icon: CheckCircle2,
  },
];

export default function Page() {
  return (
    <div>
    <section className="relative py-32 overflow-hidden bg-[#111515]">
      <Navbar />



      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="max-w-7xl mx-auto  px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <span
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
              tracking-[5px]
              text-xs
            "
          >
            Our Design Process
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-[0.95]">
            From Vision To
            <br />
            <span className="text-lime-400">
              Timeless Interiors
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Our carefully refined process ensures every project is
            executed with precision, transparency, and exceptional
            craftsmanship from concept to completion.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-30 mt-28">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-lime-400/30 to-transparent -translate-x-1/2" />

          <div className="space-y-24">
            {process.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  className={`
                    relative
                    flex
                    items-center
                    ${isLeft
                      ? "lg:justify-start"
                      : "lg:justify-end"
                    }
                  `}
                >
                  {/* Timeline Dot */}
                  <div
                    className="
                      hidden
                      lg:flex
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-20
                      h-20
                      rounded-full
                      border
                      border-lime-400/30
                      bg-[#111515]
                      items-center
                      justify-center
                      backdrop-blur-xl
                      z-20
                    "
                  >
                    <span className="text-lime-400 font-bold text-lg">
                      {item.number}
                    </span>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      borderColor:
                        "rgba(163,230,53,0.5)",
                    }}
                    className="
                      relative
                      overflow-hidden
                      lg:w-[45%]
                      rounded-[36px]
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-8
                      transition-all
                      duration-500
                    "
                  >
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/10 blur-[90px] rounded-full" />

                    {/* Number */}
                    <div className="flex items-center justify-between">
                      <span className="text-6xl font-extrabold text-white/5">
                        {item.number}
                      </span>

                      <div
                        className="
                          w-16
                          h-16
                          rounded-2xl
                          bg-lime-400/10
                          border
                          border-lime-400/20
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon
                          size={30}
                          className="text-lime-400"
                        />
                      </div>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>

                    <motion.div
                      whileHover={{ x: 6 }}
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-lime-400
                        font-medium
                      "
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <CTA />
        <WhatsAppButton />
     
      </div>
    </section>
    <Footer/>
    </div>
  );
}