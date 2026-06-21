"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import WhatsApp from "../Home/WhatsApp";

import Overview from "./Overview";
import Vision from "./Vision";
import History from "./History";
import Team from "./Team";
import Gallery from "./Gallery";
import ContactInfo from "./ContactInfo";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="bg-[#0a0d0d] text-white min-h-screen font-sans selection:bg-lime-400 selection:text-black">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Glow Effects */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 left-10 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-lime-400/5 blur-[160px] rounded-full" 
        />
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 border border-lime-400/20 bg-lime-400/5 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
              <span className="text-xs uppercase tracking-[5px] text-lime-400 font-semibold">
                Our Legacy & Vision
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight uppercase"
            >
              WE SHAPE <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">LUXURY</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Step inside the world of SAIFCO Interior. Discover how our passion for bespoke design, editorial execution, and fine craftsmanship transforms standard living into architectural poetry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Blocks */}
      <div className="relative z-10 border-t border-white/5 bg-[#0a0d0d]">
        <Overview />
        <Vision />
        <History />
        <Team />
        <Gallery />
        <ContactInfo />
      </div>

      <WhatsApp />
      <Footer />
    </div>
  );
}
