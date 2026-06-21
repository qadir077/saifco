"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export default function ContactInfo() {
  const details = [
    {
      icon: <Phone className="text-lime-400" size={20} />,
      label: "Direct line",
      value: "+91 9810263085",
      link: "tel:+919810263085",
    },
    {
      icon: <Mail className="text-lime-400" size={20} />,
      label: "Design Inquiry",
      value: "saifcointeriors@gmail.com",
      link: "mailto:saifcointeriors@gmail.com",
    },
    {
      icon: <MapPin className="text-lime-400" size={20} />,
      label: "Our Headquarters",
      value: "Luxury Design Studio, Mumbai, India",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="text-lime-400" size={20} />,
      label: "Operational Hours",
      value: "Mon - Sat: 10:00 AM - 7:00 PM",
      link: null,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0d0d]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Heading & Call to action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase tracking-[4px] text-lime-400 font-semibold">
              Begin Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-white uppercase leading-tight">
              LET'S CREATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">
                SOMETHING RARE
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We work with select residential and commercial clients who value architectural distinction and interior luxury. Reach out to schedule a private consultation at our experience center.
            </p>

            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-lime-400 text-black px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_35px_rgba(163,230,53,0.6)] transition-all duration-300"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Right Column: Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {details.map((item, i) => {
              const ContentElement = () => (
                <div className="bg-[#111515] border border-white/5 p-8 rounded-3xl group hover:border-lime-400/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                  {/* Glowing background hint */}
                  <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center border border-lime-400/20 mb-4 group-hover:bg-lime-400 group-hover:text-black transition-colors duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-[3px] text-zinc-500 block mb-1">
                      {item.label}
                    </span>
                    <p className="text-white font-semibold text-base group-hover:text-lime-400 transition-colors duration-300 break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.link ? (
                <a key={i} href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <ContentElement />
                </a>
              ) : (
                <div key={i}>
                  <ContentElement />
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
