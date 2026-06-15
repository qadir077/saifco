"use client";

import Navbar from "../Home/Navbar";
import Contact from "../Home/Contact";
import Footer from "../Home/Footer";
import WhatsApp from "../Home/WhatsApp";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <WhatsApp />
      <Footer />
    </motion.div>
  );
}
