"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/About",
  },
  {
    name: "Services",
    href: "/Services",
  },
  {
    name: "Portfolio",
    href: "/Portfolio",
  },
  {
    name: "Process",
    href: "/Process",
  },
  {
    name: "Contact",
    href: "/Contact",
  },
];

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const isLargeScreen = window.innerWidth >= 1024;

    if (isLargeScreen) {
      gsap.set(nav, {
        width: "100%",
        borderRadius: "0px",
        top: "0px",
      });

      ScrollTrigger.create({
        trigger: nav,
        start: "top top",
        end: "+=1",

        onEnter: () => {
          gsap.to(nav, {
            width: "80%",
            borderRadius: "30px",
            top: "20px",
            duration: 0.4,
            ease: "power2.out",
          });
        },

        onLeaveBack: () => {
          gsap.to(nav, {
            width: "100%",
            borderRadius: "0px",
            top: "0px",
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const linkItemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
      fixed
      top-0
      left-0
      lg:left-1/2
      lg:-translate-x-1/2
      z-50
      h-[80px]
      backdrop-blur-md
      border-b-2 border-lime-400
      shadow-[0_0_20px_rgba(255,255,255,0.10),0_0_40px_rgba(255,255,255,0.08),0_0_80px_rgba(255,255,255,0.04)]
      transition-all
      duration-500
      ease-in-out
      w-screen
      lg:w-auto
    "
    >
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex justify-between items-center text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-lime-400">
            SAIFCO INTERIOR
          </h2>

          <p className="text-[10px] tracking-[4px] uppercase text-zinc-400">
            Interior Excellence
          </p>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          variants={linkContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex gap-8 items-center"
        >
          {navLinks.map((item) => (
  <motion.div key={item.name} variants={linkItemVariants}>
    <Link
      href={item.href}
      className="relative px-0 py-2 text-white transition-all duration-300 group"
    >
      <span className="relative z-10 group-hover:text-lime-400 transition-colors duration-300">
        {item.name}
      </span>

      <span className="absolute inset-0 scale-75 opacity-0 rounded-full bg-lime-400/10 blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />

      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-16" />
    </Link>
  </motion.div>
))}
        </motion.div>

        {/* Desktop CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:block bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Get Consultation
        </motion.button>

        {/* Mobile Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <div className="flex flex-col space-y-1">
              <div className="w-6 h-[2px] bg-white"></div>
              <div className="w-4 h-[2px] bg-white"></div>
              <div className="w-2 h-[2px] bg-white"></div>
            </div>
          )}
        </motion.button>
      </div>

      {/* EXACT STYLE MOBILE DROPDOWN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#121414] border-t border-white/10 lg:hidden z-50 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col text-white">
        {navLinks.map((item) => (
  <li key={item.name} className="px-6 py-4 border-b border-white/5">
    <Link
      href={item.href}
      onClick={() => setMobileOpen(false)}
      className="block hover:text-lime-400 transition"
    >
      {item.name}
    </Link>
  </li>
))}

              <li className="p-6">
                <button className="w-full bg-lime-400 text-black py-3 rounded-full font-bold">
                  Get Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}