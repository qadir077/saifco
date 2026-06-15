"use client";

import {
  Mail,
  Phone,
  MapPin,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <footer className="bg-[#0c0f0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Column 1 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-lime-400 mb-6">
              SAIFCO INTERIOR
            </h3>

            <p className="text-zinc-400 mb-8">
              Redefining luxury living through editorial
              design and architectural precision.
            </p>

            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#a3e635", color: "#000000" }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-black transition-colors"
              >
                <Share2 size={18} />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#a3e635", color: "#000000" }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-black transition-colors"
              >
                <Mail size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={itemVariants}>
            <h4 className="uppercase tracking-[4px] text-sm mb-8 font-semibold">
              Navigation
            </h4>

            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">Home</a>
              </li>

              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">Portfolio</a>
              </li>

              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">Services</a>
              </li>

              <li>
                <a href="#" className="hover:text-lime-400 transition-colors">Process</a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={itemVariants}>
            <h4 className="uppercase tracking-[4px] text-sm mb-8 font-semibold">
              Contact
            </h4>

            <ul className="space-y-5 text-zinc-400">
              <li className="flex gap-3 items-center hover:text-white transition-colors">
                <Phone
                  size={16}
                  className="text-lime-400"
                />
                +91 9810263085
              </li>

              <li className="flex gap-3 items-center hover:text-white transition-colors">
                <Mail
                  size={16}
                  className="text-lime-400"
                />
                saifcointeriors@gmail.com
              </li>

              <li className="flex gap-3 items-center hover:text-white transition-colors">
                <MapPin
                  size={16}
                  className="text-lime-400"
                />
                Luxury Design Studio, IN
              </li>
            </ul>
          </motion.div>

          {/* Column 4 */}
          <motion.div variants={itemVariants}>
            <h4 className="uppercase tracking-[4px] text-sm mb-8 font-semibold">
              Stay Inspired
            </h4>

            <p className="text-zinc-400 text-sm mb-5">
              Join our editorial list for the latest
              trends in high-end design.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#1e2020] px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-lime-400 text-white transition-colors"
              />

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-black px-4 rounded-lg font-bold"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-[3px] text-zinc-500"
        >
          <span>
            © 2024 SAIFCO INTERIOR. All rights reserved.
          </span>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}